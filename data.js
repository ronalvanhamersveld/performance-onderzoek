/*
  GEGEVENS VAN DE PAGINA
  ----------------------
  Dit is het enige bestand dat je hoeft aan te passen om de pagina bij te werken.
  - Pas alleen de tekst tussen de aanhalingstekens en de getallen aan.
  - Laat komma's, haakjes en accolades staan.
  - Datums altijd als "JJJJ-MM-DD", bijvoorbeeld "2026-12-19".
  - Zolang voorbeeld op true staat, toont de pagina bovenaan een gele balk
    met de tekst van voorbeeldTekst. Zet voorbeeld op false als alles klopt.
*/
window.ONDERZOEK = {
  voorbeeld: true,
  voorbeeldTekst: "Voorbeeldversie: de sluitdatum, de link naar de vragenlijst en de voorbereidingslink zijn nog niet echt.",

  naam: "Performance-onderzoek",
  editie: "2026 · meting 3",
  ondertitel:
    "Beoordeel in 8 minuten de geldverstrekkers en verzekeraars waar je mee werkt. Je ontvangt een samenvatting van de belangrijkste uitkomsten en helpt de partijen waarmee je samenwerkt hun dienstverlening te verbeteren.",

  // Link naar de vragenlijst van de huidige meting.
  vragenlijstUrl: "#vragenlijst-link-volgt",
  duurMinuten: 8,
  sluitdatum: "2026-12-19",
  resultatenBekend: "begin 2027",

  // De metingen van dit jaar. status: "afgerond", "open" of "gepland".
  metingen: [
    // samenvattingUrl is optioneel: link naar de samenvatting van die meting.
    { naam: "Meting 1", periode: "voorjaar", thema: "Accountmanagement en buitendienst", status: "afgerond", samenvattingUrl: "https://www.dfobv.nl/wp-content/uploads/2026/10/Samenvatting-Performance-onderzoek-Kwaliteit-accountmanagement-en-buitendienst-2026-itleyn.pdf" },
    { naam: "Meting 2", periode: "zomer", thema: "Binnendienst en acceptatie", status: "afgerond", samenvattingUrl: "samenvattingen/2026-meting-2.pdf" },
    { naam: "Meting 3", periode: "najaar", thema: "Processen en digitale ondersteuning", status: "open" }
  ],
  metingenIntro: "Drie metingen in 2026, per productmarkt een eigen rapport.",


  // Voorbereidingslink: adviseurs vullen één keer hun kantoorgegevens in,
  // zodat ze die niet bij elke meting opnieuw hoeven in te vullen.
  // Laat url leeg ("") om het blok te verbergen.
  voorbereiding: {
    url: "#voorbereiding-link-volgt",
    besparing: "1½ minuut",
    kop: "Eén keer je kantoorgegevens, daarna sneller door elke meting",
    tekst: "Vul één keer je kantoorgegevens in, zoals de grootte van je kantoor, je regio en de productmarkten waarin je adviseert. Bij elke volgende meting slaan we die vragen over en beoordeel je direct de aanbieders. Dat scheelt ongeveer 1½ minuut per meting, ook als je meedoet aan het Serviceproviders-onderzoek.",
    stappen: [
      "Vul eenmalig je kantoorgegevens in",
      "Je krijgt bij elke meting een persoonlijke link",
      "Je beoordeelt direct de aanbieders waar je mee werkt"
    ],
    knop: "Vul je gegevens alvast in"
  },

  // Kerncijfers bovenaan de pagina (voor beide doelgroepen).
  kerncijfers: [
    { waarde: "3.300+", label: "beoordelingen in 2026 tot nu toe" },
    { waarde: "6", label: "productmarkten" },
    { waarde: "3", label: "metingen per jaar" }
  ],

  // Wat respondenten eraan hebben.
  opbrengst: [
    {
      titel: "Je ontvangt een samenvatting",
      tekst: "Na de meting krijg je een samenvatting van de belangrijkste uitkomsten per productmarkt. Zo weet je hoe de aanbieders ervoor staan."
    },
    {
      titel: "Je helpt jouw aanbieders verbeteren",
      tekst: "De partijen waarmee je samenwerkt zien wat adviseurs van hun dienstverlening vinden en waar het beter kan. Jouw oordeel helpt ze dat te verbeteren."
    },
    {
      titel: "Jouw stem bepaalt de uitkomst",
      tekst: "De scores en de best beoordeelde aanbieders per markt volgen rechtstreeks uit de beoordelingen van financieel adviseurs."
    },
    {
      titel: "8 minuten en anoniem",
      tekst: "Je beoordeelt alleen de aanbieders waar je mee werkt. Je antwoorden zijn nooit naar jou of je kantoor te herleiden."
    }
  ],

  /* ------------------------------------------------------------------
     BEWAARD VOOR LATER: teksten voor een pagina voor aanbieders.
     Deze worden op de huidige pagina NIET getoond.
     ------------------------------------------------------------------ */
  aanbieders: {
    kop: "Weet hoe adviseurs uw dienstverlening beoordelen",
    intro: "Het Performance-onderzoek laat per productmarkt zien hoe financieel adviseurs uw organisatie beoordelen en hoe u scoort ten opzichte van de markt. Per meting ontvangt u een eigen rapport.",
    voordelen: [
      { titel: "Eigen rapport per productmarkt", tekst: "Uw scores op de kwaliteitsaspecten van elke meting, naast het gemiddelde van de markt." },
      { titel: "Uw NPS bij het intermediair", tekst: "Hoe waarschijnlijk het is dat adviseurs u aanbevelen, en hoe dat zich over de metingen ontwikkelt." },
      { titel: "Wat adviseurs belangrijk vinden", tekst: "Per aspect het belang en de waardering, zodat u ziet waar verbeteren het meeste oplevert." },
      { titel: "Zichtbaar bij adviseurs", tekst: "Uw naam bij de gratis vakpaper die naar de deelnemende adviseurs gaat." }
    ],
    bewijs: {
      cijfer: "Meting 1, 2026",
      tekst: "Aanbieders met een hoog gewaardeerde buitendienst hebben een hogere NPS en een groter omzetaandeel bij adviseurs."
    },
    pakketten: [
      { naam: "Rapport per meting", tekst: "Het rapport van één meting voor de productmarkten waarin u actief bent.", prijs: "Prijs op aanvraag", aanbevolen: false },
      { naam: "Compleet pakket 2026", tekst: "De rapporten van meting 1, 2 en 3. Het rapport van meting 3 ontvangt u zodra het verschijnt.", prijs: "Prijs op aanvraag", aanbevolen: true }
    ],
    // Waar de knop "Vraag het rapport aan" naartoe gaat (een formulier of e-mail).
    aanvraagUrl: "mailto:info@dfobv.nl?subject=Aanvraag%20rapport%20Performance-onderzoek%202026",
    contact: { naam: "Bureau DFO", telefoon: "033 – 258 04 60", email: "info@dfobv.nl" }
  },

  // Teasers: grafieken uit het onderzoek. Alleen cijfers per markt, nooit per aanbieder.
  // soort "paar": twee punten per rij (a en b). soort "staven": één waarde per rij.
  inzichten: [
    {
      kop: "Je keuze van aanbieder maakt veel verschil",
      uitleg: "Score van de best en de laagst beoordeelde aanbieder per markt, gewogen naar wat adviseurs belangrijk vinden. Schaal 1 tot 10.",
      bron: "Meting 2, 2026: binnendienst en acceptatie",
      soort: "paar",
      domein: [5, 9], ticks: [5, 6, 7, 8, 9], decimalen: 1,
      reeksA: { naam: "Laagst beoordeeld", kleur: "#C2601A", open: false },
      reeksB: { naam: "Best beoordeeld", kleur: "#005EA9", open: false },
      verschil: true,
      rijen: [
        { label: "Particulier Schade", a: 5.26, b: 8.8 },
        { label: "Lijfrente", a: 6.9, b: 8.97 },
        { label: "Hypotheken", a: 6.39, b: 8.35 },
        { label: "ORV", a: 6.68, b: 7.79 },
        { label: "Zakelijk Schade", a: 7.12, b: 8.11 }
      ]
    },
    {
      kop: "Adviseurs bevelen hypotheek- en lijfrenteaanbieders vaker aan",
      uitleg: "Gemiddelde aanbevelingsscore (NPS) van de aanbieders per markt. Hoe hoger, hoe vaker adviseurs ze aanbevelen aan collega's.",
      bron: "Performance-onderzoek 2024 en 2025",
      soort: "paar",
      domein: [0, 70], ticks: [0, 20, 40, 60], decimalen: 0,
      reeksA: { naam: "2024", kleur: "#4F95CF", open: true },
      reeksB: { naam: "2025", kleur: "#005EA9", open: false },
      verschil: false,
      rijen: [
        { label: "Hypotheken", a: 47, b: 60 },
        { label: "Lijfrente", a: 29, b: 44 },
        { label: "ORV", a: null, b: 44 },
        { label: "Zakelijk Schade", a: 38, b: 38 },
        { label: "AOV", a: 33, b: 35 },
        { label: "Particulier Schade", a: 40, b: 32 }
      ],
      noot: "ORV is in 2025 voor het eerst gemeten."
    },
    {
      kop: "Een bereikbare, vaste contactpersoon weegt het zwaarst",
      uitleg: "Hoe belangrijk adviseurs elk aspect van de buitendienst vinden, gemiddeld over zes markten. Schaal 1 tot 10.",
      bron: "Meting 1, 2026: accountmanagement en buitendienst",
      soort: "staven",
      domein: [0, 10], ticks: [0, 2, 4, 6, 8, 10], decimalen: 1,
      kleur: "#005EA9",
      rijen: [
        { label: "Bereikbaarheid", waarde: 8.28 },
        { label: "Vaste contactpersoon", waarde: 8.25 },
        { label: "Proactief meedenken", waarde: 7.98 },
        { label: "Kwaliteit trainingen", waarde: 7.9 },
        { label: "Kwaliteit evenementen", waarde: 7.9 },
        { label: "Deskundigheid", waarde: 7.75 },
        { label: "Oog voor strategie", waarde: 7.33 }
      ]
    }
  ],

  // Eerdere resultaten. Nieuwste bovenaan.
  // Bron: de samenvattingen voor adviseurs (2024, 2025, 2026 meting 1 en 2) en de persberichten.
  // top3 is optioneel: de 2e en 3e plaats. Laat weg als die niet bekend is.
  // samenvattingUrl: vul hier de downloadlink in. Leeg = geen knop.
  // noot is optioneel: een korte zin, alleen getoond als er geen downloadlink is.
  vorigeJaren: [
    {
      jaar: "2026 · meting 2",
      kerncijfers: [
        { waarde: "1.300+", label: "beoordelingen door adviseurs" },
        { waarde: "5", label: "productmarkten" }
      ],
      // Link naar de samenvatting (pdf of webpagina). Leeg laten = geen downloadknop.
      samenvattingUrl: "samenvattingen/2026-meting-2.pdf",
      kernbevinding:
        "Of adviseurs een aanbieder aanbevelen, hangt vooral af van partnerschap: een binnendienst die echt meedenkt. Bereikbaarheid, snelle mailafhandeling en overleg zijn de basis. Binnen één markt kan het verschil tussen de beste en zwakste aanbieder oplopen tot ruim drie punten.",
      links: [],
      winnaarsTitel: "Top 3 binnendienst en acceptatie",
      winnaars: [
        { productgroep: "Hypotheken", winnaar: "Obvion", top3: ["Lloyds Bank", "ING"] },
        { productgroep: "Particulier Schade", winnaar: "Nh1816 Verzekeringen", top3: ["De Goudse Verzekeringen", "Turien & Co."] },
        { productgroep: "Zakelijk Schade", winnaar: "De Goudse Verzekeringen", top3: ["Nationale-Nederlanden", "Klaverblad"] },
        { productgroep: "Lijfrente", winnaar: "OAKK", top3: ["NNEK", "Scildon"] },
        { productgroep: "ORV", winnaar: "TAF", top3: ["Scildon", "Dazure"] }
      ]
    },
    {
      jaar: "2026 · meting 1",
      kerncijfers: [
        { waarde: "2.027", label: "beoordelingen door adviseurs" },
        { waarde: "6", label: "productmarkten" }
      ],
      // Link naar de samenvatting (pdf of webpagina). Leeg laten = geen downloadknop.
      samenvattingUrl: "https://www.dfobv.nl/wp-content/uploads/2026/10/Samenvatting-Performance-onderzoek-Kwaliteit-accountmanagement-en-buitendienst-2026-itleyn.pdf",
      kernbevinding:
        "Adviseurs hechten in alle markten het meest aan een vast contactpersoon en een goed bereikbare accountmanager. Aanbieders met een hoog gewaardeerde buitendienst worden vaker aanbevolen.",
      links: [
        { tekst: "Lees het persbericht", url: "https://www.dfobv.nl/wp-content/uploads/2026/05/Persbericht-Performance-onderzoek-aanbieders-Kwaliteit-Accountmanagement-en-Buitendienst.pdf" }
      ],
      winnaarsTitel: "Top 3 accountmanagement en buitendienst",
      winnaars: [
        { productgroep: "Hypotheken", winnaar: "ING", top3: ["Centraal Beheer", "Obvion"] },
        { productgroep: "Particulier Schade", winnaar: "Nh1816 Verzekeringen", top3: ["Klaverblad", "Nationale-Nederlanden"] },
        { productgroep: "Zakelijk Schade", winnaar: "Klaverblad" },
        { productgroep: "Lijfrente", winnaar: "OAKK", top3: ["NNEK", "Scildon"] },
        { productgroep: "ORV", winnaar: "Dazure", top3: ["Allianz", "TAF"] },
        { productgroep: "AOV", winnaar: "a.s.r." }
      ]
    },
    {
      jaar: "2025",
      kerncijfers: [
        { waarde: "6", label: "productmarkten" },
        { waarde: "13", label: "hypotheekaanbieders per adviseur, gemiddeld" }
      ],
      // Link naar de samenvatting (pdf of webpagina). Leeg laten = geen downloadknop.
      samenvattingUrl: "https://cdn.flxml.eu/f-ed177c96b1179d08",
      kernbevinding:
        "De deskundigheid van de binnendienst is een belangrijke factor: een adviseur wil iemand spreken die meer van het vraagstuk weet dan hij zelf. Bij hypotheken weegt de mogelijkheid tot overleg het zwaarst, bij AOV de claimafhandeling.",
      links: [
        { tekst: "Bekijk de winnaars 2025", url: "https://www2.dfobv.nl/winnaars-performance-onderzoek-2025/" }
      ],
      winnaarsTitel: "Top 3 van 2025",
      winnaars: [
        { productgroep: "Hypotheken", winnaar: "Obvion", top3: ["ING", "Lloyds Bank"] },
        { productgroep: "Particulier Schade", winnaar: "Nh1816 Verzekeringen", top3: ["Turien & Co.", "Klaverblad"] },
        { productgroep: "Zakelijk Schade", winnaar: "Turien & Co.", top3: ["Nationale-Nederlanden", "a.s.r."] },
        { productgroep: "Lijfrente", winnaar: "OAKK", top3: ["NNEK", "Brand New Day"] },
        { productgroep: "ORV", winnaar: "TAF", top3: ["Scildon", "Nationale-Nederlanden"] },
        { productgroep: "AOV", winnaar: "TAF", top3: ["a.s.r.", "Movir"] }
      ]
    },
    {
      jaar: "2024",
      kerncijfers: [
        { waarde: "2.600+", label: "beoordelingen door adviseurs" },
        { waarde: "5", label: "productmarkten" }
      ],
      // Link naar de samenvatting (pdf of webpagina). Leeg laten = geen downloadknop.
      samenvattingUrl: "https://www.dfobv.nl/product/gratis-vakpaper-performance-onderzoek-2024/",
      kernbevinding:
        "Bij hypotheken vinden adviseurs de mogelijkheid tot overleg het allerbelangrijkst, met goede telefonische bereikbaarheid als randvoorwaarde. Een hypotheekadviseur werkt gemiddeld met meer dan 10 aanbieders.",
      links: [
        { tekst: "Lees het persbericht", url: "https://www.dfobv.nl/wp-content/uploads/2024/09/Persbericht-winnaars-DFO-Performance-onderzoek-2024-zijn-bekend-1.pdf" },
        { tekst: "Zo schreef VVP erover", url: "https://vvponline.nl/nieuws/winnaars-dfo-performance-onderzoek-aanbieders-2024/" }
      ],
      winnaarsTitel: "Top 3 van 2024",
      winnaars: [
        { productgroep: "Hypotheken", winnaar: "Obvion", top3: ["ING", "NIBC"] },
        { productgroep: "Particulier Schade", winnaar: "Nh1816 Verzekeringen", top3: ["AnsvarIdéa", "Klaverblad"] },
        { productgroep: "Zakelijk Schade", winnaar: "Nationale-Nederlanden", top3: ["De Goudse Verzekeringen", "Klaverblad"] },
        { productgroep: "Lijfrente", winnaar: "OAKK", top3: ["NNEK", "Fondsenplatform"] },
        { productgroep: "AOV", winnaar: "TAF", top3: ["a.s.r.", "Movir"] }
      ]
    }
  ],

  // Wat er met de resultaten gebeurt.
  impact: {
    citaat:
      "Waar processen steeds verder digitaliseren, blijft persoonlijk contact bepalend voor vertrouwen en samenwerking.",
    bron: "Jurjen Oosterbaan Martinius, directeur Bureau DFO (persbericht mei 2026)",
    punten: [
      { titel: "Gratis vakpaper voor alle adviseurs", tekst: "Na elke meting delen we de uitkomsten in een vakpaper, aangeboden door de deelnemende aanbieders.", link: "https://www2.dfobv.nl/maand-van-de-performance/" },
      { titel: "Winnaars in beeld", tekst: "De beste aanbieders per productmarkt worden bekendgemaakt en gaan aan de slag met hun uitkomsten.", link: "https://www2.dfobv.nl/winnaars-performance-onderzoek-2025/" }
    ],
    // Artikelen in de vakpers over het onderzoek. Nieuwste bovenaan.
    // De eerste 4 staan direct op de pagina, de rest onder "Alle artikelen".
    vakpers: [
      { medium: "Risk & Business", datum: "september 2026", titel: "Goudse beste aanbieder zakelijk schade; Nh1816 bij particulier", url: "https://riskenbusiness.nl/nieuws/insurance/performance-onderzoek-2026-goudse-beste-aanbieder-zakelijk-schade-nh1816-verzekeringen-bij-particulier/" },
      { medium: "InFinance", datum: "september 2026", titel: "‘Binnendienst is onderdeel van dienstverlening’", url: "https://infinance.nl/artikel/binnendienst-is-onderdeel-van-dienstverlening/" },
      { medium: "Schade Magazine", datum: "juni 2026", titel: "Onderzoek naar kwaliteit binnendienst en acceptatie", url: "https://schade-magazine.nl/nieuws/archief/2026/06/onderzoek-naar-kwaliteit-binnendienst-en-acceptatie/12870" },
      { medium: "Risk & Business", datum: "mei 2026", titel: "Hoge waardering buitendienst leidt tot hogere NPS en groter omzetaandeel", url: "https://riskenbusiness.nl/nieuws/insurance/hoge-waardering-buitendienst-leidt-tot-hogere-nps-en-groter-omzetaandeel/" },
      { medium: "Schade Magazine", datum: "maart 2026", titel: "Vernieuwd Performance-onderzoek 2026", url: "https://www.schade-magazine.nl/nieuws/archief/2026/03/vernieuwd-performance-onderzoek-2026-meer-inzicht-in-kwaliteit-van-de-buitendienst/12563" },
      { medium: "InFinance", datum: "maart 2026", titel: "Vernieuwde opzet Performance-onderzoek", url: "https://infinance.nl/branche/vernieuwde-opzet-performance-onderzoek-van-bureau-dfo/" },
      { medium: "Risk & Business", datum: "september 2025", titel: "Deskundigheid binnendienst en acceptatiebeleid zijn de sleutel voor hoge waardering", url: "https://riskenbusiness.nl/nieuws/insurance/resultaten-performance-onderzoek-bureau-dfo-deskundigheid-binnendienst-en-acceptatiebeleid-zijn-de-sleutel-voor-hoge-waardering/" },
      { medium: "InFinance", datum: "september 2025", titel: "Winnaars Performance-onderzoek Bureau DFO", url: "https://infinance.nl/artikel/winnaars-performanceonderzoek-bureau-dfo/" },
      { medium: "Schade Magazine", datum: "september 2025", titel: "Resultaten Performance-onderzoek", url: "https://www.schade-magazine.nl/nieuws/archief/2025/09/resultaten-performance-onderzoek/11944" },
      { medium: "Risk & Business", datum: "september 2024", titel: "NN opnieuw winnaar bij Zakelijk Schade", url: "https://riskenbusiness.nl/nieuws/insurance/performance-onderzoek-aanbieders-nn-opnieuw-winnaar-bij-zakelijk-schade/" },
      { medium: "Schade Magazine", datum: "september 2024", titel: "Winnaars Performance-onderzoek aanbieders 2024 bekend", url: "https://schade-magazine.nl/nieuws/archief/2024/09/winnaars-performance-onderzoek-aanbieder-2024-bekend/10900" },
      { medium: "VVP", datum: "2024", titel: "Winnaars Performance-onderzoek aanbieders 2024", url: "https://vvponline.nl/nieuws/winnaars-dfo-performance-onderzoek-aanbieders-2024/" },
      { medium: "Risk & Business", datum: "oktober 2023", titel: "Winnaars 2023 bekend: ING, Nh1816, TAF, OAKK, Scildon en Nationale-Nederlanden", url: "https://riskenbusiness.nl/nieuws/insurance/winnaars-performance-onderzoek-aanbieders-2023-bekend-ing-nh1816-taf-oakk-scildon-en-nationale-nederlanden/" },
      { medium: "InFinance", datum: "2023", titel: "Winnaars Performance-onderzoek aanbieders 2023", url: "https://www.infinance.nl/artikel/winnaars-performance-onderzoek-aanbieders-2023/" },
      { medium: "VVP", datum: "2023", titel: "Winnaars Performance-onderzoek aanbieders 2023", url: "https://vvponline.nl/nieuws/winnaars-bekend-dfo-performance-onderzoek-aanbieders-2023/" }
    ],
    // Berichten van aanbieders zelf over hun resultaat. Nieuwste bovenaan.
    // soort: bijvoorbeeld "Nieuwsbericht" of "LinkedIn".
    aanbiedersOver: [
      { medium: "TAF", datum: "oktober 2026", titel: "Best gewaardeerde binnendienst in de ORV-markt", soort: "Nieuwsbericht", url: "https://www.taf.nl/over-taf/taf-nieuws/taf-heeft-beste-binnendienst-orv" },
      { medium: "OAKK", datum: "mei 2026", titel: "Als beste beoordeeld op buitendienst", soort: "Nieuwsbericht", url: "https://oakk.nl/oakk-als-beste-beoordeeld-op-buitendienst-in-performance-onderzoek-2026/" },
      { medium: "OAKK", datum: "oktober 2025", titel: "Beste aanbieder lijfrente 2025", soort: "Nieuwsbericht", url: "https://oakk.nl/beste-aanbieder-lijfrente-2025-onderzoeksresultaten-dfo-rapport/" },
      { medium: "Nh1816 Verzekeringen", datum: "september 2025", titel: "Opnieuw uitgeroepen tot beste schadeverzekeraar particulier", soort: "Nieuwsbericht", url: "https://www.nh1816.nl/nieuws/nh1816-opnieuw-uitgeroepen-tot-beste-schadeverzekeraar-particulier" },
      { medium: "TAF", datum: "september 2025", titel: "Nummer 1 in DFO Performance-onderzoek 2025", soort: "Nieuwsbericht", url: "https://www.taf.nl/over-taf/taf-nieuws/taf-nummer-1-dfo-performance-onderzoek-2025" },
      { medium: "Nh1816 Verzekeringen", datum: "2024", titel: "Winnaar Performance-onderzoek: in gesprek met het team", soort: "LinkedIn", url: "https://nl.linkedin.com/posts/nh1816-verzekeringen_nh1816-winnaar-performance-onderzoek-dfo-activity-7158773531839746048-Gtig" },
      { medium: "Nh1816 Verzekeringen", datum: "2024", titel: "Uitgeroepen tot beste schadeverzekeraar particulier 2024", soort: "Nieuwsbericht", url: "https://www.nh1816.nl/nieuws/nh1816-uitgeroepen-tot-beste-schadeverzekeraar-particulier-2024" },
      { medium: "TAF", datum: "2024", titel: "Ook in 2024 beste aanbieder Inkomen/AOV", soort: "Nieuwsbericht", url: "https://www.taf.nl/over-taf/taf-nieuws/taf-ook-2024-beste-aanbieder-inkomenaov" },
      { medium: "Nh1816 Verzekeringen", datum: "2023", titel: "Beste particuliere schadeverzekeraar 2023", soort: "Nieuwsbericht", url: "https://www.nh1816.nl/nieuws/beste-aanbieder-particuliere-schade-2023" },
      { medium: "Scildon", datum: "september 2022", titel: "Door adviseurs gekozen als beste verzekeraar overlijdensrisico", soort: "Nieuwsbericht", url: "https://www.scildon.nl/artikelen/scildon-door-adviseurs-gekozen-als-beste-verzekeraar-overlijdensrisico" }
    ]
  },

  // BEWAARD VOOR LATER: vragen voor aanbieders (worden nu niet getoond).
  faqAanbieders: [
    { vraag: "Welke productmarkten worden onderzocht?", antwoord: "Hypotheken, Particulier Schade, Zakelijk Schade, Lijfrente, ORV en AOV. Per productmarkt ontvangt u een eigen rapport." },
    { vraag: "Wat staat er in het rapport?", antwoord: "Per meting uw scores op de kwaliteitsaspecten van het thema, het belang dat adviseurs aan elk aspect hechten, uw NPS en de vergelijking met het marktgemiddelde." },
    { vraag: "Kan ik nog instappen voor 2026?", antwoord: "Ja. Het complete pakket 2026 bevat de rapporten van meting 1 en 2, en het rapport van meting 3 zodra het verschijnt." },
    { vraag: "Heeft het afnemen van een rapport invloed op de uitkomst?", antwoord: "Nee. De scores komen alleen uit de beoordelingen van financieel adviseurs. Of u een rapport afneemt, heeft daar geen invloed op." },
    { vraag: "Kunnen wij zien welke adviseur wat heeft geantwoord?", antwoord: "Nee. Alle uitkomsten worden op groepsniveau gerapporteerd. Antwoorden zijn niet te herleiden naar adviseurs of kantoren." }
  ],

  faq: [
    { vraag: "Wie kan meedoen?", antwoord: "Iedere financieel adviseur die zaken doet met een of meer aanbieders in de productmarkten Hypotheken, Particulier Schade, Zakelijk Schade, Lijfrente, ORV of AOV." },
    { vraag: "Waarom drie metingen per jaar?", antwoord: "Vanaf 2026 doen we het Performance-onderzoek in drie metingen, elk met een eigen thema: in het voorjaar accountmanagement en buitendienst, in de zomer binnendienst en acceptatie, in het najaar processen en digitale ondersteuning. Zo gaat elke vragenlijst over één thema en zijn de uitkomsten actueler." },
    { vraag: "Hoe lang duurt het invullen?", antwoord: "Ongeveer 8 minuten. In meting 2 was de helft van de adviseurs binnen 8 minuten klaar. Je beoordeelt alleen de aanbieders waar je zelf mee werkt, dus je slaat over wat niet voor jou geldt." },
    { vraag: "Zijn mijn antwoorden anoniem?", antwoord: "Ja. We rapporteren alleen op groepsniveau. Je antwoorden zijn nooit terug te leiden naar jou of je kantoor." },
    { vraag: "Wat is de voorbereidingslink?", antwoord: "Met de voorbereidingslink vul je één keer je kantoorgegevens in. Bij de volgende metingen hoef je die niet opnieuw in te vullen. Dat scheelt ongeveer 1½ minuut per meting, ook bij het Serviceproviders-onderzoek." },
    { vraag: "Hoe krijg ik de samenvatting?", antwoord: "Aan het eind van de vragenlijst laat je je e-mailadres achter. Dat gebruiken we alleen om je de samenvatting te sturen en we slaan het los van je antwoorden op." },
    { vraag: "Wat doen de aanbieders met mijn oordeel?", antwoord: "De aanbieders zien hoe adviseurs hun dienstverlening beoordelen en op welke punten het beter kan. Zo helpt jouw oordeel de partijen waarmee je samenwerkt om hun service te verbeteren." },
    { vraag: "Wie voert het onderzoek uit?", antwoord: "DFO Onderzoek, onderdeel van Bureau DFO in Hoevelaken, in samenwerking met Atentikmarketing." }
  ]
};
