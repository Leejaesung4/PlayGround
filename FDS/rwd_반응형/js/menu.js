$(document).ready(function() {

  var container = $('.menubar-container');
  var btn_menubar = $('.btn-menubar, .menubar');
  var btn = $('.btn-menubar');
  var menubar = $('.menubar');
  var menu = $('.main-menu');
  var last_item = $('.main-menu > li:last-child  li:last-child a');

  btn_menubar.on('click', function() {
    menu.toggleClass('menu-act');
    if (menu.hasClass('menu-act')) {
      btn.text('메인메뉴 닫기');
    } else {
      btn.text('메인메뉴 열기');
    }
  });

  btn_menubar.on('click', function() {
    container.toggleClass('menubar-act');
  });

  last_item.on('focusout', function() {
    menu.removeClass('menu-act');
    container.removeClass('menubar-act');
  });
});