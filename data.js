// data.js — All content for DevFlash extension

const DATA = {
  http: [
    {
      code: 200,
      name: "OK",
      category: "2xx Success",
      explanation:
        "The request was successful. The server found what you asked for and sent it back. This is the most common response you'll see.",
      example:
        "You visit google.com — the server responds with 200 OK and sends back the HTML of the page.",
    },
    {
      code: 404,
      name: "Not Found",
      category: "4xx Client Error",
      explanation:
        "The server couldn't find the resource you asked for. Either the URL is wrong, or the resource no longer exists.",
      example:
        "You type /abut instead of /about on a website — the server returns 404 because that path doesn't exist.",
    },
    {
      code: 301,
      name: "Moved Permanently",
      category: "3xx Redirection",
      explanation:
        "The resource has been permanently moved to a new URL. The browser should follow the new URL and update its bookmarks.",
      example:
        "http://example.com redirects permanently to https://example.com (HTTP to HTTPS upgrade).",
    },
    {
      code: 500,
      name: "Internal Server Error",
      category: "5xx Server Error",
      explanation:
        "Something went wrong on the server's side. It's not your fault — the server hit an unexpected problem it didn't know how to handle.",
      example:
        "A bug in a PHP script crashes the server process — the user sees a 500 error page.",
    },
    {
      code: 403,
      name: "Forbidden",
      category: "4xx Client Error",
      explanation:
        "The server understood the request but refuses to authorize it. You don't have permission to access this resource.",
      example:
        "Trying to access /admin on a website without being logged in as an admin.",
    },
    {
      code: 429,
      name: "Too Many Requests",
      category: "4xx Client Error",
      explanation:
        "The client has sent too many requests in a given amount of time. Rate limiting is in effect. The response may include a Retry-After header.",
      example:
        "A scraper hits an API endpoint 1000 times/minute — the API returns 429 to throttle the client.",
    },
    {
      code: 304,
      name: "Not Modified",
      category: "3xx Redirection",
      explanation:
        "The resource hasn't changed since the last time you requested it (based on ETag or Last-Modified headers). Use your cached copy — no body is returned.",
      example:
        "Browser sends If-None-Match with a cached ETag; server returns 304 — browser uses cached CSS file.",
    },
    {
      code: 422,
      name: "Unprocessable Entity",
      category: "4xx Client Error",
      explanation:
        "The server understands the content type and the syntax is correct, but it couldn't process the contained instructions. Common in REST APIs for validation failures.",
      example:
        "POST /users with valid JSON but missing required 'email' field — server returns 422 with validation errors.",
    },
    {
      code: 503,
      name: "Service Unavailable",
      category: "5xx Server Error",
      explanation:
        "The server is temporarily unable to handle the request, usually due to maintenance or overload. Unlike 500, this is usually temporary.",
      example:
        "During a deployment rollout, the load balancer briefly returns 503 while new containers spin up.",
    },
    {
      code: 207,
      name: "Multi-Status",
      category: "2xx Success",
      explanation:
        "The response body contains multiple independent response codes for a batch operation. Used in WebDAV and some REST APIs that process multiple items at once.",
      example:
        "A bulk-delete API endpoint processes 10 items — some succeed (200), some fail (404), wrapped in a 207 response.",
    },
    {
      code: 418,
      name: "I'm a teapot",
      category: "4xx Client Error",
      explanation:
        "Defined in RFC 2324 as part of the Hyper Text Coffee Pot Control Protocol. Indicates the server refuses to brew coffee because it is, permanently, a teapot.",
      example:
        "A playful API endpoint returns 418 when a coffee request is made to a tea-only service.",
    },
    {
      code: 425,
      name: "Too Early",
      category: "4xx Client Error",
      explanation:
        "Indicates the server is unwilling to risk processing a request that might be replayed, typically used with early data in HTTP/2 or TLS 1.3.",
      example:
        "A client sends early data before handshake completion — server responds with 425 to avoid replay attacks.",
    },
    {
      code: 451,
      name: "Unavailable For Legal Reasons",
      category: "4xx Client Error",
      explanation:
        "The resource is unavailable due to legal demands such as censorship or court orders.",
      example:
        "A website blocks access to certain content in a country due to government restrictions and returns 451.",
    },
    {
      code: 508,
      name: "Loop Detected",
      category: "5xx Server Error",
      explanation:
        "The server detected an infinite loop while processing a request, often related to WebDAV operations.",
      example:
        "A recursive file system reference causes the server to repeatedly traverse the same path — returns 508.",
    },
    {
      code: 511,
      name: "Network Authentication Required",
      category: "5xx Server Error",
      explanation:
        "The client needs to authenticate to gain network access, commonly used by captive portals.",
      example:
        "A public Wi-Fi network redirects requests and returns 511 until the user logs in.",
    },
    {
      code: 103,
      name: "Early Hints",
      category: "1xx Informational",
      explanation:
        "Allows the server to send preliminary headers before the final response, often used for preload hints.",
      example:
        "A server sends 103 with Link headers to preload CSS/JS before returning the full response.",
    },
    {
      code: 401,
      name: "Unauthorized",
      category: "4xx Client Error",
      explanation:
        "The request requires authentication. The client must provide valid credentials to access the resource.",
      example:
        "Trying to access a protected API endpoint without an authentication token.",
    },
    {
      code: 204,
      name: "No Content",
      category: "2xx Success",
      explanation:
        "The request was successful, but the server is not returning any content. Used for DELETE operations or when no data needs to be sent back.",
      example:
        "Successfully deleting a user account — server returns 204 with empty body.",
    },
    {
      code: 408,
      name: "Request Timeout",
      category: "4xx Client Error",
      explanation:
        "The server did not receive a complete request within the time it was prepared to wait.",
      example:
        "A slow client doesn't finish sending POST data within server's timeout window.",
    },
    {
      code: 502,
      name: "Bad Gateway",
      category: "5xx Server Error",
      explanation:
        "The server received an invalid response from an upstream server it was trying to access.",
      example:
        "A reverse proxy receives a malformed response from the backend application server.",
    },
    {
      code: 504,
      name: "Gateway Timeout",
      category: "5xx Server Error",
      explanation:
        "The server did not receive a timely response from an upstream server it needed to access.",
      example:
        "An API gateway waits for a backend service that takes too long to respond — returns 504.",
    },
  ],

  snippet: [
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
    {
      difficulty: "beginner",
      language: "Python",
      title: "Dictionary get() with Default",
      code: `data = {<span class="str">'name'</span>: <span class="str">'Alice'</span>}

<span class="cmt"># Without get() — risky</span>
age = data[<span class="str">'age'</span>]  <span class="cmt"># KeyError!</span>

<span class="cmt"># With get() and default — safe</span>
age = data.<span class="fn">get</span>(<span class="str">'age'</span>, <span class="num">25</span>)  <span class="cmt"># Returns 25</span>`,
      explanation:
        "Using get() with a default value prevents KeyError exceptions. It's a clean pattern for handling missing keys without try/except blocks.",
    },
    {
      difficulty: "beginner",
      language: "JavaScript",
      title: "Spread Operator",
      code: `<span class="cmt">// Copy an array</span>
<span class="kw">const</span> arr = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>];
<span class="kw">const</span> copy = [...arr];

<span class="cmt">// Merge arrays</span>
<span class="kw">const</span> merged = [...arr, <span class="num">4</span>, <span class="num">5</span>];

<span class="cmt">// Copy an object</span>
<span class="kw">const</span> obj = { a: <span class="num">1</span> };
<span class="kw">const</span> newObj = { ...obj, b: <span class="num">2</span> };`,
      explanation:
        "The spread operator (...) expands iterables into individual elements. Great for copying arrays/objects, merging data, and passing arguments to functions.",
    },
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
    {
      difficulty: "experienced",
      language: "Python",
      title: "Generator with yield",
      code: `<span class="kw">def</span> <span class="fn">infinite_counter</span>():
    n = <span class="num">0</span>
    <span class="kw">while</span> <span class="kw">True</span>:
        <span class="kw">yield</span> n
        n += <span class="num">1</span>

<span class="cmt"># Use it</span>
counter = <span class="fn">infinite_counter</span>()
<span class="kw">for</span> i <span class="kw">in</span> counter:
    <span class="kw">if</span> i > <span class="num">5</span>: <span class="kw">break</span>
    <span class="fn">print</span>(i)  <span class="cmt"># 0, 1, 2, 3, 4, 5</span>`,
      explanation:
        "Generators produce values lazily using yield. They don't store all values in memory — perfect for large datasets, infinite sequences, or streaming data processing.",
    },
    {
      difficulty: "experienced",
      language: "JavaScript",
      title: "Debounce Function",
      code: `<span class="kw">function</span> <span class="fn">debounce</span>(fn, delay) {
  <span class="kw">let</span> timeoutId;
  <span class="kw">return</span> (...args) => {
    <span class="fn">clearTimeout</span>(timeoutId);
    timeoutId = <span class="fn">setTimeout</span>(() => fn(...args), delay);
  };
}

<span class="cmt">// Usage: only fires after user stops typing</span>
<span class="kw">const</span> searchInput = document.<span class="fn">getElementById</span>(<span class="str">'search'</span>);
searchInput.<span class="fn">addEventListener</span>(<span class="str">'input'</span>,
  <span class="fn">debounce</span>((e) => <span class="fn">fetchResults</span>(e.target.value), <span class="num">300</span>)
);`,
      explanation:
        "Debouncing delays function execution until a pause in activity. Essential for search inputs, resize handlers, and any event that fires rapidly.",
    },
    {
      difficulty: "beginner",
      language: "JavaScript",
      title: "Template Literals",
      code: `<span class="kw">const</span> name = <span class="str">'Alice'</span>;
<span class="kw">const</span> age = <span class="num">25</span>;

<span class="cmt">// Old way</span>
<span class="kw">const</span> msg1 = <span class="str">'Hello '</span> + name + <span class="str">', you are '</span> + age;

<span class="cmt">// Template literal — cleaner</span>
<span class="kw">const</span> msg2 = <span class="str">\`Hello \${name}, you are \${age}\`</span>;

<span class="cmt">// Multiline strings</span>
<span class="kw">const</span> html = <span class="str">\`
  &lt;div&gt;
    &lt;p&gt;\${name}&lt;/p&gt;
  &lt;/div&gt;
\`</span>;`,
      explanation:
        "Template literals use backticks and ${} for interpolation. They support multiline strings, embedded expressions, and tagged templates for advanced use.",
    },
    {
      difficulty: "beginner",
      language: "JavaScript",
      title: "Array Methods: map, filter, reduce",
      code: `<span class="kw">const</span> nums = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>, <span class="num">5</span>];

<span class="cmt">// map — transform each item</span>
<span class="kw">const</span> doubled = nums.<span class="fn">map</span>(n => n * <span class="num">2</span>);
<span class="cmt">// [2, 4, 6, 8, 10]</span>

<span class="cmt">// filter — keep matching items</span>
<span class="kw">const</span> evens = nums.<span class="fn">filter</span>(n => n % <span class="num">2</span> === <span class="num">0</span>);
<span class="cmt">// [2, 4]</span>

<span class="cmt">// reduce — accumulate to single value</span>
<span class="kw">const</span> sum = nums.<span class="fn">reduce</span>((acc, n) => acc + n, <span class="num">0</span>);
<span class="cmt">// 15</span>`,
      explanation:
        "map transforms, filter selects, reduce accumulates. These three methods replace most loops and are the foundation of functional programming in JavaScript.",
    },
    {
      difficulty: "beginner",
      language: "JavaScript",
      title: "Optional Chaining",
      code: `<span class="kw">const</span> user = {
  name: <span class="str">'Alice'</span>,
  address: { city: <span class="str">'Dhaka'</span> }
};

<span class="cmt">// Without optional chaining — risky</span>
<span class="kw">const</span> zip = user.address.zip; <span class="cmt">// undefined, but could crash</span>

<span class="cmt">// With optional chaining — safe</span>
<span class="kw">const</span> street = user.address?.street; <span class="cmt">// undefined</span>
<span class="kw">const</span> country = user.address?.country?.name; <span class="cmt">// undefined</span>

<span class="cmt">// Works with functions too</span>
<span class="kw">const</span> result = user.<span class="fn">getName</span>?.</span>();`,
      explanation:
        "Optional chaining (?.) safely accesses nested properties. If any part is null/undefined, it returns undefined instead of throwing an error. Essential for API responses.",
    },
    {
      difficulty: "beginner",
      language: "JavaScript",
      title: "Nullish Coalescing",
      code: `<span class="kw">const</span> value = <span class="num">0</span>;
<span class="kw">const</span> fallback = <span class="str">'default'</span>;

<span class="cmt">// || operator — treats 0 as falsy</span>
<span class="kw">const</span> result1 = value || fallback; <span class="cmt">// 'default'</span>

<span class="cmt">// ?? operator — only null/undefined trigger fallback</span>
<span class="kw">const</span> result2 = value ?? fallback; <span class="cmt">// 0</span>

<span class="cmt">// Useful for defaults</span>
<span class="kw">const</span> config = { timeout: <span class="num">0</span> };
<span class="kw">const</span> timeout = config.timeout ?? <span class="num">3000</span>; <span class="cmt">// 0 (not 3000!)</span>`,
      explanation:
        "?? (nullish coalescing) only falls back for null/undefined, not for 0, false, or ''. Use || when you want falsy fallback, ?? when you only want null/undefined fallback.",
    },
    {
      difficulty: "beginner",
      language: "JavaScript",
      title: "Object Shorthand & Computed Properties",
      code: `<span class="kw">const</span> name = <span class="str">'Alice'</span>;
<span class="kw">const</span> age = <span class="num">25</span>;

<span class="cmt">// Shorthand — same name, no repetition</span>
<span class="kw">const</span> user = { name, age }; <span class="cmt">// { name: 'Alice', age: 25 }</span>

<span class="cmt">// Computed property names</span>
<span class="kw">const</span> key = <span class="str">'email'</span>;
<span class="kw">const</span> obj = {
  [key]: <span class="str">'alice@example.com'</span>,
  [<span class="str">\`user_\${name}\`</span>]: <span class="num">1</span>
};`,
      explanation:
        "Object shorthand lets you skip the value when property name matches variable. Computed properties use [expression] to create dynamic keys at runtime.",
    },
    {
      difficulty: "experienced",
      language: "JavaScript",
      title: "Throttle Function",
      code: `<span class="kw">function</span> <span class="fn">throttle</span>(fn, limit) {
  <span class="kw">let</span> inThrottle;
  <span class="kw">return</span> (...args) => {
    <span class="kw">if</span> (!inThrottle) {
      fn(...args);
      inThrottle = <span class="kw">true</span>;
      <span class="fn">setTimeout</span>(() => inThrottle = <span class="kw">false</span>, limit);
    }
  };
}

<span class="cmt">// Usage: fires at most once per 100ms</span>
window.<span class="fn">addEventListener</span>(<span class="str">'scroll'</span>,
  <span class="fn">throttle</span>(() => <span class="fn">updateUI</span>(), <span class="num">100</span>)
);`,
      explanation:
        "Throttling limits execution frequency — function runs at most once per time period. Unlike debounce (waits for pause), throttle guarantees regular execution during continuous activity.",
    },
    {
      difficulty: "experienced",
      language: "JavaScript",
      title: "Currying",
      code: `<span class="cmt">// Regular function</span>
<span class="kw">function</span> <span class="fn">add</span>(a, b, c) { <span class="kw">return</span> a + b + c; }

<span class="cmt">// Curried — one argument at a time</span>
<span class="kw">const</span> <span class="fn">curryAdd</span> = a => b => c => a + b + c;

<span class="fn">curryAdd</span>(<span class="num">1</span>)(<span class="num">2</span>)(<span class="num">3</span>); <span class="cmt">// 6</span>

<span class="cmt">// Partial application</span>
<span class="kw">const</span> add1 = <span class="fn">curryAdd</span>(<span class="num">1</span>);
<span class="kw">const</span> add1and2 = add1(<span class="num">2</span>);
add1and2(<span class="num">3</span>); <span class="cmt">// 6</span>`,
      explanation:
        "Currying transforms a function with multiple arguments into a chain of single-argument functions. Enables partial application and reusable, configurable function templates.",
    },
    {
      difficulty: "experienced",
      language: "JavaScript",
      title: "Proxy for Object Interception",
      code: `<span class="kw">const</span> target = { name: <span class="str">'Alice'</span>, age: <span class="num">25</span> };

<span class="kw">const</span> handler = {
  <span class="fn">get</span>(obj, prop) {
    <span class="kw">return</span> prop <span class="kw">in</span> obj ? obj[prop] : <span class="str">'Unknown'</span>;
  },
  <span class="fn">set</span>(obj, prop, value) {
    <span class="kw">if</span> (prop === <span class="str">'age'</span> && value < <span class="num">0</span>) {
      <span class="kw">throw</span> <span class="kw">new</span> <span class="fn">Error</span>(<span class="str">'Age cannot be negative'</span>);
    }
    obj[prop] = value;
    <span class="kw">return</span> <span class="kw">true</span>;
  }
};

<span class="kw">const</span> proxy = <span class="kw">new</span> <span class="fn">Proxy</span>(target, handler);
proxy.email; <span class="cmt">// 'Unknown' (instead of undefined)</span>`,
      explanation:
        "Proxy intercepts operations on objects — get, set, delete, etc. Use for validation, logging, default values, or creating reactive objects. Libraries like Vue 3 use Proxies for reactivity.",
    },
    {
      difficulty: "experienced",
      language: "JavaScript",
      title: "WeakMap for Private Data",
      code: `<span class="kw">const</span> privateData = <span class="kw">new</span> <span class="fn">WeakMap</span>();

<span class="kw">class</span> <span class="fn">Person</span> {
  <span class="fn">constructor</span>(name, secret) {
    <span class="kw">this</span>.name = name;
    privateData.<span class="fn">set</span>(<span class="kw">this</span>, { secret });
  }

  <span class="fn">getSecret</span>() {
    <span class="kw">return</span> privateData.<span class="fn">get</span>(<span class="kw">this</span>).secret;
  }
}

<span class="cmt">// When object is deleted, WeakMap entry auto-removed</span>
<span class="cmt">// No memory leak!</span>`,
      explanation:
        "WeakMap holds keys weakly — when the key object is garbage collected, the entry disappears. Perfect for private data, metadata, or caching without memory leaks.",
    },
    {
      difficulty: "experienced",
      language: "JavaScript",
      title: "Custom Iterator with Symbol.iterator",
      code: `<span class="kw">const</span> range = {
  start: <span class="num">1</span>,
  end: <span class="num">5</span>,
  [<span class="fn">Symbol.iterator</span>]() {
    <span class="kw">let</span> current = <span class="kw">this</span>.start;
    <span class="kw">return</span> {
      <span class="fn">next</span>() {
        <span class="kw">if</span> (current <= <span class="kw">this</span>.end) {
          <span class="kw">return</span> { value: current++, done: <span class="kw">false</span> };
        }
        <span class="kw">return</span> { done: <span class="kw">true</span> };
      }
    };
  }
};

<span class="kw">for</span> (<span class="kw">const</span> n <span class="kw">of</span> range) {
  <span class="fn">console.log</span>(n); <span class="cmt">// 1, 2, 3, 4, 5</span>
}`,
      explanation:
        "Symbol.iterator defines how an object should be iterated. Implement next() returning { value, done }. Enables custom objects to work with for...of, spread operator, and destructuring.",
    },
    {
      difficulty: "beginner",
      language: "Java",
      title: "ArrayList Basics",
      code: `<span class="kw">import</span> java.util.ArrayList;

ArrayList&lt;String&gt; list = <span class="kw">new</span> ArrayList&lt;&gt;();

<span class="cmt">// Add elements</span>
list.<span class="fn">add</span>(<span class="str">"Apple"</span>);
list.<span class="fn">add</span>(<span class="str">"Banana"</span>);

<span class="cmt">// Access by index</span>
String fruit = list.<span class="fn">get</span>(<span class="num">0</span>); <span class="cmt">// "Apple"</span>

<span class="cmt">// Loop through</span>
<span class="kw">for</span> (String item : list) {
    System.out.<span class="fn">println</span>(item);
}`,
      explanation:
        "ArrayList is a resizable array in Java. Unlike regular arrays, it grows dynamically. Use it when you need a flexible collection that maintains order and allows fast random access.",
    },
    {
      difficulty: "beginner",
      language: "Java",
      title: "HashMap Basics",
      code: `<span class="kw">import</span> java.util.HashMap;

HashMap&lt;String, Integer&gt; scores = <span class="kw">new</span> HashMap&lt;&gt;();

<span class="cmt">// Add key-value pairs</span>
scores.<span class="fn">put</span>(<span class="str">"Alice"</span>, <span class="num">95</span>);
scores.<span class="fn">put</span>(<span class="str">"Bob"</span>, <span class="num">87</span>);

<span class="cmt">// Get value by key</span>
<span class="kw">int</span> aliceScore = scores.<span class="fn">get</span>(<span class="str">"Alice"</span>); <span class="cmt">// 95</span>

<span class="cmt">// Check if key exists</span>
<span class="kw">if</span> (scores.<span class="fn">containsKey</span>(<span class="str">"Charlie"</span>)) {
    <span class="cmt">// Key exists</span>
}`,
      explanation:
        "HashMap stores key-value pairs with fast O(1) lookup. Keys must be unique. Use it when you need to quickly find values by a key, like caching or counting occurrences.",
    },
    {
      difficulty: "beginner",
      language: "Java",
      title: "Try-Catch Exception Handling",
      code: `<span class="kw">try</span> {
    <span class="cmt">// Code that might throw exception</span>
    <span class="kw">int</span> result = <span class="num">10</span> / <span class="num">0</span>;
} <span class="kw">catch</span> (ArithmeticException e) {
    System.out.<span class="fn">println</span>(<span class="str">"Cannot divide by zero"</span>);
} <span class="kw">finally</span> {
    <span class="cmt">// Always runs, cleanup here</span>
    System.out.<span class="fn">println</span>(<span class="str">"Cleanup complete"</span>);
}`,
      explanation:
        "try-catch handles runtime errors gracefully. Code in try runs normally; if it throws, catch handles it. finally always runs — use for cleanup like closing files or connections.",
    },
    {
      difficulty: "beginner",
      language: "Java",
      title: "String Methods",
      code: `String name = <span class="str">"Alice"</span>;

<span class="cmt">// Length</span>
<span class="kw">int</span> len = name.<span class="fn">length</span>(); <span class="cmt">// 5</span>

<span class="cmt">// Character at index</span>
<span class="kw">char</span> c = name.<span class="fn">charAt</span>(<span class="num">0</span>); <span class="cmt">// 'A'</span>

<span class="cmt">// Substring</span>
String sub = name.<span class="fn">substring</span>(<span class="num">0</span>, <span class="num">3</span>); <span class="cmt">// "Ali"</span>

<span class="cmt">// Concatenate</span>
String full = name + <span class="str">" Smith"</span>; <span class="cmt">// "Alice Smith"</span>

<span class="cmt">// Check contains</span>
<span class="kw">boolean</span> hasIce = name.<span class="fn">contains</span>(<span class="str">"ice"</span>); <span class="cmt">// true</span>`,
      explanation:
        "Strings in Java are immutable — methods return new strings, not modify originals. Common operations: length, charAt, substring, contains, equals, and toLowerCase/toUpperCase.",
    },
    {
      difficulty: "beginner",
      language: "Java",
      title: "Class and Object Basics",
      code: `<span class="kw">class</span> <span class="fn">Person</span> {
    String name;
    <span class="kw">int</span> age;

    <span class="cmt">// Constructor</span>
    <span class="fn">Person</span>(String name, <span class="kw">int</span> age) {
        <span class="kw">this</span>.name = name;
        <span class="kw">this</span>.age = age;
    }

    <span class="cmt">// Method</span>
    <span class="kw">void</span> <span class="fn">greet</span>() {
        System.out.<span class="fn">println</span>(<span class="str">"Hi, I'm "</span> + name);
    }
}

<span class="cmt">// Create object</span>
Person alice = <span class="kw">new</span> <span class="fn">Person</span>(<span class="str">"Alice"</span>, <span class="num">25</span>);
alice.<span class="fn">greet</span>(); <span class="cmt">// "Hi, I'm Alice"</span>`,
      explanation:
        "A class is a blueprint; an object is an instance. Constructor initializes the object. 'this' refers to the current object. Methods define behavior. This is the foundation of OOP in Java.",
    },
    {
      difficulty: "experienced",
      language: "Java",
      title: "Streams API",
      code: `<span class="kw">import</span> java.util.Arrays;
<span class="kw">import</span> java.util.List;

List&lt;Integer&gt; nums = Arrays.<span class="fn">asList</span>(<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>, <span class="num">5</span>);

<span class="cmt">// Filter and map</span>
List&lt;Integer&gt; evenDoubled = nums.<span class="fn">stream</span>()
    .<span class="fn">filter</span>(n -> n % <span class="num">2</span> == <span class="num">0</span>)
    .<span class="fn">map</span>(n -> n * <span class="num">2</span>)
    .<span class="fn">collect</span>(Collectors.<span class="fn">toList</span>());
<span class="cmt">// [4, 8]</span>

<span class="cmt">// Sum</span>
<span class="kw">int</span> sum = nums.<span class="fn">stream</span>()
    .<span class="fn">mapToInt</span>(Integer::<span class="fn">intValue</span>)
    .<span class="fn">sum</span>(); <span class="cmt">// 15</span>`,
      explanation:
        "Streams process collections declaratively. filter keeps items, map transforms, reduce accumulates. They're lazy (compute only when needed) and can run in parallel with parallelStream().",
    },
    {
      difficulty: "experienced",
      language: "Java",
      title: "Lambda Expressions",
      code: `<span class="cmt">// Old way — anonymous class</span>
Runnable r1 = <span class="kw">new</span> Runnable() {
    <span class="kw">public void</span> <span class="fn">run</span>() {
        System.out.<span class="fn">println</span>(<span class="str">"Running"</span>);
    }
};

<span class="cmt">// Lambda — concise</span>
Runnable r2 = () -> System.out.<span class="fn">println</span>(<span class="str">"Running"</span>);

<span class="cmt">// With parameters</span>
Comparator&lt;String&gt; cmp = (a, b) -> a.<span class="fn">compareTo</span>(b);

<span class="cmt">// In collections</span>
list.<span class="fn">forEach</span>(item -> System.out.<span class="fn">println</span>(item));
list.<span class="fn">forEach</span>(System.out::<span class="fn">println</span>); <span class="cmt">// method reference</span>`,
      explanation:
        "Lambdas are short functions written as (params) -> expression. They replace verbose anonymous classes. Method references (Class::method) are even shorter when calling existing methods.",
    },
    {
      difficulty: "experienced",
      language: "Java",
      title: "Optional to Avoid null",
      code: `<span class="kw">import</span> java.util.Optional;

<span class="cmt">// Wrap potentially null value</span>
Optional&lt;String&gt; name = Optional.<span class="fn">ofNullable</span>(getName());

<span class="cmt">// Safe access</span>
<span class="kw">if</span> (name.<span class="fn">isPresent</span>()) {
    System.out.<span class="fn">println</span>(name.<span class="fn">get</span>());
}

<span class="cmt">// Or provide default</span>
String result = name.<span class="fn">orElse</span>(<span class="str">"Unknown"</span>);

<span class="cmt">// Or compute default</span>
String computed = name.<span class="fn">orElseGet</span>(() -> <span class="fn">fetchDefault</span>());

<span class="cmt">// Or throw exception</span>
String required = name.<span class="fn">orElseThrow</span>(() ->
    <span class="kw">new</span> <span class="fn">RuntimeException</span>(<span class="str">"Name required"</span>));`,
      explanation:
        "Optional wraps values that might be null, forcing explicit handling. Use ofNullable for uncertain values, of for guaranteed non-null. orElse, orElseGet, orElseThrow provide fallbacks.",
    },
    {
      difficulty: "experienced",
      language: "Java",
      title: "Generic Methods",
      code: `<span class="cmt">// Generic method — works with any type</span>
<span class="kw">public static</span> &lt;T&gt; T <span class="fn">first</span>(List&lt;T&gt; list) {
    <span class="kw">if</span> (list.<span class="fn">isEmpty</span>()) {
        <span class="kw">throw new</span> <span class="fn">IllegalArgumentException</span>(<span class="str">"Empty list"</span>);
    }
    <span class="kw">return</span> list.<span class="fn">get</span>(<span class="num">0</span>);
}

<span class="cmt">// Usage</span>
String s = <span class="fn">first</span>(Arrays.<span class="fn">asList</span>(<span class="str">"a"</span>, <span class="str">"b"</span>));
Integer i = <span class="fn">first</span>(Arrays.<span class="fn">asList</span>(<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>));

<span class="cmt">// Bounded type parameter</span>
<span class="kw">public static</span> &lt;T <span class="kw">extends</span> Comparable&lt;T&gt;&gt; T <span class="fn">max</span>(List&lt;T&gt; list) {
    <span class="kw">return</span> list.<span class="fn">stream</span>().<span class="fn">max</span>(Comparator.<span class="fn">naturalOrder</span>()).<span class="fn">get</span>();
}`,
      explanation:
        "Generic methods use &lt;T&gt; to work with any type. Type inference determines T at compile time. Bounded generics (&lt;T extends X&gt;) restrict types to those implementing certain interfaces.",
    },
    {
      difficulty: "experienced",
      language: "Java",
      title: "Thread-Safe Singleton",
      code: `<span class="kw">public class</span> <span class="fn">Singleton</span> {
    <span class="cmt">// volatile ensures visibility across threads</span>
    <span class="kw">private static volatile</span> Singleton instance;

    <span class="kw">private</span> <span class="fn">Singleton</span>() {} <span class="cmt">// private constructor</span>

    <span class="kw">public static</span> Singleton <span class="fn">getInstance</span>() {
        <span class="kw">if</span> (instance == <span class="kw">null</span>) {
            <span class="kw">synchronized</span> (Singleton.<span class="kw">class</span>) {
                <span class="kw">if</span> (instance == <span class="kw">null</span>) {
                    instance = <span class="kw">new</span> <span class="fn">Singleton</span>();
                }
            }
        }
        <span class="kw">return</span> instance;
    }
}`,
      explanation:
        "Double-checked locking ensures thread-safe lazy initialization. volatile prevents caching issues. The inner null-check inside synchronized prevents race conditions creating multiple instances.",
    },
    {
      difficulty: "experienced",
      language: "Java",
      title: "Record Classes (Java 16+)",
      code: `<span class="cmt">// Record — immutable data carrier</span>
<span class="kw">public record</span> <span class="fn">Person</span>(String name, <span class="kw">int</span> age) {
    <span class="cmt">// Auto-generated: constructor, getters, equals, hashCode, toString</span>
}

<span class="cmt">// Usage</span>
Person alice = <span class="kw">new</span> <span class="fn">Person</span>(<span class="str">"Alice"</span>, <span class="num">25</span>);
alice.name(); <span class="cmt">// getter (no getName())</span>

<span class="cmt">// Immutable — perfect for DTOs</span>
<span class="kw">record</span> <span class="fn">Point</span>(<span class="kw">int</span> x, <span class="kw">int</span> y) {}

<span class="cmt">// With validation</span>
<span class="kw">record</span> <span class="fn">Email</span>(String address) {
    <span class="kw">public</span> <span class="fn">Email</span> {
        <span class="kw">if</span> (!address.<span class="fn">contains</span>(<span class="str">"@"</span>)) {
            <span class="kw">throw new</span> <span class="fn">IllegalArgumentException</span>(<span class="str">"Invalid email"</span>);
        }
    }
}`,
      explanation:
        "Records (Java 16+) are immutable data classes with auto-generated methods. Perfect for DTOs, API responses, and value objects. Compact syntax replaces verbose POJO boilerplate.",
    },
  ],

  trivia: [
    {
      icon: "🐛",
      title: "The First Real Computer Bug",
      body: `In 1947, engineers working on the Harvard Mark II found a <span class="trivia-highlight">real moth</span> trapped in a relay, causing a malfunction. Grace Hopper's team taped it into the logbook with the note "First actual case of bug being found." The word "bug" for software errors was already in use, but this cemented it forever.`,
    },
    {
      icon: "0️⃣",
      title: "Why Arrays Start at 0",
      body: `Arrays start at 0 because of <span class="trivia-highlight">memory arithmetic</span>. The index represents an offset from the start address. Element 0 is at base+0, element 1 is at base+1×size, etc. Starting at 1 would waste a calculation. C popularized it, and most languages followed.`,
    },
    {
      icon: "🐍",
      title: "Python Named After Monty Python",
      body: `Guido van Rossum created Python in the late 1980s and chose the name from <span class="trivia-highlight">Monty Python's Flying Circus</span> — the British comedy show. He wanted something short, unique, and slightly mysterious. The snake association came later and is now part of the branding.`,
    },
    {
      icon: "🌐",
      title: "HTTP Was Designed to Be Stateless",
      body: `HTTP was designed to be <span class="trivia-highlight">stateless</span> so each request is independent. This makes servers simpler and more scalable. But it also means things like login sessions had to be invented later using cookies, tokens, and headers.`,
    },
    {
      icon: "🧠",
      title: "Stack vs Heap Memory",
      body: `The stack is fast because it's <span class="trivia-highlight">linear memory</span> with simple push/pop operations. The heap allows dynamic allocation but requires complex tracking. Stack allocation is faster but limited in size; heap is flexible but slower.`,
    },
    {
      icon: "🔑",
      title: "127.0.0.1 — The Loopback Address",
      body: `127.0.0.1 is the <span class="trivia-highlight">loopback address</span>, meaning your computer talks to itself. It's useful for testing servers locally without needing a network connection. The entire 127.x.x.x range is reserved for loopback.`,
    },
    {
      icon: "⏱️",
      title: "The 2038 Problem",
      body: `Many systems store time as a signed 32-bit integer counting seconds since 1970. On January 19, 2038, it will overflow and wrap around to negative values — a <span class="trivia-highlight">time-travel bug</span> that could break old systems still using 32-bit time.`,
    },
    {
      icon: "🧵",
      title: "Race Conditions Are Timing Bugs",
      body: `A race condition happens when multiple threads access shared data and the result depends on <span class="trivia-highlight">execution timing</span>. They are hard to reproduce because even tiny delays can change outcomes.`,
    },
    {
      icon: "📦",
      title: "Docker Containers Share the OS Kernel",
      body: `Docker containers share the host OS kernel using <span class="trivia-highlight">namespaces and cgroups</span>. Unlike virtual machines, they don't emulate hardware, which is why containers start almost instantly and use far less memory.`,
    },
    {
      icon: "⌨️",
      title: "QWERTY Was Designed to Prevent Jamming",
      body: `The QWERTY keyboard layout was designed in the 1870s to <span class="trivia-highlight">prevent mechanical jams</span> on typewriters by separating commonly-used letter pairs. More efficient layouts like Dvorak exist, but QWERTY's inertia keeps it dominant.`,
    },
    {
      icon: "💾",
      title: "The Save Icon Is a Floppy Disk",
      body: `The save icon depicts a <span class="trivia-highlight">floppy disk</span>, a storage device from the 80s–90s. Many users today have never used one, yet the icon remains one of the most recognizable UI metaphors — a testament to design persistence.`,
    },
    {
      icon: "🌐",
      title: "The First Website Still Exists",
      body: `The first website, created by Tim Berners-Lee in 1991 at CERN, is still online. It explains what the <span class="trivia-highlight">World Wide Web</span> is and how to use it — a snapshot of the internet's beginning.`,
    },
    {
      icon: "🔑",
      title: "Password Length Beats Complexity",
      body: `A long passphrase like <span class="trivia-highlight">"correct horse battery staple"</span> (28 chars) is more secure than a short complex password like "Tr0ub4dor&3" (11 chars). Length increases entropy more effectively than random symbols.`,
    },
    {
      icon: "💾",
      title: "False Sharing in Multi-Core CPUs",
      body: `Two threads updating different variables can still slow each other down if those variables sit on the same <span class="trivia-highlight">CPU cache line</span> (typically 64 bytes). This is called false sharing and can destroy parallel performance.`,
    },
    {
      icon: "🧠",
      title: "Cache Invalidation Is Hard",
      body: `There's a famous quote: "There are only two hard things in Computer Science: <span class="trivia-highlight">cache invalidation and naming things</span>." Keeping cached data consistent with its source is surprisingly complex, especially in distributed systems.`,
    },
    {
      icon: "⏱️",
      title: "Clocks Are Broken in Distributed Systems",
      body: `In distributed systems, physical clocks drift and can't be perfectly synchronized. That's why systems use <span class="trivia-highlight">logical clocks</span> (like Lamport timestamps) instead of real time for ordering events across servers.`,
    },
    {
      icon: "🔐",
      title: "Hash Functions Are One-Way",
      body: `A hash function is <span class="trivia-highlight">irreversible</span> — you cannot recover the original input from the hash. Encryption is reversible with a key. Confusing these two has caused serious security flaws in real applications.`,
    },
    {
      icon: "📉",
      title: "Premature Optimization Is the Root of All Evil",
      body: `Donald Knuth famously said: <span class="trivia-highlight">"Premature optimization is the root of all evil"</span> — meaning optimizing too early often makes code complex without measurable benefit. Profile first, then optimize where it actually matters.`,
    },
    {
      icon: "🧩",
      title: "Microservices Add Complexity",
      body: `Microservices improve scalability and team autonomy, but introduce <span class="trivia-highlight">network latency, distributed failures, and operational complexity</span>. Many teams underestimate this overhead and end up with systems harder to manage than monoliths.`,
    },
    {
      icon: "📜",
      title: "UTF-8 Won Because It's ASCII-Compatible",
      body: `UTF-8 became the dominant encoding because it's <span class="trivia-highlight">backward-compatible with ASCII</span> — English text looks identical in both. It can represent every Unicode character while keeping common characters compact (1 byte each).`,
    },
    {
      icon: "🔐",
      title: "Timing Attacks Leak Secrets",
      body: `Even with strong encryption, attackers can measure <span class="trivia-highlight">response time differences</span> to guess secrets byte-by-byte. That's why secure password comparisons use constant-time algorithms that always take the same duration.`,
    },
    {
      icon: "🧮",
      title: "Floating Point Isn't Exact",
      body: `Numbers like 0.1 cannot be represented exactly in binary floating-point. That's why <span class="trivia-highlight">0.1 + 0.2 !== 0.3</span> in JavaScript. This is due to IEEE 754 representation limits, not a bug.`,
    },
    {
      icon: "📚",
      title: "CAP Theorem Trade-offs",
      body: `In distributed systems, you can only guarantee two of: Consistency, Availability, and Partition tolerance. During network failures, you must choose between <span class="trivia-highlight">serving stale data or refusing requests</span>.`,
    },
    {
      icon: "🧬",
      title: "Unicode Has 140,000+ Characters",
      body: `Unicode defines over <span class="trivia-highlight">140,000 characters</span> across 159 scripts. A single "character" can be multiple code points combined (like emojis with skin tones). That's why string length ≠ visible character count.`,
    },
    {
      icon: "⚙️",
      title: "The N+1 Query Problem",
      body: `Fetching a list then querying each item individually causes <span class="trivia-highlight">N+1 database queries</span> — 1 to get the list, plus N for details. ORMs often cause this silently. Fix it with joins or eager loading.`,
    },
    {
      icon: "💣",
      title: "The Therac-25 — Software That Killed",
      body: `The Therac-25 radiation therapy machine (1985–87) delivered <span class="trivia-highlight">lethal radiation overdoses</span> to 6 patients due to a race condition and removed hardware safety locks. Software became the only safeguard — and it failed.`,
    },
    {
      icon: "📡",
      title: "Spectre & Meltdown — Hardware Bugs",
      body: `In 2018, researchers revealed that CPUs' <span class="trivia-highlight">speculative execution</span> — a performance feature — allowed reading protected memory. Every major OS needed patches. Some caused up to 30% performance drops on I/O workloads.`,
    },
    {
      icon: "🔀",
      title: "Git Is a Merkle Tree",
      body: `Every commit, tree, and blob in Git is a <span class="trivia-highlight">content-addressed SHA-1 hash</span>. This makes history immutable — changing any commit changes all downstream hashes. The entire repository is a Merkle tree structure.`,
    },
    {
      icon: "🎨",
      title: "JavaScript Was Created in 10 Days",
      body: `Brendan Eich created JavaScript in <span class="trivia-highlight">just 10 days</span> in May 1995. Originally called Mocha, then LiveScript, it was renamed to ride the Java hype wave. The rushed timeline explains many of its quirks.`,
    },
    {
      icon: "🔥",
      title: "Null References Are a Billion-Dollar Mistake",
      body: `Tony Hoare, who invented null references in 1965 for ALGOL W, later called it his <span class="trivia-highlight">"billion-dollar mistake"</span>. Null pointers have caused countless crashes, vulnerabilities, and bugs over decades.`,
    },
    {
      icon: "⚡",
      title: "The First Programmer Was a Woman",
      body: `Ada Lovelace (1815–1852) wrote the first algorithm intended for a machine — Charles Babbage's Analytical Engine. She's considered the <span class="trivia-highlight">first computer programmer</span>, decades before electronic computers existed.`,
    },
    {
      icon: "🔍",
      title: "Google's First Storage Was LEGO",
      body: `When Google started in 1998, they built their first server rack out of <span class="trivia-highlight">LEGO bricks</span> to hold 10 hard drives. The total storage was 40GB — barely enough for early web indexing.`,
    },
    {
      icon: "📊",
      title: "The First Bug Report Was a Bug",
      body: `The term "bug" for technical errors existed before computers. Thomas Edison used it in the 1870s for telegraph malfunctions. The <span class="trivia-highlight">Harvard Mark II moth</span> in 1947 just made it famous in computing.`,
    },
    {
      icon: "🌐",
      title: "HTTP/1.1 Has Been Used Since 1997",
      body: `HTTP/1.1, still widely used today, was standardized in <span class="trivia-highlight">1997</span> — RFC 2068. It introduced persistent connections, chunked transfer encoding, and pipelining. HTTP/2 and HTTP/3 are slowly replacing it.`,
    },
    {
      icon: "🔒",
      title: "HTTPS Uses Port 443, HTTP Uses Port 80",
      body: `By convention, <span class="trivia-highlight">HTTP uses port 80</span> and <span class="trivia-highlight">HTTPS uses port 443</span>. These ports are reserved by IANA. When you see https://, the browser automatically connects on port 443.`,
    },
    {
      icon: "🧪",
      title: "Unit Tests Find Bugs Earlier",
      body: `Studies show that unit testing catches bugs <span class="trivia-highlight">10x cheaper</span> than fixing them in production. The cost of a bug grows exponentially with each phase it survives: code → testing → staging → production.`,
    },
    {
      icon: "🚀",
      title: "Space Software Must Be Reliable",
      body: `NASA's software for space missions typically has <span class="trivia-highlight">1 bug per 10,000 lines of code</span> — 100x more reliable than typical commercial software (1 bug per 100 lines). The cost of failure is literally astronomical.`,
    },
    {
      icon: "💡",
      title: "Erlang Handles 99.9999999% Reliability",
      body: `Ericsson's AXD301 telecom switch built with Erlang achieved <span class="trivia-highlight">9 nines reliability</span> — 31 milliseconds of downtime per year. Erlang's "let it crash" philosophy and actor model enable this resilience.`,
    },
    {
      icon: "📡",
      title: "TCP Was Designed for Unreliable Networks",
      body: `TCP handles packet loss, corruption, and out-of-order delivery automatically. It was designed for <span class="trivia-highlight">nuclear-war-resistant</span> communication. UDP skips these guarantees for speed — useful when you can handle loss yourself.`,
    },
    {
      icon: "🧊",
      title: "SQLite Is the Most Deployed Database",
      body: `SQLite is embedded in every Android phone, iPhone, Chrome browser, Firefox, Windows 10, and countless apps. It's estimated to be <span class="trivia-highlight">the most deployed software library</span> in history with billions of instances.`,
    },
    {
      icon: "⚡",
      title: "V8 Compiles JavaScript to Machine Code",
      body: `Chrome's V8 engine doesn't interpret JavaScript — it <span class="trivia-highlight">compiles it to native machine code</span> at runtime using JIT compilation. This is why modern JavaScript runs nearly as fast as compiled languages.`,
    },
    {
      icon: "🧩",
      title: "Polymorphism Means Many Forms",
      body: `Polymorphism lets different types be treated through a common interface. A <span class="trivia-highlight">Dog</span> and <span class="trivia-highlight">Cat</span> both have a speak() method, but each produces different output. Same call, different behavior.`,
    },
    {
      icon: "📊",
      title: "Big Data Started at Google",
      body: `Google's MapReduce paper (2004) and GFS (Google File System, 2003) pioneered <span class="trivia-highlight">distributed data processing</span>. Hadoop was built to replicate these systems. They revolutionized how we handle massive datasets.`,
    },
    {
      icon: "🔒",
      title: "Public Key Crypto Was Secretly Discovered First",
      body: `Public-key cryptography was discovered at <span class="trivia-highlight">GCHQ (British intelligence)</span> in 1970, before Diffie and Hellman published it in 1976. The UK government kept it classified for decades.`,
    },
    {
      icon: "🌐",
      title: "DNS Is a Distributed Database",
      body: `DNS doesn't have a single central server — it's <span class="trivia-highlight">hierarchical and distributed</span> across millions of servers worldwide. Root servers (13 IP addresses) point to TLD servers, which point to domain servers.`,
    },
    {
      icon: "⚡",
      title: "Static Sites Are Fastest",
      body: `Static websites (pre-generated HTML) are <span class="trivia-highlight">10x faster</span> than dynamic sites because no database queries or server processing happens. CDN caching makes them nearly instant globally.`,
    },
    {
      icon: "🔗",
      title: "Links Were Originally Called Hyperlinks",
      body: `Ted Nelson coined "hypertext" and <span class="trivia-highlight">"hyperlink"</span> in 1965. The concept of clickable text linking documents existed before the web — it inspired Tim Berners-Lee's HTML links.`,
    },
    {
      icon: "🎨",
      title: "CSS Was Almost Called JSSS",
      body: `Early browser wars: Netscape proposed <span class="trivia-highlight">JSSS (JavaScript Style Sheets)</span> while Microsoft pushed CSS. CSS won in 1996 because it was simpler and declarative, not requiring JavaScript.`,
    },
    {
      icon: "🧠",
      title: "Recursion Has a Base Case",
      body: `Every recursive function needs a <span class="trivia-highlight">base case</span> — a condition where it stops calling itself. Without it, recursion loops infinitely until stack overflow. The base case is the "exit door" of recursion.`,
    },
    {
      icon: "📦",
      title: "Kubernetes Means Helmsman in Greek",
      body: `Kubernetes (K8s) is named from Greek <span class="trivia-highlight">κυβερνήτης</span> meaning "helmsman" or "ship pilot". The 7-letter abbreviation K8s (K + 8 letters + s) follows a common tech naming pattern.`,
    },
    {
      icon: "🐍",
      title: "Python's Indentation Was Controversial",
      body: `Python's use of <span class="trivia-highlight">indentation for structure</span> instead of braces was controversial. Critics called it ambiguous; proponents loved readability. Decades later, it's considered one of Python's best design decisions.`,
    },
    {
      icon: "⚡",
      title: "Node.js Uses libuv for Async I/O",
      body: `Node.js achieves non-blocking I/O through <span class="trivia-highlight">libuv</span>, a C library that abstracts platform-specific async mechanisms (epoll on Linux, kqueue on macOS, IOCP on Windows).`,
    },
    {
      icon: "🔐",
      title: "HTTPS Certificate Chains Are Hierarchical",
      body: `HTTPS certificates form a <span class="trivia-highlight">chain of trust</span>: root CA → intermediate CA → your certificate. Browsers trust ~150 root CAs pre-installed. If any link breaks, the whole chain fails.`,
    },
    {
      icon: "🧊",
      title: "Virtual Machines Emulate Hardware",
      body: `A VM runs an entire guest OS by <span class="trivia-highlight">emulating hardware</span> (CPU, memory, disk). Containers share the host kernel. That's why VMs are heavier but more isolated, containers are lighter but less isolated.`,
    },
    {
      icon: "📊",
      title: "B-Trees Power Database Indexes",
      body: `Most database indexes use <span class="trivia-highlight">B-trees</span> (balanced trees) because they keep data sorted and maintain O(log n) lookups even as data grows. They're optimized for disk storage with nodes matching disk block sizes.`,
    },
    {
      icon: "⚡",
      title: "Webpack Bundles Your Code",
      body: `Webpack takes many JavaScript files and bundles them into one (or few) files. It also <span class="trivia-highlight">tree-shakes</span> — removes unused code. This reduces HTTP requests and download size.`,
    },
    {
      icon: "🔄",
      title: "CI/CD Automates Delivery",
      body: `CI (Continuous Integration) tests code on every commit. CD (Continuous Deployment) <span class="trivia-highlight">automatically deploys</span> passing builds. Together, they reduce human error and speed delivery from weeks to minutes.`,
    },
    {
      icon: "🎨",
      title: "React Uses a Virtual DOM",
      body: `React keeps a <span class="trivia-highlight">virtual DOM</span> in memory — a lightweight copy. When state changes, React compares virtual vs real DOM and updates only changed parts. This avoids expensive full-page reflows.`,
    },
    {
      icon: "🧬",
      title: "DNA Is Like Source Code",
      body: `DNA stores genetic information as <span class="trivia-highlight">4 base pairs (A, T, G, C)</span> — essentially a base-4 encoding. The human genome is ~3 billion "letters" of code, packed into every cell. Nature invented digital storage first.`,
    },
    {
      icon: "💡",
      title: "Alan Turing Invented Modern Computing",
      body: `Alan Turing's 1936 paper described a <span class="trivia-highlight">universal machine</span> that could compute anything computable. This theoretical "Turing machine" is the foundation of all modern computers — before electronics existed.`,
    },
    {
      icon: "🌐",
      title: "The Web Runs on Open Standards",
      body: `HTML, CSS, HTTP, and JavaScript are <span class="trivia-highlight">open standards</span> — no single company owns them. W3C, WHATWG, and IETF maintain them. This openness enabled the web's explosive growth and prevented monopolies.`,
    },
  ],

  math: [
    {
      icon: "2️⃣",
      title: "Powers of 2 — The Developer's Table",
      body: `Powers of 2 appear everywhere in computing. <span class="trivia-highlight">2¹⁰ = 1,024 ≈ 1,000</span>. That's why 1KB ≈ 1000 bytes. 2²⁰ ≈ 1 million (1MB), 2³⁰ ≈ 1 billion (1GB). Memorizing 2¹ through 2¹⁶ is useful for estimating memory, loop counts, and bit masks.`,
    },
    {
      icon: "🔢",
      title: "Boolean Algebra Origins",
      body: `George Boole invented Boolean algebra in 1854 — a century before computers existed. He just wanted to formalize logic. Claude Shannon then realized in 1937 that <span class="trivia-highlight">electrical circuits could implement Boolean logic</span>, which became the foundation of digital computers.`,
    },
    {
      icon: "📈",
      title: "O(n log n) Is Optimal for Sorting",
      body: `You cannot sort faster than <span class="trivia-highlight">O(n log n)</span> using comparison-based sorting. Proof: there are n! possible orderings; a binary decision tree needs log₂(n!) ≈ n log n leaves. Merge sort and heap sort achieve this bound.`,
    },
    {
      icon: "🎲",
      title: "Birthday Problem — Hash Collisions",
      body: `In a group of just <span class="trivia-highlight">23 people</span>, there's a 50% chance two share a birthday. Similarly, a hash function producing N values expects a collision after only √N hashes — not N. A 32-bit hash collides after ~65,000 items.`,
    },
    {
      icon: "📊",
      title: "Hexadecimal Is Base-16",
      body: `Hex uses digits 0-9 and letters A-F. Each hex digit represents <span class="trivia-highlight">4 bits</span> (a nibble). FF = 255, 10 = 16. It's compact for representing bytes: 0xFF is one byte, 0xFFFF is two.`,
    },
    {
      icon: "🔄",
      title: "Modulo Operator Returns Remainder",
      body: `The modulo operator (%) returns the <span class="trivia-highlight">remainder after division</span>. 17 % 5 = 2. It's used for wrapping indices, checking divisibility, hashing, and cyclic operations like clock time.`,
    },
    {
      icon: "⚡",
      title: "Logarithms Measure Complexity",
      body: `log₂(n) asks: "How many times must we halve n to reach 1?" For 1,000, it's about 10. That's why <span class="trivia-highlight">binary search</span> on 1,000 items takes ~10 steps — log₂(1000) ≈ 10.`,
    },
    {
      icon: "🔢",
      title: "Prime Numbers in Cryptography",
      body: `RSA encryption relies on the fact that <span class="trivia-highlight">factoring large primes is hard</span>. Multiply two large primes: easy. Find which primes made the product: extremely hard. This asymmetry secures most internet communication.`,
    },
    {
      icon: "🎲",
      title: "Random Is Not Truly Random",
      body: `Computers use <span class="trivia-highlight">pseudorandom generators</span> — deterministic algorithms producing sequences that look random. True randomness requires hardware sources like thermal noise or radioactive decay.`,
    },
    {
      icon: "📊",
      title: "Binary Search Beats Linear Every Time",
      body: `Linear search scans each item: O(n). Binary search halves the range each step: O(log n). For 1 million items, linear needs <span class="trivia-highlight">1,000,000 checks</span>, binary needs only 20.`,
    },
    {
      icon: "🧮",
      title: "Floating Point Has Limited Precision",
      body: `IEEE 754 double-precision floats have <span class="trivia-highlight">53 bits of precision</span> — about 15-17 decimal digits. Numbers beyond that lose accuracy. For money or exact calculations, use integers or decimal types.`,
    },
    {
      icon: "⚡",
      title: "Exponential Growth Is Dangerous",
      body: `An algorithm with O(2^n) complexity doubles each step. For n=10: 1,024 operations. For n=30: <span class="trivia-highlight">1 billion operations</span>. This is why brute-force password cracking fails with sufficient complexity.`,
    },
    {
      icon: "📈",
      title: "Amortized Analysis",
      body: `Some operations are slow occasionally but fast overall. Dynamic arrays double capacity when full: O(n) to copy, but <span class="trivia-highlight">amortized O(1)</span> for each insert averaged over many operations.`,
    },
    {
      icon: "🔄",
      title: "Fibonacci Numbers Grow Fast",
      body: `Fibonacci sequence: 1, 1, 2, 3, 5, 8, 13... The nth Fibonacci number grows as <span class="trivia-highlight">φ^n</span> (φ ≈ 1.618, the golden ratio). This exponential growth makes naive recursive Fibonacci catastrophically slow.`,
    },
    {
      icon: "🎯",
      title: "Pigeonhole Principle",
      body: `If you have n items and m slots with n > m, at least one slot has multiple items. This proves hash collisions are inevitable: <span class="trivia-highlight">you can't fit infinite data into finite buckets without collisions</span>.`,
    },
    {
      icon: "📊",
      title: "Graph Theory Powers Networks",
      body: `Graphs (nodes + edges) model social networks, maps, dependencies. <span class="trivia-highlight">Dijkstra's algorithm</span> finds shortest paths in O((V+E) log V). Graph traversal (BFS/DFS) is the basis of web crawling and garbage collection.`,
    },
    {
      icon: "🔢",
      title: "Modular Arithmetic in Hashing",
      body: `hash % tableSize maps any hash to a valid index. When tableSize is prime, <span class="trivia-highlight">distribution is more uniform</span> — fewer collisions. This is why hash tables often use prime-sized arrays.`,
    },
    {
      icon: "🎲",
      title: "Monte Carlo Methods Use Randomness",
      body: `Monte Carlo algorithms solve problems by <span class="trivia-highlight">random sampling</span>. Pi can be estimated by throwing random points in a square and counting hits inside a circle. Useful for simulations, finance, and physics.`,
    },
    {
      icon: "⚡",
      title: "Quadratic Time Is Slow for Large Data",
      body: `O(n²) means doubling input quadruples time. 1,000 items → 1M operations. 10,000 items → <span class="trivia-highlight">100M operations</span>. Nested loops are often O(n²) — avoid them for large datasets.`,
    },
    {
      icon: "📈",
      title: "Big O Hides Constants",
      body: `O(n) doesn't mean equal speed. An O(n) algorithm with 1000 operations per item is slower than O(n log n) with 10 operations. Big O describes <span class="trivia-highlight">growth rate</span>, not absolute speed.`,
    },
    {
      icon: "🎯",
      title: "Two's Complement for Negative Numbers",
      body: `Computers represent negatives using <span class="trivia-highlight">two's complement</span>: invert bits and add 1. This makes -1 = 0xFF...FF. Addition works the same for positive and negative numbers — no special handling needed.`,
    },
    {
      icon: "🔄",
      title: "Recursion Depth Has a Cost",
      body: `Each recursive call adds to the call stack. <span class="trivia-highlight">Stack overflow</span> occurs when depth exceeds memory. Tail recursion optimization (when available) eliminates this cost by reusing the stack frame.`,
    },
    {
      icon: "📊",
      title: "Tree Depth Is Logarithmic",
      body: `A balanced binary tree with n nodes has depth <span class="trivia-highlight">log₂(n)</span>. This is why tree operations (search, insert, delete) are O(log n). Unbalanced trees degrade to O(n) — like a linked list.`,
    },
    {
      icon: "🎲",
      title: "Probability of Failure",
      body: `If something has 1% chance of failure per use, after 100 uses the probability of at least one failure is <span class="trivia-highlight">63%</span> (not 100%). Formula: 1 - (0.99)^100. This matters for error rates in distributed systems.`,
    },
    {
      icon: "⚡",
      title: "Bitwise Operations Are Fast",
      body: `Bitwise AND, OR, XOR operate on all bits simultaneously in <span class="trivia-highlight">one CPU cycle</span>. They're faster than arithmetic. x << 1 doubles x faster than x * 2. x & 1 checks even/odd faster than x % 2.`,
    },
    {
      icon: "📈",
      title: "Linearithmic Time — n log n",
      body: `n log n appears in efficient sorting (merge sort, heap sort, quicksort average). It's nearly linear — <span class="trivia-highlight">only slightly worse</span> than O(n). For 1 million items: ~20 million operations, manageable.`,
    },
    {
      icon: "🎯",
      title: "Inverse Operations in Cryptography",
      body: `Encryption has an inverse: decryption. Hash functions <span class="trivia-highlight">have no inverse</span> — you can't reverse them. This fundamental difference determines whether data can be recovered.`,
    },
    {
      icon: "🔄",
      title: "Cycle Detection in Linked Lists",
      body: `Floyd's algorithm detects cycles using two pointers: one slow (+1), one fast (+2). If they meet, there's a cycle. This <span class="trivia-highlight">O(n) time, O(1) space</span> solution is essential for linked list debugging.`,
    },
    {
      icon: "📊",
      title: "Matrix Multiplication Is O(n³)",
      body: `Naive matrix multiplication does n³ multiplications. Strassen's algorithm reduces it to <span class="trivia-highlight">O(n^2.8)</span>. Theoretical minimum is unknown — between O(n²) and O(n³). This matters for graphics and ML.`,
    },
    {
      icon: "🎲",
      title: "Law of Large Numbers",
      body: `As sample size grows, the average converges to expected value. Flip a coin 10 times: might be 70% heads. Flip <span class="trivia-highlight">10,000 times</span>: almost exactly 50%. This justifies statistical testing.`,
    },
    {
      icon: "⚡",
      title: "Division Is Slower Than Multiplication",
      body: `CPU division takes <span class="trivia-highlight">10-40 cycles</span>; multiplication takes 3-5 cycles. Replace x / 2 with x >> 1 (shift), x / y with x * (1/y) when y is constant. Division optimization matters in tight loops.`,
    },
    {
      icon: "📈",
      title: "Cubic Time Is Unusable for Large Data",
      body: `O(n³) means 1000 items → 1 billion operations. 10,000 items → <span class="trivia-highlight">1 trillion operations</span>. Three nested loops. Only acceptable for tiny datasets or algorithms with small n.`,
    },
    {
      icon: "🎯",
      title: "Zero and One Are Special",
      body: `<span class="trivia-highlight">0 is the additive identity</span> (x + 0 = x). <span class="trivia-highlight">1 is the multiplicative identity</span> (x × 1 = x). These properties are fundamental to algebra and simplify proofs. Boolean algebra: 0 = false, 1 = true.`,
    },
    {
      icon: "🔄",
      title: "Euclidean Algorithm for GCD",
      body: `To find GCD(a, b), repeatedly replace larger with larger mod smaller until one is 0. This <span class="trivia-highlight">O(log min(a,b))</span> algorithm is 2300 years old and still optimal. Used in cryptography for modular inverse.`,
    },
    {
      icon: "📊",
      title: "Shannon's Information Theory",
      body: `Information is measured in bits. Shannon's theorem defines <span class="trivia-highlight">channel capacity</span> — the maximum data rate a channel can transmit reliably. This underlies compression, error correction, and communication limits.`,
    },
  ],

  quiz: [
    {
      question: "What does this JavaScript return?",
      code: `typeof null`,
      options: ["null", "undefined", "object", "boolean"],
      answer: 2,
      explanation:
        "typeof null returns 'object' — a famous JavaScript bug from 1995 that was never fixed to avoid breaking existing code. null is its own primitive type, but typeof incorrectly reports it.",
    },
    {
      question: "Which HTTP method is idempotent but NOT safe?",
      options: ["GET", "POST", "PUT", "PATCH"],
      answer: 2,
      explanation:
        "PUT is idempotent (multiple calls = same result) but NOT safe (changes server state). GET is both safe and idempotent. POST and PATCH are neither.",
    },
    {
      question: "What will this Python code print?",
      code: `x = [1, 2, 3]
y = x
y.append(4)
print(x)`,
      options: ["[1, 2, 3]", "[1, 2, 3, 4]", "Error", "[4]"],
      answer: 1,
      explanation:
        "In Python, list assignment copies the reference, not the list. y and x point to the same object. Use x.copy() or x[:] to create an independent copy.",
    },
    {
      question: "Time complexity of hash map lookup?",
      options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
      answer: 2,
      explanation:
        "Hash map lookup is O(1) average — the hash directly computes the location. Worst case (many collisions) is O(n), but a good hash function makes this extremely rare.",
    },
    {
      question: "What does this code output?",
      code: `const a = async () => 42;
const b = a();
console.log(typeof b);`,
      options: ["number", "object", "promise", "undefined"],
      answer: 1,
      explanation:
        "An async function always returns a Promise. typeof Promise is 'object'. To get 42, you'd need await a() inside an async context.",
    },
    {
      question: "Which query uses the B-tree index?",
      options: [
        "WHERE age + 1 = 30",
        "WHERE CAST(age AS TEXT) = '29'",
        "WHERE age = 29",
        "WHERE age != 29",
      ],
      answer: 2,
      explanation:
        "Only 'WHERE age = 29' uses the index directly. Wrapping a column in a function prevents index use. Inequality (!=) typically causes a full scan.",
    },
    {
      question: "What's the output?",
      code: `console.log(0.1 + 0.2 === 0.3);`,
      options: ["true", "false", "NaN", "undefined"],
      answer: 1,
      explanation:
        "Due to IEEE 754 floating-point representation, 0.1 + 0.2 = 0.30000000000000004, not exactly 0.3. Never compare floats directly for equality.",
    },
    {
      question: "What does 'this' refer to inside an arrow function?",
      options: [
        "The function itself",
        "The global object",
        "The enclosing scope's 'this'",
        "undefined",
      ],
      answer: 2,
      explanation:
        "Arrow functions don't have their own 'this' binding — they inherit from the enclosing lexical scope. This makes them unsuitable for methods that need their own context.",
    },
    {
      question: "Git commit hashes are SHA-1 of what?",
      options: [
        "Just the file changes",
        "Just the commit message",
        "The entire commit content",
        "The author's name",
      ],
      answer: 2,
      explanation:
        "A Git commit hash is SHA-1 of: tree (files), parent commit(s), author, committer, message, and timestamp. Changing anything changes the hash — this makes history immutable.",
    },
    {
      question: "What happens when a TCP packet is lost?",
      options: [
        "Connection closes",
        "UDP is used instead",
        "It's retransmitted automatically",
        "Application handles it",
      ],
      answer: 2,
      explanation:
        "TCP guarantees delivery — lost packets are automatically retransmitted. The receiver acknowledges packets; missing ACKs trigger retransmission. UDP doesn't guarantee anything.",
    },
  ],
};

// ── Aptitude Quiz Additions ───────────────────────────────
const APTITUDE = [
  {
    question: "What comes next?",
    code: "2,  4,  8,  16,  32,  ?",
    options: ["48", "64", "56", "40"],
    answer: 1,
    explanation: "Each number × 2. 32 × 2 = 64. Geometric sequence with ratio 2.",
  },
  {
    question: "What number fills the blank?",
    code: "1,  4,  9,  16,  25,  ?",
    options: ["30", "36", "32", "49"],
    answer: 1,
    explanation: "Perfect squares: 1², 2², 3², 4², 5²... next is 6² = 36.",
  },
  {
    question: "What comes next?",
    code: "3,  6,  9,  12,  15,  ?",
    options: ["17", "20", "18", "21"],
    answer: 2,
    explanation: "Arithmetic sequence, +3 each time. 15 + 3 = 18.",
  },
  {
    question: "Find the missing number:",
    code: "1,  1,  2,  3,  5,  ?",
    options: ["7", "6", "8", "9"],
    answer: 2,
    explanation: "Fibonacci sequence — each number = sum of two before it. 3 + 5 = 8.",
  },
  {
    question: "What letter comes next?",
    code: "A,  C,  E,  G,  ?",
    options: ["H", "I", "J", "K"],
    answer: 1,
    explanation: "Every letter skips one in alphabet. After G, skip H, land on I.",
  },
  {
    question: "What comes next?",
    code: "Z,  Y,  X,  W,  ?",
    options: ["U", "T", "V", "S"],
    answer: 2,
    explanation: "Alphabet in reverse. W is 23rd, next is V (22nd).",
  },
  {
    question: "Shape pattern — what comes next?",
    code: "○  △  □  ○  △  □  ○  △  ?",
    options: ["○", "△", "□", "◇"],
    answer: 2,
    explanation: "Repeats every 3: circle, triangle, square. After △ comes □.",
  },
  {
    question: "Sides increase by 1. What's next?",
    code: "Triangle(3)  Square(4)  Pentagon(5)  Hexagon(6)  ?",
    options: ["Hexagon", "Octagon", "Heptagon", "Circle"],
    answer: 2,
    explanation: "3, 4, 5, 6 sides → next is 7 sides = Heptagon.",
  },
  {
    question: "What is the value at position 7?",
    code: "2,  6,  12,  20,  30,  42,  ?",
    options: ["52", "54", "56", "60"],
    answer: 2,
    explanation: "Differences: 4, 6, 8, 10, 12, 14... 42 + 14 = 56. These are oblong numbers n×(n+1).",
  },
  {
    question: "What fills the blank?",
    code: "1,  8,  27,  64,  125,  ?",
    options: ["196", "216", "256", "180"],
    answer: 1,
    explanation: "Perfect cubes: 1³, 2³, 3³, 4³, 5³... next is 6³ = 216.",
  },
  {
    question: "Find the next term:",
    code: "1,  3,  7,  13,  21,  31,  ?",
    options: ["41", "43", "45", "39"],
    answer: 1,
    explanation: "Differences: 2, 4, 6, 8, 10, 12... 31 + 12 = 43.",
  },
  {
    question: "Which does NOT belong?",
    code: "2,  3,  5,  7,  11,  12,  13",
    options: ["5", "11", "12", "13"],
    answer: 2,
    explanation: "All others are prime. 12 = 2×6 = 3×4, composite.",
  },
  {
    question: "What comes next?",
    code: "0,  1,  3,  6,  10,  15,  ?",
    options: ["18", "20", "21", "25"],
    answer: 2,
    explanation: "Triangular numbers. Differences: 1, 2, 3, 4, 5, 6... 15 + 6 = 21.",
  },
  {
    question: "What comes next in this mixed sequence?",
    code: "A1,  B4,  C9,  D16,  ?",
    options: ["E20", "F25", "E25", "F30"],
    answer: 2,
    explanation: "Letters A,B,C,D,E and squares 1,4,9,16,25. Answer: E25.",
  },
  {
    question: "Row × Column. Value at Row 4, Column 7?",
    code: "     C1  C2  C3  C4\nR1:   1   2   3   4\nR2:   2   4   6   8\nR3:   3   6   9  12\nR4:   4   8  12   ?",
    options: ["24", "28", "32", "16"],
    answer: 1,
    explanation: "Row × Column = 4 × 7 = 28. Multiplication table.",
  },
  {
    question: "Sudoku with shapes — no shape repeats per row or column. What fills the ?",
    code: "Row 1:  ○  △  □\nRow 2:  △  □  ○\nRow 3:  □  ?  △",
    options: ["○", "△", "□", "◇"],
    answer: 0,
    explanation: "Column 2 has △ and □ — needs ○. Row 3 has □ and △, confirming ○.",
  },
  {
    question: "What is the next number?",
    code: "3,  9,  27,  81,  ?",
    options: ["162", "243", "256", "218"],
    answer: 1,
    explanation: "Each term × 3. 81 × 3 = 243. Geometric progression.",
  },
  {
    question: "Find the missing term:",
    code: "2,  5,  11,  23,  47,  ?",
    options: ["91", "95", "93", "99"],
    answer: 1,
    explanation: "Pattern: (previous × 2) + 1. 47 × 2 + 1 = 95.",
  },
  {
    question: "What comes next?",
    code: "1,  4,  9,  16,  25,  36,  49,  ?",
    options: ["56", "63", "64", "72"],
    answer: 2,
    explanation: "Perfect squares: 1², 2², 3²... 7² = 49, next is 8² = 64.",
  },
  {
    question: "Find the next term:",
    code: "5,  10,  20,  40,  80,  ?",
    options: ["120", "140", "160", "180"],
    answer: 2,
    explanation: "Each number doubles. 80 × 2 = 160.",
  },
  {
    question: "What is the missing number?",
    code: "1,  1,  2,  3,  5,  8,  13,  ?",
    options: ["18", "20", "21", "22"],
    answer: 2,
    explanation: "Fibonacci: each term = sum of previous two. 8 + 13 = 21.",
  },
  {
    question: "What is the next term?",
    code: "2,  3,  6,  18,  108,  ?",
    options: ["648", "432", "540", "720"],
    answer: 0,
    explanation: "Pattern: multiply previous terms. 3 × 6 = 18, 6 × 18 = 108, 18 × 108 = 648.",
  },
  {
    question: "Find the next number:",
    code: "10,  7,  8,  5,  6,  3,  ?",
    options: ["2", "4", "1", "0"],
    answer: 1,
    explanation: "Alternating: -3, +1, -3, +1... So 3 + 1 = 4.",
  },
  {
    question: "Which number fits?",
    code: "4,  6,  9,  13,  18,  ?",
    options: ["22", "24", "25", "26"],
    answer: 1,
    explanation: "Differences: 2, 3, 4, 5, 6... So next is 18 + 6 = 24.",
  },
  {
    question: "What comes next?",
    code: "Z1,  Y2,  X3,  W4,  ?",
    options: ["V5", "U5", "V6", "U6"],
    answer: 0,
    explanation: "Letters backward (Z→Y→X→W→V) and numbers increase (1→2→3→4→5). V5.",
  },
  {
    question: "Find the missing term:",
    code: "AA,  CC,  EE,  GG,  ?",
    options: ["HH", "II", "JJ", "KK"],
    answer: 1,
    explanation: "Letters skip one: A, C, E, G, I. So II.",
  },
  {
    question: "Find the missing value:",
    code: "2   4   6\n3   9   27\n4   16  ?",
    options: ["32", "48", "64", "128"],
    answer: 2,
    explanation: "Row1: ×2, ×1.5 | Row2: ×3, ×3 | Row3: ×4, ×4 → 16 × 4 = 64.",
  },
  {
    question: "What is the missing number?",
    code: "5   10   50\n6   12   72\n7   14   ?",
    options: ["84", "96", "98", "102"],
    answer: 2,
    explanation: "Pattern: first × second = third. 7 × 14 = 98.",
  },
  {
    question: "Which number does NOT belong?",
    code: "121,  144,  169,  196,  225,  250",
    options: ["169", "196", "225", "250"],
    answer: 3,
    explanation: "All others are perfect squares (11² to 15²). 250 is not.",
  },
  {
    question: "Which number breaks the pattern?",
    code: "3,  6,  12,  24,  48,  96,  190",
    options: ["24", "48", "96", "190"],
    answer: 3,
    explanation: "All numbers double. 96 × 2 = 192, not 190.",
  },
];

// Merge aptitude into DATA.quiz
DATA.quiz.push(...APTITUDE);