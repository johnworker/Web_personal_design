// slick響應式
$(".slick").slick({

  // the magic
  responsive: [{

    breakpoint: 1680,
    settings: {
      autoplay: true,
      autoplaySpeed: 500,
      vertical: true,
      slidesToShow: 3,
      pauseOnHover: false,
      pauseOnFocus: false,
      mobileFirst: true,
      adaptiveHeight: true
    }

  }, {

    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      dots: true
    }

  }, {

    breakpoint: 300,
    settings: "unslick" // destroys slick

  }]
});