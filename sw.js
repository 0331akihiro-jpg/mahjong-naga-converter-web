// Generated shell-only cache. User replay data is never cached.
const CACHE = 'haifu-no-hashi-7eee24c4fb4ab962';
const FILES = ["index.html","ipad-guide.html","manifest.webmanifest","icon.svg","icon-192.png","icon-512.png","apple-touch-icon.png","bookmarklet.txt","capture.user.js","demo.msr.json","LICENSE.txt","THIRD_PARTY_NOTICES.md","licenses/AsaChiri-MIT.txt","licenses/Apache-2.0.txt","assets/index-BdIWV-Ae.css","assets/index-D74NB0SR.js"];
const scope = new URL('./', self.location.href);
const allowed = new Set(FILES.map(path => new URL(path, scope).href));
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(FILES.map(path => new URL(path, scope).href))));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('haifu-no-hashi-') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET' || url.origin !== scope.origin || !url.pathname.startsWith(scope.pathname)) return;
  if (event.request.mode === 'navigate') {
    event.respondWith(caches.open(CACHE).then(cache => cache.match(allowed.has(url.href) ? url.href : new URL('index.html', scope).href)).then(hit => hit || fetch(event.request)));
    return;
  }
  if (allowed.has(url.href)) event.respondWith(caches.open(CACHE).then(cache => cache.match(event.request, { ignoreVary: true })).then(hit => hit || fetch(event.request)));
});
