self.addEventListener( 'install', ( event ) => {
	console.log( 'SW:', 'install' );
	event.waitUntil( self.skipWaiting() );
} );

self.addEventListener( 'activate', ( event ) => {
	console.log( 'SW:', 'activate' );
	event.waitUntil( self.clients.claim() );
} );

self.addEventListener( 'fetch', ( event ) => {
	console.log( 'SW:', 'fetch', event.request.url );
	const url = new URL( event.request.url );

	if ( url.origin == location.origin && url.pathname == '/Slide_PWA_0/4_dog2cat_omake/dog.svg' ) {
		event.respondWith( fetch( '/Slide_PWA_0/4_dog2cat_omake/cat.svg' ) );
	}
} );
