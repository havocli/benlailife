//聚焦
$('#account').focus(function () {
	var value = $('#account').val();
	if (value == '请输入手机号') {
		$('#account').val('');
	}
});

$('#smsCode').focus(function () {
	var value = $('#smsCode').val();
	if (value == '请输入验证码') {
		$('#smsCode').val('');
	}
});


//手机号验证
var reg1 = /^1[345678][0-9]{9}$/i;
$('#account').blur(function () {
	var acc = $('#account').val();
	if (acc == '') {
		$('.number').html('请输入手机号');
		$('.acc_b .true_ico').addClass('false_ico');
	} else if (reg1.test(acc)) {
		$('.number').empty();
		$('.acc_b .true_ico').removeClass('false_ico');
	} else {
		$('.number').html('手机号码格式不正确，请重新输入');
		$('.acc_b .true_ico').addClass('false_ico');
	}

});


//二维码验证
$('#smsCode').blur(function () {
	var code = $('#smsCode').val();
	if (code == '') {
		$('.vertify').html('请输入验证码');
	} else {
		$('.vertify').empty();
	}
});


//密码验证
var reg2 = /^(?![A-Za-z]+$)(?!\d+$)(?![\W_]+$)\S{8,16}$/i;
$('#password').blur(function () {
	var pass = $('#password').val();
	if(reg2.test(pass)) {
		$('.access').empty();
		$('.pass_b .true_ico').removeClass('false_ico');

		//确认密码
		$('#confirm_p').blur(function () {
			var con = $('#confirm_p').val();
			if (con == pass) {
				$('.confirm').empty();
				$('.confirm_b .true_ico').removeClass('false_ico');
			} else if (con == '') {
				$('.confirm').html('请输入确认密码!');
				$('.confirm_b .true_ico').addClass('false_ico');
			} else {
				$('.confirm').html('两次输入的密码不一致！');
				$('.confirm_b .true_ico').addClass('false_ico');
			}
		});
	} else {
		$('.pass_b .true_ico').addClass('false_ico');
		$('.access').html('密码须为8-16位字母,数字,半角符号中至少两种组合');
	}
});


//确认密码
$('#confirm_p').blur(function () {
	var con = $('#confirm_p').val();
	if (con == '') {
		$('.confirm').html('请输入确认密码!');
		$('.confirm_b .true_ico').addClass('false_ico');
	} else {
		$('.confirm').empty();
		$('.confirm_b .true_ico').removeClass('false_ico');
	}
});



// var num = $('.number').html();
// var	va = $('#account').val();

// var	ver = $('.vertify').html();
// var	cod = $('#smsCode').val();

// var	ass = $('.access').html();
// var	pas = $('#password').val();

// var	co  = $('.confirm').html();
// var	cof = $('#confirm_p').val();


//注册
$('#register').click(function(){
	//前端校验是否全部符合条件
	if($('.number').html() == ''&& $('#account').val() !== '请输入手机号' && $('.vertify').html() =='' && $('#smsCode').val() !=='请输入验证码' && $('.access').html() == ''&& $('#password').val() !==''&& $('#confirm_p').val() !== '' && $('#password').val() == $('#confirm_p').val() && $('#read').prop('checked')==true){
		console.log(1);
		//发送后端校验手机号是否存在
		$.getJSON('./src/php/vertify.php',{usertel:$('#account').val()},function(data){
			//手机号已被注册
			if(data==0){
				$('.number').html('该手机号已被使用，可直接&nbsp;&nbsp;<a href="login.html">登录</a>');
				$('.acc_b .true_ico').addClass('false_ico');
			}else{
			//手机号没有注册，发送后端，写入数据库
				$.getJSON('./src/php/insert.php',{usertel:$('#account').val(),password:$('#password').val()},function(data){
					//插入成功，跳转致首页面
					if(data==1){
						//存入cookie
						$.cookie('username',$('#account').val());

						//跳转至首页
						location.href = 'index.html';

					}
				})
				
			}
		})
		// console.log(1);

	}else if($('#account').val() == '请输入手机号'){

		$('.number').html('请输入手机号');
		$('.acc_b .true_ico').addClass('false_ico');

	}else if($('#smsCode').val() =='请输入验证码'){

		$('.vertify').html('请输入验证码');

	}else if($('#password').val() ==''){

		$('.pass_b .true_ico').addClass('false_ico');
		$('.access').html('密码须为8-16位字母,数字,半角符号中至少两种组合');

	}else if($('#read').prop('checked')==false){

	}else{

		$('.confirm').html('请输入确认密码!');
		$('.confirm_b .true_ico').addClass('false_ico');

	}
})