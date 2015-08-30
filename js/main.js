$(window).load(function(){
 $('#preloader').delay(1000).fadeOut('slow'); 
 $('body').delay(350).css({'overflow':'visible'});

   var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    keyboardControl: true,
    
    // If we need pagination
    pagination: '.swiper-pagination',
    
    // Navigation arrows
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    
    // And if we need scrollbar
    scrollbar: '.swiper-scrollbar',
  })   

 var buttonCircles = $(".nav-circle");
 
 $(".btn-floating").click(function(){
    $(".circle-container").css("visibility", "visible")
    $(this).toggleClass("closed-nav")
    /*$(".first-circle").animate({
        top: "+=50px"
    })
    $(".second-circle").animate({
        top: "+=100px"
    })
    $(".third-circle").animate({
        top: "+=150px"
    })
    $(".forth-circle").animate({
        top: "+=200px"
    })*/
    if ($(this).hasClass("closed-nav")) {
        slideDown();
    } else {
        slideUp()
    }
   
 });

  function slideDown () {
  var topMargin = 20
  for (i = 0; i < buttonCircles.length; i++) { 
      topMargin += 60
      $(buttonCircles[i]).animate({
        top: topMargin
    })
  }
}

function slideUp () {
    for (i = 0; i < buttonCircles.length; i++) {
      $(buttonCircles[i]).animate({
        top: "20px"
    }, 500, function(){
         $(".circle-container").css("visibility", "hidden")
    })
  }
}

 $(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
      }, 1000);
        return false;
    }
   }
  });

 });      
});