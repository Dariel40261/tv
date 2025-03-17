const CACHE_NAME = 'iptv-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/tv.m3u',
  '/movies.m3u',
  '/series.m3u',
  '/animes.m3u'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});