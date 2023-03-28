$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('.scroll').fadeIn();
    } else {
        $('.scroll').fadeOut();
    }
});

$( '.scroll' ).click( function() {
	$( 'html, body' ).animate( { scrollTop : 0 }, 400 );
	return false;
} );

