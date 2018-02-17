$(document).ready(function() {
  $("#mobile-nav").click(function(e) {
    $(this).toggleClass('turn');
    $("#mobile-nav-links").toggleClass("disappear");
  });
});
