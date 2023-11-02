const staticCacheName = "site-static";
const staticCacheNameV2 = "site-static-v2";
const assets = ["/"];

const initializeStaticCache = async (cache, assets) => {
  try {
    const cacheInstance = await caches.open(cache);

    await cacheInstance.addAll(assets);
  } catch (error) {
    console.error("Error caching assets:", error);
  }
};

const putInCache = async (cacheName, request, response) => {
  const cache = await caches.open(cacheName);

  await cache.put(request, response);
};

const cacheFirst = async (request, cacheName) => {
  const responseFromCache = await caches.match(request);

  if (responseFromCache) {
    return responseFromCache;
  }

  try {
    const responseFromNetwork = await fetch(request);

    await putInCache(cacheName, request, responseFromNetwork.clone());

    return responseFromNetwork;
  } catch (error) {
    return new Response("Network error happened", {
      status: 500,
      headers: { "Content-Type": "text/plain" },
    });
  }
};

const clearCachesExcept = async (staticCacheName) => {
  const cacheKeys = await caches.keys();

  const deletePromises = cacheKeys.filter((key) => key !== staticCacheName).map((key) => caches.delete(key));

  await Promise.all(deletePromises);
};

// Install service worker
self.addEventListener("install", (evt) => {
  evt.waitUntil(initializeStaticCache(staticCacheName, assets));
  self.skipWaiting();
});

// Activate service worker(event)
self.addEventListener("activate", (evt) => {
  evt.waitUntil(self.clients.claim());

  evt.waitUntil(clearCachesExcept(staticCacheName));
});

// Fetch event
self.addEventListener("fetch", (evt) => {
  evt.respondWith(cacheFirst(evt.request, staticCacheNameV2));
});
