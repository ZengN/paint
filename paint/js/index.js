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
	
	
	//顶部固定导航栏
 	$(window).scroll(function () {
            if ($("#index-navbar").offset().top > 50) {
            	$("#index-navbar").removeClass("my-navbar");
            	$("#index-navbar").addClass("navbar-default");
            	$("#index-brand").removeClass("index-logo1");
            	$(".brand-logo").css("display", "none");
            	$("#index-brand").addClass("index-logo2"); 
            }	else  if ($(window).width() < 750) {
				$("#index-navbar").removeClass("my-navbar");
            	$("#index-navbar").addClass("navbar-default");
            	$("#index-brand").removeClass("index-logo1");
				$(".brand-logo").css("display", "none");
            	$("#index-brand").addClass("index-logo2");
         	}	else {
            		$("#index-navbar").removeClass("navbar-default");
            		$("#index-navbar").addClass("my-navbar");
            		$("#index-brand").removeClass("index-logo2");
            		$("#index-brand").addClass("index-logo1");
					$(".brand-logo").css("display", "block");
           	} 
    });//顶部固定导航栏-end
     
    //小屏幕时的导航栏
    if ($(window).width() < 768) {
				$("#index-navbar").removeClass("my-navbar");
            	$("#index-navbar").addClass("navbar-default");
            	$("#index-brand").removeClass("index-logo1");
				$(".brand-logo").css("display", "none");
            	$("#index-brand").addClass("index-logo2")
            	$(".product-submenu").css("display", "none");
            }
	$(window).resize(function (){
		if ($(window).width() < 768) {
				$("#index-navbar").removeClass("my-navbar");
            	$("#index-navbar").addClass("navbar-default");
            	$("#index-brand").removeClass("index-logo1");
				$(".brand-logo").css("display", "none");
            	$("#index-brand").addClass("index-logo2");
            	$(".product-submenu").css("display", "none");
            } else {
            	$("#index-navbar").removeClass("navbar-default");
            	$("#index-navbar").addClass("my-navbar");
            	$("#index-brand").removeClass("index-logo2");
            	$("#index-brand").addClass("index-logo1");
				$(".brand-logo").css("display", "block");
				$(".product-submenu").css("display", "block");
            }
        
        if ($(document).scrollTop() !== 0){
        	$("#index-navbar").removeClass("my-navbar");
            $("#index-navbar").addClass("navbar-default");
            $("#index-brand").removeClass("index-logo1");
            $(".brand-logo").css("display", "none");
            $("#index-brand").addClass("index-logo2");
        }	
	});//小屏幕时的导航栏-end
	
//	点击页面滑动
	$(".btn-scroll").click(function(){
		$("html,body").animate({
			scrollTop : $(".index-main-text1").offset().top - 60 + "px"}, 1000);
	});
//	点击页面滑动-end
	
//	视频
	videojs.options.flash.swf = "video-js.swf";
//	视频-end
	
//	省略图鼠标事件触发
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
			});
		};
//	省略图鼠标事件触发-end

//	抗菌原理
	$(window).scroll(function (){
		if($(window).scrollTop() >= $(".index-main-text2").offset().top - 100){	
					$(".index-list2").slideDown("slow");
		};
	});
//	抗菌原理-end
		
//	产品检测报告
	$("#owl-demo").owlCarousel({
		items : 4,
		lazyLoad : true,
		autoPlay : true,
		pagination : false,
	});
	
	img = $("#owl-demo").find(".lazyOwl");
	img.css("cursor" , "pointer");
	img.click(function() {
		$(".project-bigPic").fadeIn("fast");
		var imgPath = $(this).attr("src");
		$(".project-bigPic img").attr("src", imgPath);
	});
	
	$(".project-bigPic").click(function() {
		$(this).fadeOut("fast");
	});
	

//	产品检测报告-end

//  产品分页导航栏选中效果
	$(".product-submenu a").each(function() {
		$(this).click(function() {
			$(".product-submenu a").remove("focus");
			$(this).addClass("focus");
			return false;
		});
	});
//  产品分页导航栏选中效果-end
});
