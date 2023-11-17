const staticCacheName = "site-static";
const dynamicCacheName = "site-static-v2";
const assets = [
  "/",
  "/static/js/bundle.js",
  "./index.html",
  "./fallback.html",
  "./favicon.ico",
  "https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic&subset=latin",
  "https://fonts.gstatic.com/s/lato/v24/S6u9w4BMUTPHh6UVSwiPGQ.woff2",
];

const initializePrecache = async (cache, assets) => {
  try {
    const cacheInstance = await caches.open(cache);

    await cacheInstance.addAll(assets);
  } catch (error) {
    throw new Error("Error caching assets:", error);
  }
};

const putInCache = async (cacheName, request, response) => {
  const cache = await caches.open(cacheName);

  const cacheData = await cache.put(request, response);

  return cacheData;
};

const cacheFirst = async (request, cacheName, fallbackUrl) => {
  const responseFromCache = await caches.match(request);

  if (responseFromCache && responseFromCache.ok && responseFromCache.status === 200) {
    return responseFromCache;
  }

  try {
    const responseFromNetwork = await fetch(request);

    if (responseFromNetwork && responseFromNetwork.ok && responseFromNetwork.status === 200) {
      await putInCache(cacheName, request.url, responseFromNetwork.clone());
    }

    return responseFromNetwork;
  } catch (error) {
    const fallbackResponse = await caches.match(fallbackUrl);

    if (fallbackResponse) {
      return fallbackResponse;
    }

    return new Response("Network error happened!", {
      status: 500,
      headers: { "Content-Type": "text/plain" },
    });
  }
};

const clearCaches = async (staticCacheName) => {
  const cacheKeys = await caches.keys();

  const deletePromises = cacheKeys
    .filter((key) => key !== staticCacheName && key !== dynamicCacheName)
    .map((key) => caches.delete(key));

  await Promise.all(deletePromises);
};

// Install service worker
self.addEventListener("install", (evt) => {
  evt.waitUntil(initializePrecache(staticCacheName, assets));
  self.skipWaiting();
});

// Activate service worker(event)
self.addEventListener("activate", (evt) => {
  evt.waitUntil(self.clients.claim());

  evt.waitUntil(clearCaches(staticCacheName));
});

// Fetch event
self.addEventListener("fetch", (evt) => {
  evt.respondWith(cacheFirst(evt.request, dynamicCacheName, "./fallback.html"));
});
