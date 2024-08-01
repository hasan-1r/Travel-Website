/* ===============================================
    1. Preloader 
   =============================================== */
// window.addEventListener("load", () => {
//     const loader = document.querySelector(".loader");

//     loader.classList.add("loader--hidden");

//     loader.addEventListener("transitioned", () => {
//         document.body.removedChild(document.querySelector(".loader"));
//     });
// });




/* ===============================================
    2. NAV SCROLL 
   =============================================== */
$(document).ready(function () {
    $(window).on('scroll', function () {
        if ($(window).scrollTop()) {
            $("header").addClass('bgc');
        } else {
            $("header").removeClass('bgc');
        }
    });
});

/* ===============================================
    3. MENU BUTTONS
   =============================================== */
const menus = document.querySelector("nav ul");
const header = document.querySelector("header");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener('click', () => {
    menus.classList.add("display");
});

closeBtn.addEventListener('click', () => {
    menus.classList.remove("display");
});


/* ===============================================
    4. SCROLL REVEAL EFFECTS 
   =============================================== */

// Common reveal options to create reveal animations //
ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
});

// Target Elements, & Specify options to create reveal animation's //

// BANNER CONTENT //
ScrollReveal().reveal(' .banner-content, .tour-content, .dest-content, .blog-content, .cont-head', { delay: 500, origin: 'bottom', });

ScrollReveal().reveal(' .agency-left-side, .review-head', { delay: 500, origin: 'left' });
ScrollReveal().reveal(' .agency-right-side', { delay: 600, origin: 'bottom' });
ScrollReveal().reveal(' .heading-normal-txt, .h2-headings', { delay: 500, origin: 'left' });
ScrollReveal().reveal(' .section-subtitle, .section-title', { delay: 500, origin: 'bottom' });
ScrollReveal().reveal('.contact-content', { delay: 500, origin: 'top', });
ScrollReveal().reveal('.review-info', { delay: 500, origin: 'right', interval: 200 });


/* ===============================================
    5. STATIC NUMBER
   =============================================== */
const countersEL = document.querySelectorAll(".numbers");
countersEL.forEach((counter) => {
    counters.textContent = 0;

    increamentCounters();

    function increamentCounters() {
        let currentNum = +counters.textCountent;
        const dataCeil = counters.getAttribute(".data-ceil");

        const increament = dataCeil / 25;

        currentNum = Math.ceil(currentNum + increament);

        if (currentNum < dataCeil) {
            counters.textContent = currentNum;
            setTimeout(increamentCounters, 30);
        } else {
            counters.textContent = dataCeil;
        }
    }
});


// const numbers = documents.querySelectorAll('.numbers')
// const speed = 97
// CountQueuingStrategy.forEach((counter) => {
//     function upData() {
//         const target = Number(counter.getAttribute('data-target'))
//         const count = (counter.innerText)
//         const inc = target / speed
//         if (count < target) {
//             counter.innerText = Math.floor(inc + count)
//             setTimeout(upData, 1)
//         } else {
//             counter.innerText = target
//         }
//     }
//     upData()
// })
