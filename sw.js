const CACHE = 'atelier-color-v02';
const SHELL = [
  './', './index.html', './manifest.json', './catalogo.json',
  './assets/flor.svg', './assets/mariposa.svg', './assets/casa.svg',
  './assets/1-montanas.svg', './assets/2-playa.svg', './assets/3-bosque.svg', './assets/4-faro.svg', './assets/5-zorro.svg', './assets/6-gato.svg', './assets/7-tortuga.svg', './assets/8-buho.svg', './assets/9-ballena.svg', './assets/10-ciervo.svg',
  './icons/icon-192.png', './icons/icon-512.png'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;
  event.respondWith(fetch(event.request).then(response => {
    if (response.ok) caches.open(CACHE).then(cache => cache.put(event.request, response.clone()));
    return response;
  }).catch(() => caches.match(event.request).then(cached => cached || caches.match('./index.html'))));
});
