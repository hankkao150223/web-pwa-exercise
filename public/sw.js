/* eslint-disable no-restricted-globals */

self.addEventListener('install', function (event) {
  console.log('[Service Worker] Installing Service Worker ...', event);
});

self.addEventListener('activate', function (event) {
  console.log('[Service Worker] Activating Service Worker ...', event);
  return self.clients.claim();
});

self.addEventListener('fetch', function (event) {
  if (
    event.request.cache === 'only-if-cached' &&
    event.request.mode !== 'same-origin'
  ) {
    return;
  }
  console.log('[Service Worker] Fetching something ....', event);
  event.respondWith(fetch(event.request));
});
