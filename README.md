# Simple-Project website

Source of https://freakysneaky787.github.io/, the website for
[Simple OS](https://github.com/FreakySneaky787/Simple-OS) and
[Simple Organizer](https://github.com/FreakySneaky787/Simple-Organizer) and
[YAK](https://github.com/FreakySneaky787/yak-kernel).

Plain HTML and CSS, no build step. GitHub Pages serves the files in this
repository as they are (`.nojekyll` turns off Jekyll).

| File | What it is |
|---|---|
| `index.html` | Home page with news |
| `simple-os.html`, `organizer.html`, `organizer-guide.html`, `yak.html` | Product pages and user guide |
| `download.html`, `roadmap.html`, `help.html`, `contribute.html`, `about.html` | Other pages |
| `404.html` | Shown for missing pages (uses root paths like `/style.css`) |
| `style.css`, `script.js`, `favicon.svg` | Shared design, copy buttons and table of contents, icon |
| `sitemap.xml`, `robots.txt` | For search engines |

Screenshots go into `screenshots/`.

When a new version is released, update the version, date, size and checksum on
the home page, the product page and `download.html`.