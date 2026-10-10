# AHMED & MYRIAM — Wedding Invitation

A one-page scrolling wedding invitation inspired by the Saladin Citadel, Cairo.
Plain HTML, CSS and vanilla JavaScript. No backend, no build step, no API keys.
Works as-is on GitHub Pages.

## Files
- `index.html` – structure and wording (English, left-to-right)
- `style.css` – colour and font tokens at the top (`:root`), then each section
- `script.js` – every event detail lives in the `WEDDING_CONFIG` block at the top
- `assets/song.mp3` – the wedding music
- `assets/fonts/` – Cormorant Garamond (names and headings) and Montserrat (text), bundled so the page does not depend on Google Fonts. Licences are included.

## Change the details
Open `script.js` and edit `WEDDING_CONFIG`:
- `eventDate` – currently `2027-04-01T20:00:00+02:00` (1 April 2027, 8:00 PM, Cairo time). Keep the `+02:00` while Egypt is on standard time on the wedding day; if the date moves into Egypt's summer-time period (from late April), use `+03:00`.
- `mapsUrl` – Google Maps link
- `whatsappNumber` – digits only, international format (`201200140223`)
- `maxGuests` – most people one answer can include (50)
- `dodgeLimit` – how many times the "I'm sorry, I can't make it" button steps aside before it can be chosen (2)
- `photos` – add real photographs, e.g. `{ src: "assets/photos/01.jpg", alt: "Ahmed and Myriam" }`. The "Our moments" section stays hidden until at least one photo is listed.

## How guests answer
"Send my answer" checks the form, then opens WhatsApp with a ready-written message to the number above
(phones open the WhatsApp app, computers open WhatsApp Web). The page only says the answer is *ready*;
it cannot know whether the guest pressed Send in WhatsApp.

## Add to Calendar
One button. Apple devices receive a calendar file that opens in Calendar; other devices open Google Calendar
with the event filled in.

## GitHub Pages
Upload the whole folder to the repository root, then Settings → Pages → Deploy from branch → main / root.

## Optional
Add `og:url` and an `og:image` meta tag in `index.html` once the final address and a share image exist.
