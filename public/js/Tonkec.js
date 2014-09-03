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

	$(window).scroll(function () {
        var topOfWindow = $(window).scrollTop(),
            bottomOfWindow = topOfWindow + $(window).height();

        $('.progress .progress-bar').each(function () {
            var elPosition = $(this).offset().top;

            if(elPosition <= bottomOfWindow && elPosition >= topOfWindow){
                $(this).progressbar({
                	display_text: 'fill'
                });
            }
        });
    }); 

    $('#singlebutton').click(function(e) {
    	e.preventDefault();
    });


})