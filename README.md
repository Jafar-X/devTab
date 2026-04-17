# ⌨ DevTab

> A Chrome extension that turns every new tab into a learning moment for developers.

![License](https://img.shields.io/badge/license-MIT-4ecca3?style=flat-square)
![Manifest](https://img.shields.io/badge/manifest-v3-4ecca3?style=flat-square)
![Vanilla JS](https://img.shields.io/badge/built%20with-vanilla%20JS-4ecca3?style=flat-square)
![No Dependencies](https://img.shields.io/badge/dependencies-none-4ecca3?style=flat-square)

---

## What is DevTab?

DevTab replaces Chrome's default new tab page with rotating educational content for programmers. Every time you open a tab, you see something worth knowing — no fluff, no noise, just signal.

No frameworks. No build tools. No server. Just HTML, CSS, and JavaScript.

---

## Features

- **HTTP Status Codes** — code, name, category, plain English explanation, and a real-world example
- **Code Snippets** — practical examples with syntax highlighting (arrow functions, list comprehensions, memoization, and more)
- **Dev Trivia** — stories from programming history, famous bugs, hardware exploits
- **Math & Logic Trivia** — Big O, Boolean algebra, the birthday problem, and more
- **Aptitude Quizzes** — multiple choice questions covering:
  - Number sequences (arithmetic, geometric, Fibonacci, triangular...)
  - Letter sequences
  - Mixed sequences (letters + numbers)
  - Shape & grid pattern recognition
  - CS fundamentals and code output prediction

- **Smart randomization** — randomly picks both content type and difficulty level each time, weighted so quizzes and trivia appear more often
- **Google Search bar** — fully functional, just like the default new tab
- **Keyboard shortcuts** — `→` arrow key to go to the next card
- **Animated background** — subtle floating particle network
- **100% offline** — no network requests, no CDN, no tracking

---

## Preview

```
┌─────────────────────────────────────────┐
│ ⌨ DevTab                                       │
├─────────────────────────────────────────┤
│                                         │
│         Good morning.                   │
│         Saturday, April 19, 2026        │
│                                         │
│   🔍  Search Google or type a URL    ↵  │
│                                         │
│  ┌───────────────────────────────────┐  │
│  │ [HTTP CODE]              ● ○ ○ ○ ○ → │  │
│  │                                   │  │
│  │  404                              │  │
│  │  Not Found                        │  │
│  │  4xx Client Error                 │  │
│  │                                   │  │
│  │  The server couldn't find the...  │  │
│  └───────────────────────────────────┘  │
└─────────────────────────────────────────┘
```

---

## Content Randomization

Every new tab (and every `→` click) picks a random content type and a random difficulty level — no fixed cycle, no user setting required.

| Type | What you see |
|------|-------------|
| HTTP Code | Status code with explanation and example |
| Code Snippet | Practical code with syntax highlighting |
| Dev Trivia | Programming history and lore |
| Math Trivia | Logic and CS mathematics |
| Quiz | Multiple choice with instant feedback |

Content is **weighted** — quizzes and trivia appear more frequently than other types. Items already shown are tracked per session so you won't see the same card twice in a row. The difficulty (Beginner / Experienced) is also picked randomly each time and shown in the card badge.

---

## Installation (Local / Development)

1. Clone or download this repository
   ```bash
   git clone https://github.com/Jafar-X/devTab.git
   ```

2. Open Chrome and navigate to `chrome://extensions`

3. Enable **Developer Mode** using the toggle in the top-right corner

4. Click **Load unpacked** and select the `devTab` folder

5. Open a new tab — DevTab is live

---

## File Structure

```
devTab/
├── manifest.json       # Extension config (Manifest V3)
├── newtab.html         # New tab page markup
├── style.css           # All styling and animations
├── script.js           # Logic: randomization, rendering, search, keyboard
└── data.js             # All content (HTTP codes, snippets, trivia, quizzes)
```

No build step. No `node_modules`. Edit any file and reload the extension to see changes.

---

## Adding Content

All content lives in `data.js` inside the `DATA` object. Each section is a plain array of objects. To add a new quiz question, for example:

```js
{
  difficulty: "beginner",           // "beginner" or "experienced"
  question: "What comes next?",
  code: "2,  4,  8,  16,  ?",      // optional — shown as code block
  options: ["24", "32", "20", "18"],
  answer: 1,                        // index of correct option (0-based)
  explanation: "Each number doubles. 16 × 2 = 32."
}
```

Same pattern applies to `http`, `snippet`, `trivia`, and `math` arrays. Each entry has a `difficulty` field (`"beginner"` or `"experienced"`) — this is picked randomly at runtime, so just tag your content and it will appear automatically.

---

## Publishing to Chrome Web Store

1. Zip the project folder (ensure `manifest.json` is at the root of the zip)
2. Go to the [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole)
3. Pay the one-time **$5 USD** developer registration fee
4. Click **Add a new item** and upload the zip
5. Fill in the store listing: title, description, screenshots, and category
6. Set the Privacy Policy URL to:
   ```
   https://jafar-x.github.io/devTab/privacy-policy.html
   ```
7. Submit for review — typically approved within a few days

---

## Privacy

DevTab collects no data. It makes no network requests. It has no analytics, no ads, and no third-party integrations. The only external action it performs is navigating to Google Search when you press Enter in the search bar — a standard browser action.

Full privacy policy: [jafar-x.github.io/devTab/privacy-policy.html](https://jafar-x.github.io/devTab/privacy-policy.html)

---

## License

MIT — do whatever you want with it.

---

<p align="center">Built with zero dependencies and a lot of ☕</p>
