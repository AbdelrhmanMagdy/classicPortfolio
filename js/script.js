/*global $, alert, console*/

$(function() {

	'use strict';

	//adjust header height
	var myHeader = $('.header'),
		mySlider = $('.bxslider');

	myHeader.height($(window).height());
	
	$(window).resize(function(){
		
		myHeader.height($(window).height());
		
		mySlider.each(function(){
		$(this).css('paddingTop', ( $(window).height() - $('.bxslider li').height() )/2 );
		});
	});

	//links add active class
	$('.links li a').click(function(){
		$(this).parent().addClass('active').siblings().removeClass('active');
	});

	//adjust slider center
	mySlider.each(function(){
		$(this).css('paddingTop', ( $(window).height() - $('.bxslider li').height() )/2 );
	});

	//slider
    mySlider.bxSlider({
    	pager:false
    });

    //smoth scroll to div

    $('.links li a').click(function(){
    	
    	$('html, body').animate({
    		scrollTop: $('#'+$(this).data('value')).offset().top
    	},1000);

    });

    //auto slide slider

    (function autoSlider() {
	    $('.slider .active').each(function(){

	    	if (!$(this).is(':last-child')){

	    		$(this).delay(3000).fadeOut(1500,function(){

	    			$(this).removeClass('active').next().addClass('active').fadeIn();
	    			autoSlider();

	    		});

	    	}else{

	    		$(this).delay(3000).fadeOut(1500,function(){

	    			$(this).removeClass('active');
	    			$('.slider div').eq(0).addClass('active').fadeIn(1500);
	    			autoSlider();
	    		});
	    	}
	    	
	    });    	
    }());


});