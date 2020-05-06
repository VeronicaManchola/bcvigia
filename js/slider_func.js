   $(document).on('ready', function(){
        'use strict';
        $('#full-slider-wrapper').slick({
            autoplay: true,
            dots: false,
            arrows: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            mobileFirst: true,
        });
    });// JavaScript Document