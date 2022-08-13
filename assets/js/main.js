let lastScrollPosition = 0;

document.addEventListener("DOMContentLoaded", () => {
    let logoElem = document.getElementById("logo");
    let logoHeight = logoElem.getBoundingClientRect().height;
    window.logoDefaultHeight = logoHeight;
});

window.addEventListener("scroll", (event) => {
    let logoElem = document.getElementById("logo");
    let logoHeight = logoElem.getBoundingClientRect().height;

    if (window.scrollY >= logoDefaultHeight && lastScrollPosition < logoDefaultHeight)
    {
        logoElem.style.height = 0;
    }

    if (window.scrollY == 0)
    {
        logoElem.style.height = null;
    }

    lastScrollPosition = window.scrollY;
});
