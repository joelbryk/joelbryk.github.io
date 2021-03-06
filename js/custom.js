var $grid = $('.photo-grid').masonry({
  // options
  itemSelector: '.photo',
  transitionDuration: 0,
  gutter: 0
});

$grid.imagesLoaded().progress( function() {
  $grid.masonry('layout');
});

$(function() {
  // Closes the sidebar menu
  $("#menu-close").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
  });
  // Opens the sidebar menu
  $("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
  });
  // Scrolls to the selected menu item on the page
  $('a[href*=#]:not([href=#],[data-toggle],[data-target],[data-slide])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
              $('html,body').animate({
                  scrollTop: target.offset().top
              }, 500);
              return false;
          }
      }
  });
});