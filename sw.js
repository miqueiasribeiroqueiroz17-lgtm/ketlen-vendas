const CACHE = 'ketlen-v4';
const BASE = '/ketlen-vendas';

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

// Sempre busca do servidor, sem cache
self.addEventListener('fetch', e => {
  if (e.request.url.includes('firebaseapp') || 
      e.request.url.includes('googleapis') || 
      e.request.url.includes('gstatic')) return;
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
