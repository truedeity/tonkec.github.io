$(window).load(function(){
 $('#preloader').delay(1000).fadeOut('slow'); 
 $('body').delay(500).css({'overflow':'visible'});
 $(".fixed-container, .btn-more").css("display", "block");
   var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    keyboardControl: true,    
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
  });   

  var buttonCircles = $(".nav-circle");

$(window).width() < 1200? buttonOnSmallScreen() : buttonOnLargeScreen();

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
  $('.modal-trigger').leanModal();
  $(".modal-close").click(function(event){
    event.preventDefault();
  });

   function type() {
     $(function(){
    $(".element").typed({
      strings: ['My name is Antonija and I am <span class="skill-span">front-end developer</span>. My skillset mainly consists of <span class="skill-span">HTML</span>, <span class="skill-span">CSS3</span> and <span class="skill-span">jQuery</span>. My biggest passion are <span class="skill-span">jQuery/CSS animations</span>. Front-end frameworks, such as <span class="skill-span">Bootstrap</span> and<span class="skill-span"> Materializecss</span> help me speed up my workflow. Compiling <span class="skill-span">SASS</span> with <span class="skill-span">Gulp</span> is must-have. I am working in <span class="skill-span">Linux Mint</span> and writing code with <span class="skill-span">SublimeText</span> and <span class="skill-span">Emmet</span>. I am currentyl learning <span class="skill-span">Ruby on Rails</span> so <a href="mailto:antonija1023@gmail.com" class="skill-anchor"><span class="help-span"> I am looking  for RoR internship </span></a>.'],
      typeSpeed: 1,
      contentType: 'html',
  
    });
  }); 
  } 

  $(window).scroll(function (){
      var topOfWindow = $(window).scrollTop(),
        bottomOfWindow = topOfWindow + $(window).height();
        $(".skills-info").each(function(){
          var elPosition = $(this).offset().top;
          if (elPosition <= bottomOfWindow && elPosition >= topOfWindow) {
            type()
          }
        }); 
    });

 

 
});