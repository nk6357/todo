// sw.js - Оптимизированный Service Worker для iOS
const CACHE_VERSION = 'v4';
const CACHE_NAME = `ege-app-${CACHE_VERSION}`;
const OFFLINE_PAGE = './offline.html';

// Все файлы, которые нужно кэшировать для работы приложения
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './analytics.html',
  './russian.html',
  './math.html',
  './informatics.html',
  './offline.html',
  './manifest.json',
  './theme.js',
  './sw.js',
  './js/jspdf.umd.min.js',
  './fonts/NotoSans-Regular.ttf',
  './fonts/NotoSans-Bold.ttf',
  './icons/icon-192x192.png',
  './icons/icon-512x512.png'
];

// Установка Service Worker
self.addEventListener('install', event => {
  console.log('[SW] Installing Service Worker...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW] Caching app shell');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .catch(err => console.error('[SW] Install error:', err))
      .then(() => self.skipWaiting())
  );
});

// Активация Service Worker
self.addEventListener('activate', event => {
  console.log('[SW] Activating Service Worker...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME)
          .map(name => {
            console.log('[SW] Deleting old cache:', name);
            return caches.delete(name);
          })
      );
    })
      .then(() => {
        console.log('[SW] Claiming clients');
        return self.clients.claim();
      })
  );
});

// Перехват запросов (Fetch)
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Пропускаем внешние запросы и non-GET запросы
  if (url.origin !== location.origin) {
    return;
  }

  // Для навигационных запросов (переходы между страницами)
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then(response => {
          if (response && response.status === 200) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(request, responseClone);
            });
          }
          return response;
        })
        .catch(() => {
          return caches.match(request)
            .then(cached => cached || caches.match(OFFLINE_PAGE));
        })
    );
    return;
  }

  // Для HTML-файлов - Network First (проверяем интернет сначала)
  if (request.headers.get('Accept')?.includes('text/html')) {
    event.respondWith(
      fetch(request)
        .then(response => {
          if (response && response.status === 200) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(request, responseClone);
            });
          }
          return response;
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  // Для всех остальных ресурсов (CSS, JS, изображения) - Cache First
  event.respondWith(
    caches.match(request)
      .then(cached => {
        if (cached) {
          return cached;
        }
        return fetch(request)
          .then(response => {
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(request, responseClone);
            });
            return response;
          });
      })
      .catch(() => {
        // Возвращаем заглушку для изображений
        if (request.destination === 'image') {
          return caches.match('./icons/icon-192x192.png');
        }
      })
  );
});

// Обработка сообщений от приложения
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    console.log('[SW] Skipping waiting and updating');
    self.skipWaiting();
  }
  if (event.data && event.data.type === 'CLEAR_CACHE') {
    caches.keys().then(names => {
      names.forEach(name => caches.delete(name));
    });
  }
});

// Синхронизация в фоне (для данных localStorage)
self.addEventListener('sync', event => {
  if (event.tag === 'sync-data') {
    event.waitUntil(
      (async () => {
        // Здесь можно добавить логику синхронизации данных
        console.log('[SW] Background sync triggered');
      })()
    );
  }
});
