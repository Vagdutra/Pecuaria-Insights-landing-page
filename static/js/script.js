const heroVideo = document.getElementById("heroVideo");
const soundToggle = document.getElementById("soundToggle");

soundToggle.addEventListener("click", () => {

    heroVideo.muted = !heroVideo.muted;

    if(heroVideo.muted){

        soundToggle.innerHTML =
            '<i class="fa-solid fa-volume-xmark"></i>';

    } else {

        soundToggle.innerHTML =
            '<i class="fa-solid fa-volume-high"></i>';

        heroVideo.play();
    }

});
/* NAVBAR SCROLL */

const navbar = document.querySelector(".custom-navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.classList.add("navbar-scrolled");

    } else {

        navbar.classList.remove("navbar-scrolled");

    }

});