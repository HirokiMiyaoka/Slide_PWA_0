self.addEventListener( 'install', ( event ) => {
	console.log( 'SW:', 'install' );
	console.log( location );
} );

self.addEventListener( 'activate', ( event ) => {
	console.log( 'SW:', 'activate' );
} );
