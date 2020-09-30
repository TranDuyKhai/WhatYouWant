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
	$('.search_form input:text').on('focus', function(){
		$('.header').is('.active')?$('.header').removeClass():null;
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
	$.each($('.bubble-chart__child__text'), function(){
		var f = $(this).data('fontsize');
		if(f>=18){
			$(this).css({'font-size': f+'px', 'font-weight': 'bold'});
		}else{
			$(this).css('font-size', f+'px');
		}
	});
	var _headerHintIsOpen = 1;
	$('.search_form input').focus(function(){
		_headerHintIsOpen *= -1;
		let _thisParent = $(this).parent();
		_thisParent.hasClass('active')?null:_thisParent.addClass('active');
		let _headerHint = $('.header__hint');
		_headerHint.hasClass('active')?null:_headerHint.addClass('active');
	});
	$('main').click(function(event) {
		if(_headerHintIsOpen == -1){
			let _thisParent = $('.search_form input').parent();
		 	_thisParent.hasClass('active')?_thisParent.removeClass('active'):null;
		 	let _headerHint = $('.header__hint');
		 	_headerHint.hasClass('active')?_headerHint.removeClass('active'):null;
				_headerHintIsOpen *= -1;
		}
	});

	$('#backTop').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({scrollTop: 0}, 'slow');
	});
});