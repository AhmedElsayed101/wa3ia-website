/*
*****************************************************
*	CUSTOM JS DOCUMENT                              *
*	Single window load event                        *
*   "use strict" mode on                            *
*****************************************************
*/
jQuery.noConflict();

jQuery(window).on("load", function($) {
		"use strict";
		var scrolls = jQuery('a[href^="#"]');
		var preloader = jQuery('.preloader');
		var fancybox =  jQuery('.fancybox');
        var sticky = jQuery(".ae_menu");
		

		 
//*******************************************
// Owl Carousel functions Calling
//*******************************************	 
	owlCarouselInit();  

//*******************************************
// PreLoader On window Load
//*******************************************
		if(preloader.length) {	 
		 preloader.addClass('loader_remove');
	    }

//*******************************************
//  Fancybox
//*******************************************	
	
	if(fancybox.length) {
		 fancybox.fancybox();
	}

	
		if ( sticky.length ) {	
			jQuery(window).scroll(function() {
			if (jQuery(this).scrollTop()>40){
				sticky.addClass('sticky');
			 }else{
			  sticky.removeClass('sticky');
			 }
		 });
		}
		
		if(scrolls.length){
	  scrolls.on('click', function(e) {
   e.preventDefault();
    jQuery('html, body').stop().animate({
    scrollTop: jQuery(jQuery(this).attr('href')).offset().top-50
   }, 1000, 'linear');
  });
			
		}
		
	
		 
});
	

		
//****************************************
// Owl Carousel functions
//****************************************	

    function owlCarouselInit() {
	
	"use strict";	
	
//****************************************
// owl carousels settings
//****************************************
	
		var testimonialslider = jQuery('.testimonial_slider');
		var latestblogslider = jQuery('.latest_blog_slider');
		var partnerslider = jQuery('.partner_slider');
		var nextNav = '<i class="fa fa-angle-right" aria-hidden="true"></i>';
		var prevNav = '<i class="fa fa-angle-left" aria-hidden="true"></i>';


        if(testimonialslider.length) {	
			testimonialslider.owlCarousel({
				loop:true,
				margin:0,
				nav:false,
				navText:[prevNav,nextNav],
				dots:true,
				autoplay:true,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:1
					},
					1000:{
						items:1
					}
				}
			});
			
		}

		if(latestblogslider.length) {	
			latestblogslider.owlCarousel({
				loop:true,
				margin:30,
				nav:false,
				dots:true,
				autoplay:true,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:2
					},
					1000:{
						items:3
						
					}
				}
			});
			
		}
		
    if(partnerslider.length) {	
			partnerslider.owlCarousel({
				loop:true,
				margin:0,
				nav:false,
				navText:[prevNav,nextNav],
				dots:false,
				center: true,
				autoplay:true,
				responsive:{
					0:{
						items:1	
					},
					480:{
						items:2,
						center: false
					},
					600:{
						items:3
					},
					1000:{
						items:5
					}
				}
			});
			
		}
}
/*
*****************************************************
*	END OF THE JS 									*
*	DOCUMENT                       					*
*****************************************************
*/