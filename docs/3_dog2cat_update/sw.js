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

	if ( url.origin == location.origin && url.pathname == '/Slide_PWA_0/2_dog2cat/dog.svg' ) {
		event.respondWith( fetch( '/Slide_PWA_0/2_dog2cat/cat.svg' ).then( ( response ) => {
			return response;
		} ) );
	}
} );
