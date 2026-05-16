// InspectKit Service Worker
// Cache version — increment on every release to force cache refresh
const CACHE_NAME = "inspectkit-cache-v3";

const CACHE_URLS = [
  "./inspectkit-capture.html",
  "./inspectkit-renderer.html",
  "./inspectkit-config.js",
  "./manifest.json",
  "./sw.js",
];

// ─── Install: pre-cache all app shell files ────────────────────────────
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(CACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

// ─── Activate: delete any old cache versions ──────────────────────────
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// ─── Fetch: cache-first, fall back to network ─────────────────────────
self.addEventListener("fetch", event => {
  // Only handle GET requests
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request)
      .then(cached => {
        if (cached) return cached;
        // Not in cache — fetch from network and cache for next time
        return fetch(event.request).then(response => {
          // Only cache valid responses
          if (!response || response.status !== 200 || response.type === "opaque") {
            return response;
          }
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseClone));
          return response;
        });
      })
      .catch(() => {
        // Offline fallback — return cached capture form if available
        return caches.match("./inspectkit-capture.html");
      })
  );
});
