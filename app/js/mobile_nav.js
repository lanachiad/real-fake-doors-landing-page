$(document).ready(function() {
  let mobileNav = $('#mobile-nav');
  let mobileNavLinks = $('#mobile-nav-links');

  mobileNav.click(e => {
    mobileNavLinks.toggleClass('showMenu');
    mobileNav.toggleClass('turn');
  });

  $(document).click(function(event) {
    if (!$(event.target).closest('#mobile-nav-links').length) {
      if ($('#mobile-nav-links').is(':visible')) {
        $('#mobile-nav-links').hide();
      }
    }
  });
});
