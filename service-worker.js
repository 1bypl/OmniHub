const CACHE = 'omnihub-v12';
const ASSETS = [
    './',
    './index.html',
    './style.css',
    './app.js',
    './data-seed.js',
    './data.json',
    './manifest.json',
    './favicon.svg',
    './favicon.ico',
    './icon.svg'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE)
            .then(cache => cache.addAll(ASSETS))
            .catch(error => console.warn('OmniHub cache install:', error))
    );
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(key => key.startsWith('omnihub-') && key !== CACHE)
                .map(key => caches.delete(key)))
        )
    );
    self.clients.claim();
});

self.addEventListener('fetch', event => {
    const request = event.request;
    if(request.method !== 'GET') return;
    const url = new URL(request.url);
    if(url.origin !== self.location.origin) return;

    if(url.pathname.endsWith('/data.json')) {
        event.respondWith(
            fetch(request).then(response => {
                if(response.ok) {
                    const copy = response.clone();
                    caches.open(CACHE).then(cache => cache.put(request, copy)).catch(() => {});
                }
                return response;
            }).catch(() => caches.match(request))
        );
        return;
    }

    if(request.mode === 'navigate') {
        event.respondWith(
            fetch(request).then(response => response).catch(() => caches.match('./index.html'))
        );
        return;
    }

    event.respondWith(
        caches.match(request).then(cached => cached || fetch(request).then(response => {
            if(response.ok && response.type === 'basic') {
                const copy = response.clone();
                caches.open(CACHE).then(cache => cache.put(request, copy)).catch(() => {});
            }
            return response;
        }))
    );
});
