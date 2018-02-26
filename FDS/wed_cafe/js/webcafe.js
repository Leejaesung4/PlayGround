$(document).ready(function () {
	// 메인 메뉴 제어를 위한 스크립트
	var main_menu = $('.main-menu > li');
	var sub_menu_last = $('.sub-menu li:last-child a');

	main_menu.hover(function () {
		$(this).find('.sub-menu').toggleClass('sub-menu-active');
	});
	main_menu.focusin(function () {
		$(this).find('.sub-menu').addClass('sub-menu-active');
	});
	sub_menu_last.focusout(function () {
		$(this).parents('.sub-menu').removeClass('sub-menu-active');
	});

	var tab = $('.tab');
	tab.on('click focusin', function () {
		$(this).parent().addClass('board-active')
		.siblings().removeClass('board-active');
	});
});