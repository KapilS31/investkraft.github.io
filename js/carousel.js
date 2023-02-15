$(document).ready(function () {
  var owlone = $("#owlone");
  owlone.owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      768: {
        items: 1,
        nav: true,
      },
      980: {
        items: 1,
        nav: true,
      },
      1200: {
        items: 1,
      },
    },
  });
  $(".play").on("click", function () {
    owl.trigger("play.owl.autoplay", [1000]);
  });
  $(".stop").on("click", function () {
    owl.trigger("stop.owl.autoplay");
  });
});

$(document).ready(function () {
  var owltwo = $("#owltwo");
  owltwo.owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    nav: true,
    navText: [
      "<div class='nav-btn prev-slide'></div>",
      "<div class='nav-btn next-slide'></div>",
    ],
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      768: {
        items: 1,
        nav: true,
      },
      980: {
        items: 1,
        nav: true,
      },
      1200: {
        items: 1,
      },
    },
  });
  $(".play").on("click", function () {
    owl.trigger("play.owl.autoplay", [1000]);
  });
  $(".stop").on("click", function () {
    owl.trigger("stop.owl.autoplay");
  });
});

$(document).ready(function () {
  var owlthree = $("#owlthree");
  owlthree.owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    nav: false,
    navText: [
      "<div class='nav-btn prev-slide'></div>",
      "<div class='nav-btn next-slide'></div>",
    ],
    dots: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      768: {
        items: 1,
        nav: true,
      },
      980: {
        items: 1,
        nav: true,
      },
      1200: {
        items: 1,
      },
    },
  });
  $(".play").on("click", function () {
    owl.trigger("play.owl.autoplay", [1000]);
  });
  $(".stop").on("click", function () {
    owl.trigger("stop.owl.autoplay");
  });
});

$(document).ready(function () {
  var owlfour = $("#owlfour");
  owlfour.owlCarousel({
    items: 4,
    loop: true,
    margin: 25,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      768: {
        items: 2,
        nav: true,
      },
      980: {
        items: 3,
        nav: true,
      },
      1200: {
        items: 4,
      },
    },
  });
  $(".play").on("click", function () {
    owl.trigger("play.owl.autoplay", [1000]);
  });
  $(".stop").on("click", function () {
    owl.trigger("stop.owl.autoplay");
  });
});

$(document).ready(function () {
  var owlsix = $("#owlsix");
  owlsix.owlCarousel({
    items: 4,
    loop: true,
    margin: 25,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      768: {
        items: 2,
        nav: true,
      },
      980: {
        items: 3,
        nav: true,
      },
      1200: {
        items: 4,
      },
    },
  });
  $(".play").on("click", function () {
    owl.trigger("play.owl.autoplay", [1000]);
  });
  $(".stop").on("click", function () {
    owl.trigger("stop.owl.autoplay");
  });
});

$(document).ready(function () {
  var owlfive = $("#owlfive");
  owlfive.owlCarousel({
    items: 1,
    loop: true,
    margin: 25,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      768: {
        items: 1,
        nav: true,
      },
      980: {
        items: 1,
        nav: true,
      },
      1200: {
        items: 1,
      },
    },
  });
  $(".play").on("click", function () {
    owl.trigger("play.owl.autoplay", [1000]);
  });
  $(".stop").on("click", function () {
    owl.trigger("stop.owl.autoplay");
  });
});

$(document).ready(function () {
  var owlseven = $("#owlseven");
  owlseven.owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    nav: true,
    navText: [
      "<div class='nav-btn prev-slide'></div>",
      "<div class='nav-btn next-slide'></div>",
    ],
    dots: false,
    autoplay: false,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      768: {
        items: 1,
        nav: true,
      },
      980: {
        items: 1,
        nav: true,
      },
      1200: {
        items: 3,
      },
    },
  });
  $(".play").on("click", function () {
    owl.trigger("play.owl.autoplay", [1000]);
  });
  $(".stop").on("click", function () {
    owl.trigger("stop.owl.autoplay");
  });
});

$(document).ready(function () {
  var owleight = $("#owleight");
  owleight.owlCarousel({
    items: 4,
    loop: true,
    margin: 40,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      768: {
        items: 2,
        nav: true,
      },
      980: {
        items: 3,
        nav: true,
      },
      1200: {
        items: 4,
      },
    },
  });
  $(".play").on("click", function () {
    owl.trigger("play.owl.autoplay", [1000]);
  });
  $(".stop").on("click", function () {
    owl.trigger("stop.owl.autoplay");
  });
});

$(document).ready(function () {
  var owlnine = $("#owlnine");
  owlnine.owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      768: {
        items: 1,
        nav: true,
      },
      980: {
        items: 1,
        nav: true,
      },
      1200: {
        items: 1,
      },
    },
  });
  $(".play").on("click", function () {
    owl.trigger("play.owl.autoplay", [1000]);
  });
  $(".stop").on("click", function () {
    owl.trigger("stop.owl.autoplay");
  });
});

$(document).ready(function () {
  var owlprod = $("#owlprod");
  owlprod.owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      768: {
        items: 1,
        nav: true,
      },
      980: {
        items: 1,
        nav: true,
      },
      1200: {
        items: 1,
      },
    },
  });
  $(".play").on("click", function () {
    owl.trigger("play.owl.autoplay", [1000]);
  });
  $(".stop").on("click", function () {
    owl.trigger("stop.owl.autoplay");
  });
});
