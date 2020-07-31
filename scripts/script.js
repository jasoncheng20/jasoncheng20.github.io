(function ($) {
    $(function () {
      $(".project").fancybox();

      $(window).scroll(function () {
        if ($(this).scrollTop() > $(".topnav").height()) {
          $(".topnav").css({
            "background-color": "#fff",
            "box-shadow": "0px 1px 10px lightgrey",
            transition: "0.5s",
          });
        } else {
          $(".topnav").css({
            "background-color": "rgba(255, 255, 255, 0)",
            "box-shadow": "none",
            transition: "0.5s",
          });
        }
      });
      
      $(window).scroll(function () {
        if($(this).scrollTop() > $(".topnav").height() + 50) {
          $("#about").fadeIn(1000)
        }
      })
      
      $(window).scroll(function () {
        if($(this).scrollTop() > $(".topnav").height() + $("#aboutcontainer").height() + 50) {
          $("#portfolio").fadeIn(1000)
        }
      })

      $(window).scroll(function () {
        if($(this).scrollTop() > $(".topnav").height() + $("#aboutcontainer").height() + $("#portfoliocontainer").height()) {
          $("#contact").fadeIn(1000)
        }
      })
    });
  })(jQuery);