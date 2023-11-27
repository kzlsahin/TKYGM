/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
 http://www.apache.org/licenses/LICENSE-2.0
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

// Names of the two caches used in this version of the service worker.
// Change to v2, etc. when you update any of the local resources, which will
// in turn trigger the install event again.
const PRECACHE = 'precache-v0.15';
const RUNTIME = 'runtime';
const BASEURL = `https://kzlsahin.online/TKYGM/ITDK-v1`;

// A list of local resources we always want to be cached.
const PRECACHE_URLS = [
    BASEURL + '/',
    BASEURL + '/css/style.v.0.3.css',
    BASEURL + '/css/SurveyFormStyle.v.0.3.css',
    BASEURL + '/css/ControlWidgetStyle.v.0.1.css',
    BASEURL + '/images/UAB_Logo.png',
    BASEURL + '/images/UAB-antet.jpg',
    BASEURL + '/images/camera_icon.svg',
    BASEURL + '/js/app.v.0.5.js',
    BASEURL + '/js/core.v.0.1.js',    
    BASEURL + '/js/components.v.0.4.js',
    BASEURL + '/js/SurveyForm.v.0.5.js',
    BASEURL + '/js/FileManager.v.0.1.js',
    BASEURL + '/lib/jszip.js',
    BASEURL + '/lib/FileSaver.js',
    './manifest.webmanifest',
];

// The install handler takes care of precaching the resources we always need.
self.addEventListener('install', event => {

    event.waitUntil(
        caches.keys().then(function (names) {
            for (let name of names)
                caches.delete(name);
        }).then(
            caches.open(PRECACHE)
                .then(cache => cache.addAll(PRECACHE_URLS)).then(self.skipWaiting())
        ));
}
);


// The activate handler takes care of cleaning up old caches.
self.addEventListener('activate', event => {
    const currentCaches = [PRECACHE, RUNTIME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
        }).then(cachesToDelete => {
            return Promise.all(cachesToDelete.map(cacheToDelete => {
                return caches.delete(cacheToDelete);
            }));
        }).then(() => self.clients.claim())
    );

    event.waitUntil(
        async function () {
            if (self.registration.navigationPreload) {

                // Enable navigation preloads!
                await self.registration.navigationPreload.enable();
            }
        });
});

// The fetch handler serves responses for same-origin resources from a cache.
// If no response is found, it populates the runtime cache with the response
// from the network before returning it to the page.
self.addEventListener('fetch', event => {
    // Skip cross-origin requests, like those for Google Analytics.

    event.respondWith(
        caches.match(event.request).then(cachedResponse => {
            if (cachedResponse) {
                return cachedResponse;
            }

            return caches.open(RUNTIME).then(cache => {
                return fetch(event.request).then(response => {
                    // Put a copy of the response in the runtime cache.
                    return cache.put(event.request, response.clone()).then(() => {
                        return response;
                    });
                });
            });
        })
    );
});