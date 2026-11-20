/*
  GEGEVENS VAN DE PAGINA
  ----------------------
  Dit is het enige bestand dat je hoeft aan te passen om de pagina bij te werken.
  - Pas alleen de tekst tussen de aanhalingstekens en de getallen aan.
  - Laat komma's, haakjes en accolades staan.
  - Datums altijd als "JJJJ-MM-DD", bijvoorbeeld "2027-01-31".
  - Zet voorbeeld op false zodra alle cijfers en teksten echt zijn:
    dan verdwijnt de gele balk "Voorbeeldversie".
*/
window.ONDERZOEK = {
  voorbeeld: true,

  naam: "Performance-onderzoek",
  editie: "2027",
  ondertitel:
    "Hoe presteren geldverstrekkers en verzekeraars in de praktijk? Jij werkt er dagelijks mee, dus niemand weet het beter.",

  // Link naar de vragenlijst (bijvoorbeeld uit SurveyMonkey of Formulieren).
  vragenlijstUrl: "#vragenlijst-link-volgt",
  duurMinuten: 10,
  sluitdatum: "2027-01-31",
  resultatenBekend: "maart 2027",
  laatstBijgewerkt: "2026-11-20",

  // Respons per productgroep: doel = aantal beoordelingen dat we nodig hebben,
  // huidig = aantal dat nu binnen is. Werk "huidig" bijvoorbeeld wekelijks bij.
  productgroepen: [
    { naam: "Hypotheken", doel: 150, huidig: 112 },
    { naam: "Arbeidsongeschiktheid (AOV)", doel: 100, huidig: 48 },
    { naam: "Schade particulier", doel: 120, huidig: 91 },
    { naam: "Schade zakelijk", doel: 100, huidig: 37 },
    { naam: "Overlijdensrisico", doel: 80, huidig: 52 },
    { naam: "Pensioen", doel: 80, huidig: 29 }
  ],

  // Wat deelnemers krijgen.
  opbrengst: [
    {
      titel: "De vakpaper als eerste in je mailbox",
      tekst: "Deelnemers ontvangen de volledige vakpaper met alle uitkomsten per productgroep, nog voordat de resultaten openbaar worden."
    },
    {
      titel: "Jouw stem bepaalt de winnaars",
      tekst: "De winnaars per productgroep worden alleen bepaald door het oordeel van adviseurs. Geen jury, geen betaalde plek."
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

  // Resultaten van eerdere jaren. Nieuwste jaar bovenaan.
  vorigeJaren: [
    {
      jaar: "2026",
      beoordelingen: 1480,
      aanbieders: 42,
      kernbevinding:
        "Snelheid van acceptatie weegt voor adviseurs zwaarder dan ooit. Aanbieders die binnen twee werkdagen reageren, scoren gemiddeld een vol punt hoger.",
      linkTekst: "Bekijk de samenvattingen 2026",
      link: "https://www2.dfobv.nl/samenvattingen-onderzoek-performance-2026/",
      winnaars: [
        { productgroep: "Hypotheken", winnaar: "Aanbieder A" },
        { productgroep: "AOV", winnaar: "Aanbieder B" },
        { productgroep: "Schade particulier", winnaar: "Aanbieder C" },
        { productgroep: "Schade zakelijk", winnaar: "Aanbieder D" },
        { productgroep: "Overlijdensrisico", winnaar: "Aanbieder E" },
        { productgroep: "Pensioen", winnaar: "Aanbieder F" }
      ]
    },
    {
      jaar: "2025",
      beoordelingen: 1390,
      aanbieders: 40,
      kernbevinding:
        "Een vaste contactpersoon bij de aanbieder is voor adviseurs het belangrijkste verschil tussen een gemiddelde en een goede beoordeling.",
      linkTekst: "Bekijk de winnaars 2025",
      link: "https://www2.dfobv.nl/winnaars-performance-onderzoek-2025/",
      winnaars: [
        { productgroep: "Hypotheken", winnaar: "Aanbieder B" },
        { productgroep: "AOV", winnaar: "Aanbieder G" },
        { productgroep: "Schade particulier", winnaar: "Aanbieder C" },
        { productgroep: "Schade zakelijk", winnaar: "Aanbieder H" },
        { productgroep: "Overlijdensrisico", winnaar: "Aanbieder E" },
        { productgroep: "Pensioen", winnaar: "Aanbieder I" }
      ]
    },
    {
      jaar: "2024",
      beoordelingen: 1310,
      aanbieders: 38,
      kernbevinding:
        "Digitale aanlevering van stukken is gemeengoed geworden. Het verschil zit nu in hoe snel en duidelijk de aanbieder terugkoppelt.",
      linkTekst: "",
      link: "",
      winnaars: [
        { productgroep: "Hypotheken", winnaar: "Aanbieder A" },
        { productgroep: "AOV", winnaar: "Aanbieder B" },
        { productgroep: "Schade particulier", winnaar: "Aanbieder J" },
        { productgroep: "Schade zakelijk", winnaar: "Aanbieder D" },
        { productgroep: "Overlijdensrisico", winnaar: "Aanbieder K" },
        { productgroep: "Pensioen", winnaar: "Aanbieder F" }
      ]
    }
  ],

  // Wat er met de resultaten gebeurt (bewijs dat meedoen ertoe doet).
  impact: {
    citaat:
      "De uitkomsten van het Performance-onderzoek bespreken we elk jaar met ons hele acceptatieteam. Het is de eerlijkste spiegel die we hebben.",
    bron: "Directeur intermediair, aanbieder (voorbeeldcitaat)",
    punten: [
      { titel: "Maand van de Performance", tekst: "Elk jaar delen we per productgroep de ontwikkelingen in een vakpaper.", link: "https://www2.dfobv.nl/maand-van-de-performance/" },
      { titel: "Bekendmaking winnaars", tekst: "De winnaars worden bekendgemaakt en gedeeld met vakpers en aanbieders.", link: "https://www2.dfobv.nl/winnaars-performance-onderzoek-2025/" },
      { titel: "Gesprek met aanbieders", tekst: "Aanbieders krijgen hun eigen uitkomsten en gaan daarmee aan de slag.", link: "" }
    ]
  },

  faq: [
    { vraag: "Wie kan meedoen?", antwoord: "Iedere financieel adviseur die in het afgelopen jaar zaken heeft gedaan met een of meer aanbieders in de genoemde productgroepen." },
    { vraag: "Hoe lang duurt het invullen?", antwoord: "Ongeveer 10 minuten. Je beoordeelt alleen de aanbieders waar je zelf mee werkt, dus je slaat over wat niet voor jou geldt." },
    { vraag: "Zijn mijn antwoorden anoniem?", antwoord: "Ja. We rapporteren alleen op groepsniveau. Je antwoorden zijn nooit terug te leiden naar jou of je kantoor." },
    { vraag: "Hoe krijg ik de vakpaper?", antwoord: "Aan het eind van de vragenlijst laat je je e-mailadres achter. Dat gebruiken we alleen om je de vakpaper te sturen en het los van je antwoorden op te slaan." },
    { vraag: "Wanneer zijn de resultaten bekend?", antwoord: "De resultaten en winnaars maken we bekend in maart 2027. Deelnemers ontvangen de vakpaper als eerste." },
    { vraag: "Wie voert het onderzoek uit?", antwoord: "DFO Onderzoek, onderdeel van Bureau DFO in Hoevelaken. We doen al jaren onafhankelijk onderzoek onder financieel adviseurs." }
  ]
};
