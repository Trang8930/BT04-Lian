$(document).ready(function() {
    $(window).on('scroll', function() {
        if($(window).scrollTop() > 0) {
            $('.block-header').addClass('fixed');
        } else {
            $('.block-header').removeClass('fixed');
        }
    });
    $('.slider').slick( {
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1000
    });
    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: 360,
        gutter: 30
    });
    $('.list-item li a').on('click', function(e) {
        var category = $(this).attr('id');

        if(category == 'all') {
            $('.list-photo li').addClass('hide');
            setTimeout(function() {
                $('.list-photo li').removeClass('hide');
            }, 300)
        } else {
            $('.list-photo li').addClass('hide');
            setTimeout(function() {
                $('.' + category).removeClass('hide');
            }, 300)
        }

        e.preventDefault();
    });
    
})