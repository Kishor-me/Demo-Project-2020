// navbar scroll remove class js 

$(window).scroll(function() {
	if ($(document).scrollTop() > 80) {
	$('.socialheaderlink').addClass('socialheaderlinkNone');
	$('.navbarset').addClass('navbarsetFixed');
		} else {
	$('.socialheaderlink').removeClass('socialheaderlinkNone');
	$('.navbarset').removeClass('navbarsetFixed');
		}
});


// Scroll to Top js here
$(window).scroll(function() {
	if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
		$('#return-to-top').fadeIn(200);    // Fade in the arrow
	} else {
		$('#return-to-top').fadeOut(200);   // Else fade out the arrow
	}
});
$('#return-to-top').click(function() {      // When arrow is clicked
	$('body,html').animate({
		scrollTop : 0                       // Scroll to top of body
	}, 500);
});


// tooltip js here
$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();
});

 // Our City slider js start here
 var base_carousel = $('.ourcity01');
 if (base_carousel.length) {
	 base_carousel.owlCarousel({
		//  loop:true,
		 rewind: true,
		 margin: 20,
		 autoplay:true,
		 autoplayTimeout:6000,
		 autoplayHoverPause:true,
		 singleItem:true,
		 nav:false,
		 dots: false,
		 responsive:{
			 0:{
				 items:1
			 },
			 600:{
				 items:1
			 },
			 767:{
				 items:2
			 },
			 1000:{
				 items:3
			 },
			 1140:{
				 items:4
			 },
			 2000:{
				 items:5
			 },
			 3000:{
				 items:6
			 }
		 }
	 });
 }
$(document).on('click','.ourcityfirst .Previous',function(){
	$(".ourcity01 .owl-prev").trigger('click');
});
   
$(document).on('click','.ourcityfirst .Next',function(){
	$(".ourcity01 .owl-next").trigger('click');
});


// Our City 2 slider js start here
var base_carousel = $('.ourcity02');
if (base_carousel.length) {
	base_carousel.owlCarousel({
	   //  loop:true,
		rewind: true,
		margin: 20,
		autoplay:true,
		autoplayTimeout:6000,
		autoplayHoverPause:true,
		singleItem:true,
		nav:false,
		dots: false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			767:{
				items:2
			},
			1000:{
				items:3
			},
			1140:{
				items:4
			},
			2000:{
				items:5
			},
			3000:{
				items:6
			}
		}
	});
}
$(document).on('click','.ourcitysec .Previous',function(){
   $(".ourcity02 .owl-prev").trigger('click');
});
  
$(document).on('click','.ourcitysec .Next',function(){
   $(".ourcity02 .owl-next").trigger('click');
});
		
// Our City 3 slider js start here
var base_carousel = $('.ourcity03');
if (base_carousel.length) {
	base_carousel.owlCarousel({
	   //  loop:true,
		rewind: true,
		margin: 20,
		autoplay:true,
		autoplayTimeout:6000,
		autoplayHoverPause:true,
		singleItem:true,
		nav:false,
		dots: false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			767:{
				items:2
			},
			1000:{
				items:3
			},
			1140:{
				items:4
			},
			2000:{
				items:5
			},
			3000:{
				items:6
			}
		}
	});
}
$(document).on('click','.ourcitythird .Previous',function(){
   $(".ourcity03 .owl-prev").trigger('click');
});
  
$(document).on('click','.ourcitythird .Next',function(){
   $(".ourcity03 .owl-next").trigger('click');
});

// Our City 4 slider js start here
var base_carousel = $('.ourcity04');
if (base_carousel.length) {
	base_carousel.owlCarousel({
	   //  loop:true,
		rewind: true,
		margin: 20,
		autoplay:true,
		autoplayTimeout:6000,
		autoplayHoverPause:true,
		singleItem:true,
		nav:false,
		dots: false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			767:{
				items:2
			},
			1000:{
				items:3
			},
			1140:{
				items:4
			},
			2000:{
				items:5
			},
			3000:{
				items:6
			}
		}
	});
}
$(document).on('click','.ourcityfour .Previous',function(){
   $(".ourcity04 .owl-prev").trigger('click');
});
  
$(document).on('click','.ourcityfour .Next',function(){
   $(".ourcity04 .owl-next").trigger('click');
});


// Our City 5 slider js start here
var base_carousel = $('.ourcity05');
if (base_carousel.length) {
	base_carousel.owlCarousel({
	   //  loop:true,
		rewind: true,
		margin: 20,
		autoplay:true,
		autoplayTimeout:6000,
		autoplayHoverPause:true,
		singleItem:true,
		nav:false,
		dots: false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			767:{
				items:2
			},
			1000:{
				items:3
			},
			1140:{
				items:4
			},
			2000:{
				items:5
			},
			3000:{
				items:6
			}
		}
	});
}
$(document).on('click','.ourcityfive .Previous',function(){
   $(".ourcity05 .owl-prev").trigger('click');
});
  
$(document).on('click','.ourcityfive .Next',function(){
   $(".ourcity05 .owl-next").trigger('click');
});

// Our City 6 slider js start here
var base_carousel = $('.ourcity06');
if (base_carousel.length) {
	base_carousel.owlCarousel({
	   //  loop:true,
		rewind: true,
		margin: 20,
		autoplay:true,
		autoplayTimeout:6000,
		autoplayHoverPause:true,
		singleItem:true,
		nav:false,
		dots: false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			767:{
				items:2
			},
			1000:{
				items:3
			},
			1140:{
				items:4
			},
			2000:{
				items:5
			},
			3000:{
				items:6
			}
		}
	});
}
$(document).on('click','.ourcitysix .Previous',function(){
   $(".ourcity06 .owl-prev").trigger('click');
});
  
$(document).on('click','.ourcitysix .Next',function(){
   $(".ourcity06 .owl-next").trigger('click');
});



// Our City 6 slider js start here
var base_carousel = $('.ourcity07');
if (base_carousel.length) {
	base_carousel.owlCarousel({
	   //  loop:true,
		rewind: true,
		margin: 20,
		autoplay:true,
		autoplayTimeout:6000,
		autoplayHoverPause:true,
		singleItem:true,
		nav:false,
		dots: false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			767:{
				items:2
			},
			1000:{
				items:3
			},
			1140:{
				items:4
			},
			2000:{
				items:5
			},
			3000:{
				items:6
			}
		}
	});
}
$(document).on('click','.ourcityseven .Previous',function(){
   $(".ourcity07 .owl-prev").trigger('click');
});
  
$(document).on('click','.ourcityseven .Next',function(){
   $(".ourcity07 .owl-next").trigger('click');
});


// Our City 8 slider js start here
var base_carousel = $('.ourcity08');
if (base_carousel.length) {
	base_carousel.owlCarousel({
	   //  loop:true,
		rewind: true,
		margin: 20,
		autoplay:true,
		autoplayTimeout:6000,
		autoplayHoverPause:true,
		singleItem:true,
		nav:false,
		dots: false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			767:{
				items:2
			},
			1000:{
				items:3
			},
			1140:{
				items:4
			},
			2000:{
				items:5
			},
			3000:{
				items:6
			}
		}
	});
}
$(document).on('click','.ourcityeight .Previous',function(){
   $(".ourcity08 .owl-prev").trigger('click');
});
  
$(document).on('click','.ourcityeight .Next',function(){
   $(".ourcity08 .owl-next").trigger('click');
});


// Our City 9 slider js start here
var base_carousel = $('.ourcity09');
if (base_carousel.length) {
	base_carousel.owlCarousel({
	   //  loop:true,
		rewind: true,
		margin: 20,
		autoplay:true,
		autoplayTimeout:6000,
		autoplayHoverPause:true,
		singleItem:true,
		nav:false,
		dots: false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			767:{
				items:2
			},
			1000:{
				items:3
			},
			1140:{
				items:4
			},
			2000:{
				items:5
			},
			3000:{
				items:6
			}
		}
	});
}
$(document).on('click','.ourcitynine .Previous',function(){
   $(".ourcity09 .owl-prev").trigger('click');
});
  
$(document).on('click','.ourcitynine .Next',function(){
   $(".ourcity09 .owl-next").trigger('click');
});