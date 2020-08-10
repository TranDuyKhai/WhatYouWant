$(function(){

	$('.mv .blockSlide__slide').slick({
		dots: false,
		arrows: true,
		infinite: true,
		slidesToShow: 6,
		slidesToScroll: 1,
		cssEase: 'linear',
		autoplay: false,
		autoplaySpeed: 2000,
		prevArrow: '<a href="#prevArrow" class="btn-arrow btn-arrow-left"><i class="fas fa-chevron-left"></i></a>',
	    nextArrow:'<a href="#nextArrow" class="btn-arrow btn-arrow-right"><i class="fas fa-chevron-right"></i></a>',
	});
	$('.mv .blockSlide__slide').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		slick.$slides.eq(nextSlide).addClass('here');
		console.log(slick);
	});
	$('.category').slick({
		dots: false,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		cssEase: 'linear',
		autoplay: false,
		autoplaySpeed: 2000,
		prevArrow: '<a href="#prevArrow" class="btn-arrow btn-arrow-left"><i class="fas fa-chevron-left"></i></a>',
	    nextArrow:'<a href="#nextArrow" class="btn-arrow btn-arrow-right"><i class="fas fa-chevron-right"></i></a>',
	});
	$('.viewmore').slick({
		dots: false,
		infinite: true,
		slidesToShow: 6,
		slidesToScroll: 1,
		cssEase: 'linear',
		autoplay: false,
		autoplaySpeed: 2000,
		prevArrow: '<a href="#prevArrow" class="btn-arrow btn-arrow-left"><i class="fas fa-chevron-left"></i></a>',
	    nextArrow:'<a href="#nextArrow" class="btn-arrow btn-arrow-right"><i class="fas fa-chevron-right"></i></a>',
	});
	$('.news').slick({
		dots: false,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		cssEase: 'linear',
		autoplay: false,
		autoplaySpeed: 2000,
		prevArrow: '<a href="#prevArrow" class="btn-arrow btn-arrow-left"><i class="fas fa-chevron-left"></i></a>',
	    nextArrow:'<a href="#nextArrow" class="btn-arrow btn-arrow-right"><i class="fas fa-chevron-right"></i></a>',
	});
	$('.events').slick({
		dots: false,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		cssEase: 'linear',
		autoplay: false,
		autoplaySpeed: 2000,
		prevArrow: '<a href="#prevArrow" class="btn-arrow btn-arrow-left"><i class="fas fa-chevron-left"></i></a>',
	    nextArrow:'<a href="#nextArrow" class="btn-arrow btn-arrow-right"><i class="fas fa-chevron-right"></i></a>',
	});
	$('.twoblock').slick({
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		cssEase: 'linear',
		autoplay: false,
		autoplaySpeed: 2000,
		prevArrow: '<a href="#prevArrow" class="btn-arrow btn-arrow-left"><i class="fas fa-chevron-left"></i></a>',
	    nextArrow:'<a href="#nextArrow" class="btn-arrow btn-arrow-right"><i class="fas fa-chevron-right"></i></a>',
	});
	$('.topComment').slick({
		dots: false,
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		cssEase: 'linear',
		autoplay: false,
		autoplaySpeed: 2000,
		prevArrow: '<a href="#prevArrow" class="btn-arrow btn-arrow-left"><i class="fas fa-chevron-left"></i></a>',
	    nextArrow:'<a href="#nextArrow" class="btn-arrow btn-arrow-right"><i class="fas fa-chevron-right"></i></a>',
	});
	$('.showing').slick({
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		cssEase: 'linear',
		autoplay: false,
		autoplaySpeed: 2000,
		prevArrow: '<a href="#prevArrow" class="btn-arrow btn-arrow-left"><i class="fas fa-chevron-left"></i></a>',
	    nextArrow:'<a href="#nextArrow" class="btn-arrow btn-arrow-right"><i class="fas fa-chevron-right"></i></a>',
	});
	$('.oscars .blockSlide__slide').slick({
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		cssEase: 'linear',
		autoplay: false,
		autoplaySpeed: 2000,
		prevArrow: '<a href="#prevArrow" class="btn-arrow btn-arrow-left"><i class="fas fa-chevron-left"></i></a>',
	    nextArrow:'<a href="#nextArrow" class="btn-arrow btn-arrow-right"><i class="fas fa-chevron-right"></i></a>',
	});
});