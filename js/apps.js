$(document).ready(function () {
  $('.header__nav-item').click(function() {
    $('.header__nav-item').removeClass('_active');
    $(this).addClass('_active');
  });
  $('.burger-js').click(function() {
    $('.burger-js,.menu-js').toggleClass('_active');
    $('body').toggleClass('_lock');
  });
  $('.package-menu__item').click(function() {
    $('.package-menu__item').removeClass('_active');
    $(this).addClass('_active');
  });
})

/*
const $items = $('.hero-slider__list').children()
const max = $items.length - 1
let i = 0
$('.hero-slider__btn--next').click(function(){
  $items.eq(i).removeClass('_active')
  i = (i + 1 < $items.length) ? i + 1 : 0;
  $items.eq(i).addClass('_active');
});
$('.hero-slider__btn--prev').click(function(){
  $items.eq(i).removeClass('_active')
  i = (i > 0) ? i - 1 : max;
  $items.eq(i).addClass('_active');
});
*/