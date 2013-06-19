
var jQT = $.jQTouch({
	icon: 'kilo.png',
	statusBar: 'black'
});


$(document).ready(function() {
	
  if (typeof(PhoneGap) != 'undefined') {
      $('body > *').css({minHeight: '460px !important'});
  }
				  
    var shortName = 'Gyrus';
    var version = '1.0';
    var displayName = 'Gyrus';
    var maxSize = 65536;
	
	
	$("a.ocpath").click(function(){
		window.location = 'outcomes.html';
  	});
	
	$("a.prodpath").click(function(){
		window.location = 'products.html';
  	});	
	$("a#ocback").click(function(){
		window.location = 'index.html';
  	});
	$("a#refback").click(function(){
		window.location = 'reference.html';
  	});
	
	$("a#prodback").click(function(){
		window.location = 'index.html';
  	});
	$("a#goback").click(function(){
		window.location = 'outcomes.html';
  	});
	$("a#goprod").click(function(){
		window.location = 'products.html';
  	});
	
	

	
});




