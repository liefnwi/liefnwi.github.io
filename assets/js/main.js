let lastScrollPosition = 0;
let mobileMenu = false;

document.addEventListener("DOMContentLoaded", () => {
    let logoElem = document.getElementById("logo");
    let logoHeight = logoElem.getBoundingClientRect().height;
    window.logoDefaultHeight = logoHeight;

    document.querySelector(".navitem-multilevel").addEventListener("pointerdown", (event) => {
        if (event.pointerType === "touch") {
            mobileMenu = true;
        }
    });

    document.querySelector(".navitem-multilevel").addEventListener("click", (event) => {
        if (mobileMenu) {
            event.preventDefault();
            document.querySelector(".navitem-l2").style.display = "block";
        }
    });
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
