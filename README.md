# Performance-onderzoek – website

Losse webpagina voor het Performance-onderzoek van DFO Onderzoek, bedoeld voor GitHub Pages met een eigen adres.

## Bestanden

| Bestand | Wat het is | Aanpassen? |
|---|---|---|
| `data.js` | Alle teksten, cijfers, winnaars, vragen en de link naar de vragenlijst | **Ja, alleen dit bestand** |
| `index.html` | Opbouw van de pagina | Zelden |
| `style.css` | Opmaak in de huisstijl van DFO Onderzoek (#005EA9, #6EC1E4, Arial) | Zelden |
| `app.js` | Vult de pagina met de gegevens uit `data.js` | Nee |
| `assets/` | Logo en favicon | Alleen bij nieuw logo |

## Voor livegang

1. Vul in `data.js` de echte gegevens in: link naar de vragenlijst, sluitdatum, doelen per productgroep, winnaars en kerncijfers van eerdere jaren, en een echt citaat (met toestemming).
2. Zet `voorbeeld: false` in `data.js`, dan verdwijnt de gele balk.
3. Vervang in `index.html` de link `#privacy-link-volgt` door de link naar de privacyverklaring.

## Bijwerken

Alles staat in `data.js`: de huidige meting (`metingen`, `vragenlijstUrl`, `sluitdatum`), de grafieken (`inzichten`), de eerdere resultaten met downloadlinks (`vorigeJaren`), de artikelen in de vakpers (`impact.vakpers`) en de berichten van winnaars (`impact.aanbiedersOver`). Na de sluitdatum veranderen de knoppen automatisch in "Bekijk de resultaten".

## Online zetten via GitHub Pages

1. Maak op GitHub een nieuwe repository, bijvoorbeeld `performance-onderzoek`.
2. Upload de inhoud van deze map (dus `index.html`, `data.js` en de rest) naar de hoofdmap van de repository.
3. Ga naar **Settings > Pages**, kies bij **Source** "Deploy from a branch", branch `main`, map `/ (root)` en klik op **Save**.
4. **Eigen adres** (bijvoorbeeld `performance.dfobv.nl`):
   - Vul in **Settings > Pages > Custom domain** het adres in en klik op **Save**. GitHub maakt dan zelf een bestand `CNAME` aan.
   - Laat bij de beheerder van de DNS van dfobv.nl een **CNAME-record** aanmaken: naam `performance`, waarde `<github-gebruikersnaam>.github.io`.
   - Raak de bestaande records van e-mail (Microsoft 365), www, www2, shop en opleidingen niet aan.
   - Zet, zodra het adres werkt, **Enforce HTTPS** aan.

## Meten wat werkt

Geef elke link naar deze pagina een herkenbare toevoeging mee, bijvoorbeeld `?utm_source=spotler&utm_campaign=performance2027` voor de mailing en `?utm_source=linkedin` voor LinkedIn. Dan zie je in de statistieken welk kanaal de deelnemers oplevert.

## Volgende onderzoeken

Voor een volgend onderzoek kopieer je deze hele map naar een nieuwe repository, bijvoorbeeld voor het Serviceproviders-onderzoek. Daarna pas je alleen `data.js` en eventueel de koptekst in `index.html` aan.
