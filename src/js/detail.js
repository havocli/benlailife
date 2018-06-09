//放大镜
$('.small_box img').each(function(k,v){
	$(v).mouseover(function(){
		$('.small_box img').removeClass();
		$('.mid_box img').attr('src',$(this).addClass('box_active').attr('src'));
		$('.large_box img').attr('src',$(this).addClass('box_active').attr('src'));
	})
});

//放大镜
$('.mid_box').hover(function(){
	$('.large_box').css('display','block');
},function(){
	$('.large_box').css('display','none');
	$('.shadow').css('left',-1000);
});

var maxL = $('.mid_box').width() - $('.shadow').outerWidth();
var maxT = $('.mid_box').height() - $('.shadow').outerHeight();


$('.mid_box').mousemove(function(ev){


	var e = ev || window.event;

	var L = Math.floor(e.pageX) - Math.floor($('.mid_box').offset().left)- $('.shadow').outerWidth()/2;
	var T = Math.floor(e.pageY) - Math.floor($('.mid_box').offset().top)- $('.shadow').outerHeight()/2;

	if(T < 0) {
		T = 0;
	}

	// 左侧边界
	if(L < 0) {
		L = 0;
	}

	// 右侧边界
	if(L > maxL) {
		L = maxL;
	}
	// 下侧边界
	if(T > maxT) {
		T = maxT;
	}

	$('.shadow').css({'left':L,"top":T});

	var largeImgL = ($('.large_box img').width()-$('.large_box').width())/maxL *L;
	var largeImgT = ($('.large_box img').height()-$('.large_box').height())/maxT*T;

	$('.large_box img').css({'left':-largeImgL,'top':-largeImgT});
})

