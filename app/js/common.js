$(function() {
	
// // tabs
// $(".tabs-content .wrapper-tab-item").not(":first").hide();
// $(".tabs-control a").on("click", function(e){
// 	e.preventDefault();
// 	$(".tabs-control a").removeClass("active").eq($(this).index()).addClass("active");
// 	$(".tabs-content .wrapper-tab-item").hide().eq($(this).index()).fadeIn();
// 	console.log($(this).index());
// 	console.log($(this).eq());
// });

// mobile
$("#show-tabs").on("click", function(){
	$(".tabs-control").fadeToggle();

});


// //show blc when widnow's size is wider then 767
// $(window).resize(function() {
// 	if($(window).width() > 767)
//     {	
//     	$(".tabs-control").fadeIn();
//       $(".tabs-control").css("display", "block");
//     }
// });
// 	//aside-tabs

// 	//end aside-tabs
// // end tabs


// ====================== tabs - v2 ==================== 
// tab on load
var tab = 0;
// tab on click
$(".tabs-control a").on("click", function(e){
	e.preventDefault();
	$(".tabs-control a").removeClass("active").eq($(this).index()).addClass("active");
	
	//reset aside
	$(".tabs-control-aside li").removeClass("active").parent().children("li:first").addClass("active");

	tab = $(".tabs-control a.active").index();

	switch(tab) {
		case 0:
		$(".tab-img img").attr("src","img/compl-1.jpg")
		console.log("tab 0");
		break;
		case 1:
		$(".tab-img img").attr("src","img/compl-2.jpg")
		console.log("tab 1");
		break;
		case 2:
		console.log("2");
		break;
		default:
		console.log("default");
	}
});

//aside
$(".tabs-control-aside a").on("click", function(e){
	e.preventDefault();
	$(".tabs-control-aside li").removeClass("active").eq($(this).parent().index()).addClass("active");
	var aside = $(this).parent().index();
	console.log(tab);
 		//tab == 0
 		if(tab == 0)
 		{
 		
 			switch(aside) {
 				case 0:
 				$(".tab-img img").attr("src","img/compl-1.jpg")
 				$(".item-title").html("Комплект 1 (1 камеры)");
 				$(".item-li-1").html("Кол-во камер ул./внутр.: Улица/1");
 				$(".item-li-4").html("Кол-во каналов видео/аудио: 4/4");
 				$(".item-price").html("5070 руб");
 				console.log("aside 1.1");
 				break;

 				case 1:
 				$(".tab-img img").attr("src","img/compl-12.jpg");
 				$(".item-title").html("Комплект 2 (2 камеры)");
 				$(".item-li-1").html("Кол-во камер ул./внутр.: Улица/2");
 				$(".item-li-4").html("Кол-во каналов видео/аудио: 4/4");
 				$(".item-price").html("6900 руб");
 				console.log("aside 1.2");
 				break;

 				case 2:
 				$(".tab-img img").attr("src","img/compl-13.jpg");
 				$(".item-title").html("Комплект 3 (3 камеры)");
 				$(".item-li-1").html("Кол-во камер ул./внутр.: Улица/3");
 				$(".item-li-4").html("Кол-во каналов видео/аудио: 4/4");
 				$(".item-price").html("8730 руб");
 				console.log("aside 1.3");
 				break;

 				case 3:
 				$(".tab-img img").attr("src","img/compl-14.jpg");
 				$(".item-title").html("Комплект 4 (4 камеры)");
 				$(".item-li-1").html("Кол-во камер ул./внутр.: Улица/4");
 				$(".item-li-4").html("Кол-во каналов видео/аудио: 4/4");
 				$(".item-price").html("10560 руб");
 				console.log("aside 1.4");
 				break;

 				case 4:
 				$(".tab-img img").attr("src","img/compl-15.jpg");
 				$(".item-title").html("Комплект 5 (5 камер)");
 				$(".item-li-1").html("Кол-во камер ул./внутр.: Улица/5");
 				$(".item-li-4").html("Кол-во каналов видео/аудио: 8/4");
 				$(".item-price").html("13570 руб");
 				console.log("aside 1.5");
 				break;

 				case 5:
 				$(".tab-img img").attr("src","img/compl-16.jpg");
 				$(".item-title").html("Комплект 6 (6 камер)");
 				$(".item-li-1").html("Кол-во камер ул./внутр.: Улица/6");
 				$(".item-li-4").html("Кол-во каналов видео/аудио: 8/4");
 				$(".item-price").html("15360 руб");
 				console.log("aside 1.6");
 				break;

 				case 6:
 				$(".tab-img img").attr("src","img/compl-17.jpg");
 				$(".item-title").html("Комплект 7 (7 камер)");
 				$(".item-li-1").html("Кол-во камер ул./внутр.: Улица/6");
 				$(".item-li-4").html("Кол-во каналов видео/аудио: 8/4");
 				$(".item-price").html("17190 руб");
 				console.log("aside 1.7");
 				break;

 				case 7:
 				$(".tab-img img").attr("src","img/compl-8.jpg");
 				$(".item-title").html("");
 				$(".item-li-1, .item-li-2, .item-li-3, .item-li-4, .item-price").html("");
 				console.log("aside 1.8");
 				break;
 				default:
 				console.log("default");
 			}
 		}


 		else if(tab == 1)
 		{

 			switch(aside) {
 				case 0:
 				$(".tab-img img").attr("src","img/compl-2.jpg")
 				console.log("2.1");
 				break;
 				case 1:
 				$(".tab-img img").attr("src","img/compl-22.jpg")
 				console.log("2.2");
 				break;
 				case 2:
 				console.log("3");
 				break;
 				default:
 				console.log("default");
 			}
 		}

 		// tab == 2
 	});
// end aside

// quality
	//quality var global
	var quality = 0
$(".input-custom").on("click", function(){
	$(".input-custom").removeClass("active-input-custom").siblings().css("font-weight", "normal");
	$(this).addClass("active-input-custom");
	$(this).siblings().css("font-weight", "bold");
	quality = $(this).parent().index();
	console.log(quality);
	
});
// end quality



// owl carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:2,
    responsiveClass:true,
    dots:true,
    nav:true,
    center:true,
    navText: ["<i class='fa fa-chevron-left' aria-hidden='true'></i>","<i class='fa fa-chevron-right' aria-hidden='true'></i>"],
    responsive:{
        0:{
            items:1,
            nav:true,
            
        },
        992:{
        		items:4,
            nav:true,
            
        },
        1200:{
            items:4,
            nav:true,
            
        }
    }
})

});
