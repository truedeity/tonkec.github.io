$(window).load(function(){
 $('#preloader').delay(1000).fadeOut('slow'); 
 $('body').delay(350).css({'overflow':'visible'});

   var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    keyboardControl: true,    
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
  });   

 var buttonCircles = $(".nav-circle");
 
 $(".btn-nav").click(function(){
    $(".circle-container").css("visibility", "visible")
    $(this).toggleClass("closed-nav")
  
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
  $('.modal-trigger').leanModal();
  $(".modal-close").click(function(event){
    event.preventDefault();
  });
});