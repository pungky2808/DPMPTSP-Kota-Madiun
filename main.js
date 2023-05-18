// Image Slider
currentSlideID = 1;

sliderElement = document.getElementById('slider');
totalSlides = sliderElement.childElementCount;
console.log(totalSlides);

function next() {
    if (currentSlideID < totalSlides) {
        currentSlideID++;
        showSlide();
    }
}

function prev() {
    if (currentSlideID > 1)
        currentSlideID--;
        showSlide();
}

function showSlide() {
    slides = document.getElementById('slider').getElementsByTagName('li')
    for (let index = 0; index < totalSlides; index++) {
        const element = slides[index];
        if(currentSlideID===index+1) {
            element.classList.remove('hidden')
        } else {
            element.classList.add('hidden')
        }
    }
}


// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});