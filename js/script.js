$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
//Стандартная настройка slick slider(все работает, но с багом при переходе >768px)
/*$('.reviews__columns').slick({
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
});*/
//Настройка slick-slider(ресайз окна при переходе брейкоинтов)
// Подпишемся на ресайз и продиспатчим его для запуска
$(window).on('resize', function(e){
	// Переменная, по которой узнаем запущен слайдер или нет
	// Храним её в data
	var init = $(".reviews__columns").data('init-slider');
	// Если мобильный
	if(window.innerWidth <= 768){
		// Если слайдер не запущен
		if(init != 1){
		 // Запускаем слайдер и записываем в data init-slider = 1
			$('.reviews__columns').slick({
				accessibility: true,
				arrows: false,
				infinite: true,
				dots: true,
				initialSlide: 1,
				speed: 300,
				slidesToShow: 1,
				slidesToScroll: 1,
				mobileFirst: true
			}).data({'init-slider': 1});
		}
	}
	// Если десктоп
	else {
		// Если слайдер запущен
		if(init == 1){
			// Разрушаем слайдер и записываем в data init-slider = 0
			$('.reviews__columns').slick('unslick').data({'init-slider': 0});
		}
	}
}).trigger('resize');
