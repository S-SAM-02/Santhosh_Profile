Santhosh S — Luxury Portfolio (Static Build)
=============================================

100% HTML, CSS and JavaScript. No build tools. No npm. No React.
Open `index.html` in any modern browser to view.

Structure
---------
Portfolio/
  index.html      — Home (hero, about preview, skills, achievements, vision)
  about.html      — Full about, experience timeline, business vision
  projects.html   — Project showcase
  contact.html    — Contact info, form, map
  resume.pdf      — Downloadable resume
  css/            — variables.css, animations.css, style.css, responsive.css
  js/             — theme.js, particles.js, animations.js, script.js, contact.js
  assets/         — profile/, projects/, icons/, images/, backgrounds/, logos/, fonts/

Features
--------
- Light & dark mode with persistence (localStorage)
- Rotating hero titles, gold particles, 3D tilt profile frame
- Scroll reveal animations, animated skill progress rings
- Glassmorphism + soft neumorphism, cinematic ambient orbs
- Fully responsive, SEO metadata, semantic HTML
- Custom cursor, scroll progress, luxury loading screen

Contact form
------------
The form is client-side; on submit it opens the visitor's mail app pre-filled
to rathasenthil194@gmail.com. To make it fully automated, plug in a service
like Formspree, Web3Forms or your own backend in js/contact.js.

Fonts
-----
Google Fonts (Cormorant Garamond + Inter) are loaded via CDN for the best
typography. To go 100% offline, download the .woff2 files into assets/fonts/
and swap the <link> tags for local @font-face rules in css/variables.css.

Editing
-------
- Colors & theme tokens: css/variables.css
- Layout & components:   css/style.css
- Animations & keyframes: css/animations.css
- Interactivity:         js/*.js
- Replace images in assets/profile/ and assets/projects/ with your own files
  (keep the same filenames or update the src attributes in the HTML).

© 2026 Santhosh S — All rights reserved.
