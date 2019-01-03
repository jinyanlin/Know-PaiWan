
function scroll_to(clicked_link, nav_height) {
	var element_class = clicked_link.attr('href').replace('#', '.');
	var scroll_to = 0;
	if(element_class != '.top-content') {
		element_class += '-container';
		scroll_to = $(element_class).offset().top - nav_height;
	}
	if($(window).scrollTop() != scroll_to) {
		$('html, body').stop().animate({scrollTop: scroll_to}, 1000);
	}
}


jQuery(document).ready(function() {
	
	/*
	    Navigation
	*/
	$('a.scroll-link').on('click', function(e) {
		e.preventDefault();
		scroll_to($(this), $('nav').outerHeight());
	});
	// toggle "navbar-no-bg" class
	$('.top-content .text').waypoint(function() {
		$('nav').toggleClass('navbar-no-bg');
	});
	
    /*
        Background slideshow
    */
	$('.top-content').backstretch("assets/img/backgrounds/taiwansky.jpg");
	/*$('.top-content-culture').backstretch("assets/img/backgrounds/culture_header.jpg");*/
	$('.activities').backstretch("assets/img/backgrounds/paiwanactivity.jpg");
	$('.history').backstretch("assets/img/backgrounds/fern.jpg");
	$('.activities').backstretch("assets/img/backgrounds/14324331866125.jpg");
	$('.history_His').backstretch("assets/img/backgrounds/HisBg.jpg");
   
    $('#top-navbar-1').on('shown.bs.collapse', function(){
    	$('.top-content').backstretch("resize");
    });
    $('#top-navbar-1').on('hidden.bs.collapse', function(){
    	$('.top-content').backstretch("resize");
    });
    
    
    /*
        Wow
    */
    new WOW().init();
	
});

function openTradition(){
	location.href="traditional.html";
}

function openLocation(){
	location.href="topography.html";
}

function openHistory(){
	location.href="History.html";
}

function openActivities(){
	location.href="activities.html";
}