$(document).ready(function(){
  runPreloader();
  $(".sidebar-open").click(function(){
   openNav();
 });

  $(".close, .sidebar-item").click(function(){
   closeNav();
 })

  function openNav() {
   $(".sidebar-con").animate({
    right: 0
  },1000, function(){
      
  });
 }

 function closeNav() {
   $(".sidebar-con").animate({
    right: "-999px"
  }, 1000, function(){
    $(".sidebar-con").css("display", "none")

  });
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

 function runPreloader () {
  $('.preloader-con').delay(3000).fadeOut('slow'); 
  setTimeout(function(){
    $("body, html").css("overflow", "visible");
  }, 3000)
  }
});