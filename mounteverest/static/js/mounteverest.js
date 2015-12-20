$(window).load(function(){

  stopMozillaMadness();
  if ($(this).width() > 1200) {
    /* init Skrollr, adjust window size */
    $window = $(window);
    $slide = $('.homeSlide');
    $body = $('body');
    function adjustWindow(){

        // Init Skrollr
        var s = skrollr.init({
          forceHeight: false
        });
        
        winH = $window.height();
        if(winH <= 550) {
          winH = 550;
        } 
        $slide.height(winH);
        s.refresh($('.homeSlide'));

      }

      adjustWindow();
    }

    function runPreloader () {
      $('.preloader-con').delay(3000).fadeOut('slow'); 
      setTimeout(function(){
        $("body, html").removeClass("overflow");
        $(".btn-nav").show();
        enableMozillaMadness();
      }, 3000)
    }
    runPreloader();

    $(".btn-nav, .nav-content-item a").on("click tap", function(){
     navbarMagic();
   });

    $(document).keyup(function(e) {
      if (e.keyCode == 27) {
        navbarMagic();  
      }
    });

    function navbarMagic() {
      if ($(".nav-content").hasClass("closed")){
        openNav();
      } else {
        closeNav();
      }
    }

    function stopMozillaMadness() {
      $('body').bind('touchmove mousewheel', function(e){e.preventDefault()});
    }

    function enableMozillaMadness() {
      $('body').unbind('touchmove mousewheel');
    }

    function closeNav () {
      $(".nav-content").addClass("closed hideNav").removeClass("showNav");
      $("body,html,main").removeClass("overflow").removeClass("mozilla-fix");
      $(".border").removeClass("hide");
      $(".btn-nav").removeClass("btn-opened animated");
      enableMozillaMadness(); 
    }

    function openNav() {
      console.log("opened");
      $(".nav-content").removeClass("closed hideNav").addClass("showNav"); 
      $("body,html,main").addClass("overflow");
      $(".border").addClass("hide");
      $(".btn-nav").addClass("btn-opened animated");
      stopMozillaMadness();
      
    }

    $(".nav-content-item a").on("click tap", function(){
      var href = $(this).attr("href");
      var currentImg = $(".magic-img"+ href);
      var newClassName = $(currentImg).attr("id");
      $(currentImg).addClass(newClassName).addClass("animate-color");
      $(".magic-img").not(currentImg).removeClass(newClassName).removeClass("animate-color");
    });
    
    /* prevent reaload for anchor "Get My Mount Everest Book" */
    $(".survey-anchor").click(function(event){
      event.preventDefault();
    });

    /* smooth scroll to different sections */
    $('a').click(function(){
      $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 500);
      return false;
    });

    /* change color of btn-nav when outside of header */ 
    $(window).scroll(function(){
      var headerHeight = $(".bcg").height()- 10;
      var navOffset = $(".btn-nav").offset().top;
      if (navOffset > headerHeight) {
        $(".btn-nav").addClass("blue-btn");
      } else {
        $(".btn-nav").removeClass("blue-btn");
      }
    });  

  }); 