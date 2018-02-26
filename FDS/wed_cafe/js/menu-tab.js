$(document).ready(function() {
  var menu = $('.main-menu > li');
  var span = $('.main-menu span');
  var last_item = $('.sub-menu li:last-child a');
  var first_item = $('.sun-menu li:first-child a');
  var board = $('.board h2');

  menu.hover(function() {
    $(this).find('.sub-menu').toggleClass('sub-menu-active');
  });

  span.focusin(function() {
    $(this).siblings('.sub-menu').addClass('sub-menu-active');
  });

  // span.focusout(function() {
  //   $(this).siblings('.sub-menu').removeClass('sub-menu-active');
  // });

  last_item.focusout(function() {
    $(this).parents().removeClass('sub-menu-active');
  });

  span.keydown(function(e) {
    if (e.which == 9 && e.shiftKey)
      $(this).siblings('.sub-menu').removeClass('sub-menu-active');
  });


  // 공지사항 자료실
  var tab = $('.board h2');

  // tab.click(function() {
  //   $(this).parent().addClass('board-active')
  //     .siblings().removeClass('board-active');
  // });

  // tab.focusin(function() {
  //   $(this).parent().addClass('board-active')
  //     .siblings().removeClass('board-active');
  // });

  tab.on('click focusin', function() {
    $(this).parent().addClass('board-active')
      .siblings().removeClass('board-active');
  });

});