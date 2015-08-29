$(window).load(function(){
	  $('#preloader').delay(1000).fadeOut('slow'); 
        $('body').delay(350).css({'overflow':'visible'});
	$(".circle").click(function(){
	  $(".circle-container").toggleClass("animated slideInDown visible");
	});

	var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    keyboardControl: true,
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    
   })        
});