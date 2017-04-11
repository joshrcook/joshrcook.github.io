jQuery( function( $ ) {

	$( '.js-lettering' ).lettering();
	$( '.js-lettering span' ).lettering();
	window.setTimeout( function() {
		$( '.js-splash' ).addClass( 'is-animating' );
		window.setTimeout( function() {
			$( '.splash' ).slideUp();
		}, 3750 );
	}, 1000 );
});