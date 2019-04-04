$(document).ready(function() {
    $(window).on('scroll', function() {
        if($(window).scrollTop() > 0) {
            $('.block-header').addClass('fixed');
        } else {
            $('.block-header').removeClass('fixed');
        }
    })
    $('.slider').slick( {
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1000
    });


})