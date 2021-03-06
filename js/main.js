$(window).load(function(){
  window.onresize = function() {     
    if ($(window).width() >= 1200) {
      window.location.href = window.location.href;
      location.reload();
    }
  }
  runPreloader();

/* animations for different screen sizes */
 if ($(window).width() >= 1200) {
    $(window).scrollTop(0);
    playVideo();
    animateArrow(5000);

  } else {
    type(3000);
    $(window).scrollTop(0);
    animateArrow(2000);
  }

/* swiper */
   var mySwiper1 = new Swiper ('.swiper-container-first', {
    direction: 'horizontal',
    loop: true,
    keyboardControl: true,    
    pagination: '.swiper-pagination-first',
    nextButton: '.swiper-button-next-first',
    prevButton: '.swiper-button-prev-first',
  });   


   var mySwiper2 = new Swiper ('.swiper-container-second', {
    direction: 'horizontal',
    loop: true,
    keyboardControl: true,    
    pagination: '.swiper-pagination-second',
    nextButton: '.swiper-button-next-second',
    prevButton: '.swiper-button-prev-second',
  });

   var mySwiper3 = new Swiper ('.swiper-container-third', {
    direction: 'horizontal',
    loop: true,
    keyboardControl: true,    
    pagination: '.swiper-pagination-third',
    nextButton: '.swiper-button-next-third',
    prevButton: '.swiper-button-prev-third',
  });

   var mySwiper4 = new Swiper ('.swiper-container-forth', {
    direction: 'horizontal',
    loop: true,
    keyboardControl: true,    
    pagination: '.swiper-pagination-forth',
    nextButton: '.swiper-button-next-forth',
    prevButton: '.swiper-button-prev-forth',
  });


   

/* navigation button */
   var buttonCircles = $(".nav-circle");

  $(".btn-nav").on("tap click", function() {
    $(this).toggleClass("closed-nav")
    if ($(this).hasClass("closed-nav")) {
      slideDown();
    } else {
      slideUp()
    }
  });

  $(".round-circle").click(function() {
    $(".btn-nav").toggleClass("closed-nav");
    slideUp();
  })

  function slideDown() {

    var topMargin = 20
    for (i = 0; i < buttonCircles.length; i++) {
      topMargin += 75
      $(buttonCircles[i]).animate({
        top: topMargin
      }, function() {
        $(".circle-container, .round-circle").css("visibility", "visible");
        if ($(".fa-plus").hasClass("unRotateIcon")) {
          $(".fa-plus").removeClass("unRotateIcon").addClass("rotateIcon");
        } else {
          $(".fa-plus").addClass("rotateIcon");
        }

      })
    }
  }

  function slideUp() {

    var resetTop = 20
    for (i = 0; i < buttonCircles.length; i++) {
      $(buttonCircles[i]).animate({
        top: resetTop
      }, 400, function() {
        $(".circle-container, .round-circle").css("visibility", "hidden");
        if ($(".fa-plus").hasClass("rotateIcon")) {
          $(".fa-plus").removeClass("rotateIcon").addClass("unRotateIcon");
        } else {
          $(".fa-plus").addClass("unRotateIcon");
        }
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

  function animateArrow (delay) {
   $(".btn-skip").animate({
      bottom: "2%"
    }, delay, function(){
      $(".fa-arrow-down").delay(300).addClass("rotateIcon");
    });
   }

   $(".btn-skip").click(function(){
    animateNavButton();
    $("html,body").css("overflow", "visible");
   });

function animateNavButton () {
  $(".fixed-container").animate({
    left: "0px"
  }, 500, function(){
  });
}

function runPreloader () {
  $('#preloader').delay(2000).fadeOut('slow'); 
  $('body').delay(500).css({'overflow':'visible'});
  $("main").fadeIn(5000, function(){
    $(".parallax-mirror").fadeIn(2000);
  });
}

function type(delay) {
  $(function(){
    $(".typed-text").typed({
      strings: ['<span class="skill-title">Hello!</span>My name is Antonija and I am <span class="skill-span">front-end developer</span>. I speak <span class="skill-span">HTML</span>, <span class="skill-span">CSS3</span> and <span class="skill-span">jQuery</span> which help me make websites dance. Compiling <span class="skill-span">SASS</span> with <span class="skill-span">Gulp</span> and versioning with <span class="skill-span">Git</span> is must-have. My biggest passions are <span class="skill-span">jQuery/CSS animations</span> and one pages. Front-end frameworks, such as <span class="skill-span">Bootstrap</span> and<span class="skill-span"> Materializecss</span> speed up my workflow. I code in <span class="skill-span">Linux Mint</span> and <span class="skill-span">SublimeText</span> equipped with <span class="skill-span">Emmet</span>. I am currently learning <span class="skill-span">Ruby on Rails</span> so <a href="mailto:antonija1023@gmail.com" class="skill-anchor"><span class="help-span"> I am looking  for RoR internship </span></a>.'],
      typeSpeed: 0,
      contentType: 'html',
      startDelay: delay,
      showCursor: true,
      loop: false,
      loopCount: false
    });
  }); 
  } 
function playVideo () {
  var video = document.getElementById("video");
  video.play();
  $("#video").on("timeupdate",function(event){
      var videoCurrentTime = video.currentTime;
      var videoCurrentTimeToFloat = Math.floor(videoCurrentTime);
      if (videoCurrentTimeToFloat == 8) {
        type(0);
      }
      if (videoCurrentTimeToFloat == 34) {
        animateNavButton();
      }
  });
}

});

window.addEventListener("orientationchange", function() {
  window.location.href = window.location.href;
  location.reload();
}, false);