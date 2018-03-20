const VERSION = 2;

self.addEventListener( 'install', ( event ) => {
	console.log( 'SW:', 'install', 'ver:' + VERSION );
	event.waitUntil( self.skipWaiting() );
} );

self.addEventListener( 'activate', ( event ) => {
	console.log( 'SW:', 'activate' );
	event.waitUntil( self.clients.claim() );
} );

self.addEventListener( 'message', ( event ) => {
	console.info( 'SW:', 'message', event.data );
	event.waitUntil( self.clients.matchAll().then( ( client ) => {
		client[ 0 ].postMessage( { version: VERSION } );
	} ) );
} );
