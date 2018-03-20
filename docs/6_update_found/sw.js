const VERSION = 1;
let count = { install: 0, activate: 0 };

self.addEventListener( 'install', ( event ) => {
	console.log( 'SW:', 'install', 'ver:' + VERSION, ++count.install );
	event.waitUntil( self.skipWaiting() );
} );

self.addEventListener( 'activate', ( event ) => {
	console.log( 'SW:', 'activate', ++count.activate );
	event.waitUntil( self.clients.claim() );
} );

self.addEventListener( 'message', ( event ) => {
	console.info( 'SW:', 'message' );
	event.waitUntil( self.clients.matchAll().then( ( client ) => {
		//event.data
		client[ 0 ].postMessage( VERSION );
	} ) );
} );
