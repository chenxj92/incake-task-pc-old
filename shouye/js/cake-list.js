;$(function(){
	$('.screening-content dd a').click(function(){
		$(this).parents('dd').find('a').removeClass('active');
		$(this).addClass('active')
	})
});
