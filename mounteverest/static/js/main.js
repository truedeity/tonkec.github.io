var internsJS = {
    common: {}
};

internsJS.common = (function (window, document) {
  function funkcija() {
    /* force scroll to top on reload */
    $(window).load(function(){
      $(this).scrollTop(0);

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
          $("body, html").css("overflow-y", "visible");
        }, 3000)
      }
      runPreloader();

      $(".btn-nav").on("click touchstart", function(){
        $(".btn-close").addClass("rotateIcon").removeClass("unRotateIcon");
        $(".nav-content").addClass("open voila").removeClass("closed unvoila");
      });

      $(".btn-close, .nav-content-item a").on("click touchstart", function(){
        $(".btn-close").addClass("unRotateIcon").removeClass("rotateIcon");
        setTimeout(function(){
          $(".nav-content").removeClass("open voila").addClass("unvoila");
        },300)
      });

      /* prevent reaload for anchor "Get My Mount Everest Book" */
      $(".survey-anchor").click(function(event){
        event.preventDefault();
      });

      /* smooth scroll to different sections */
      $(function() {
        window.location.hash=""
        $('a[href*=#]:not([href=#])').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html,body').animate({
                scrollTop: target.offset().top
              }, 500);
              return false;
            }
          }
        });
      });
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
  }

    return {
        funkcija: funkcija
    };


})(window, document);

$(function () {
    internsJS.common.funkcija();
});