const VERSION = 2;

self.addEventListener( 'install', ( event ) => {
	console.log( 'SW:', 'install', VERSION );
} );

self.addEventListener( 'activate', ( event ) => {
	console.log( 'SW:', 'activate' );
} );
