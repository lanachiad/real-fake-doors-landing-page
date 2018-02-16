$(document).ready(function() {
  $("#mobile.nav").click(function() {
    if ($("#mobile-nav-link").css(("display", "none"))) {
      $("#mobile-nav-link").slideDown("slow");
    } else {
      $("#mobile-nav-link").hide();
    }
  });
});
