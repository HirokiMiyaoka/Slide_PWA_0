self.addEventListener( 'install', ( event ) => {
	console.log( 'SW:', 'install' );
} );

self.addEventListener( 'activate', ( event ) => {
	console.log( 'SW:', 'activate' );
	event.waitUntil( self.clients.claim() );
} );

self.addEventListener( 'fetch', ( event ) => {
	console.log( 'SW:', 'fetch', event.request.url );
	const url = new URL( event.request.url );

	if ( url.origin == location.origin && url.pathname == '/Slide_PWA_0/3_dog2cat_update/dog.svg' ) {
		//event.respondWith( fetch( '/Slide_PWA_0/3_dog2cat_update/cat.svg' ) );
		event.respondWith( fetch( '/Slide_PWA_0/3_dog2cat_update/bird.svg' ) );
	}
} );
