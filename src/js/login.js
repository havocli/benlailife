
$('#account').focus(function(){
	var value = $('#account').val();
	if(value ==''|| value  == '请输入邮箱/手机'){
		$('#account').val('');
	}
})


var reg = /(^(13[0-9]|15[0-9]|18[7-9])[0-9]{8}$)|(^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$)/i;

$('#account').blur(function(){
var str = $('#account').val();
	if(str ==''){
		$('.verify').html('请输入邮箱/手机');
		$('.acc_b .true_ico').addClass('false_ico');
	}else if(reg.test(str)){
		$('.acc_b .true_ico').removeClass('false_ico');
		$('.verify').empty();
	}else{
		$('.verify').html('账号格式不正确，请重新输入');
		$('.acc_b .true_ico').addClass('false_ico');

	}
	

	
})