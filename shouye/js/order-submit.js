$(function() {
	//检测收件人和订货人为同一人
	function fn_check() {
		if ($('#consignee-switch').attr('checked')) {
			$('#txt_name').parents('tr').hide();
			$('#txt_movephone').parents('tr').hide();
		} else {
			$('#txt_name').parents('tr').show();
			$('#txt_movephone').parents('tr').show();
		}
	};
	fn_check();
	$('#consignee-switch').click(function() {
		fn_check();
	});
	
	//关闭图片剪切窗口
	$('span.close').click(function(){
		$('#Step2Container').hide()
	});
	
	//点击编辑
	$('a.editor').click(function(){
		$('#Step2Container').show()
	})
});