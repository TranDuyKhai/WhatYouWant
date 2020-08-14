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
	    responsive: [
		    {
		    	breakpoint: 1023,
		    	settings: {
		    		slidesToShow: 3,
		    		slidesToScroll: 1,
		    		infinite: true,
		    	}
		    }
	    ]
	});
	$('.mv .blockSlide__slide').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $.each($('.mv .blockSlide__slide .slick-slide'), function(index){
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
	$('.category').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $.each($('.category .slick-slide'), function(){
	        if($(this).data('slick-index') > currentSlide && $(this).data('slick-index') <= currentSlide + (slick.$slides.length / 2)){
	        	$(this).addClass('dim');
	        }else{
	        	$(this).removeClass('dim');
	        }
        });
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
	$('.viewmore').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $.each($('.viewmore .slick-slide'), function(){
	        if($(this).data('slick-index') > currentSlide && $(this).data('slick-index') <= currentSlide + (slick.$slides.length / 2)){
	        	$(this).addClass('dim');
	        }else{
	        	$(this).removeClass('dim');
	        }
        });
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
	$('.news').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $.each($('.news .slick-slide'), function(){
	        if($(this).data('slick-index') > currentSlide && $(this).data('slick-index') <= currentSlide + (slick.$slides.length / 2)){
	        	$(this).addClass('dim');
	        }else{
	        	$(this).removeClass('dim');
	        }
        });
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
	$('.events').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $.each($('.events .slick-slide'), function(){
	        if($(this).data('slick-index') > currentSlide && $(this).data('slick-index') <= currentSlide + (slick.$slides.length / 2)){
	        	$(this).addClass('dim');
	        }else{
	        	$(this).removeClass('dim');
	        }
        });
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
	$('.topComment').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $.each($('.topComment .slick-slide'), function(){
	        if($(this).data('slick-index') > currentSlide && $(this).data('slick-index') <= currentSlide + (slick.$slides.length / 2)){
	        	$(this).addClass('dim');
	        }else{
	        	$(this).removeClass('dim');
	        }
        });
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
	$('.showing').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $.each($('.showing .slick-slide'), function(){
	        if($(this).data('slick-index') > currentSlide && $(this).data('slick-index') <= currentSlide + (slick.$slides.length / 2)){
	        	$(this).addClass('dim');
	        }else{
	        	$(this).removeClass('dim');
	        }
        });
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
	$('.oscars .blockSlide__slide').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $.each($('.oscars .blockSlide__slide .slick-slide'), function(){
	        if($(this).data('slick-index') > currentSlide && $(this).data('slick-index') <= currentSlide + (slick.$slides.length / 2)){
	        	$(this).addClass('dim');
	        }else{
	        	$(this).removeClass('dim');
	        }
        });
	});
});