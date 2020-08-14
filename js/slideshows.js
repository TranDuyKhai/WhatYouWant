$(function(){

	initSlide('.mv .blockSlide__slide', 6, 1, 3, 1);
	changeSlide('.mv .blockSlide__slide');

	initSlide('.category', 4, 1, 3, 1);
	changeSlide('.category');

	initSlide('.viewmore', 6, 1, 3, 1);
	changeSlide('.viewmore');

	initSlide('.news', 3, 1, 3, 1);
	changeSlide('.news');

	initSlide('.events', 3, 1, 3, 1);
	changeSlide('.events');
	
	initSlide('.twoblock', 1, 1, 1, 1);
	changeSlide('.twoblock');
	
	initSlide('.topComment', 2, 1, 2, 1);
	changeSlide('.topComment');
	
	initSlide('.showing', 1, 1, 1, 1);
	changeSlide('.showing');
	
	initSlide('.oscars .blockSlide__slide', 1, 1, 1, 1);
	changeSlide('.oscars .blockSlide__slide');
	

	function changeSlide(element){
		$(element + " .btn-arrow").on('click', function(){
			var n = $(element +" .slick-current").data('slick-index');
			var slick = $(element +' .slick-slide').length - $(element + ' .slick-cloned').length,
			slick_show = $(element +' .slick-active').length;
			if($(this).is('.btn-arrow-left')){
				$.each($(element+' .slick-slide'), function(){
					if($(this).data('slick-index') >= n && $(this).data('slick-index') < n+ slick_show){
						$(this).addClass('dim');
					}
					else{
						$(this).removeClass('dim');
					}
				});
				if(n == (slick-1)){
					$.each($(element + ' .slick-slide'), function(){
						if($(this).data('slick-index') >= -1 && $(this).data('slick-index') < slick_show-2){
							$(this).addClass('dim');
						}
					});
				}
			}else{
				$.each($(element + ' .slick-slide'), function(){
					if($(this).data('slick-index') >= n && $(this).data('slick-index') < n+slick_show){
						$(this).addClass('dim');
					}
					else{
						$(this).removeClass('dim');
					}
				});
				if(n == 0){
					$.each($(element + ' .slick-slide'), function(){
						if($(this).data('slick-index') >= slick && $(this).data('slick-index') < (slick + slick_show - 1)){
							$(this).addClass('dim');
						}
					});
				}
			}
		});
	};
	function initSlide(element, slideToShow, slideToScroll, responsiveSlideToShow, responsiveSlideToScroll){
		$(element).slick({
			dots: false,
			infinite: true,
			slidesToShow: slideToShow,
			slidesToScroll: slideToScroll,
			cssEase: 'linear',
			autoplay: false,
			autoplaySpeed: 2000,
			prevArrow: '<a href="#prevArrow" class="btn-arrow btn-arrow-left"><i class="fas fa-chevron-left"></i></a>',
			nextArrow:'<a href="#nextArrow" class="btn-arrow btn-arrow-right"><i class="fas fa-chevron-right"></i></a>',
			responsive: [
			{
				breakpoint: 1023,
				settings: {
					slidesToShow: responsiveSlideToShow,
					slidesToScroll: responsiveSlideToScroll,
					infinite: true,
				}
			}
			]
		});
	};
});