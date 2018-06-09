$(function(){
	$('.headers').load('public.html .header',function(){
		// 失去焦点
		$('#search').focus(function(){
			console.log(1);
			this.value = '';
		});
		$('#search').blur(function(){
			if(this.value ==''){
				this.value = '佳沛金果169元20粒礼盒装';
			}
		});
		//右侧导航条

			//二维码
			$('#code_list').click(function(){
				$('.pop_code').toggleClass('pop_active');
			});

			//返回顶部
			$('#go_top').click(function(){
				// console.log($(this).scrollTop());
				$("html").animate({scrollTop:0}, 500);
			});

			$(window).scroll(function(){
				if($(this).scrollTop() >=646){
					$('#go_top').css('display','block')
				}else{
					$('#go_top').css('display','none')
				}
			})


		//二级菜单
		$('.head_b_menuL ul').children().each(function(k,v){
			$(v).hover(function(){
				$(v).addClass('active').siblings().removeClass('active');
				$('.head_b_menuR ul').eq(k).addClass('focusR').siblings().removeClass('focusR');
			},function(){
				$('.head_b_menuL ul li').removeClass('active');
				$('.head_b_menuR ul').removeClass('focusR');

			})
			
		})

		$('.head_b_menuR ul').each(function(m,n){
			$(n).hover(function(){
				$(n).addClass('focusR').siblings().removeClass('focusR');
				$('.head_b_menuL ul li').eq(m).addClass('active').siblings().removeClass('active');
			},function(){
				$('.head_b_menuR ul').removeClass('focusR');
				$('.head_b_menuL ul li').removeClass('active');

			})
		})	

	});


$('.footers').load('public.html .footer');


})