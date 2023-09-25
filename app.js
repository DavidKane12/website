const observer = new IntersectionObserver((entries, i) => {
    entries.forEach((entry) => {
        let currentIndex =         Array.prototype.indexOf.call(hiddenElements, entry.target);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            dots[currentIndex].classList.add('selected');
        }
        else{
            entry.target.classList.remove('show');
            dots[currentIndex].classList.remove('selected');

        }
    });
});

const hiddenElements = document.querySelectorAll('.tab');
const dots = document.querySelectorAll('.dot');
hiddenElements.forEach((element) => observer.observe(element));

const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 5000,
    },
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});