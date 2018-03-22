const VERSION = 12;
let count = 0;

self.addEventListener( 'install', ( event ) => {
	console.log( 'SW:', 'install', 'ver:' + VERSION );
	event.waitUntil( self.skipWaiting() );
} );

self.addEventListener( 'activate', ( event ) => {
	console.log( 'SW:', 'activate' );
	//event.waitUntil( self.clients.claim() );
} );

self.addEventListener( 'message', ( event ) => {
	console.info( 'SW:', 'message', event.data );
	event.waitUntil( self.clients.matchAll().then( ( clients ) => {
		clients.forEach( ( client ) => {
			console.log(client);
			client.postMessage( { version: VERSION, visible: client.visibilityState, count: ++count } );
		} );
	} ) );
} );
