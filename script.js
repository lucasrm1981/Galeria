$(document).ready(function(){
	/* Utilização da biblioteca fancynibox */
  $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });
    /* Chamada do efeito do zoom através do mouse hover */
    $(".zoom").hover(function(){
		
		$(this).addClass('transition');
	}, function(){
        
		$(this).removeClass('transition');
	});
});
    
