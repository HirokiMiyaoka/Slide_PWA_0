const CACHE_VERSION = 'sample_static-v1';

self.addEventListener( 'install', ( event ) => {
	console.log( 'SW:', 'install' );
	event.waitUntil( caches.open( CACHE_VERSION ).then( ( cache ) => {
		cache.add('/cat.svg');
	} ) );
} );

self.addEventListener( 'activate', ( event ) => {
	console.log( 'SW:', 'activate' );
} );

self.addEventListener( 'fetch', ( event ) => {
	console.log( 'SW:', 'fetch', event.request.url );
	const url = new URL( event.request.url );

	if ( url.origin == location.origin && url.pathname == '/Slide_PWA_0/2_dog2cat/dog.svg' ) {
		event.respondWith( caches.match( '/cat.svg' ) );
	}
} );
