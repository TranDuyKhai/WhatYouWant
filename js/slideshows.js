$(function(){

	hideSlideMinus('.mv .blockSlide__slide');
	swipeSlide('.mv .blockSlide__slide');
	initSlide('.mv .blockSlide__slide', 6, 1, 3, 1);
	changeSlide('.mv .blockSlide__slide');

	swipeSlide('.category');
	initSlide('.category', 4, 1, 2, 1);
	changeSlide('.category');

	hideSlideMinus('.viewmore');
	swipeSlide('.viewmore');
	initSlide('.viewmore', 6, 1, 3, 1);
	changeSlide('.viewmore');

	swipeSlide('.news');
	initSlide('.news', 3, 1, 1, 1);
	changeSlide('.news');

	swipeSlide('.events');
	initSlide('.events', 3, 1, 1, 1);
	changeSlide('.events');
	
	swipeSlide('.twoblock');
	initSlide('.twoblock', 1, 1, 1, 1);
	changeSlide('.twoblock');
	
	hideSlideMinus('.topComment');
	swipeSlide('.topComment');
	initSlide('.topComment', 2, 1, 1, 1);
	changeSlide('.topComment');
	
	swipeSlide('.showing');
	initSlide('.showing', 1, 1, 1, 1);
	changeSlide('.showing');
	

	$('.oscars__slide--big').slick({
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		cssEase: 'linear',
		autoplay: false,
		autoplaySpeed: 2000,
		prevArrow: '<a href="#prevArrow" class="btn-arrow btn-arrow-left"><i class="fas fa-chevron-left"></i></a>',
		nextArrow:'<a href="#nextArrow" class="btn-arrow btn-arrow-right"><i class="fas fa-chevron-right"></i></a>',
		asNavFor: ".oscars__slide--small",
	});
	$('.oscars__slide--small').on('init', function(event, slick){
		$.each($('.oscars__slide--small .slick-slide'),function(){
			if($(this).data('slick-index') < 0){
				$(this).addClass('op0');
			}
			if($(this).data('slick-index') == 1){
				$(this).addClass('dim');
			}
		});
	});
	$('.oscars__slide--small').slick({
		dots: false,
		arrows: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		cssEase: 'linear',
		autoplay: false,
		autoplaySpeed: 2000,
		asNavFor: ".oscars__slide--big",
	});
	$('.oscars__slide--small').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$('.oscars__slide--small .slick-slide').removeClass('op0 dim');
		$.each($('.oscars__slide--small .slick-slide'),function(){
			if($(this).data('slick-index') <= currentSlide){
				$(this).addClass('op0');
			}
			if($(this).data('slick-index') == nextSlide+1){
				$(this).addClass('dim');
			}
		});
		if(currentSlide == slick.$slides.length - 1){
			$.each($('.oscars__slide--small .slick-slide'),function(){
				if($(this).data('slick-index') == 0 || $(this).data('slick-index') == 1){
					$(this).removeClass('op0');
				}
			});	
		}
	});

	function changeSlide(element){
		$(element + " .btn-arrow").on('click', function(){
			var n = $(element +" .slick-current").data('slick-index');
			var slick = $(element +' .slick-slide').length - $(element + ' .slick-cloned').length,
			slick_show = $(element +' .slick-active').length;
			if($(this).is('.btn-arrow-left')){
				$(element+' .slick-slide').removeClass('op0');
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
	function swipeSlide(element){
		$(element).on('swipe', function(event, slick, direction){
			var n = $(element +" .slick-current").data('slick-index');
			var slick = $(element +' .slick-slide').length - $(element + ' .slick-cloned').length,
			slick_show = $(element +' .slick-active').length;
			if($(this).is('.btn-arrow-left')){
				$(element+' .slick-slide').removeClass('op0');
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
	}
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
	function hideSlideMinus(element){
		$(element).on('init', function(event, slick){
			$.each($(element+' .slick-slide'),function(){
				if($(this).data('slick-index') == -1){
					$(this).addClass('op0');
				}
			});
		});
	}
});