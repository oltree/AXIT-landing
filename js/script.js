$(document).ready(function() {
   $('.header__burger').click(function(event) {
      $('.header__burger, .header__menu').toggleClass('active');
      $('body').toggleClass('lock');
   });
});
function slickify(){
   $('.reviews__columns').slick({
      accessibility: true,
      arrows: false,
      infinite: true,
      dots: true,
      initialSlide: 1,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      mobileFirst: true,
      responsive: [{
         breakpoint: 768,
         settings: 'unslick'
      }]
   });
}
slickify();
$(window).resize(function(){
	var $windowWidth = $(window).width();
	if ($windowWidth <= 768) {
		slickify();
	}
});
$('body').on('click', '.password-control', function(){
	if ($('#password-input').attr('type') == 'password'){
		$(this).addClass('view');
		$('#password-input').attr('type', 'text');
	} else {
		$(this).removeClass('view');
		$('#password-input').attr('type', 'password');
	}
	return false;
});