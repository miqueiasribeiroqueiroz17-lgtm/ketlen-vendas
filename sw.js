// Versão gerada automaticamente pelo index.html
// Para forçar atualização, basta mudar o CACHE abaixo
const CACHE = 'ketlen-v5';

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

// Nunca usa cache para o index.html — sempre busca do servidor
self.addEventListener('fetch', e => {
  if (e.request.url.includes('firebaseapp') ||
      e.request.url.includes('googleapis') ||
      e.request.url.includes('gstatic')) return;

  // index.html sempre vai buscar do servidor
  if (e.request.url.includes('index.html') || e.request.url.endsWith('/ketlen-vendas/') || e.request.url.endsWith('/ketlen-vendas')) {
    e.respondWith(fetch(e.request));
    return;
  }

  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
