let slideIndex = 0;
let slides = document.getElementsByClassName("slides");
let dots = document.getElementsByClassName("dot");
let autoSlideInterval;


function showSlides(index) {
    slideIndex = index;

    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex].style.display = "block";  
    dots[slideIndex].className += " active";
}

function nextSlide() {
    slideIndex++;
    showSlides(slideIndex);
}
function prevSlide() {
    slideIndex--;
    showSlides(slideIndex);
}
function autoSlides() {
    autoSlideInterval = setInterval(nextSlide, 5000); 
}
function pauseSlides() {
    clearInterval(autoSlideInterval);
}
function resumeSlides() {
    autoSlides();
}
showSlides(slideIndex);
autoSlides(); 
const sliderContainer = document.querySelector('.slider-container');
sliderContainer.addEventListener('mouseenter', pauseSlides);
sliderContainer.addEventListener('mouseleave', resumeSlides);


function displayCurrentDateTime() {
    const now = new Date();
    const formattedDate = now.toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });
    document.getElementById('current-date-time').textContent = formattedDate;
}

displayCurrentDateTime();
setInterval(displayCurrentDateTime, 1000);

