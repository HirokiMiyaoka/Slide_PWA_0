const DOMAIN = 'sample_static-v';
const CACHE_VERSION = 1;
const CACHE_NAME = DOMAIN + CACHE_VERSION;

self.addEventListener( 'install', ( event ) => {
	console.log( 'SW:', 'install' );
	event.waitUntil( caches.open( CACHE_NAME ).then( ( cache ) => {
		cache.add('/Slide_PWA_0/5_dog2cat_cache/cat.svg');
	} ).then( () => {
		return self.skipWaiting();
	} ) );
} );

self.addEventListener( 'activate', ( event ) => {
	console.log( 'SW:', 'activate' );
	event.waitUntil( caches.keys().then( ( keys ) => {
		return Promise.all(
			keys.filter( ( key ) => {
				return key.indexOf( DOMAIN ) === 0 && key !== CACHE_NAME;
			} ).map( ( key ) => {
				console.log( 'Delete cache:', key );
				return caches.delete( key );
			} )
		);
	} ).then( () => {
		return self.clients.claim();
	} ) );
} );

self.addEventListener( 'fetch', ( event ) => {
	console.log( 'SW:', 'fetch', event.request.url );
	const url = new URL( event.request.url );

	if ( url.origin == location.origin && url.pathname == '/Slide_PWA_0/5_dog2cat_cache/dog.svg' ) {
		event.respondWith( caches.match( '/Slide_PWA_0/5_dog2cat_cache/cat.svg' ) );
	}
} );
