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
	/*var n = -1,
		lengthSlick = 6;
    $('.btn-arrow').on('click', function(){
    	if($(this).is('.btn-arrow-left')){
    		n--;
    	}else{
    		n++;
    	}
    	$.each($('.slick-slide'), function(){
    		console.log($(this).data('slick-index'));
    		if($(this).data('slick-index') > n && $(this).data('slick-index') <= n + lengthSlick){
    			if($(this).data('slick-index') < 0){

    			}
    			$(this).addClass('dim');
    		}else{
    			$(this).removeClass('dim');
    		}
    	});
    });*/
	$('.mv .blockSlide__slide').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $.each($('.slick-slide'), function(){
	        if($(this).data('slick-index') > currentSlide && $(this).data('slick-index') <= currentSlide + (slick.$slides.length / 2)){
	        	$(this).addClass('dim');
	        }else{
	        	$(this).removeClass('dim');
	        }
        });
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