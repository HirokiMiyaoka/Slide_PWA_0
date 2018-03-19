let count = { install: 0, activate: 0 };

self.addEventListener( 'install', ( event ) => {
	console.log( 'SW:', 'install', ++count.install );
	console.log( location );
	event.waitUntil( self.skipWaiting() );
} );

self.addEventListener( 'activate', ( event ) => {
	console.log( 'SW:', 'activate', ++count.activate );
	event.waitUntil( self.clients.claim() );
} );
