$(document).ready(function(){
  $(".item").click(function(){
    var current = $(this);
    $(this).addClass("item-active");
    $(".item").not(current).removeClass("item-active");
    var newClass = $(this).text();
    var p = $("p");
    $(p).removeAttr("class");
    setTimeout(function(){
      $(p).addClass(newClass);
    },100);
  });

  $(".item-doc a").click(function(){
    var current = $(this);
    $(current).addClass("item-active");
    $(".item-doc a").not(current).removeClass("item-active");

  });

  $(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 100
        }, 1000);
        return false;
      }
    }
  });
});

  $(".menu, .doc-menu").click(function(event){
    event.preventDefault();
    $("aside.left").addClass("open-menu");
    $(".overlay").addClass("show-overlay");
    $(".item, .item-doc").click(function(){
      $("aside.left").removeClass("open-menu");
      $(".overlay").removeClass("show-overlay");
    });
  });

  $(".close").click(function(event){
    event.preventDefault();
    $("aside.left").removeClass("open-menu");
    $(".overlay").removeClass("show-overlay");
  });
})