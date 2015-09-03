$(window).load(function(){

  /* preloader */
 $('#preloader').delay(2000).fadeOut('slow', function(){
  $("main").delay(500).css("visibility", "visible").fadeIn(2000);
  $(".parallax-mirror").addClass("show-mirror");
 }); 

 $('body').delay(500).css({'overflow':'visible'});

/* animations only for large screen */
 if ($(window).width() > 1200) {
    animate();
    buttonOnLargeScreen();
  } else {
    animateArrow();
    buttonOnSmallScreen();
  }


/* swiper */
   var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    keyboardControl: true,    
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
  });   

/* navigation button */
  $(".fixed-container, .btn-more").css("display", "block");
  var buttonCircles = $(".nav-circle");

function buttonOnSmallScreen () {
  $(".btn-nav").on("tap click", function(){
    $(this).toggleClass("closed-nav")
    if ($(this).hasClass("closed-nav")) {
      slideDown();
    } else {
      slideUp()
    }
  });
};

function buttonOnLargeScreen () {
$(".btn-nav").on("mouseenter",function(){
  slideDown();
});
 $(".circle-container").on("mouseleave",function(){
  slideUp();
});
 $(".round-circle, .round-circle > a").click(function(){
  slideUp();
 });
};

function slideDown() {
 var topMargin = 20
 for (i = 0; i < buttonCircles.length; i++) {
  topMargin += 75
  $(buttonCircles[i]).animate({
    top: topMargin
  }, function() {
    $(".circle-container, .round-circle").css("visibility", "visible");
    $(".fa-plus").addClass("rotateIcon").removeClass("unRotateIcon");
  })
}
}

function slideUp() {
  var resetTop = 20
  for (i = 0; i < buttonCircles.length; i++) {
    $(buttonCircles[i]).animate({
      top: resetTop
    },500, function() {
      $(".circle-container, .round-circle").css("visibility", "hidden");
      $(".fa-plus").addClass("unRotateIcon").removeClass("rotateIcon");
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

 /* modal */
  $('.modal-trigger').leanModal();
  $(".modal-close").click(function(event){
    event.preventDefault();
  });

   function animateArrow () {
    $(".btn-arrow").animate({
          bottom: "+=150px"
        }, 1, function(){
          $(".fa-arrow-down").delay(1500).addClass("rotateIcon");
          $("html,body").css("overflow", "visible");
        });
   }

/* starting animation */
  function animate () {
    function type() {
     $(function(){
       $(".element").typed({
        strings: ['<h2 class="skill-title">Hello!</h2>My name is Antonija and I am <span class="skill-span">front-end developer</span>. My skillset mainly consists of <span class="skill-span">HTML</span>, <span class="skill-span">CSS3</span> and <span class="skill-span">jQuery</span>. Compiling <span class="skill-span">SASS</span> with  <span class="skill-span">Gulp</span> and versioning with <span class="skill-span">Git</span> is must-have. My biggest passions are <span class="skill-span">jQuery/CSS animations</span> and one pages. Front-end frameworks, such as <span class="skill-span">Bootstrap</span> and<span class="skill-span"> Materializecss</span> help me speed up my workflow. I code in <span class="skill-span">Linux Mint</span> and <span class="skill-span">SublimeText</span> equipped with <span class="skill-span">Emmet</span>. I am currently learning <span class="skill-span">Ruby on Rails</span> so <a href="mailto:antonija1023@gmail.com" class="skill-anchor"><span class="help-span"> I am looking  for RoR internship </span></a>.'],
        typeSpeed: 0,
        contentType: 'html',
        startDelay: 8300,
      });
    }); 
   } 

  

   var video = document.getElementById("video");
   type();
   video.play();
   $("video").bind("ended", function() {
    animateArrow();
   });
  }
});