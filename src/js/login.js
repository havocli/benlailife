//聚焦
$('#account').focus(function(){
	var value = $('#account').val();
	if(value  == '请输入邮箱/手机'){
		$('#account').val('');
	}
})


//手机号验证
var reg1 = /(^1[345678][0-9]{9}$)|(^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$)/i;

$('#account').blur(function(){
var str = $('#account').val();
	if(str ==''){
		$('.verify').html('请输入邮箱/手机');
		$('.acc_b .true_ico').addClass('false_ico');
	}else if(reg1.test(str)){
		$('.acc_b .true_ico').removeClass('false_ico');
		$('.verify').empty();
	}else{
		$('.verify').html('账号格式不正确，请重新输入');
		$('.acc_b .true_ico').addClass('false_ico');

	}
	
})

//密码初步验证
var reg2 = /^\w{6,16}$/;
$('#password').blur(function(){

	var str = $('#password').val();

	if(str == ''){
		$('.access').html('请输入密码');
		$('.pass_b .true_ico').addClass('false_ico');
	}else if(reg2.test(str)){
		$('.access').empty();
		$('.pass_b .true_ico').removeClass('false_ico');
	}else{
		console.log(0);
		$('.access').html('密码至少为6位，最大为16位');
		$('.pass_b .true_ico').addClass('false_ico');
	}
})


//登录
$('#login').click(function(){
	//前段校验是否全部符合条件
	if($('.verify').html() == ''&& $('#account').val() !== '请输入邮箱/手机' && $('.access').html() == '' && $('#password').val() !==''){
		//发送给后端校验
		$.getJSON('src/php/login.php',{usertel:$('#account').val(),password:$('#password').val()},function(data){
			//若账户存在，校验成功
			if(data == 1){
				//存入cookie;
				$.cookie('username',$('#account').val());

				//如点击记住密码，将信息存入cookie,一周免登录;
				if($('#remember').prop('checked')==true){
					$.cookie('username',$('#account').val(),{expires:7});
				}
				//跳转至首页
				location.href = 'index.html';

			}else{
				//否则，提示错误信息
				$('.verify').html('用户名或密码错误, 请重新输入');
				$('.acc_b .true_ico').addClass('false_ico');
			}
		})
	
	}else if($('#account').val() == '请输入邮箱/手机'){
		$('.verify').html('请输入邮箱/手机');
		$('.acc_b .true_ico').addClass('false_ico');
	}else{
		$('.access').html('请输入密码');
		$('.pass_b .true_ico').addClass('false_ico');
	}
})