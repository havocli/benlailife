// //失去焦点
// $('#search').focus(function(){
// 	this.value = '';
// });
// $('#search').blur(function(){
// 	if(this.value ==''){
// 		this.value = '佳沛金果169元20粒礼盒装';
// 	}
// });

// //右侧导航条

// 	//二维码
// 	$('#code_list').click(function(){
// 		$('.pop_code').toggleClass('pop_active');
// 	});

// 	//返回顶部
// 	$('#go_top').click(function(){
// 		// console.log($(this).scrollTop());
// 		$("html").animate({scrollTop:0}, 500);
// 	});

// 	$(window).scroll(function(){
// 		if($(this).scrollTop() >=646){
// 			$('#go_top').css('display','block')
// 		}else{
// 			$('#go_top').css('display','none')
// 		}
// 	})


// //二级菜单
// $('.head_b_menuL ul').children().each(function(k,v){
// 	$(v).hover(function(){
// 		$(v).addClass('active').siblings().removeClass('active');
// 		$('.head_b_menuR ul').eq(k).addClass('focusR').siblings().removeClass('focusR');
// 	},function(){
// 		$('.head_b_menuL ul li').removeClass('active');
// 		$('.head_b_menuR ul').removeClass('focusR');

// 	})
	
// })

// $('.head_b_menuR ul').each(function(m,n){
// 	$(n).hover(function(){
// 		$(n).addClass('focusR').siblings().removeClass('focusR');
// 		$('.head_b_menuL ul li').eq(m).addClass('active').siblings().removeClass('active');
// 	},function(){
// 		$('.head_b_menuR ul').removeClass('focusR');
// 		$('.head_b_menuL ul li').removeClass('active');

// 	})
// })	


//选项卡
$('.new_left li').each(function(k,v){
	$(v).mouseover(function(){
		$('.new_left li a').removeClass();
		$(v).children().addClass('new_active');
		$('.new_right ul').removeClass();
		$('.new_right ul')[k].classList.add('new_focus');
	})
});

$('.pro_tit3 li').each(function(k,v){
	$(v).mouseover(function(){
		$('.pro_tit3 li a').removeClass();
		$(v).children().addClass('pro_active');
		$('.pro_body_r3 ul').removeClass();
		$('.pro_body_r3 ul')[k].classList.add('pro_focus');
	})
})

$('.pro_tit2 li').each(function(k,v){
	$(v).mouseover(function(){
		$('.pro_tit2 li a').removeClass();
		$(v).children().addClass('pro_active');
		$('.pro_body_r2 ul').removeClass();
		$('.pro_body_r2 ul')[k].classList.add('pro_focus');
	})
})

$('.pro_tit1 li').each(function(k,v){
	$(v).mouseover(function(){
		$('.pro_tit1 li a').removeClass();
		$(v).children().addClass('pro_active');
		$('.pro_body_r1 ul').removeClass();
		$('.pro_body_r1 ul')[k].classList.add('pro_focus');
	})
})


//轮播图

//右按钮
var index = 0;
var len   = $('.bg li').length;

$('.btnR').click(function(){
	move();
});

//左按钮
$('.btnL').click(function(){
	index--;
	if(index <0){
		index = len-1;
	}
	$('.bg li').eq(index).fadeIn().siblings().fadeOut();
	$('.bullet li').eq(index).addClass('bullet_active').siblings().removeClass('bullet_active');

})

//鼠标进入
$('.banner').hover(function(){
	$('.direction').css('display','block');
	$('.bullet').css({'top':370});
	clearInterval(timer);
},function(){
	$('.direction').css('display','none');
	$('.bullet').css({'top':396})
	autoMove();
});

//分页器
$('.bullet li').each(function(k,v){
	$(v).mouseover(function(){
		$(v).addClass('bullet_active').siblings().removeClass('bullet_active');
		index = k;
		$('.banner li').eq(index).fadeIn().siblings().fadeOut();
	})
});

//自动轮播

var timer=null;

autoMove();

function autoMove(){
	timer=setInterval(function(){
		move();
	},3000)
}

function move(){
	index++;
	if(index >= len){
		index = 0;
	}
	$('.bg li').eq(index).fadeIn().siblings().fadeOut();
	$('.bullet li').eq(index).addClass('bullet_active').siblings().removeClass('bullet_active');
}
