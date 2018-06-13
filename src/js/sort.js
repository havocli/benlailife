$('.history dt a').click(function(){
	$('.history dd').remove();
})

$('.con_left1 a').each(function(k,v){
	$(v).click(function(){
		$('.con ul').eq(k).addClass('con_focus').siblings().removeClass('con_focus');
	})
})