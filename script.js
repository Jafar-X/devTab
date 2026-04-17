// script.js — DevTab Extension Logic

// ── Constants ────────────────────────────────────────────
const CYCLE = ['http', 'snippet', 'trivia', 'math', 'quiz'];
const TYPE_LABELS = {
  http:    'HTTP Code',
  snippet: 'Code Snippet',
  trivia:  'Dev Trivia',
  math:    'Math Trivia',
  quiz:    'Quiz'
};

// ── State ────────────────────────────────────────────────
let difficulty = localStorage.getItem('devtab_difficulty') || 'beginner';
let cycleIndex  = parseInt(localStorage.getItem('devtab_cycle') || '0', 10);
let usedIndices = {}; // track used items per type to avoid repeats

// ── Helpers ──────────────────────────────────────────────
function getFiltered(type) {
  return DATA[type].filter(item => item.difficulty === difficulty);
}

function pickRandom(type, forceNew = false) {
  const items = getFiltered(type);
  if (!items.length) return null;
  if (!usedIndices[type]) usedIndices[type] = [];
  let available = items.filter((_, i) => !usedIndices[type].includes(i));
  if (!available.length) { usedIndices[type] = []; available = items; }
  const localIdx = Math.floor(Math.random() * available.length);
  const item = available[localIdx];
  const originalIdx = items.indexOf(item);
  usedIndices[type].push(originalIdx);
  return item;
}

// ── Greeting ─────────────────────────────────────────────
function setGreeting() {
  const h = new Date().getHours();
  const greets = [
    [5,  'Good morning'],
    [12, 'Good afternoon'],
    [17, 'Good evening'],
    [21, 'Good night'],
  ];
  let text = 'Hello';
  for (const [threshold, label] of greets) {
    if (h >= threshold) text = label;
  }
  document.getElementById('greeting').textContent = text + '.';

  const now = new Date();
  document.getElementById('date-display').textContent =
    now.toLocaleDateString('en-US', { weekday:'long', year:'numeric', month:'long', day:'numeric' });
}

// ── Cycle Dots ───────────────────────────────────────────
function renderDots() {
  const wrap = document.getElementById('cycleDots');
  wrap.innerHTML = CYCLE.map((_, i) =>
    `<span class="cycle-dot ${i === cycleIndex ? 'active' : ''}"></span>`
  ).join('');
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
    ? `<div class="quiz-code">${item.code}</div>` : '';
  const options = item.options.map((opt, i) =>
    `<button class="quiz-option" data-index="${i}">${opt}</button>`
  ).join('');
  return `
    <div class="quiz-question">${item.question}</div>
    ${codeBlock}
    <div class="quiz-options-list" id="quizOpts">${options}</div>
    <div class="quiz-feedback-box" id="quizFeedback"></div>
  `;
}

// ── Main Render ───────────────────────────────────────────
function render(type, item) {
  document.getElementById('typeBadge').textContent = TYPE_LABELS[type];

  const body = document.getElementById('cardBody');
  body.style.opacity = '0';
  body.style.transform = 'translateY(10px)';

  setTimeout(() => {
    const renders = { http: renderHTTP, snippet: renderSnippet, trivia: renderTrivia, math: renderMath, quiz: renderQuiz };
    body.innerHTML = renders[type](item);
    body.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
    body.style.opacity = '1';
    body.style.transform = 'none';

    if (type === 'quiz') attachQuizHandlers(item);
  }, 150);
}

function attachQuizHandlers(item) {
  document.querySelectorAll('.quiz-option').forEach(btn => {
    btn.addEventListener('click', () => {
      const chosen = parseInt(btn.dataset.index, 10);
      const correct = chosen === item.answer;

      document.querySelectorAll('.quiz-option').forEach((b, i) => {
        b.disabled = true;
        if (i === item.answer) b.classList.add('correct');
        else if (i === chosen && !correct) b.classList.add('wrong');
      });

      const fb = document.getElementById('quizFeedback');
      fb.textContent = (correct ? '✓ Correct! ' : '✗ Incorrect. ') + item.explanation;
      fb.className = 'quiz-feedback-box show ' + (correct ? 'correct-fb' : 'wrong-fb');
    });
  });
}

// ── Load Content ─────────────────────────────────────────
function loadContent(advance = false) {
  if (advance) {
    const currentType = CYCLE[cycleIndex];
    const items = getFiltered(currentType);
    // if there are more items of same type, pick another; else advance cycle
    const used = usedIndices[currentType] || [];
    if (used.length < items.length) {
      const item = pickRandom(currentType);
      if (item) render(currentType, item);
      return;
    } else {
      cycleIndex = (cycleIndex + 1) % CYCLE.length;
      localStorage.setItem('devtab_cycle', cycleIndex);
      usedIndices = {};
    }
  }

  const type = CYCLE[cycleIndex];
  const item = pickRandom(type);
  if (!item) {
    // fallback: no content for this difficulty, skip
    cycleIndex = (cycleIndex + 1) % CYCLE.length;
    localStorage.setItem('devtab_cycle', cycleIndex);
    loadContent(false);
    return;
  }
  render(type, item);
  renderDots();
}

// ── Search ────────────────────────────────────────────────
document.getElementById('searchInput').addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    const q = e.target.value.trim();
    if (q) window.location.href = 'https://www.google.com/search?q=' + encodeURIComponent(q);
  }
});

// ── Next button ───────────────────────────────────────────
document.getElementById('nextBtn').addEventListener('click', () => {
  loadContent(true);
  renderDots();
});

// ── Difficulty toggle ─────────────────────────────────────
document.getElementById('toggleDiff').addEventListener('click', () => {
  difficulty = difficulty === 'beginner' ? 'experienced' : 'beginner';
  localStorage.setItem('devtab_difficulty', difficulty);
  const btn = document.getElementById('toggleDiff');
  btn.dataset.level = difficulty;
  document.getElementById('diffText').textContent =
    difficulty === 'beginner' ? 'Beginner' : 'Experienced';
  usedIndices = {};
  loadContent(false);
});

// ── Keyboard shortcut ─────────────────────────────────────
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight' && document.activeElement !== document.getElementById('searchInput')) {
    loadContent(true);
    renderDots();
  }
});

// ── Animated background ───────────────────────────────────
function initCanvas() {
  const canvas = document.getElementById('bg-canvas');
  const ctx = canvas.getContext('2d');
  let W, H, dots;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function makeDots() {
    dots = Array.from({length: 60}, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.5 + 0.1
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    dots.forEach(d => {
      d.x += d.vx; d.y += d.vy;
      if (d.x < 0) d.x = W;
      if (d.x > W) d.x = 0;
      if (d.y < 0) d.y = H;
      if (d.y > H) d.y = 0;
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(78,204,163,${d.alpha})`;
      ctx.fill();
    });

    // draw faint lines between close dots
    for (let i = 0; i < dots.length; i++) {
      for (let j = i + 1; j < dots.length; j++) {
        const dx = dots[i].x - dots[j].x;
        const dy = dots[i].y - dots[j].y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(dots[i].x, dots[i].y);
          ctx.lineTo(dots[j].x, dots[j].y);
          ctx.strokeStyle = `rgba(78,204,163,${0.07 * (1 - dist/120)})`;
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
  window.addEventListener('resize', () => { resize(); makeDots(); });
}

// ── Init ──────────────────────────────────────────────────
function init() {
  setGreeting();
  // sync difficulty button
  const btn = document.getElementById('toggleDiff');
  btn.dataset.level = difficulty;
  document.getElementById('diffText').textContent =
    difficulty === 'beginner' ? 'Beginner' : 'Experienced';
  initCanvas();
  loadContent(false);
}

init();
