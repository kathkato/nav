$('.hamburger').click(function () {
  $('.navigation').toggleClass('active');
});

$('.nav-content').click(function() {
  $(this).toggleClass('invert');
  $('.second-menu').toggleClass('active');
});

$('.main-link').click(function () {
  $('.second-menu').toggleClass('active');
  $('.nav-content').removeClass('invert');
});

$('.secondary-nav-content').click(function() {
  $(this).toggleClass('light');
  $(this).next().toggleClass('active');
});