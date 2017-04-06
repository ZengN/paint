$(function(){
	//轮播图
	$("#carousel-example-generic").carousel({
		pause : 'hover',
	});
	
	//轮播图高度自适应屏幕
	setInterval(function myFresh(){
		$(".carousel-inner img").css("height", $(window).height() + "px");
		$(".product-banner").css("height", $(window).height()/2.5 + "px");
		$(".product-banner-text h1").css("line-height", $(window).height()/2.6 + "px");
		
	},100);
	
	//轮播图左右控制箭头
	setInterval(function (){
	$(".carousel-control").css("line-height", $(".carousel-inner").height() + "px")
	},100);
	
	
	
     
    
	
//	点击页面滑动
	$(".btn-scroll").click(function(){
		$("html,body").animate({
			scrollTop : $(".index-main-text1").offset().top - 50 + 'px'}, 1000);
	});
//	点击页面滑动-end
	

	
	//省略图鼠标事件触发
	var md = window.matchMedia("@media all and (max-width: 1024)");
		if (!md.matches){
			$(".small-photo").mouseover(function(){
				$(this).children(".small-photo-text").stop(true,false).slideDown("fast", function(){
   				$(this).css("display", "block");
   				});
			});
	
			$(".small-photo").mouseout(function(){
				$(this).children(".small-photo-text").stop(true,false).slideUp("fast", function(){
   				$(this).css("display", "none");
   				});
			});//省略图鼠标事件触发-end
		};
		



});
