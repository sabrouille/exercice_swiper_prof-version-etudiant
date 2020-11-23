var mySwiper1 = new Swiper('.swiper-1', {
    direction: 'horizontal',
    pagination: {
        el: '.swiper-pagination',
    },
})

var mySwiper2 = new Swiper('.swiper-2', {
    direction: 'horizontal',
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})

var mySwiper3 = new Swiper('.swiper-3', {
    direction: 'vertical',
    loop: true,
    autoplay: {
        delay: 2000,
    },
    allowTouchMove: false,
})

var mySwiper4 = new Swiper('.swiper-4', {
    direction: 'horizontal',
    pagination: {
        el: '.swiper-pagination',
    },

})

var mySwiper5 = new Swiper('.swiper-5', {
    direction: 'horizontal',
    pagination: {
        el: '.swiper-pagination',
    },
    breakpoints: {
        480: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        780: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1000: {
            slidesPerView: 4,
            spaceBetween: 30,
        },

        1200: {
            slidesPerView: 5,
            spaceBetween: 30,
        }
    }
})

var mySwiper6 = new Swiper('.swiper-6', {
    effect: 'flip',
    direction: 'horizontal',
});
