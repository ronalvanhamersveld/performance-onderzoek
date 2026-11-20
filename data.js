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
  voorbeeldTekst: "Voorbeeldversie: de stand per productmarkt, de sluitdatum en de link naar de vragenlijst zijn nog niet echt.",

  naam: "Performance-onderzoek",
  editie: "2026 · meting 3",
  ondertitel:
    "Beoordeel in 10 minuten de geldverstrekkers en verzekeraars waar je mee werkt. Je ontvangt een samenvatting van de belangrijkste uitkomsten en helpt de partijen waarmee je samenwerkt hun dienstverlening te verbeteren.",

  // Link naar de vragenlijst van de huidige meting.
  vragenlijstUrl: "#vragenlijst-link-volgt",
  duurMinuten: 10,
  sluitdatum: "2026-12-19",
  resultatenBekend: "begin 2027",
  laatstBijgewerkt: "2026-11-20",

  // De metingen van dit jaar. status: "afgerond", "open" of "gepland".
  metingen: [
    { naam: "Meting 1", periode: "voorjaar", thema: "Accountmanagement en buitendienst", status: "afgerond" },
    { naam: "Meting 2", periode: "zomer", thema: "Binnendienst en acceptatie", status: "afgerond" },
    { naam: "Meting 3", periode: "najaar", thema: "Processen en digitale ondersteuning", status: "open" }
  ],
  metingenIntro: "Drie metingen in 2026, per productmarkt een eigen rapport.",

  // Respons per productmarkt voor de huidige meting: doel = aantal beoordelingen
  // dat we nodig hebben, huidig = aantal dat nu binnen is. Wekelijks bijwerken.
  productgroepen: [
    { naam: "Hypotheken", doel: 150, huidig: 112 },
    { naam: "Particulier Schade", doel: 120, huidig: 91 },
    { naam: "Zakelijk Schade", doel: 100, huidig: 37 },
    { naam: "Lijfrente", doel: 80, huidig: 29 },
    { naam: "Overlijdensrisico (ORV)", doel: 80, huidig: 52 },
    { naam: "Arbeidsongeschiktheid (AOV)", doel: 100, huidig: 48 }
  ],

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
      titel: "10 minuten en anoniem",
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

  // Eerdere resultaten. Nieuwste bovenaan.
  // Bron: de samenvattingen voor adviseurs (2024, 2025, 2026 meting 1 en 2) en de persberichten.
  // top3 is optioneel: de 2e en 3e plaats. Laat weg als die niet bekend is.
  // noot is optioneel: een korte zin onder de links.
  vorigeJaren: [
    {
      jaar: "2026 · meting 2",
      kerncijfers: [
        { waarde: "1.300+", label: "beoordelingen door adviseurs" },
        { waarde: "5", label: "productmarkten" }
      ],
      kernbevinding:
        "Of adviseurs een aanbieder aanbevelen, hangt vooral af van partnerschap: een binnendienst die echt meedenkt. Bereikbaarheid, snelle mailafhandeling en overleg zijn de basis. Binnen één markt kan het verschil tussen de beste en zwakste aanbieder oplopen tot ruim drie punten.",
      links: [],
      noot: "Als deelnemer ontvang je de samenvatting met alle uitkomsten per productmarkt.",
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
      kernbevinding:
        "Adviseurs hechten in alle markten het meest aan een vast contactpersoon en een goed bereikbare accountmanager. Aanbieders met een hoog gewaardeerde buitendienst worden vaker aanbevolen.",
      links: [
        { tekst: "Lees het persbericht", url: "https://www.dfobv.nl/wp-content/uploads/2026/05/Persbericht-Performance-onderzoek-aanbieders-Kwaliteit-Accountmanagement-en-Buitendienst.pdf" }
      ],
      noot: "Als deelnemer ontvang je de samenvatting met alle uitkomsten per productmarkt.",
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
      { titel: "In de vakpers", tekst: "De winnaars en uitkomsten worden overgenomen door vakmedia, zoals VVP.", link: "https://vvponline.nl/nieuws/winnaars-dfo-performance-onderzoek-aanbieders-2024/" },
      { titel: "Gratis vakpaper voor alle adviseurs", tekst: "Na elke meting delen we de uitkomsten in een vakpaper, aangeboden door de deelnemende aanbieders.", link: "https://www2.dfobv.nl/maand-van-de-performance/" },
      { titel: "Winnaars in beeld", tekst: "De beste aanbieders per productmarkt worden bekendgemaakt en gaan aan de slag met hun uitkomsten.", link: "https://www2.dfobv.nl/winnaars-performance-onderzoek-2025/" }
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
    { vraag: "Hoe lang duurt het invullen?", antwoord: "Ongeveer 10 minuten. Je beoordeelt alleen de aanbieders waar je zelf mee werkt, dus je slaat over wat niet voor jou geldt." },
    { vraag: "Zijn mijn antwoorden anoniem?", antwoord: "Ja. We rapporteren alleen op groepsniveau. Je antwoorden zijn nooit terug te leiden naar jou of je kantoor." },
    { vraag: "Hoe krijg ik de samenvatting?", antwoord: "Aan het eind van de vragenlijst laat je je e-mailadres achter. Dat gebruiken we alleen om je de samenvatting te sturen en we slaan het los van je antwoorden op." },
    { vraag: "Wat doen de aanbieders met mijn oordeel?", antwoord: "De aanbieders zien hoe adviseurs hun dienstverlening beoordelen en op welke punten het beter kan. Zo helpt jouw oordeel de partijen waarmee je samenwerkt om hun service te verbeteren." },
    { vraag: "Wie voert het onderzoek uit?", antwoord: "DFO Onderzoek, onderdeel van Bureau DFO in Hoevelaken, in samenwerking met Atentikmarketing." }
  ]
};
