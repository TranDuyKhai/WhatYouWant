$(function(){
	
	$('.header__navbar__btnSearch').on('click', function(e){
		$('form.search_form').addClass('expand');
		$('.header__navbar__btnSearch').addClass('hide');
	});
	$('form.search_form button').on('click', function(e){
		e.preventDefault();
		if($('form.search_form input').val() != ''){
			$('form.search_form').submit();
		}else{
			$('form.search_form').removeClass('expand');
			$('.header__navbar__btnSearch').removeClass('hide');	
		}
	});
	$('.header__navbar__hamburger').on('click', function(){
		if($(this).is('.active')){
			$(this).removeClass('active');
			$('.header__navbar__menu').removeClass('expand');
		}else{
			$(this).addClass('active');
			$('.header__navbar__menu').addClass('expand');
		}
	});
	$('.user__noti').on('click', function(){
		if($('.header__navbar__notification').is('.expand')){
			$('.header__navbar__notification').removeClass('expand');
			$('.header__navbar__notification').css({'height': 0,'padding-top': 0});
		}else{
			$('.header__navbar__notification').addClass('expand');
			$('.header__navbar__notification').css('height', $('.header__navbar__notification--noti').outerHeight()*$('.header__navbar__notification--noti').length+'px');
		}
	});

	$('#backTop').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({scrollTop: 0}, 'slow');
	});
});