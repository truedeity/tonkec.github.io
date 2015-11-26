$(document).ready(function(){
  runPreloader();
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

  function runPreloader () {
    $('.preloader-con').delay(3000).fadeOut('slow'); 
    setTimeout(function(){
      $("body, html").css("overflow", "visible");
    }, 3000)
  }
});