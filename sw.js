const CACHE = 'ketlen-v17';

self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('message', e => {
  if (e.data && e.data.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', e => {
  if (e.request.url.includes('firebaseapp') ||
      e.request.url.includes('googleapis') ||
      e.request.url.includes('gstatic')) return;

  // Nunca cacheia index.html nem sw.js
  if (e.request.url.includes('index.html') ||
      e.request.url.includes('sw.js') ||
      e.request.url.endsWith('/ketlen-vendas/') || 
      e.request.url.endsWith('/ketlen-vendas')) {
    e.respondWith(fetch(e.request));
    return;
  }

  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
