$(function() {
	//画影蛋糕展示
	$('.huaying-innerbox').each(function() {
		var count = $(this).find(".swiper-slide").length;
		if (count > 1) {
			var $this = $(this).swiper({
				pagination: '.pagination-huaying',
				paginationClickable: true,
				onlyExternal: true
			});
		} else {
			$(this).swiper({
				autoplay: false //自动播放，不指定默认不播放，单位为ms
			});
		}
	});
	//关闭画影图片
	$(".preview").click(function() {
		var imgsrc = $("#imgup").attr("src");
		$(".ui_popup").hide();
		$("#imagesup").popupFn();
	});
})