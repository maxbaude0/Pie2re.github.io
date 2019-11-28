$(function){
	$(window).scrollWindow(function(){
		if($(this).scrollTop()>1000) {
			$(".navbar .navbar-brand img").atttr("src","images/logo-coworkintel-gradient-white.svg");
		}

		else{
			$(".navbar .navbar-brand img").atttr("src","images/logo-coworkintel-color.svg");
		}
	})
})