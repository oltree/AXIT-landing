$(document).ready(function(){
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
});