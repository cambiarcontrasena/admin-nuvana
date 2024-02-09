'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "9cef39f3f7ed7b075a9f097e2ccfd7ef",
"index.html": "29d0a15c8051f5290bab08986e4aad63",
"/": "29d0a15c8051f5290bab08986e4aad63",
"main.dart.js": "d423814bc6dfe262969ffdb81ac77eac",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"_redirects": "6a02faf7ea2a9584134ffe15779a0e44",
"favicon.png": "2704101cb06ce66e2000356a312be25c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"redes.png": "23d07c49fd4c58a3e3abcd2e018a0a7d",
".git/config": "4242873f4f01c40175349ab141345b40",
".git/objects/95/a71fd27b3fd962fad0fc43fe4c9883ff65634a": "c936b663aa9df66abbf41946d133f815",
".git/objects/0c/933eed334f2a80f33cd146c09f211942365cb3": "40264be56fb2b88d3f1fe2362aeca366",
".git/objects/50/a463356b7d89bc7f17cfe56003eab71b56d8ad": "604dcda5259cee556b0d49cccce957ca",
".git/objects/68/2e3278ae529fa4105e9486f98ef2b7a6310d17": "025425b14ed487ec4018645b3e8b724f",
".git/objects/03/3a068e335463fd8879671b77a77abb58a1f144": "c2bdd2b7b6a75d45e28adca03b2cbb4f",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/6a/4c99ff95e35b18ff6db89926e9d16b59b88654": "e41ecc2d4fc5b4897fb876b1d8a62f1b",
".git/objects/56/6d6a96d8d8b62075f22fffcb63d9a2779b7a8f": "a1d452affc3fd31256ef4dad93f68af1",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/67/c4459e50bd063641fabe42b3367dea5e62e4d8": "bde8b6fad395b5ef5db88a548301a44d",
".git/objects/5a/2cb870393cd7d1a99531dbac96aef411248160": "8f081aa74998ad42de9cdf0b6d9b5e60",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/b4/e08a7c3b83130328f3dfb5025ac3015f233ba5": "0937c908fb8a729038be3674fa03d8d4",
".git/objects/a5/ea1c1deb3a40b8663e5ef8845a19e691635d95": "6fe60bfafe87a122dfe4cf3242f6cc80",
".git/objects/d1/7b06d29ee0266ee2bf933363a47b5c18743b49": "a37ad05349197e83f7bc50917bbeac9a",
".git/objects/e5/4263978095df6f1b68b37afbce5a029390d04a": "9c002086ef250346b3dd4d92a60a7528",
".git/objects/e2/679059db87dc95fd9ad8914e5e1fb341a5eec7": "2c91df4dc187bbf1e4648ca08b1e3aee",
".git/objects/eb/b3ee7d11664b6c9f1fd13fe5ca9a7a63194638": "5f5d65ad9fed0a6f5eb9b1aba924a589",
".git/objects/fb/ba283dfdc0b1d8d43adfc68e822d6bb1a8d351": "8d9208fa48e7dd6bbede0a0ff1d2e02f",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/42/3c2fd2b5bb25621318d8f239a717be4fd231e0": "ab97f0326fe36fdf64be635d4e7cbb53",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/21/1c5fbc06ca9d1e1dcee25d1d49d26027f1ece2": "9e72a44b16883f0275768fd544c01535",
".git/objects/81/be64e8eb7590efca7f3675cb59e7c4b6c03956": "506783649eeeca940b2143ebfd97dce8",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/00/47b8e294fa358f78c800f610824a332ab20828": "0514c375e86bc1b6c93b23aae91ea713",
".git/objects/6e/f251c5b207f5fb8257d7a557ed689805976ed8": "ddd6805a456c344bd3c213c89bbe84b1",
".git/objects/09/f85aec8e9f48c833046a49fa6e583814ff257c": "889fe0b085e257036b2de1dbf7e8d9b6",
".git/objects/5d/e9f17414e753a37c911efd4a63db756b885fca": "7bf52b7e8535569305add86fec538e10",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/30/0efaefa7d2bd34a221ffad6d778922d14bceb1": "d50b8515ecf3b28528b1d55b9128382e",
".git/objects/06/04da7f5ccd3c6064a46424defeef038820c2ad": "9c4dcc49880a52c9d4b60acaaed082fd",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a6/c15ca45699ce5e4d5d8145586cabc7df80f7d1": "898b5c8a81d25d23ccae47c9f68ccbfe",
".git/objects/cd/1a87f2699e5e8628b628e726eff93557f7676c": "ce136353a77ed24898ffde55c0d20313",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/fa/8d8bc2eaa5c60ae655dcc05ae0da519bfb9f5a": "6eba6ffde8410978098bea445a22b9ac",
".git/objects/c2/355af2371817c1343291a7477031de5eff6643": "064ee4e47416dab3cdd3277117ff2fea",
".git/objects/c2/0ca90ce1116d655632b3ab9878fd64c79ac888": "c8ce8b58bf945006458728739e8f1708",
".git/objects/f1/0a07db7cc295bafe4e9a0ceea8417433ecbb20": "12a7bd69cae2b3a46f4545771c01d159",
".git/objects/79/31b3f11f1cc7b4b601f9b7ac1d424d6f7f87d9": "a24cadb98d417d622fa6e07e5187a34c",
".git/objects/83/d22f8647faac6e4f682e80921c58483b03ffd6": "756c8b7e3e2baf37a7082e5326331b98",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/24/f5c14353f1d0b8155861333ace47b9de45227d": "e83db7f5b6100179ed12f2f127a09559",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/15/900f0e6e74d0bed9db5bca085681b8e84bde9d": "ac865706fe50670124aa503638f6e0c0",
".git/objects/1d/69be4dd8f7d0923c44e0bc90d30cb7dcb13c8c": "7b51f120ee5eee0cd6010fe1de7dbd00",
".git/objects/40/8d1161fb142fb4a7c3af3631d3e3f89a5a19ae": "b948ed0fb282aabbbe890c8052c5b239",
".git/objects/47/e8ac1179bcd7107b2956cafed95aca3442d278": "e6486ecc0ad9cc70c395f0fb9aa8eb31",
".git/objects/25/1edb9457b374ca39871f23cb308dbf5a8e3091": "b042b424c00ad3a213be1fdbbe3d3e65",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "aab8751d3e7c90b7abad48dcaa15d6a9",
".git/logs/refs/heads/main": "aab8751d3e7c90b7abad48dcaa15d6a9",
".git/logs/refs/remotes/origin/main": "4a7ac706892f5c31753402ed6e77fd30",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "39f4578775d8ae54c9834790a37c4678",
".git/refs/remotes/origin/main": "39f4578775d8ae54c9834790a37c4678",
".git/index": "47305cef2da0f6e714d16f112ebe7d49",
".git/COMMIT_EDITMSG": "0a4223b3226af1ee4feb64975bba79ba",
"assets/AssetManifest.json": "6a63d78124e412cdf5250f451a21a35b",
"assets/NOTICES": "be9f9f3a1468d12f084e6fcdb720fa31",
"assets/FontManifest.json": "7ca2153d57c68cfb916151ca28a19ef8",
"assets/AssetManifest.bin.json": "8c4a4c2f9e682c1965642135282f276f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "29592d4b62a6841b8c25f261366d637a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f25e8e701660fb45e2a81ff3f43c6d5c",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "258cfb03f86a58a822b886d3f05d59c5",
"assets/fonts/MaterialIcons-Regular.otf": "1e1d7585bee50fe0e9fb007029b12eab",
"assets/assets/audios/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/rive_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/Frame_2.png": "af89553bf31e0cee66e95874d85da3c6",
"assets/assets/images/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/redes.png": "23d07c49fd4c58a3e3abcd2e018a0a7d",
"assets/assets/lottie_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/videos/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/pdfs/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/MyFlutterApp.ttf": "f54e1b3f6fe62f8360b3761f8ea588b1",
"fav.png": "6e6b24b848185aa98b90d82ab5ba903f",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
