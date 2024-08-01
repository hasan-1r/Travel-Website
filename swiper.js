/* ===============================================
     SWIPER 1 - HOME SLIDER 
   =============================================== */
var swiper = new Swiper(".home-slider", {
    loop: true,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


/* ===============================================
     SWIPER 2 - REVIEW'S
   =============================================== */
const swiper3 = new Swiper(".swiper3", {
    slidesPreview: 1,
    spaceBetween: 0,
    slidePreGroup: 1,
    Loop: true,
    fade: true,
    centerSlide: true,
    grabCursor: true,
    LoopfillGroupwithBlank: true,

    autoplay: {
        delay: 5000,
    },

    speed: 400,

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
        },
        // when window width is >= 480px
        768: {
            slidesPerView: 1,
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 1,
        },
    },
});
