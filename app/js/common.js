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

 				$(".item-price").html("5070 руб");
 				console.log("aside 1.1");
 				break;
 				case 1:
 				$(".tab-img img").attr("src","img/compl-12.jpg");
 				$(".item-title").html("Комплект 2 (2 камеры)");
 				$(".item-li-1").html("Кол-во камер ул./внутр.: Улица/2");

 				$(".item-price").html("6900 руб");
 				console.log("aside 1.2");
 				break;
 				case 2:
 				console.log("3");
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



});
