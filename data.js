// data.js — All content for DevTab extension

const DATA = {
  http: [
    // ── Beginner ──────────────────────────────────────────────
    {
      difficulty: "beginner",
      code: 200,
      name: "OK",
      category: "2xx Success",
      explanation:
        "The request was successful. The server found what you asked for and sent it back. This is the most common response you'll see.",
      example:
        "You visit google.com — the server responds with 200 OK and sends back the HTML of the page.",
    },
    {
      difficulty: "beginner",
      code: 404,
      name: "Not Found",
      category: "4xx Client Error",
      explanation:
        "The server couldn't find the resource you asked for. Either the URL is wrong, or the resource no longer exists.",
      example:
        "You type /abut instead of /about on a website — the server returns 404 because that path doesn't exist.",
    },
    {
      difficulty: "beginner",
      code: 301,
      name: "Moved Permanently",
      category: "3xx Redirection",
      explanation:
        "The resource has been permanently moved to a new URL. The browser should follow the new URL and update its bookmarks.",
      example:
        "http://example.com redirects permanently to https://example.com (HTTP to HTTPS upgrade).",
    },
    {
      difficulty: "beginner",
      code: 500,
      name: "Internal Server Error",
      category: "5xx Server Error",
      explanation:
        "Something went wrong on the server's side. It's not your fault — the server hit an unexpected problem it didn't know how to handle.",
      example:
        "A bug in a PHP script crashes the server process — the user sees a 500 error page.",
    },
    {
      difficulty: "beginner",
      code: 403,
      name: "Forbidden",
      category: "4xx Client Error",
      explanation:
        "The server understood the request but refuses to authorize it. You don't have permission to access this resource.",
      example:
        "Trying to access /admin on a website without being logged in as an admin.",
    },
    // ── Experienced ───────────────────────────────────────────
    {
      difficulty: "experienced",
      code: 429,
      name: "Too Many Requests",
      category: "4xx Client Error",
      explanation:
        "The client has sent too many requests in a given amount of time. Rate limiting is in effect. The response may include a Retry-After header.",
      example:
        "A scraper hits an API endpoint 1000 times/minute — the API returns 429 to throttle the client.",
    },
    {
      difficulty: "experienced",
      code: 304,
      name: "Not Modified",
      category: "3xx Redirection",
      explanation:
        "The resource hasn't changed since the last time you requested it (based on ETag or Last-Modified headers). Use your cached copy — no body is returned.",
      example:
        "Browser sends If-None-Match with a cached ETag; server returns 304 — browser uses cached CSS file.",
    },
    {
      difficulty: "experienced",
      code: 422,
      name: "Unprocessable Entity",
      category: "4xx Client Error",
      explanation:
        "The server understands the content type and the syntax is correct, but it couldn't process the contained instructions. Common in REST APIs for validation failures.",
      example:
        "POST /users with valid JSON but missing required 'email' field — server returns 422 with validation errors.",
    },
    {
      difficulty: "experienced",
      code: 503,
      name: "Service Unavailable",
      category: "5xx Server Error",
      explanation:
        "The server is temporarily unable to handle the request, usually due to maintenance or overload. Unlike 500, this is usually temporary.",
      example:
        "During a deployment rollout, the load balancer briefly returns 503 while new containers spin up.",
    },
    {
      difficulty: "experienced",
      code: 207,
      name: "Multi-Status",
      category: "2xx Success",
      explanation:
        "The response body contains multiple independent response codes for a batch operation. Used in WebDAV and some REST APIs that process multiple items at once.",
      example:
        "A bulk-delete API endpoint processes 10 items — some succeed (200), some fail (404), wrapped in a 207 response.",
    },
    {
      difficulty: "experienced",
      code: 418,
      name: "I'm a teapot",
      category: "4xx Client Error",
      explanation:
        "Defined in RFC 2324 as part of the Hyper Text Coffee Pot Control Protocol. Indicates the server refuses to brew coffee because it is, permanently, a teapot.",
      example:
        "A playful API endpoint returns 418 when a coffee request is made to a tea-only service.",
    },
    {
      difficulty: "experienced",
      code: 425,
      name: "Too Early",
      category: "4xx Client Error",
      explanation:
        "Indicates the server is unwilling to risk processing a request that might be replayed, typically used with early data in HTTP/2 or TLS 1.3.",
      example:
        "A client sends early data before handshake completion — server responds with 425 to avoid replay attacks.",
    },
    {
      difficulty: "experienced",
      code: 451,
      name: "Unavailable For Legal Reasons",
      category: "4xx Client Error",
      explanation:
        "The resource is unavailable due to legal demands such as censorship or court orders.",
      example:
        "A website blocks access to certain content in a country due to government restrictions and returns 451.",
    },
    {
      difficulty: "experienced",
      code: 508,
      name: "Loop Detected",
      category: "5xx Server Error",
      explanation:
        "The server detected an infinite loop while processing a request, often related to WebDAV operations.",
      example:
        "A recursive file system reference causes the server to repeatedly traverse the same path — returns 508.",
    },
    {
      difficulty: "experienced",
      code: 510,
      name: "Not Extended",
      category: "5xx Server Error",
      explanation:
        "Further extensions to the request are required for the server to fulfill it.",
      example:
        "An API requires additional headers or extensions not provided by the client, resulting in a 510 response.",
    },
    {
      difficulty: "experienced",
      code: 511,
      name: "Network Authentication Required",
      category: "5xx Server Error",
      explanation:
        "The client needs to authenticate to gain network access, commonly used by captive portals.",
      example:
        "A public Wi-Fi network redirects requests and returns 511 until the user logs in.",
    },
    {
      difficulty: "experienced",
      code: 207,
      name: "Multi-Status",
      category: "2xx Success",
      explanation:
        "Provides status for multiple independent operations, typically used in WebDAV.",
      example:
        "A batch file operation returns 207 with individual statuses for each file processed.",
    },
    {
      difficulty: "experienced",
      code: 226,
      name: "IM Used",
      category: "2xx Success",
      explanation:
        "Indicates that the server has fulfilled a GET request using instance manipulations (delta encoding).",
      example:
        "A client requests only changes since last fetch — server responds with 226 and partial content updates.",
    },
    {
      difficulty: "experienced",
      code: 103,
      name: "Early Hints",
      category: "1xx Informational",
      explanation:
        "Allows the server to send preliminary headers before the final response, often used for preload hints.",
      example:
        "A server sends 103 with Link headers to preload CSS/JS before returning the full response.",
    },
    {
      difficulty: "experienced",
      code: 421,
      name: "Misdirected Request",
      category: "4xx Client Error",
      explanation:
        "The request was directed at a server that is not able to produce a response for the given combination of scheme and authority.",
      example:
        "An HTTP/2 connection is reused incorrectly across domains — server responds with 421.",
    },
  ],

  snippet: [
    // ── Beginner ──────────────────────────────────────────────
    {
      difficulty: "beginner",
      language: "JavaScript",
      title: "Arrow Function (Lambda)",
      code: `<span class="cmt">// Traditional function</span>
<span class="kw">function</span> <span class="fn">add</span>(a, b) { <span class="kw">return</span> a + b; }

<span class="cmt">// Arrow function — same thing, shorter</span>
<span class="kw">const</span> add = (a, b) => a + b;

<span class="cmt">// With array methods</span>
<span class="kw">const</span> nums = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>];
<span class="kw">const</span> doubled = nums.<span class="fn">map</span>(n => n * <span class="num">2</span>);
<span class="cmt">// doubled = [2, 4, 6, 8]</span>`,
      explanation:
        "Arrow functions are a shorter syntax for writing functions in JavaScript. They're especially powerful when passed as arguments to array methods like map, filter, and reduce.",
    },
    {
      difficulty: "beginner",
      language: "Python",
      title: "List Comprehension",
      code: `<span class="cmt"># Traditional loop</span>
squares = []
<span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="num">10</span>):
    squares.<span class="fn">append</span>(i ** <span class="num">2</span>)

<span class="cmt"># List comprehension — same result</span>
squares = [i ** <span class="num">2</span> <span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="num">10</span>)]

<span class="cmt"># With condition (filter evens only)</span>
evens = [i <span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="num">20</span>) <span class="kw">if</span> i % <span class="num">2</span> == <span class="num">0</span>]`,
      explanation:
        "List comprehensions let you build a list in a single, readable line. They're faster than loops and considered more Pythonic. You can also add a condition at the end to filter items.",
    },
    {
      difficulty: "beginner",
      language: "JavaScript",
      title: "Destructuring Assignment",
      code: `<span class="cmt">// Object destructuring</span>
<span class="kw">const</span> user = { name: <span class="str">'Alice'</span>, age: <span class="num">30</span>, city: <span class="str">'Dhaka'</span> };
<span class="kw">const</span> { name, age } = user;

<span class="cmt">// Array destructuring</span>
<span class="kw">const</span> [first, second, ...rest] = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>, <span class="num">5</span>];
<span class="cmt">// first=1, second=2, rest=[3,4,5]</span>

<span class="cmt">// In function parameters</span>
<span class="kw">const</span> <span class="fn">greet</span> = ({ name, city }) =>
  <span class="str">\`Hello \${name} from \${city}\`</span>;`,
      explanation:
        "Destructuring lets you unpack values from arrays or objects into named variables in one line. It makes code cleaner, especially when working with API responses or function parameters.",
    },
    // ── Experienced ───────────────────────────────────────────
    {
      difficulty: "experienced",
      language: "JavaScript",
      title: "Promise.all — Parallel Async Calls",
      code: `<span class="kw">const</span> <span class="fn">fetchUserData</span> = <span class="kw">async</span> (userId) => {
  <span class="cmt">// Run all 3 requests in parallel, not sequentially</span>
  <span class="kw">const</span> [user, posts, friends] = <span class="kw">await</span> Promise.<span class="fn">all</span>([
    <span class="fn">fetch</span>(<span class="str">\`/api/users/\${userId}\`</span>).<span class="fn">then</span>(r => r.<span class="fn">json</span>()),
    <span class="fn">fetch</span>(<span class="str">\`/api/posts?user=\${userId}\`</span>).<span class="fn">then</span>(r => r.<span class="fn">json</span>()),
    <span class="fn">fetch</span>(<span class="str">\`/api/friends/\${userId}\`</span>).<span class="fn">then</span>(r => r.<span class="fn">json</span>()),
  ]);
  <span class="kw">return</span> { user, posts, friends };
};
<span class="cmt">// ~3x faster than 3 sequential awaits</span>`,
      explanation:
        "Promise.all fires multiple async operations simultaneously and waits for all of them. Sequential awaits take sum(all times); Promise.all takes max(all times). Critical for performance in data-heavy pages.",
    },
    {
      difficulty: "experienced",
      language: "Python",
      title: "Context Manager with __enter__ / __exit__",
      code: `<span class="kw">class</span> <span class="fn">Timer</span>:
    <span class="kw">def</span> <span class="fn">__enter__</span>(self):
        <span class="kw">import</span> time
        self.start = time.<span class="fn">perf_counter</span>()
        <span class="kw">return</span> self

    <span class="kw">def</span> <span class="fn">__exit__</span>(self, *args):
        <span class="kw">import</span> time
        self.elapsed = time.<span class="fn">perf_counter</span>() - self.start
        <span class="fn">print</span>(<span class="str">f"Took {self.elapsed:.4f}s"</span>)

<span class="kw">with</span> <span class="fn">Timer</span>():
    result = [i**<span class="num">2</span> <span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="num">1_000_000</span>)]`,
      explanation:
        "Context managers (the 'with' statement) guarantee cleanup even if exceptions occur. __enter__ sets up, __exit__ tears down. Used for file handles, DB connections, locks, timers, and more.",
    },
    {
      difficulty: "experienced",
      language: "JavaScript",
      title: "Memoization with a Closure",
      code: `<span class="kw">function</span> <span class="fn">memoize</span>(fn) {
  <span class="kw">const</span> cache = <span class="kw">new</span> <span class="fn">Map</span>();
  <span class="kw">return</span> (...args) => {
    <span class="kw">const</span> key = JSON.<span class="fn">stringify</span>(args);
    <span class="kw">if</span> (cache.<span class="fn">has</span>(key)) <span class="kw">return</span> cache.<span class="fn">get</span>(key);
    <span class="kw">const</span> result = fn(...args);
    cache.<span class="fn">set</span>(key, result);
    <span class="kw">return</span> result;
  };
}

<span class="kw">const</span> fib = <span class="fn">memoize</span>(n =>
  n <= <span class="num">1</span> ? n : <span class="fn">fib</span>(n-<span class="num">1</span>) + <span class="fn">fib</span>(n-<span class="num">2</span>)
);`,
      explanation:
        "Memoization caches the results of expensive function calls. This generic wrapper works with any pure function. The closure keeps 'cache' alive across calls without polluting global scope.",
    },
  ],

  trivia: [
    // ── Beginner ──────────────────────────────────────────────
    {
      difficulty: "beginner",
      icon: "🐛",
      title: "The First Real Computer Bug",
      body: `In 1947, engineers working on the Harvard Mark II found a <span class="trivia-highlight">real moth</span> trapped in a relay, causing a malfunction. Grace Hopper's team taped it into the logbook with the note "First actual case of bug being found." The word "bug" for software errors was already in use, but this cemented it forever.`,
    },
    {
      difficulty: "beginner",
      icon: "0️⃣",
      title: "Why Arrays Start at 0",
      body: `Arrays start at 0 because of <span class="trivia-highlight">memory arithmetic</span>. The index represents an offset from the start address. Element 0 is at base+0, element 1 is at base+1×size, etc. Starting at 1 would waste a calculation. C popularized it, and most languages followed.`,
    },
    {
      difficulty: "beginner",
      icon: "🐍",
      title: "Python Named After Monty Python",
      body: `Guido van Rossum created Python in the late 1980s and chose the name from <span class="trivia-highlight">Monty Python's Flying Circus</span> — the British comedy show. He wanted something short, unique, and slightly mysterious. The snake association came later and is now part of the branding.`,
    },
    {
      difficulty: "beginner",
      icon: "🌐",
      title: "Why HTTP Uses Statelessness",
      body: `HTTP was designed to be <span class="trivia-highlight">stateless</span> so that each request is independent. This makes servers simpler and more scalable. But it also means things like login sessions had to be invented later using cookies, tokens, and headers.`,
    },
    {
      difficulty: "beginner",
      icon: "🧠",
      title: "Stack vs Heap",
      body: `The stack is fast because it's <span class="trivia-highlight">linear memory</span> with simple push/pop operations, while the heap allows dynamic allocation but requires complex tracking. That's why stack allocation is faster but limited in size.`,
    },
    {
      difficulty: "beginner",
      icon: "🔑",
      title: "Why 127.0.0.1 Exists",
      body: `127.0.0.1 is the <span class="trivia-highlight">loopback address</span>, meaning your computer talks to itself. It's useful for testing servers locally without needing a network connection.`,
    },
    {
      difficulty: "beginner",
      icon: "⏱️",
      title: "The 2038 Problem",
      body: `Many systems store time as a signed 32-bit integer counting seconds since 1970. On January 19, 2038, it will overflow and wrap around to negative values — a <span class="trivia-highlight">time-travel bug</span> that could break old systems.`,
    },
    {
      difficulty: "beginner",
      icon: "🧵",
      title: "Race Conditions Are Timing Bugs",
      body: `A race condition happens when multiple threads access shared data and the result depends on <span class="trivia-highlight">execution timing</span>. They are hard to reproduce because even tiny delays can change outcomes.`,
    },
    {
      difficulty: "beginner",
      icon: "📦",
      title: "Docker Isn't a VM",
      body: `Docker containers share the host OS kernel using <span class="trivia-highlight">namespaces and cgroups</span>. Unlike virtual machines, they don’t emulate hardware, which is why containers start almost instantly.`,
    },
    {
      difficulty: "beginner",
      icon: "⌨️",
      title: "Why QWERTY Isn’t Optimal",
      body: `The QWERTY keyboard was designed to <span class="trivia-highlight">slow typists down</span> on early typewriters so keys wouldn’t jam. More efficient layouts like Dvorak exist, but QWERTY survived due to inertia and mass adoption.`,
    },
    {
      difficulty: "beginner",
      icon: "💾",
      title: "Why the Save Icon Looks Like That",
      body: `The save icon is a <span class="trivia-highlight">floppy disk</span>, a storage device popular in the 80s–90s. Many users today have never used one, yet the icon remains one of the most recognizable UI metaphors.`,
    },
    {
      difficulty: "beginner",
      icon: "🌐",
      title: "The First Website Still Exists",
      body: `The first website, created by Tim Berners-Lee in 1991, is still online. It explains what the <span class="trivia-highlight">World Wide Web</span> is and how to use it — a snapshot of the internet’s beginning.`,
    },
    {
      difficulty: "beginner",
      icon: "🔑",
      title: "Password Length Beats Complexity",
      body: `A long passphrase like <span class="trivia-highlight">"correct horse battery staple"</span> is often more secure than a short complex password. Length increases entropy more effectively than random symbols.`,
    },
    // ── Experienced ───────────────────────────────────────────
    {
      difficulty: "experienced",
      icon: "💾",
      title: "False Sharing in CPUs",
      body: `Two threads updating different variables can still slow each other down if those variables sit on the same <span class="trivia-highlight">CPU cache line</span>. This is called false sharing and can destroy performance in concurrent systems.`,
    },
    {
      difficulty: "experienced",
      icon: "🧵",
      title: "Race Conditions Are Timing Bugs",
      body: `A race condition happens when system behavior depends on <span class="trivia-highlight">execution timing</span>. These bugs are notoriously hard to reproduce because they may only occur under specific thread interleavings or CPU scheduling conditions.`,
    },
    {
      difficulty: "experienced",
      icon: "🧠",
      title: "Cache Invalidation Is Infamously Hard",
      body: `There’s a famous saying: “There are only two hard things in Computer Science: <span class="trivia-highlight">cache invalidation and naming things</span>.” Keeping cached data consistent with the source is surprisingly complex in distributed systems.`,
    },
    {
      difficulty: "experienced",
      icon: "📦",
      title: "Docker Isn’t a VM",
      body: `Docker containers share the host OS kernel and isolate processes using <span class="trivia-highlight">namespaces and cgroups</span>. Unlike virtual machines, they don’t run a full guest OS, which makes them lightweight and fast.`,
    },
    {
      difficulty: "experienced",
      icon: "⏱️",
      title: "Time Is Broken in Distributed Systems",
      body: `In distributed systems, clocks are not perfectly synchronized. Even protocols like NTP can drift, which is why systems rely on <span class="trivia-highlight">logical clocks</span> (like Lamport timestamps) instead of real time for ordering events.`,
    },
    {
      difficulty: "experienced",
      icon: "🔐",
      title: "Hash ≠ Encryption",
      body: `A hash function is <span class="trivia-highlight">one-way</span> — you can’t reverse it to get the original input. Encryption is reversible with a key. Confusing these two has caused serious security flaws in real systems.`,
    },
    {
      difficulty: "experienced",
      icon: "📉",
      title: "Premature Optimization Problem",
      body: `Donald Knuth famously said: <span class="trivia-highlight">"Premature optimization is the root of all evil"</span>. Optimizing too early often makes code complex without measurable benefit — profiling should guide optimization.`,
    },
    {
      difficulty: "experienced",
      icon: "🧩",
      title: "Monolith vs Microservices Tradeoff",
      body: `Microservices improve scalability and team autonomy, but introduce <span class="trivia-highlight">network latency, distributed failures, and complexity</span>. Many teams underestimate this and end up with harder-to-manage systems.`,
    },
    {
      difficulty: "experienced",
      icon: "📜",
      title: "UTF-8 Won the Encoding War",
      body: `UTF-8 became dominant because it is <span class="trivia-highlight">backward-compatible with ASCII</span> and efficient for common characters. It can represent every Unicode character while keeping English text compact.`,
    },
    {
      difficulty: "experienced",
      icon: "🔐",
      title: "Timing Attacks",
      body: `Even if encryption is strong, attackers can measure <span class="trivia-highlight">response time differences</span> to guess secrets (like password comparisons). That's why secure systems use constant-time comparisons.`,
    },
    {
      difficulty: "experienced",
      icon: "🧮",
      title: "Floating Point Isn't Precise",
      body: `Numbers like 0.1 can't be represented exactly in binary floating-point, leading to results like <span class="trivia-highlight">0.1 + 0.2 !== 0.3</span>. This is due to IEEE 754 representation limits.`,
    },
    {
      difficulty: "experienced",
      icon: "📚",
      title: "CAP Theorem Trade-offs",
      body: `In distributed systems, you can only fully guarantee two of: Consistency, Availability, and Partition tolerance. During a network partition, systems must choose between <span class="trivia-highlight">serving stale data or going offline</span>.`,
    },
    {
      difficulty: "experienced",
      icon: "🧬",
      title: "Unicode Is Bigger Than You Think",
      body: `Unicode has over <span class="trivia-highlight">140,000 characters</span>, and a single "character" can be multiple code points. That's why string length != number of visible characters, especially with emojis.`,
    },
    {
      difficulty: "experienced",
      icon: "⚙️",
      title: "N+1 Query Problem",
      body: `Fetching a list of items and then querying each item individually leads to <span class="trivia-highlight">N+1 database queries</span>. ORMs often cause this silently, killing performance unless optimized with joins or eager loading.`,
    },
    {
      difficulty: "experienced",
      icon: "💣",
      title: "The Therac-25 — When Bugs Kill",
      body: `The Therac-25 was a radiation therapy machine in the 1980s that delivered <span class="trivia-highlight">lethal radiation overdoses</span> to at least 6 patients due to a race condition bug. Removing hardware safety locks had made the software the only safeguard — and it had an integer overflow in a timer that took 8 seconds to trigger under very specific conditions.`,
    },
    {
      difficulty: "experienced",
      icon: "📡",
      title: "Spectre & Meltdown — Breaking Hardware",
      body: `In 2018, researchers revealed that modern CPUs' <span class="trivia-highlight">speculative execution</span> — a decades-old performance optimization — allowed any process to read memory it shouldn't have access to. Every major OS needed patching. Some patches caused up to 30% performance drops on I/O-heavy workloads.`,
    },
    {
      difficulty: "experienced",
      icon: "🔀",
      title: "Git's Object Model",
      body: `Every commit, tree, blob, and tag in Git is a <span class="trivia-highlight">content-addressed SHA-1 hash</span> of its own content. This means you can't change history without changing every hash downstream — which is exactly why git rebase creates new commits rather than moving old ones. The entire repo is a Merkle tree.`,
    },
  ],

  math: [
    // ── Beginner ──────────────────────────────────────────────
    {
      difficulty: "beginner",
      icon: "2️⃣",
      title: "Powers of 2 — The Developer's Table",
      body: `Powers of 2 appear everywhere in computing. <span class="trivia-highlight">2¹⁰ = 1,024 ≈ 1,000</span>. That's why 1KB ≈ 1000 bytes. 2²⁰ ≈ 1 million (1MB), 2³⁰ ≈ 1 billion (1GB). Memorizing 2¹ through 2¹⁶ is genuinely useful for estimating memory, loop counts, and bit masks.`,
    },
    {
      difficulty: "beginner",
      icon: "🔢",
      title: "Boolean Algebra Basics",
      body: `George Boole invented Boolean algebra in 1854 — a century before computers existed. He just wanted to formalize logic. Claude Shannon then realized in 1937 that <span class="trivia-highlight">electrical circuits could implement Boolean logic</span>, which became the foundation of every digital computer ever built.`,
    },
    // ── Experienced ───────────────────────────────────────────
    {
      difficulty: "experienced",
      icon: "📈",
      title: "Big O — Why O(n log n) is Optimal for Sorting",
      body: `You cannot sort a general list faster than <span class="trivia-highlight">O(n log n)</span> using comparison-based sorting. Proof: there are n! possible orderings of n elements. A binary decision tree needs at least log₂(n!) ≈ n log n leaves to distinguish all orderings. Merge sort and heap sort achieve this bound.`,
    },
    {
      difficulty: "experienced",
      icon: "🎲",
      title:
        "Birthday Problem — Why Hash Collisions Happen Sooner Than You Think",
      body: `In a group of just <span class="trivia-highlight">23 people</span>, there's a 50% chance two share a birthday. Similarly, with a hash function producing N values, you expect a collision after only √N hashes — not N. A 32-bit hash collides after ~65,000 entries. This is why MD5 (128-bit) isn't as collision-resistant as it sounds.`,
    },
  ],

  quiz: [
    // ── Beginner ──────────────────────────────────────────────
    {
      difficulty: "beginner",
      question: "What does this JavaScript return?",
      code: `typeof null`,
      options: ["null", "undefined", "object", "boolean"],
      answer: 2,
      explanation:
        "typeof null returns 'object' — this is a famous JavaScript bug from 1995 that was never fixed to avoid breaking existing code. null is its own primitive type, but typeof incorrectly reports it as 'object'.",
    },
    {
      difficulty: "beginner",
      question: "Which HTTP method is idempotent but NOT safe?",
      code: null,
      options: ["GET", "POST", "PUT", "PATCH"],
      answer: 2,
      explanation:
        "PUT is idempotent (calling it multiple times has the same effect as calling it once) but NOT safe (it changes server state). GET is both safe and idempotent. POST is neither. PATCH is neither by default.",
    },
    {
      difficulty: "beginner",
      question: "What will this Python code print?",
      code: `x = [1, 2, 3]
y = x
y.append(4)
print(x)`,
      options: ["[1, 2, 3]", "[1, 2, 3, 4]", "Error", "[4]"],
      answer: 1,
      explanation:
        "In Python, list assignment copies the reference, not the list. So y and x point to the same list object. When you append to y, x reflects the change. Use x.copy() or x[:] to create an independent copy.",
    },
    {
      difficulty: "beginner",
      question:
        "What is the time complexity of looking up a value in a hash map?",
      code: null,
      options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
      answer: 2,
      explanation:
        "Hash map lookup is O(1) on average because the hash function directly computes the memory location of the key. In worst case (many collisions) it can degrade to O(n), but with a good hash function this is extremely rare.",
    },
    // ── Experienced ───────────────────────────────────────────
    {
      difficulty: "experienced",
      question: "What does this code output?",
      code: `const a = async () => 42;
const b = a();
console.log(typeof b);`,
      options: ["number", "object", "promise", "undefined"],
      answer: 1,
      explanation:
        "An async function always returns a Promise, even if you return a plain value. typeof Promise is 'object' — so typeof b is 'object'. To get 42, you'd need await a() inside an async context.",
    },
    {
      difficulty: "experienced",
      question:
        "In a database with a B-tree index on column 'age', which query uses the index?",
      code: null,
      options: [
        "WHERE age + 1 = 30",
        "WHERE CAST(age AS TEXT) = '29'",
        "WHERE age = 29",
        "WHERE age != 29",
      ],
      answer: 2,
      explanation:
        "Only 'WHERE age = 29' can use the index directly. Wrapping a column in a function (age+1, CAST) prevents index use because the index stores raw values. Inequality (!=) typically results in a full scan since most rows qualify.",
    },
  ],
};

// ── Aptitude Quiz Additions ───────────────────────────────
// Appended to DATA.quiz array via separate injection in script.js
const APTITUDE = [
  // Number Sequences — Beginner
  {
    difficulty: "beginner",
    question: "What comes next in this number sequence?",
    code: "2,  4,  8,  16,  32,  ?",
    options: ["48", "64", "56", "40"],
    answer: 1,
    explanation:
      "Each number is multiplied by 2. 32 × 2 = 64. Geometric sequence with ratio 2.",
  },
  {
    difficulty: "beginner",
    question: "What number fills the blank?",
    code: "1,  4,  9,  16,  25,  ?",
    options: ["30", "36", "32", "49"],
    answer: 1,
    explanation: "Perfect squares: 1², 2², 3², 4², 5²... next is 6² = 36.",
  },
  {
    difficulty: "beginner",
    question: "What comes next?",
    code: "3,  6,  9,  12,  15,  ?",
    options: ["17", "20", "18", "21"],
    answer: 2,
    explanation: "Arithmetic sequence, +3 each time. 15 + 3 = 18.",
  },
  {
    difficulty: "beginner",
    question: "Find the missing number at position 6:",
    code: "1,  1,  2,  3,  5,  ?",
    options: ["7", "6", "8", "9"],
    answer: 2,
    explanation:
      "Fibonacci sequence — each number is the sum of the two before it. 3 + 5 = 8.",
  },

  // Letter Sequences — Beginner
  {
    difficulty: "beginner",
    question: "What letter comes next?",
    code: "A,  C,  E,  G,  ?",
    options: ["H", "I", "J", "K"],
    answer: 1,
    explanation:
      "Every letter skips one position in the alphabet. After G, skip H, land on I.",
  },
  {
    difficulty: "beginner",
    question: "What comes next in the letter sequence?",
    code: "Z,  Y,  X,  W,  ?",
    options: ["U", "T", "V", "S"],
    answer: 2,
    explanation:
      "Alphabet in reverse, one step at a time. W is 23rd, so next is V (22nd).",
  },

  // Shape Patterns — Beginner
  {
    difficulty: "beginner",
    question: "A pattern of shapes repeats. What comes next?",
    code: "○  △  □  ○  △  □  ○  △  ?",
    options: ["○", "△", "□", "◇"],
    answer: 2,
    explanation:
      "The sequence repeats every 3: circle, triangle, square. After △ comes □.",
  },
  {
    difficulty: "beginner",
    question: "Sides increase by 1 each step. What shape is next?",
    code: "Triangle(3)  Square(4)  Pentagon(5)  Hexagon(6)  ?",
    options: ["Hexagon (6)", "Octagon (8)", "Heptagon (7)", "Circle (∞)"],
    answer: 2,
    explanation: "3, 4, 5, 6, 7 sides. A 7-sided polygon is a Heptagon.",
  },

  // Number Sequences — Experienced
  {
    difficulty: "experienced",
    question: "What is the value at position 7?",
    code: "2,  6,  12,  20,  30,  42,  ?",
    options: ["52", "54", "56", "60"],
    answer: 2,
    explanation:
      "Differences: 4, 6, 8, 10, 12, 14... Next difference is 14. 42 + 14 = 56. These are oblong numbers n×(n+1).",
  },
  {
    difficulty: "experienced",
    question: "What fills the blank?",
    code: "1,  8,  27,  64,  125,  ?",
    options: ["196", "216", "256", "180"],
    answer: 1,
    explanation: "Perfect cubes: 1³, 2³, 3³, 4³, 5³... next is 6³ = 216.",
  },
  {
    difficulty: "experienced",
    question: "Find the next term:",
    code: "1,  3,  7,  13,  21,  31,  ?",
    options: ["41", "43", "45", "39"],
    answer: 1,
    explanation:
      "Differences: 2, 4, 6, 8, 10, 12... Second differences are constant at 2. 31 + 12 = 43.",
  },
  {
    difficulty: "experienced",
    question: "Which number does NOT belong?",
    code: "2,  3,  5,  7,  11,  12,  13",
    options: ["5", "11", "12", "13"],
    answer: 2,
    explanation:
      "All others are prime numbers. 12 = 2×6 = 3×4, it's composite and breaks the pattern.",
  },
  {
    difficulty: "experienced",
    question: "What is the next term?",
    code: "0,  1,  3,  6,  10,  15,  ?",
    options: ["18", "20", "21", "25"],
    answer: 2,
    explanation:
      "Triangular numbers. Differences: 1, 2, 3, 4, 5, 6... So 15 + 6 = 21.",
  },

  // Mixed Sequences — Experienced
  {
    difficulty: "experienced",
    question: "What comes next in this mixed sequence?",
    code: "A1,  B4,  C9,  D16,  ?",
    options: ["E20", "F25", "E25", "F30"],
    answer: 2,
    explanation:
      "Letters go A,B,C,D,E and numbers are perfect squares 1,4,9,16,25. Answer: E25.",
  },

  // Grid / Shape Patterns — Experienced
  {
    difficulty: "experienced",
    question: "Each cell = row × column. What is the value at Row 4, Column 7?",
    code: "     C1  C2  C3  C4\nR1:   1   2   3   4\nR2:   2   4   6   8\nR3:   3   6   9  12\nR4:   4   8  12   ?",
    options: ["24", "28", "32", "16"],
    answer: 1,
    explanation: "Row × Column = 4 × 7 = 28. This is a multiplication table.",
  },
  {
    difficulty: "experienced",
    question:
      "Row/column Sudoku with shapes — no shape repeats per row or column. What fills the ?",
    code: "Row 1:  ○  △  □\nRow 2:  △  □  ○\nRow 3:  □  ?  △",
    options: ["○", "△", "□", "◇"],
    answer: 0,
    explanation:
      "Column 2 has △ (R1) and □ (R2) — so it needs ○. Row 3 has □ and △ already, confirming the missing shape is ○.",
  },
  // ── Number Patterns — Experienced ───────────────────────────
  {
    difficulty: "experienced",
    question: "What is the next number?",
    code: "3,  9,  27,  81,  ?",
    options: ["162", "243", "256", "218"],
    answer: 1,
    explanation:
      "Each term is multiplied by 3. 81 × 3 = 243. Geometric progression.",
  },
  {
    difficulty: "experienced",
    question: "Find the missing term:",
    code: "2,  5,  11,  23,  47,  ?",
    options: ["91", "95", "93", "99"],
    answer: 1,
    explanation: "Pattern: (previous × 2) + 1. 47 × 2 + 1 = 95.",
  },
  {
    difficulty: "experienced",
    question: "What comes next?",
    code: "1,  4,  9,  16,  25,  36,  49,  ?",
    options: ["56", "63", "64", "72"],
    answer: 2,
    explanation: "Perfect squares: 1², 2², 3²... 7² = 49, next is 8² = 64.",
  },
  {
    difficulty: "experienced",
    question: "Find the next term:",
    code: "5,  10,  20,  40,  80,  ?",
    options: ["120", "140", "160", "180"],
    answer: 2,
    explanation: "Each number doubles. 80 × 2 = 160.",
  },
  {
    difficulty: "experienced",
    question: "What is the missing number?",
    code: "1,  1,  2,  3,  5,  8,  13,  ?",
    options: ["18", "20", "21", "22"],
    answer: 2,
    explanation:
      "Fibonacci sequence: each term = sum of previous two. 8 + 13 = 21.",
  },

  // ── Slightly Tricky Patterns ───────────────────────────
  {
    difficulty: "experienced",
    question: "What is the next term?",
    code: "2,  3,  6,  18,  108,  ?",
    options: ["648", "432", "540", "720"],
    answer: 0,
    explanation:
      "Pattern: multiply by increasing numbers → ×1.5, ×2, ×3, ×6. Actually simpler: ×1.5 not consistent. Better seen as ×1, ×2, ×3, ×6. 108 × 6 = 648.",
  },
  {
    difficulty: "experienced",
    question: "Find the next number:",
    code: "10,  7,  8,  5,  6,  3,  ?",
    options: ["2", "4", "1", "0"],
    answer: 1,
    explanation: "Alternating pattern: -3, +1, -3, +1... So 3 + 1 = 4.",
  },
  {
    difficulty: "experienced",
    question: "Which number fits?",
    code: "4,  6,  9,  13,  18,  ?",
    options: ["22", "24", "25", "26"],
    answer: 1,
    explanation: "Differences: 2, 3, 4, 5, 6... So next is 18 + 6 = 24.",
  },

  // ── Mixed / Logic ───────────────────────────
  {
    difficulty: "experienced",
    question: "What comes next?",
    code: "Z1,  Y2,  X3,  W4,  ?",
    options: ["V5", "U5", "V6", "U6"],
    answer: 0,
    explanation:
      "Letters go backward (Z→Y→X→W→V) and numbers increase (1→2→3→4→5). So V5.",
  },
  {
    difficulty: "experienced",
    question: "Find the missing term:",
    code: "AA,  CC,  EE,  GG,  ?",
    options: ["HH", "II", "JJ", "KK"],
    answer: 1,
    explanation: "Letters skip one each time: A, C, E, G, I. So II.",
  },

  // ── Grid / Matrix Patterns ───────────────────────────
  {
    difficulty: "experienced",
    question: "Find the missing value:",
    code: "2   4   6\n3   9   27\n4   16  ?",
    options: ["32", "48", "64", "128"],
    answer: 2,
    explanation:
      "Pattern per row: multiply by increasing factor.\nRow1: ×2, ×1.5\nRow2: ×3, ×3\nRow3: ×4, ×4 → 16 × 4 = 64.",
  },
  {
    difficulty: "experienced",
    question: "What is the missing number?",
    code: "5   10   50\n6   12   72\n7   14   ?",
    options: ["84", "96", "98", "102"],
    answer: 2,
    explanation: "Pattern: first × second = third.\n7 × 14 = 98.",
  },

  // ── Logical Elimination ───────────────────────────
  {
    difficulty: "experienced",
    question: "Which number does NOT belong?",
    code: "121,  144,  169,  196,  225,  250",
    options: ["169", "196", "225", "250"],
    answer: 3,
    explanation: "All others are perfect squares (11² to 15²). 250 is not.",
  },
  {
    difficulty: "experienced",
    question: "Which number breaks the pattern?",
    code: "3,  6,  12,  24,  48,  96,  190",
    options: ["24", "48", "96", "190"],
    answer: 3,
    explanation: "All numbers double each time. 96 × 2 = 192, not 190.",
  },
];

// Merge aptitude into DATA.quiz
DATA.quiz.push(...APTITUDE);
