// script.js — DevFlash Extension Logic

// ── Constants ────────────────────────────────────────────
const TYPE_LABELS = {
  http: "HTTP Code",
  snippet: "Code Snippet",
  trivia: "Dev Trivia",
  math: "Math Trivia",
  quiz: "Quiz",
};

const WEIGHTED_TYPES = ["trivia", "quiz", "snippet", "http", "math"];

// ── State ────────────────────────────────────────────────
let doNotRepeat = {
  http: [],
  snippet: [],
  trivia: [],
  math: [],
  quiz: [],
};
let usedIndices = {};
let currentType = null;
let currentIndex = null;

// ── Storage ───────────────────────────────────────────────
async function loadDoNotRepeat() {
  const result = await chrome.storage.local.get("devtabDoNotRepeat");
  if (result.devtabDoNotRepeat) {
    doNotRepeat = result.devtabDoNotRepeat;
  }
}

async function saveDoNotRepeat() {
  await chrome.storage.local.set({ devtabDoNotRepeat: doNotRepeat });
}

function markDoNotRepeat(type, index) {
  if (!doNotRepeat[type].includes(index)) {
    doNotRepeat[type].push(index);
    saveDoNotRepeat();
  }
}

function markQuizCompleted(index) {
  if (!doNotRepeat.quiz.includes(index)) {
    doNotRepeat.quiz.push(index);
    saveDoNotRepeat();
  }
}

// ── Random Picker ────────────────────────────────────────
function pickRandomAny() {
  const randomType =
    WEIGHTED_TYPES[Math.floor(Math.random() * WEIGHTED_TYPES.length)];
  const items = DATA[randomType];

  if (!items || !items.length) return null;

  if (!usedIndices[randomType]) usedIndices[randomType] = [];

  // Filter out session-used AND marked as do-not-repeat
  let available = items.filter(
    (_, i) =>
      !usedIndices[randomType].includes(i) && !doNotRepeat[randomType].includes(i)
  );

  // If no available items, reset session tracking
  if (!available.length) {
    usedIndices[randomType] = [];
    available = items.filter((_, i) => !doNotRepeat[randomType].includes(i));

    // If still nothing, all items are marked do-not-repeat
    if (!available.length) {
      return null; // No items left to show
    }
  }

  const item = available[Math.floor(Math.random() * available.length)];
  const originalIdx = items.indexOf(item);
  usedIndices[randomType].push(originalIdx);

  return { type: randomType, item, index: originalIdx };
}

// ── Greeting ─────────────────────────────────────────────
function setGreeting() {
  const h = new Date().getHours();
  const greets = [
    [5, "Good morning"],
    [12, "Good afternoon"],
    [17, "Good evening"],
    [21, "Good night"],
  ];

  let text = "Hello";
  for (const [threshold, label] of greets) {
    if (h >= threshold) text = label;
  }

  document.getElementById("greeting").textContent = text + ".";

  const now = new Date();
  document.getElementById("date-display").textContent = now.toLocaleDateString(
    "en-US",
    {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );
}

// ── Card Renderers ────────────────────────────────────────
function renderHTTP(item) {
  return `
    <div class="http-code-num">${item.code}</div>
    <div class="http-name">${item.name}</div>
    <div class="http-category">${item.category}</div>
    <div class="http-explanation">${item.explanation}</div>
    <div class="http-example-label">Real-world example</div>
    <div class="http-example">${item.example}</div>
  `;
}

function renderSnippet(item) {
  return `
    <div class="snippet-lang">${item.language}</div>
    <div class="snippet-title">${item.title}</div>
    <div class="code-block">${item.code}</div>
    <div class="snippet-explanation">${item.explanation}</div>
  `;
}

function renderTrivia(item) {
  return `
    <div class="trivia-icon">${item.icon}</div>
    <div class="trivia-title">${item.title}</div>
    <div class="trivia-body">${item.body}</div>
  `;
}

function renderMath(item) {
  return `
    <div class="trivia-icon">${item.icon}</div>
    <div class="trivia-title">${item.title}</div>
    <div class="trivia-body">${item.body}</div>
  `;
}

function renderQuiz(item) {
  const codeBlock = item.code
    ? `<div class="quiz-code">${item.code}</div>`
    : "";

  const options = item.options
    .map(
      (opt, i) =>
        `<button class="quiz-option" data-index="${i}">${opt}</button>`
    )
    .join("");

  return `
    <div class="quiz-question">${item.question}</div>
    ${codeBlock}
    <div class="quiz-options-list" id="quizOpts">${options}</div>
    <div class="quiz-feedback-box" id="quizFeedback"></div>
  `;
}

// ── Main Render ───────────────────────────────────────────
function render(type, item, index) {
  currentType = type;
  currentIndex = index;

  const badgeText = type === "snippet"
    ? `${TYPE_LABELS[type]} • ${item.difficulty === "beginner" ? "Beginner" : "Experienced"}`
    : TYPE_LABELS[type];

  document.getElementById("typeBadge").textContent = badgeText;

  const body = document.getElementById("cardBody");
  body.style.opacity = "0";
  body.style.transform = "translateY(10px)";

  setTimeout(() => {
    const renders = {
      http: renderHTTP,
      snippet: renderSnippet,
      trivia: renderTrivia,
      math: renderMath,
      quiz: renderQuiz,
    };

    body.innerHTML = renders[type](item);

    // Add "Don't repeat" checkbox for non-quiz items
    if (type !== "quiz") {
      body.innerHTML += `
        <label class="do-not-repeat">
          <input type="checkbox" id="doNotRepeatCheckbox" />
          <span>Don't show this again</span>
        </label>
      `;

      document.getElementById("doNotRepeatCheckbox").addEventListener("change", (e) => {
        if (e.target.checked) {
          markDoNotRepeat(type, index);
        }
      });
    }

    body.style.transition = "opacity 0.35s ease, transform 0.35s ease";
    body.style.opacity = "1";
    body.style.transform = "none";

    if (type === "quiz") attachQuizHandlers(item, index);
  }, 150);
}

// ── Quiz Logic ────────────────────────────────────────────
function attachQuizHandlers(item, index) {
  document.querySelectorAll(".quiz-option").forEach((btn) => {
    btn.addEventListener("click", () => {
      const chosen = parseInt(btn.dataset.index, 10);
      const correct = chosen === item.answer;

      document.querySelectorAll(".quiz-option").forEach((b, i) => {
        b.disabled = true;
        if (i === item.answer) b.classList.add("correct");
        else if (i === chosen && !correct) b.classList.add("wrong");
      });

      const fb = document.getElementById("quizFeedback");
      fb.textContent =
        (correct ? "✓ Correct! " : "✗ Incorrect. ") + item.explanation;

      fb.className =
        "quiz-feedback-box show " + (correct ? "correct-fb" : "wrong-fb");

      // Mark as completed if answered correctly
      if (correct) {
        markQuizCompleted(index);
      }
    });
  });
}

// ── Load Content ─────────────────────────────────────────
function loadContent() {
  const result = pickRandomAny();

  if (!result) {
    // All items marked as do-not-repeat
    const body = document.getElementById("cardBody");
    body.innerHTML = `
      <div class="all-done">
        <div class="all-done-icon">✓</div>
        <div class="all-done-title">You've marked all items as "don't repeat"</div>
        <div class="all-done-subtitle">New items will appear when the extension updates</div>
      </div>
    `;
    document.getElementById("typeBadge").textContent = "All Done!";
    return;
  }

  const { type, item, index } = result;
  render(type, item, index);
}

// ── Search ────────────────────────────────────────────────
document.getElementById("searchInput").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const q = e.target.value.trim();
    if (q) {
      chrome.search.query({ text: q, disposition: "CURRENT_TAB" });
    }
  }
});

// ── Next Button ───────────────────────────────────────────
document.getElementById("nextBtn").addEventListener("click", loadContent);

// ── Keyboard Shortcut ─────────────────────────────────────
document.addEventListener("keydown", (e) => {
  if (
    e.key === "ArrowRight" &&
    document.activeElement !== document.getElementById("searchInput")
  ) {
    loadContent();
  }
});

// ── Animated Background ───────────────────────────────────
function initCanvas() {
  const canvas = document.getElementById("bg-canvas");
  const ctx = canvas.getContext("2d");

  let W, H, dots;

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function makeDots() {
    dots = Array.from({ length: 60 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.5 + 0.1,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    dots.forEach((d) => {
      d.x += d.vx;
      d.y += d.vy;

      if (d.x < 0) d.x = W;
      if (d.x > W) d.x = 0;
      if (d.y < 0) d.y = H;
      if (d.y > H) d.y = 0;

      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(78,204,163,${d.alpha})`;
      ctx.fill();
    });

    for (let i = 0; i < dots.length; i++) {
      for (let j = i + 1; j < dots.length; j++) {
        const dx = dots[i].x - dots[j].x;
        const dy = dots[i].y - dots[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(dots[i].x, dots[i].y);
          ctx.lineTo(dots[j].x, dots[j].y);
          ctx.strokeStyle = `rgba(78,204,163,${0.07 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }

  resize();
  makeDots();
  draw();

  window.addEventListener("resize", () => {
    resize();
    makeDots();
  });
}

// ── Init ──────────────────────────────────────────────────
async function init() {
  await loadDoNotRepeat();
  setGreeting();
  initCanvas();
  loadContent();
}

init();