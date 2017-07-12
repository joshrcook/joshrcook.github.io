jQuery( function( $ ) {

	$( '.js-lettering' ).lettering();
	$( '.js-lettering span' ).lettering();
	window.setTimeout( function() {
		$( '.js-splash' ).addClass( 'is-animating' );
		window.setTimeout( function() {
			$( '.splash' ).slideUp();
		}, 3750 );
	}, 1000 );

	$( '.js-show-apply' ).click( function() {
		$( '#apply-for-strategy-modal' ).addClass( 'is-active' );
	});

	$( document ).on( 'click', '.modal-close', function() {
		var modal = $( this ).closest( '.modal' );
		modal.removeClass( 'is-active' );
		modal.find( '.step-1' ).show();
		modal.find( '.step-2' ).hide();
	});

	$( document ).on( 'submit', 'form', function( e ) {
		e.preventDefault();
		var modal = $( this ).closest( '.modal' );
		modal.find( '.step-1' ).hide();
		modal.find( '.step-2' ).show();
		$( this ).get( 0 ).reset();
	});
});