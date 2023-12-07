'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "2499435fc89a8f84a43061f2fe170de7",
"assets/AssetManifest.json": "3799db10839bcfe7158863bbd9aa4b75",
"assets/assets/Ab%2520Kon%2520Kahe%2520Tum%2520Se.pdf": "90580e82ce5f9976ba86370632f8cd1e",
"assets/assets/Kin%2520Logon%2520Main%2520Chor%2520Gaye%2520Ho.pdf": "ea46999aebbd27951ea5c83c20e44d21",
"assets/assets/Sun%2520Sanson%2520k%2520Sultan%2520Piya.pdf": "1fed6bc2609b0b349b971530a27b1425",
"assets/assets/Teri%2520Awaz%2520Mojiza%2520Kar%2520De.pdf": "3231589a2f258a7625db9a7b152f5cc2",
"assets/database/zainshakeelhivedb.hive": "aabb8a66599e03cd312668698d4ea808",
"assets/FontManifest.json": "1c6978df90c9ed0944c797ffccee8a2b",
"assets/fonts/MaterialIcons-Regular.otf": "e0dcc424eb4a6f60f1cadf6f32814101",
"assets/fonts/MehrNastaliqWebRegular.ttf": "6494901bb738a94414f0ecaf3d212f27",
"assets/fonts/RobotoRegular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/icons/adsfree.png": "d5e10e612313350fb2b3a3bf10914c70",
"assets/icons/circle_logo.png": "90fa02f11b7621a097986c43f5c2e7b5",
"assets/icons/home_unicode.png": "b73f5f57a1053a5a21e14aff40e37f56",
"assets/icons/ic_admin.png": "7ced4a77a93b51088a8c2544cba1edb6",
"assets/icons/ic_app_logo_d1.png": "9e4152fd9eae5e0919d0de328815a2c4",
"assets/icons/ic_app_logo_d2.png": "9bbd4e1499add2432659b8c22f8b1944",
"assets/icons/ic_app_logo_d3.png": "aacb5444feca7ba163f292c0a417a925",
"assets/icons/ic_audio_books.png": "7ddcc80a8a6cc922db9939fde07628f9",
"assets/icons/ic_books.png": "93cd8b75b109392a0d0a6cb2e8edcb2a",
"assets/icons/ic_books1.png": "643431420592ace4cfc8e8917e429d73",
"assets/icons/ic_facebook.png": "9e419c7394232881b9314462d1624c73",
"assets/icons/ic_gallery.png": "d1c916f78f6ba982a1679135eca41b99",
"assets/icons/ic_insta.png": "6b3f428fe4ef77356f5c77402658f484",
"assets/icons/ic_lughat.png": "5786d1ad21097474a903ec2204191645",
"assets/icons/ic_lughat1.png": "25b299bfcff4d98fea1089bd23119361",
"assets/icons/ic_lughat_n.png": "006c6b03a3919ab16e20da6799c7ea1a",
"assets/icons/ic_pdf.png": "5c29f8b0b478ea706c5fc3bb146e195c",
"assets/icons/ic_pdf_n1.png": "ef1d824f4af246c879881e49506629e1",
"assets/icons/ic_pdf_n2.png": "e6634873bb9e55a5f41f7fe70d75c7cf",
"assets/icons/ic_pdf_n3.png": "35e5d2367d305d0dda2939eda847daa3",
"assets/icons/ic_pdf_n4.png": "faa37dee70b5c4b140a20644226d795d",
"assets/icons/ic_search.png": "aa3e17d573b65370e3261c466dbcd036",
"assets/icons/ic_search_n.png": "6029b3803889957b77bac60d3d4b0540",
"assets/icons/ic_twitter.png": "2b67c20e015189221bbd07d99f229132",
"assets/icons/ic_videos.png": "2a2971137771f67b185122495b2390d0",
"assets/icons/ic_whatsapp.png": "8bcb6b0a8a64a7c566133be479dfe760",
"assets/icons/ic_whatsappgroup.png": "beb45c39fef6e9781e157ef2a7b4e7a4",
"assets/icons/ic_youtube.png": "259315b7472e55642e9387ff28df2097",
"assets/icons/ic_youtube1.png": "391badcb0d9002ddd11511c565fb7299",
"assets/icons/ic_yt.png": "7897ff28669f5468e5bf50e8daaaa5a8",
"assets/icons/offline_pdf.png": "43447e66c00f33f03b006610accc748f",
"assets/icons/zic_facebook.png": "9b57d807a057f2f920104f8a57a0dc6d",
"assets/icons/zic_insta.png": "edee0823d947d8826751ea63299a2a3c",
"assets/icons/zic_linkedin.png": "05bc8fe22da6164e7a06af93d74e328d",
"assets/icons/zic_snapchat.png": "4a819825f542d90e59eb2255ec832c7d",
"assets/icons/zic_twitter.png": "f948b78c9d1961a9d2d67b2d712de658",
"assets/icons/zic_whatsapp.png": "247b861b68ebab2383325d1c83633921",
"assets/icons/zic_youtube.png": "9bb53f815ee5d655ac4d0c7509c2597d",
"assets/images/ab_kon_kahe_tum_se.png": "e68b6aa85cb64de9a8d119d1011390ea",
"assets/images/add_image.png": "5865ec546ce5fdafe56fa982886868f7",
"assets/images/admin_zain.jpg": "4288d93cd1c445734ae52d1cd6dad437",
"assets/images/developer_image.png": "50127070ba83a9d9fd9a62c1e221c2fe",
"assets/images/developer_image1.png": "d5fe6eb282a9d7fefd0c66d27776d208",
"assets/images/developer_image2.png": "194cd232f1ad4511d12c83e95f2f4e8f",
"assets/images/dev_dp.png": "9ef2f1422236e0430b41a136da8a7718",
"assets/images/drawer_Icon.jpg": "19cf8f221072c468b89c7653bd0509f8",
"assets/images/intro_image.png": "df1026e5add67eca934b810e597144be",
"assets/images/intro_img.jpg": "91bf9207dd7826a4975f820196d33240",
"assets/images/kin_logon_main.png": "4e0162fef7b368de4769941c1ebee89a",
"assets/images/splash_bg.jpg": "4f536b049bb8e12220418506df6b171f",
"assets/images/splash_bg_web.jpg": "98b33f14c67988a8b4706205254bb792",
"assets/images/sun_sanson_k_sultan.png": "df022634c991ea70c1f846e426fba169",
"assets/images/teri_awaz_mojiza_kar_de.png": "e88a496eab599a8ed712a42e6d6e42c2",
"assets/NOTICES": "fc0ada282ddad6ac3f887b3679ca274c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "3369f0f48f765c2dafd6f1342ca6e876",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "e40fcbeab6a013859e70485511435ae1",
"icons/Icon-512.png": "c81827fd556e1406d80fe942f265a000",
"icons/Icon-maskable-192.png": "2912332ed04efe6be7ecab94fcc872c2",
"icons/Icon-maskable-512.png": "ff8adfaabc31863320953a22ba75fb21",
"index.html": "0a53c3fa26f5c18dfa490d3b85c26426",
"/": "0a53c3fa26f5c18dfa490d3b85c26426",
"main.dart.js": "f37cf064ad8bd17104f0f5b2cccf2bba",
"manifest.json": "5942838f633bb88ba2507509c399b196",
"version.json": "95edcad0bfb60f2f23a576c93e36266f"};
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
