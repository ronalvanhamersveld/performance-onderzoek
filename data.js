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
    "Hoe presteren geldverstrekkers en verzekeraars in de praktijk? Jij werkt er dagelijks mee, dus niemand weet het beter.",

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

  // Wat deelnemers krijgen.
  opbrengst: [
    {
      titel: "De vakpaper direct in je mailbox",
      tekst: "Deelnemers krijgen de vakpaper met de uitkomsten per productmarkt automatisch toegestuurd zodra hij verschijnt."
    },
    {
      titel: "Jouw stem bepaalt de winnaars",
      tekst: "De beste aanbieders per productmarkt volgen rechtstreeks uit de beoordelingen van financieel adviseurs."
    },
    {
      titel: "Aanbieders gaan ermee aan de slag",
      tekst: "Geldverstrekkers en verzekeraars gebruiken de uitkomsten om hun service aan adviseurs te verbeteren. Jouw ervaring telt dus echt."
    },
    {
      titel: "Snel, anoniem en zonder verplichtingen",
      tekst: "Invullen kost ongeveer 10 minuten. Je antwoorden worden anoniem verwerkt en nooit herleidbaar gedeeld."
    }
  ],

  // Eerdere resultaten. Nieuwste bovenaan. Bron: persberichten en winnaarspagina's van Bureau DFO.
  // top3 is optioneel: vul die alleen in als de 2e en 3e plaats bekend zijn.
  vorigeJaren: [
    {
      jaar: "2026 · meting 1",
      kerncijfers: [
        { waarde: "2.200+", label: "beoordelingen door adviseurs" },
        { waarde: "6", label: "productmarkten" }
      ],
      kernbevinding:
        "Een hoog gewaardeerde buitendienst leidt tot een hogere NPS en een groter omzetaandeel. Adviseurs vinden een vast contactpersoon en goede bereikbaarheid het belangrijkst.",
      links: [
        { tekst: "Download de samenvatting", url: "https://www2.dfobv.nl/samenvattingen-onderzoek-performance-2026/" },
        { tekst: "Lees het persbericht", url: "https://www.dfobv.nl/wp-content/uploads/2026/05/Persbericht-Performance-onderzoek-aanbieders-Kwaliteit-Accountmanagement-en-Buitendienst.pdf" }
      ],
      winnaarsTitel: "Best beoordeelde buitendienst",
      winnaars: [
        { productgroep: "Hypotheken", winnaar: "ING" },
        { productgroep: "Particulier Schade", winnaar: "Nh1816 Verzekeringen" },
        { productgroep: "Zakelijk Schade", winnaar: "Klaverblad" },
        { productgroep: "Lijfrente", winnaar: "OAKK" },
        { productgroep: "ORV", winnaar: "Dazure" },
        { productgroep: "AOV", winnaar: "a.s.r." }
      ]
    },
    {
      jaar: "2025",
      kerncijfers: [
        { waarde: "6", label: "productmarkten" },
        { waarde: "6", label: "winnaars bekendgemaakt" }
      ],
      kernbevinding:
        "Adviseurs waarderen de meeste dienstverleningsaspecten van aanbieders elk jaar iets hoger.",
      links: [
        { tekst: "Bekijk de winnaars 2025", url: "https://www2.dfobv.nl/winnaars-performance-onderzoek-2025/" }
      ],
      winnaarsTitel: "Winnaars 2025",
      winnaars: [
        { productgroep: "Hypotheken", winnaar: "Obvion" },
        { productgroep: "Particulier Schade", winnaar: "Nh1816" },
        { productgroep: "Zakelijk Schade", winnaar: "Turien&Co" },
        { productgroep: "Lijfrente", winnaar: "OAKK" },
        { productgroep: "ORV", winnaar: "TAF" },
        { productgroep: "AOV", winnaar: "TAF" }
      ]
    },
    {
      jaar: "2024",
      kerncijfers: [
        { waarde: "2.600+", label: "beoordelingen door adviseurs" },
        { waarde: "5", label: "productmarkten" }
      ],
      kernbevinding:
        "Een hypotheekadviseur werkt gemiddeld met ruim 10 aanbieders. Hypotheekaanbieders halen samen een NPS van 47, aanbieders van lijfrenteproducten 29.",
      links: [
        { tekst: "Lees het persbericht", url: "https://www.dfobv.nl/wp-content/uploads/2024/09/Persbericht-winnaars-DFO-Performance-onderzoek-2024-zijn-bekend-1.pdf" },
        { tekst: "Zo schreef VVP erover", url: "https://vvponline.nl/nieuws/winnaars-dfo-performance-onderzoek-aanbieders-2024/" }
      ],
      winnaarsTitel: "Top 3 van 2024",
      winnaars: [
        { productgroep: "Hypotheken", winnaar: "Obvion", top3: ["ING", "NIBC"] },
        { productgroep: "Particulier Schade", winnaar: "Nh1816", top3: ["Ansvar Idéa", "Klaverblad"] },
        { productgroep: "Zakelijk Schade", winnaar: "Nationale-Nederlanden", top3: ["De Goudse", "Klaverblad"] },
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

  faq: [
    { vraag: "Wie kan meedoen?", antwoord: "Iedere financieel adviseur die zaken doet met een of meer aanbieders in de productmarkten Hypotheken, Particulier Schade, Zakelijk Schade, Lijfrente, ORV of AOV." },
    { vraag: "Waarom drie metingen per jaar?", antwoord: "Vanaf 2026 doen we het Performance-onderzoek in drie metingen, elk met een eigen thema: in het voorjaar accountmanagement en buitendienst, in de zomer binnendienst en acceptatie, in het najaar processen en digitale ondersteuning. Zo gaat elke vragenlijst over één thema en zijn de uitkomsten actueler." },
    { vraag: "Hoe lang duurt het invullen?", antwoord: "Ongeveer 10 minuten. Je beoordeelt alleen de aanbieders waar je zelf mee werkt, dus je slaat over wat niet voor jou geldt." },
    { vraag: "Zijn mijn antwoorden anoniem?", antwoord: "Ja. We rapporteren alleen op groepsniveau. Je antwoorden zijn nooit terug te leiden naar jou of je kantoor." },
    { vraag: "Hoe krijg ik de vakpaper?", antwoord: "Aan het eind van de vragenlijst laat je je e-mailadres achter. Dat gebruiken we alleen om je de vakpaper te sturen en we slaan het los van je antwoorden op." },
    { vraag: "Wie voert het onderzoek uit?", antwoord: "DFO Onderzoek, onderdeel van Bureau DFO in Hoevelaken, in samenwerking met Atentikmarketing." }
  ]
};
