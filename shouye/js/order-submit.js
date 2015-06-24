$(function() {
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
	})
});