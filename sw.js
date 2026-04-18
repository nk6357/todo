// sw.js

// Кэшируем важные файлы, чтобы приложение работало даже без интернета
const CACHE_NAME = 'ege-app-v1';
const urlsToCache = [
  './',
  './index.html',
  './russian.html',
  './math.html',
  './informatics.html',
  './manifest.json',
  './theme.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
