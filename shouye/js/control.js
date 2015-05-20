$(function() {
	$(".buynow").click(function() {
		var price = $(this).parents(".fnn_top").find(".buynow").attr("price");
		var proid = $(this).parents(".fnn_top").find(".buynow").attr("proid");
		var salnum = $(this).parents(".fnn_top").find(".buynow").attr("salnum");
		var begintime = $(this).parents(".fnn_top").find(".buynow").attr("begintime");
		var endtime = $(this).parents(".fnn_top").find(".buynow").attr("endtime");
		var num = $(this).parents(".fnn_top").find(".buynow").attr("qid");
		var cid = $(this).parents(".fnn_top").find(".buynow").attr("cid");
		var pang = $(this).parents(".fnn_top").find(".buynow").attr("qgpang");
		var cake = proid + "-" + pang + "-1";
		if (qianggou(begintime, endtime)) {
			if (salnum == "0") {
				$(".ui_popupover").hide();
				$("#coupon_tureover").popupFn();
				// alert("该蛋糕已抢购完");
			} else {
				$.ajax({
					url: "../WebPage/SaveInfo.aspx",
					dataType: "json",
					type: "post",
					timeout: "10000",
					data: {
						"type": "_paniccar",
						"_cake": cake,
						"_cid": cid,
						"numid": num,
						"Qgbegintime": begintime,
						"Qgendtime": endtime
					},
					success: function(data) {
						if (data.msg == "加入购物车成功") {
							if ($("#hid").val() == "1") {
								//location.href = "/manage/buycart.html";
							} else {
								location.href = "/PanicFirOrder.html";
							}
						} else if (data.msg == "1") {
							$(".ui_popupone").hide();
							$("#coupon_tureone").popupFn();
							//alert("此蛋糕每个用户只能抢购一个");
						} else {
							CommenMsg(data.msg);
						}
					},
					error: function() {
						CommenMsg("网络错误！");
					}
				});
			}
		}
	})
});
var qianggou = function(begintime, endtime) {
	//            alert(begintime + ":" + endtime);
	var time_start = new Date(begintime).getTime();
	//当前时间
	var time_now = new Date().getTime();
	var time = new Date().getTime();
	//结束时间
	var time_end = new Date(endtime).getTime();
	if (time_now < time_start) {
		//alert("该活动正在筹备中，请耐心等待！");
		$(".ui_popup").hide();
		$("#coupon_ture").popupFn();
		return false;
	} else if (time_now > time_end) {
		//alert("本次抢购已经结束,请下次再来抢购！");
		$(".ui_popupend").hide();
		$("#coupon_tureend").popupFn();
		return false;
	}
	return true;
}
$(function() {
	$(".Afternoon_tea li a").mousemove(function() {
		$(".Afternoon_tea li div").show();
	});
})

function countDown(date_start, date_end, id, num) {
		var hour_elem1 = $(id).find('.hour1'),
			hour_elem2 = $(id).find('.hour2'),
			minute_elem1 = $(id).find('.minute1'),
			minute_elem2 = $(id).find('.minute2'),
			second_elem1 = $(id).find('.second1'),
			second_elem2 = $(id).find('.second2');
		if (parseInt(num) <= 0) {
			$("#state").text('本次秒杀已抢完');
			return;
		}
		// 开始时间
		var time_start = new Date(date_start).getTime();
		// 开始时间
		var time_end = new Date(date_end).getTime();
		// 当前时间
		var time_now = new Date().getTime();
		// 计算剩余多少秒开始
		var sys_second = 0;
		if (time_now < time_start) {
			$("#state").text('距离下次开始还有');
			sys_second = (time_start - time_now) / 1000;
		} else if (time_now < time_end) {
			$("#state").text('距离本次结束还有');
			sys_second = (time_end - time_now) / 1000;
		} else {
			$("#state").text('本次抢购已经结束');
		}
		var timer = setInterval(function() {
			if (sys_second > 1) {
				sys_second -= 1;
				var hour = Math.floor(sys_second / 3600);
				var minute = Math.floor((sys_second / 60) % 60);
				var second = Math.floor(sys_second % 60);
				if (hour < 10) {
					$(hour_elem1).text('0');
					$(hour_elem2).text(hour);
				} else {
					hour += '';
					var hour1 = hour.substring(0, 1),
						hour2 = hour.substring(1);
					$(hour_elem1).text(hour1);
					$(hour_elem2).text(hour2);
				}
				if (minute < 10) {
					$(minute_elem1).text('0');
					$(minute_elem2).text(minute);
				} else {
					minute += '';
					var num1 = minute.substring(0, 1),
						num2 = minute.substring(1);
					$(minute_elem1).text(num1);
					$(minute_elem2).text(num2);
				}
				if (second < 10) {
					$(second_elem1).text('0');
					$(second_elem2).text(second);
				} else {
					second += '';
					var num1 = second.substring(0, 1),
						num2 = second.substring(1);
					$(second_elem1).text(num1);
					$(second_elem2).text(num2);
				}
			} else {
				if (time_now < time_start) {
					$("#state").text('活动已开始请刷新');
				} else if (time_now < time_end) {
					$("#state").text('本次抢购已经结束');
				}
				clearInterval(timer);
			}
		}, 1000);
	};
	//自定义信息提示

function CommenMsg(msg) {
	$(".ui_popup").hide();
	$("#coupon_turemsg").popupFn();
	$("#commenmsg").html(msg);
};
$(function() {
	$(".float_banner .box_close").click(function() {
		$(".float_banner").hide();
	})
});


;$(function() {
	//首页轮播
	$('.main_banner').each(function(index) {
		var count = $(this).find(".swiper-slide").length;
		if (count > 1) {
			var $this = $(this).swiper({
				pagination: '.pagination' + index, //分页标记
				loop: true, //循环
				autoplay: 5000, //自动播放，不指定默认不播放，单位为ms
				autoplayDisableOnInteraction: false,
				speed: 1000,
				paginationClickable: true //分页标记是否可点击
			});
			//向左翻页
			$(this).find('.arrow-left').on('click', function(e) {
				e.preventDefault() //阻止默认的
				$this.swipePrev() //前一个
			});
			//向右翻页
			$(this).find('.arrow-right').on('click', function(e) {
				e.preventDefault() //阻止默认的
				$this.swipeNext() //后一个
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
			$(this).find('.arrow-left').hide();
			$(this).find('.arrow-right').hide();
		}
	});

	//秒杀轮播
	$('.kill_banner').each(function() {
		var count = $(this).find(".swiper-slide").length;
		if (count > 1) {
			var $this = $(this).swiper({
				loop: true, //循环
				autoplay: 3000, //自动播放，不指定默认不播放，单位为ms
				autoplayDisableOnInteraction: false,
				speed: 500
			});
		} else {
			$(this).swiper({
				autoplay: false //自动播放，不指定默认不播放，单位为ms
			});
		}
	});

	//产品展示轮播
	$('.lunbo_banner').each(function() {
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

	//广告位轮播
	$('.ad_banner').each(function() {
		var count = $(this).find(".swiper-slide").length;
		if (count > 1) {
			var $this = $(this).swiper({
				loop: true, //循环
				mode: 'vertical',
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

	//首页商品列表鼠标滑过事件
	$('.max_width li').hover(function() {
		$(this).find('p').css('display', 'block')
	}, function() {
		$(this).find('p').css('display', 'none')
	});

	//套餐推荐
	$('.tuijian .ok').click(function() {
		$(this).parents('.tuijian').hide();
		$('.ui_mask').hide();
	});

	//分类
	$('.class a').click(function() {
		$('.class a').removeClass('active');
		$(this).addClass('active');
	});

	//区域选择
	$('.quyu a').click(function() {
		$('.quyu a').removeClass('active');
		$(this).addClass('active');
	});

});
