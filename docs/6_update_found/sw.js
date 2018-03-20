const VERSION = 1;
let count = { install: 0, activate: 0 };

self.addEventListener( 'install', ( event ) => {
	console.log( 'SW:', 'install', 'ver:' + VERSION, ++count.install );
	event.waitUntil( self.clients.claim() );
} );

self.addEventListener( 'activate', ( event ) => {
	console.log( 'SW:', 'activate', ++count.activate );
	event.waitUntil( self.clients.claim() );
} );
