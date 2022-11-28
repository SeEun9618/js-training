
const rightArrowButton = document.querySelector(".bx-right-arrow-circle");
const toggleNav = document.querySelector("nav");

function onClickArrow () {
    document.querySelector('body').classList.remove("preload");
    toggleNav.classList.toggle('active');

    if(toggleNav.className.includes("active")) {
        localStorage.setItem("toggle", "open");
    }else {
        localStorage.setItem("toggle", "close");
    }
}

window.onload = function() {
    const toggleValue = localStorage.getItem("toggle");

    if(toggleValue === "close") {
        toggleNav.classList.remove("active");
    }else {
        toggleNav.classList.add("active");
    }

    document.querySelector('body').style.visibility = 'visible';
}

rightArrowButton.addEventListener('click', onClickArrow);