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
      
    });
  })(jQuery);