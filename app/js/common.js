$(function() {
// tabs
$(".tabs-content > div").not(":first").hide();
$(".tabs-control a").on("click", function(e){
	e.preventDefault();
	$(".tabs-control a").removeClass("active").eq($(this).index()).addClass("active");
	$(".tabs-content div").hide().eq($(this).index()).fadeIn();
	console.log($(this).index());
	console.log($(this).eq());
});

// mobile
$("#show-tabs").on("click", function(){
	$(".tabs-control").fadeToggle();

});


//show blc when widnow's size is wider then 767
$(window).resize(function() {
	if($(window).width() > 767)
    {	
    	$(".tabs-control").fadeIn();
      $(".tabs-control").css("display", "block");
    }
});

// end tabs
});
