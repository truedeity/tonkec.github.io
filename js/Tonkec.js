$(document).ready(function(){

	function animateMe(el, animation) {
		$(window).scroll(function (){

			var topOfWindow = $(window).scrollTop(),
				bottomOfWindow = topOfWindow + $(window).height();

				$(el).each(function(){

					var elPosition = $(this).offset().top;

					if (elPosition <= bottomOfWindow && elPosition >= topOfWindow) {
						$(this).addClass(animation);
					} else {
						$(this).removeClass(animation);
					}

				}); 
		});
	};

	animateMe('h1', 'animated bounce');
	animateMe('.col-lg-4 span', 'animated shake');
	animateMe('.col-lg-12 a', 'animated shake');

    $('#singlebutton').click(function(e) {
    	e.preventDefault();
    });


})