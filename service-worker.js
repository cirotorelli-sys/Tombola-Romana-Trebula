const CACHE_NAME = 'tombola-romana-v1';
const urlsToCache = [
  '/index.html',
  '/banco.html',
  '/cartella_1.html',
  '/cartella_2.html',
  '/cartella_3.html',
  '/cartella_4.html',
  '/cartella_5.html',
  '/cartella_6.html',
  '/cartella_7.html',
  '/cartella_8.html',
  '/cartella_9.html',
  '/cartella_10.html',
  '/cartella_11.html',
  '/cartella_12.html',
  '/cartella_13.html',
  '/cartella_14.html',
  '/cartella_15.html',
  '/cartella_16.html',
  '/cartella_17.html',
  '/cartella_18.html',
  '/cartella_19.html',
  '/cartella_20.html',
  '/cartella_21.html',
  '/cartella_22.html',
  '/cartella_23.html',
  '/cartella_24.html',
  '/cartella_25.html',
  '/cartella_26.html',
  '/cartella_27.html',
  '/cartella_28.html',
  '/cartella_29.html',
  '/cartella_30.html',
  '/cartella_31.html',
  '/cartella_32.html',
  '/cartella_33.html',
  '/cartella_34.html',
  '/cartella_35.html',
  '/cartella_36.html',
  '/cartella_37.html',
  '/cartella_38.html',
  '/cartella_39.html',
  '/cartella_40.html',
  '/cartella_41.html',
  '/cartella_42.html',
  '/cartella_43.html',
  '/cartella_44.html',
  '/cartella_45.html',
  '/cartella_46.html',
  '/cartella_47.html',
  '/cartella_48.html',
  '/cartella_49.html',
  '/cartella_50.html',
  '/cartella_51.html',
  '/cartella_52.html',
  '/cartella_53.html',
  '/cartella_54.html',
  '/cartella_55.html',
  '/cartella_56.html',
  '/cartella_57.html',
  '/cartella_58.html',
  '/cartella_59.html',
  '/cartella_60.html',
  '/cartella_61.html',
  '/cartella_62.html',
  '/cartella_63.html',
  '/cartella_64.html',
  '/cartella_65.html',
  '/cartella_66.html',
  '/cartella_67.html',
  '/cartella_68.html',
  '/cartella_69.html',
  '/cartella_70.html',
  '/cartella_71.html',
  '/cartella_72.html',
  '/cartella_73.html',
  '/cartella_74.html',
  '/cartella_75.html',
  '/cartella_76.html',
  '/cartella_77.html',
  '/cartella_78.html',
  '/cartella_79.html',
  '/cartella_80.html',
  '/cartella_81.html',
  '/cartella_82.html',
  '/cartella_83.html',
  '/cartella_84.html',
  '/cartella_85.html',
  '/cartella_86.html',
  '/cartella_87.html',
  '/cartella_88.html',
  '/cartella_89.html',
  '/cartella_90.html'
];

// Installazione del Service Worker
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Cache aperta');
        return cache.addAll(urlsToCache);
      })
  );
});

// Attivazione del Service Worker
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            console.log('Cancellazione cache vecchia:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Intercettazione delle richieste di rete
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - ritorna la risposta dalla cache
        if (response) {
          return response;
        }

        // Clona la richiesta
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          function(response) {
            // Controlla se la risposta è valida
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clona la risposta
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
      .catch(function() {
        // Se sia cache che rete falliscono, mostra una pagina offline
        return caches.match('/index.html');
      })
  );
});
