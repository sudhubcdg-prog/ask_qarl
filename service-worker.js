const CACHE_NAME = "qarl-app-v1";

const urlsToCache = [
  "/",
  "/index.html",
  "/agent.png",
  "/logo.png",
  "/qr-left1.png",
  "/qr-left2.png",
  "/qr-android.png",
  "/qr-ios.png"
];

// Install (cache files)
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Fetch (serve from cache if offline)
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
