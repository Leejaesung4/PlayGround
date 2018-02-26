$(document).ready(function() {
	$('.gnb').mouseenter(function() {
        $('#header').stop().animate({height:370},600,'easeOutExpo');
	});
	
	$('#header').mouseleave(function() {
		 $(this).stop().animate({height:103},600,'easeOutExpo');
	});
   	
});