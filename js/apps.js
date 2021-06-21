$(document).ready(function () {
  $('.header__nav-item').click(function() {
    $('.header__nav-item').removeClass('_active');
    $(this).addClass('_active');
  });
  $('.header__burger').click(function() {
    $('.header__burger,.menu-js').toggleClass('_active');
    $('body').toggleClass('_lock');
  });
  $('.package__burger').click(function() {
    $('.package__burger,.package-js').toggleClass('_active');
    $('body').toggleClass('_lock');
  });
  $('.package-menu__item').click(function() {
    $('.package-menu__item').removeClass('_active');
    $(this).addClass('_active');
  });

  $('.hero__slider').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

  $('.review__slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
})