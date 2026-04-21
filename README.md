# ⚡ DevFlash

> A Chrome extension that turns every new tab into a learning moment for developers.

![License](https://img.shields.io/badge/license-MIT-4ecca3?style=flat-square)
![Manifest](https://img.shields.io/badge/manifest-v3-4ecca3?style=flat-square)
![Vanilla JS](https://img.shields.io/badge/built%20with-vanilla%20JS-4ecca3?style=flat-square)
![No Dependencies](https://img.shields.io/badge/dependencies-none-4ecca3?style=flat-square)

---

## What is DevFlash?

DevFlash replaces Chrome's default new tab page with developer flashcards. Every time you open a tab, you see something worth knowing — HTTP codes, programming concepts, trivia, and quizzes.

No frameworks. No build tools. No server. Just HTML, CSS, and JavaScript.

---

## Features

- **HTTP Status Codes** — code, name, category, plain English explanation, and a real-world example
- **Code Snippets** — practical examples in JavaScript, Python, Java with syntax highlighting
- **Dev Trivia** — stories from programming history, famous bugs, hardware exploits
- **Math & Logic Trivia** — Big O, Boolean algebra, the birthday problem, and more
- **Quizzes** — multiple choice questions covering:
  - Number sequences (arithmetic, geometric, Fibonacci, triangular...)
  - Letter sequences
  - Mixed sequences (letters + numbers)
  - Shape & grid pattern recognition
  - CS fundamentals and code output prediction

- **"Don't repeat" checkbox** — mark items you don't want to see again
- **Quiz auto-mark** — correctly answered quizzes won't appear again
- **Smart randomization** — weighted content selection
- **Search bar** — uses Chrome Search API (respects your default search engine)
- **Keyboard shortcuts** — `→` arrow key to go to the next card
- **Animated background** — subtle floating particle network
- **100% offline** — no network requests, no CDN, no tracking

---

## Preview

```
┌─────────────────────────────────────────┐
│ ⚡ DevFlash                              │
├─────────────────────────────────────────┤
│                                         │
│         Good morning.                   │
│         Monday, April 21, 2026          │
│                                         │
│   🔍  Search the web or type a URL   ↵  │
│                                         │
│  ┌───────────────────────────────────┐  │
│  │ [HTTP CODE]                  →     │  │
│  │                                   │  │
│  │  404                              │  │
│  │  Not Found                        │  │
│  │  4xx Client Error                 │  │
│  │                                   │  │
│  │  The server couldn't find the...  │  │
│  │                                   │  │
│  │  ☐ Don't show this again          │  │
│  └───────────────────────────────────┘  │
└─────────────────────────────────────────┘
```

---

## Content Types

Every new tab (and every `→` click) picks a random content type.

| Type         | What you see                             |
| ------------ | ---------------------------------------- |
| HTTP Code    | Status code with explanation and example |
| Code Snippet | Practical code with syntax highlighting  |
| Dev Trivia   | Programming history and lore             |
| Math Trivia  | Logic and CS mathematics                 |
| Quiz         | Multiple choice with instant feedback    |

Content is **weighted** — quizzes and trivia appear more frequently.

---

## Installation (Local / Development)

1. Clone or download this repository

   ```bash
   git clone https://github.com/Jafar-X/devTab.git
   ```

2. Open Chrome and navigate to `chrome://extensions`

3. Enable **Developer Mode** using the toggle in the top-right corner

4. Click **Load unpacked** and select the `devTab` folder

5. Open a new tab — DevFlash is live

---

## File Structure

```
devTab/
├── manifest.json       # Extension config (Manifest V3)
├── devtab.html         # New tab page markup
├── style.css           # All styling and animations
├── script.js           # Logic: randomization, rendering, search, storage
├── data.js             # All content (188 items)
├── fonts/              # Local fonts (no network requests)
└── icons/              # Extension icons
```

No build step. No `node_modules`. Edit any file and reload the extension to see changes.

---

## Adding Content

All content lives in `data.js` inside the `DATA` object. Each section is a plain array of objects.

Code snippets have a `difficulty` field (`"beginner"` or `"experienced"`). Other content types (HTTP, trivia, math, quiz) don't have difficulty tags.

---

## Privacy

DevFlash collects no data. It makes no network requests. It has no analytics, no ads, and no third-party integrations. Search uses Chrome's built-in Search API, respecting your default search engine.

Full privacy policy: [privacy-policy.html](privacy-policy.html)

---

## License

MIT — do whatever you want with it.

---

<p align="center">Built with zero dependencies and a lot of ☕</p>