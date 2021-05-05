/** @format */
$(document).ready(function () {
  // Sticky Menu

  $(window).on("scroll", function () {
    if ($(window).scrollTop() >= 300) {
      $(".tap-to-home").removeClass("d-none");
    } else {
      $(".tap-to-home").addClass("d-none");
    }

    if ($(window).scrollTop() >= 150) {
      $("header").addClass("sticky-menu");
    } else {
      $("header").removeClass("sticky-menu");
    }
  });

  $(".menu-btn").on("click", function () {
    $(".main-menu ").toggleClass("show-menu");
    $(".menu-btn").toggleClass("menuopenclose");
  });

  $(".main-menu  .menu > li > a").on("click", function () {
    $(".main-menu ").toggleClass("show-menu");
    $(".menu-btn").toggleClass("menuopenclose");
  });

  $("a.menu-link,.footer-menu a,.footer-logo a,.tap-to-home a").on(
    "click",
    function (e) {
      if (this.hash !== " ") {
        e.preventDefault();
        var hash = $(this.hash);
        $("html, body").animate(
          { scrollTop: $(hash).offset().top },
          1500,
          "easeInOutExpo"
        );
      }
    }
  );

  // Owl

  $(".img-carousel").owlCarousel({
    items: 6,
    nav: false,
    dots: false,
    autoplay: true,
    loop: true,
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      767: {
        items: 3,
      },
      // breakpoint from 480 up
      992: {
        items: 5,
      },
    },
  });
  $(".testimonial-carousel").owlCarousel({
    items: 1,
    nav: true,
    autoplay: true,
    loop: true,

    responsive: {
      992: {
        items: 1,
      },
    },
  });
  $(".owl-prev").html("<i class='fas fa-long-arrow-alt-left'></i>");
  $(".owl-next").html("<i class='fas fa-long-arrow-alt-right'></i>");
  $(".owl-next").addClass("active");
  new WOW().init();
});
