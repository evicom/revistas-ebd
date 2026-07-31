const CACHE_NAME = "revista-ebd-v1";

const FILES_TO_CACHE = [
    "./",
    "./index.html",
    "./manifest.json",
    "./icon-192.png",
    "./icon-512.png"
];

// Instala
self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(FILES_TO_CACHE))
    );

    self.skipWaiting();
});

// Ativa
self.addEventListener("activate", event => {

    event.waitUntil(

        caches.keys().then(keys => {

            return Promise.all(

                keys.map(key => {

                    if(key !== CACHE_NAME){

                        return caches.delete(key);

                    }

                })

            );

        })

    );

    self.clients.claim();

});

// Busca
self.addEventListener("fetch", event => {

    event.respondWith(

        caches.match(event.request)

        .then(response => {

            return response ||

                fetch(event.request)

                .then(networkResponse => {

                    if(event.request.method === "GET"){

                        const responseClone = networkResponse.clone();

                        caches.open(CACHE_NAME)

                        .then(cache => {

                            cache.put(event.request, responseClone);

                        });

                    }

                    return networkResponse;

                })

                .catch(() => {

                    return caches.match("./index.html");

                });

        })

    );

});
