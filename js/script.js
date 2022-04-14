$(document).ready(function() {
   $('.header__burger').click(function(event) {
      $('.header__burger, .header__menu').toggleClass('active');
      $('body').toggleClass('lock');
   });
});

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
