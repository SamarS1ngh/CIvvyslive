'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "3244b5a435eb8d8c90a979e23cc8e1e1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/images/Civvys%2520logo.png": "cc7e86416d3da2ff656ebe00d5ef65a0",
"assets/images/Google.png": "c8bf7c087ca9793d094042845707ffac",
"assets/images/image1.jpg": "ee516a5a8d34b7f0715fa6c146abf374",
"assets/images/image2.jpg": "23e9a7b133930afb33934edc7220e9a6",
"assets/images/image3.jpg": "08b46eea756243169af9b959a070201b",
"assets/images/image4.jpg": "1dbb3a61572df790626b2344e7bbc0d0",
"assets/images/image5.jpg": "cee56e40d1f32726f369d4aed16b76ab",
"assets/images/login.png": "944111541dcd09404da71167e8ffc33c",
"assets/images/man%2520woman%2520onboarding%25203.jpg": "af7ef1ac69c7195d4f5f5091e36e0c91",
"assets/images/products/aot%2520tshirt.jpg": "dea88eafb9ca32d8b695515c44f79916",
"assets/images/products/bakugo%2520tshirt.jpg": "46a7e91e1b34b2a20eb56f4564e25e8f",
"assets/images/products/black%2520hoodie.jpg": "005e63f34f1da981b129105ab4113e9f",
"assets/images/products/black%2520leather%2520jacket.jpg": "fb9184033552b76763efd5fecfcfb59e",
"assets/images/products/black%2520shirt.jpg": "950da753bf4955aef7f93c036ae22eff",
"assets/images/products/dabi%2520tshirt.png": "f9f70007183e6bd0e3cf9cc4b59bddc3",
"assets/images/products/karasuno%2520tshirt.jpg": "715ab9477add0675adba72b3cf02a65b",
"assets/images/products/maroon%2520shirt%2520half.jpg": "477c4159cd82e8789eebf15c6a32a87e",
"assets/images/products/marvel%2520hoodie.png": "892c9cf78df540ccf88b283cd13b259f",
"assets/images/products/men%2520shacket.jpeg": "2670260b95170792fe071e9db135f29c",
"assets/images/products/white%2520hoodie.jpg": "a780a478aa5795df58e9613c95bde393",
"assets/images/products/white%2520women%2520sweatshirt.jpg": "1d0436bcf35a08e67e731c8375a201d2",
"assets/images/products/women%2520hoodie.jpg": "7237cab52199914e71b7804bf73cdca0",
"assets/images/products/women%2520olive%2520shirt.jpg": "3f72f78e13af431e6d5e316240c04544",
"assets/images/products/women%2520shacket%2520long.jpg": "368c23b09dac1d3230dcc7f52a2404e5",
"assets/images/signup.png": "d572f86c1cd4d6f7c98c84f67987cf9c",
"assets/listtileimages/kids.jpg": "7b50296b7e10a91ca9ce8574b4ac347f",
"assets/listtileimages/men.jpeg": "7c223ff0a2a1a5e4808d752b53269ce4",
"assets/listtileimages/sportswear.jpg": "4aa8a713eef105190492fd0e358c7229",
"assets/listtileimages/springwear.JPG": "23607d30ed62d24f0032512db91a16f5",
"assets/listtileimages/teens.jpg": "12b828e603aa1ea14cde92b3171c4cde",
"assets/listtileimages/toddlers.jpeg": "07a2ef52dca45be66137b473b6d8333e",
"assets/listtileimages/winterwear.jpeg": "612f3cc8d396261b9b1a5967976bdede",
"assets/listtileimages/women.jpeg": "31f079254f07398df96d835eeb0ac9be",
"assets/NOTICES": "ef3879adfdf2f526d139e42b378c206d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b8f716486108da40553feade70e94413",
"/": "b8f716486108da40553feade70e94413",
"main.dart.js": "a1f34b52dbff56284696f3c3ea9ee20a",
"manifest.json": "d7bc647b8818ddea605c197a1c9c01e0",
"version.json": "ab8a25b156f02bae9bf98f7b5cafe831"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
