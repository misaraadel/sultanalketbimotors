$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 700) {
            $(".scroll-top-button").fadeIn();
        } else {
            $(".scroll-top-button").fadeOut();
        }
    });

    $(function () {
        $(document).scroll(function () {
            var $nav = $(".navbar");
            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
    });

    $(".scroll-top-button").on('click', function () {
        $('html , body').animate({
            scrollTop: 0
        }, 100);
    });

    $('.hamburger').click(function(){
        $('.hamburger').toggleClass('active');
        $('.navbar-nav').toggleClass('active-nav');
        $('body').toggleClass('overflowNone')
    });

    

    $("#single-slider-range").slider({
        range:true,
        orientation:"horizontal",
        min: 0,
        isRTL: true,
        max: 10000,
        values: [0, 10000],
        step: 100,
        slide:function (event, ui) {
            if (ui.values[0] == ui.values[1]) {
                return false;
            }     
            $("#single_min_price").val(ui.values[0]);
            $("#single_max_price").val(ui.values[1]);

        }
    });

    $("#slider-range").slider({
        range:true,
        rtl: true,
        orientation:"horizontal",
        isRTL: true,
        min: 0,
        max: 10000,
        values: [0, 10000],
        step: 100,
        slide:function (event, ui) {
            if (ui.values[0] == ui.values[1]) {
            return false;
            }     
            $("#min_price").val(ui.values[0]);
            $("#max_price").val(ui.values[1]);

        }
    });


    var swiper = new Swiper('.header-swiper', {
        loop: true,
        speed: 900,
        slidesPerView: 1,
        spaceBetween: 15,
        effect: 'fade',
        autoplay: {
            delay: 2500,
        },
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        },
    });


    var swiper = new Swiper('.products-swiper', {
        loop: true,
        speed: 900,
        spaceBetween: 15,
        autoplay: {
            delay: 2500,
        },
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        },
        breakpoints: {
            0:{
                slidesPerView: 1,
            },
            700:{
                slidesPerView: 1,
            },
            1050:{
                slidesPerView: 4,
            }
        }
    });

    var swiper = new Swiper(".prodcutDetailsThumbsSlider", {
        spaceBetween: 10,
        
        freeMode: true,
        watchSlidesProgress: true,
        loop: true,
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            0:{
                slidesPerView: 2,
            },
            700:{
                slidesPerView: 2,
            },
            1050:{
                slidesPerView: 4,
            }
        }
    });
    var swiper2 = new Swiper(".prodcutDetailsSwiper", {
        spaceBetween: 10,
        loop: true,
        thumbs: {
            swiper: swiper,
        },
    });
});