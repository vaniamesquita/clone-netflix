var owl = $('.owl-carousel');
owl.owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  slideTransition: "ease-in",
  responsive:{
      0:{
          items:3
      },
      600:{
          items:4
      },

      900: {
          items:5
      },

      1000:{
          items:6
      },

      1200: {
          items: 7
      }
  }
 
});

$("#botao-anterior").on("click", function() {
    owl.trigger("prev.owl.carousel");
});

$("#botao-proximo").on("click", function() {
    owl.trigger("next.owl.carousel");
});




