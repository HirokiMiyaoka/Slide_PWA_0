let count = { install: 0, activate: 0 };

sw.addEventListener( 'install', ( event ) => {
	console.log( 'SW:', 'install', ++count.install );
	event.waitUntil( sw.skipWaiting() );
} );

sw.addEventListener( 'activate', ( event ) => {
	console.log( 'SW:', 'activate', ++count.activate );
	event.waitUntil( sw.clients.claim() );
} );
