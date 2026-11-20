/* Vult de pagina met de gegevens uit data.js. Hier hoef je normaal niets aan te veranderen. */
(function () {
  "use strict";
  var d = window.ONDERZOEK;
  if (!d) return;

  var MAANDEN = ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"];
  var LAAG = 0.5; // onder 50% van het doel = "hier missen we jou"

  function $(sel) { return document.querySelector(sel); }
  function $$(sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function datum(iso) {
    var p = iso.split("-");
    return parseInt(p[2], 10) + " " + MAANDEN[parseInt(p[1], 10) - 1] + " " + p[0];
  }
  function getal(n) { return Number(n).toLocaleString("nl-NL"); }
  function setText(sel, txt) { $$(sel).forEach(function (el) { el.textContent = txt; }); }

  // Voorbeeldbalk
  if (d.voorbeeld) $("#demo-bar").hidden = false;

  // Deadline
  var vandaag = new Date(); vandaag.setHours(0, 0, 0, 0);
  var sluit = new Date(d.sluitdatum + "T23:59:59");
  var dagen = Math.ceil((sluit - vandaag) / 86400000) - 1;
  var gesloten = sluit < new Date();

  // Knoppen naar de vragenlijst
  $$(".js-cta").forEach(function (a) {
    if (gesloten) {
      a.href = "#resultaten";
      if (/vragenlijst|Doe mee/.test(a.textContent)) a.textContent = "Bekijk de resultaten";
    } else {
      a.href = d.vragenlijstUrl;
      if (/^https?:/.test(d.vragenlijstUrl)) { a.target = "_blank"; a.rel = "noopener"; }
    }
  });

  // Hero
  setText("#hero-naam", d.naam);
  setText("#hero-editie", d.editie);
  setText("#hero-ondertitel", d.ondertitel);
  setText("#fact-duur", "Ongeveer " + d.duurMinuten + " minuten");
  setText(".js-duur", d.duurMinuten);
  setText("#fact-sluit", gesloten ? "Inschrijving gesloten" : "Open tot " + datum(d.sluitdatum));
  setText("#final-sluit", datum(d.sluitdatum));
  setText(".js-resultaten", d.resultatenBekend);

  // Totaalstand
  var totDoel = 0, totHuidig = 0, hulpNodig = 0;
  d.productgroepen.forEach(function (g) {
    totDoel += g.doel;
    totHuidig += Math.min(g.huidig, g.doel);
    if (g.huidig < g.doel) hulpNodig++;
  });
  var totPct = totDoel ? Math.round((totHuidig / totDoel) * 100) : 0;
  setText("#dagen-over", gesloten ? "0" : Math.max(dagen, 0));
  if (dagen === 1) setText("#dagen-label", "dag nog open");
  setText("#groepen-hulp", hulpNodig);
  setText("#bijgewerkt", "Bijgewerkt op " + datum(d.laatstBijgewerkt));
  var totBar = $("#totaal-bar");
  totBar.setAttribute("aria-valuenow", totPct);

  // Productgroepen, de groepen met de grootste achterstand eerst
  var groepen = d.productgroepen.slice().sort(function (a, b) { return a.huidig / a.doel - b.huidig / b.doel; });
  $("#groepen").innerHTML = groepen.map(function (g) {
    var pct = Math.min(100, Math.round((g.huidig / g.doel) * 100));
    var nodig = Math.max(0, g.doel - g.huidig);
    var laag = pct < LAAG * 100, vol = nodig === 0;
    return '<article class="group' + (laag ? " prio" : "") + '">' +
      '<div class="group-top"><h3>' + esc(g.naam) + '</h3><span class="group-pct">' + pct + '%</span></div>' +
      '<div class="bar' + (laag ? " laag" : vol ? " vol" : "") + '" role="progressbar" aria-label="' + esc(g.naam) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + pct + '" data-pct="' + pct + '"><span></span></div>' +
      '<div class="group-meta"><span>' + (vol ? "Doel gehaald" : "Nog " + getal(nodig) + " beoordelingen nodig") + "</span>" +
      (laag ? '<span class="badge">Hier missen we jou</span>' : vol ? '<span class="badge ok">Gehaald</span>' : "") +
      "</div></article>";
  }).join("");

  // Opbrengst
  var iconen = [
    '<path d="M4 5h16v14H4z"/><path d="M4 7l8 6 8-6"/>',
    '<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3"/>',
    '<path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/>',
    '<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>'
  ];
  $("#opbrengst-lijst").innerHTML = d.opbrengst.map(function (o, i) {
    return '<div class="card"><div class="card-icon" aria-hidden="true"><svg viewBox="0 0 24 24">' + iconen[i % iconen.length] + "</svg></div>" +
      "<h3>" + esc(o.titel) + "</h3><p>" + esc(o.tekst) + "</p></div>";
  }).join("");

  // Eerdere resultaten met jaartabs
  var tabs = $("#jaar-tabs"), panel = $("#jaar-panel");
  function toonJaar(i) {
    var j = d.vorigeJaren[i];
    $$(".tab").forEach(function (t, k) {
      t.setAttribute("aria-selected", k === i ? "true" : "false");
      t.tabIndex = k === i ? 0 : -1;
    });
    panel.setAttribute("aria-labelledby", "tab-" + i);
    panel.innerHTML =
      "<div>" +
        '<div class="year-stats">' +
          '<div class="stat"><strong>' + getal(j.beoordelingen) + "</strong><span>beoordelingen door adviseurs</span></div>" +
          '<div class="stat"><strong>' + getal(j.aanbieders) + "</strong><span>aanbieders beoordeeld</span></div>" +
        "</div>" +
        '<p class="finding"><span class="finding-label">Opvallendste uitkomst</span>' + esc(j.kernbevinding) + "</p>" +
        (j.link ? '<p><a class="year-link" href="' + esc(j.link) + '" target="_blank" rel="noopener">' + esc(j.linkTekst) + "</a></p>" : "") +
      "</div>" +
      '<div class="winners"><h3>Winnaars ' + esc(j.jaar) + "</h3>" +
        j.winnaars.map(function (w) {
          return '<div class="winner-row"><span>' + esc(w.productgroep) + "</span><strong>" + esc(w.winnaar) + "</strong></div>";
        }).join("") +
      "</div>";
  }
  tabs.innerHTML = d.vorigeJaren.map(function (j, i) {
    return '<button class="tab" role="tab" id="tab-' + i + '" aria-controls="jaar-panel">' + esc(j.jaar) + "</button>";
  }).join("");
  $$(".tab").forEach(function (t, i) {
    t.addEventListener("click", function () { toonJaar(i); });
    t.addEventListener("keydown", function (e) {
      var n = d.vorigeJaren.length, k = null;
      if (e.key === "ArrowRight") k = (i + 1) % n;
      if (e.key === "ArrowLeft") k = (i - 1 + n) % n;
      if (k !== null) { toonJaar(k); $$(".tab")[k].focus(); e.preventDefault(); }
    });
  });
  if (d.vorigeJaren.length) toonJaar(0);

  // Impact
  setText("#impact-citaat", d.impact.citaat);
  setText("#impact-bron", d.impact.bron);
  $("#impact-punten").innerHTML = d.impact.punten.map(function (p) {
    var titel = p.link ? '<a href="' + esc(p.link) + '" target="_blank" rel="noopener">' + esc(p.titel) + "</a>" : esc(p.titel);
    return "<li><strong>" + titel + "</strong><p>" + esc(p.tekst) + "</p></li>";
  }).join("");

  // FAQ
  $("#faq").innerHTML = d.faq.map(function (f) {
    return "<details><summary>" + esc(f.vraag) + "</summary><p>" + esc(f.antwoord) + "</p></details>";
  }).join("");

  // Balken laten vollopen zodra ze in beeld komen
  function vul(bar) { bar.querySelector("span").style.width = (bar.getAttribute("data-pct") || totPct) + "%"; }
  var bars = $$(".bar");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (items) {
      items.forEach(function (it) { if (it.isIntersecting) { vul(it.target); io.unobserve(it.target); } });
    }, { threshold: 0.3 });
    bars.forEach(function (b) { io.observe(b); });
  } else {
    bars.forEach(vul);
  }

  // Tellen van het totaalpercentage
  var el = $("#totaal-pct"), start = null;
  function tel(t) {
    if (!start) start = t;
    var v = Math.min(1, (t - start) / 1200);
    el.textContent = Math.round(totPct * (1 - Math.pow(1 - v, 3)));
    if (v < 1) requestAnimationFrame(tel);
  }
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) el.textContent = totPct;
  else requestAnimationFrame(tel);

  // Plakknop op mobiel: tonen zodra de hero uit beeld is
  var sticky = $("#sticky-cta"), hero = $(".hero");
  if ("IntersectionObserver" in window && !gesloten) {
    new IntersectionObserver(function (items) {
      sticky.classList.toggle("zichtbaar", !items[0].isIntersecting);
    }).observe(hero);
  }
})();
