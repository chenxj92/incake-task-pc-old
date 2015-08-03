$(function(){
	//广告位轮播
	$('.taocan-banner').each(function() {
		var count = $(this).find(".swiper-slide").length;
		if (count > 1) {
			var $this = $(this).swiper({
				loop: true, //循环
				autoplay: 3000, //自动播放，不指定默认不播放，单位为ms
				autoplayDisableOnInteraction: false,
				speed: 500
			});
			$(this).hover(function() {
				$this.stopAutoplay();
			}, function() {
				$this.startAutoplay();
			});
		} else {
			$(this).swiper({
				autoplay: false //自动播放，不指定默认不播放，单位为ms
			});
		}
	});
})
