/*
JS to control footer fading
Assumes jQuery.
*/
(function() {

	if(jQuery) {

		var isVisible = false,
			changeVisibility = false,
			scrollY = $(window).scrollTop(),
			$footerLogo = $('[role="contentinfo"] .logo');

		function init() {
			$('html').addClass('js').removeClass('no-js');
			getScroll();
		}

		function getScroll() {
			if( scrollY > 45 ) {
				// change to true only if not already true
				if( isVisible !== true ) {
					isVisible = true;
					changeVisibility = true;
				}
				else {
					changeVisibility = false;
				}
			}
			else {
				if( isVisible !== false ) {
					isVisible = false;
					changeVisibility = true;
				}
				else {
					changeVisibility = false;
				}
			}
	
			if( changeVisibility == true ) {
				toggleFooterLogo();
			}
	
		}

		function toggleFooterLogo() {
			if( isVisible == true ) {
				$footerLogo.animate({
					"opacity": 1,
					"bottom": "0.875em"
				}, 500);
			}
			else {
				$footerLogo.animate({
					"opacity": 0,
					"bottom": 0
				}, 250);
			}
	
		}

		init();

		$(window).bind('scroll', function() {
			scrollY = $(this).scrollTop();
			getScroll();
		});
	
	}
})();
