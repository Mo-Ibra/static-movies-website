'use strict';

// Create Navbar Toggler

const navOpenBtn = document.querySelector("[data-menu-open-btn]");
const navCloseBtn = document.querySelector("[data-menu-close-btn]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

const navElements = [navOpenBtn, navCloseBtn, overlay];

for (let i = 0; i < navElements.length; i++) {
    navElements[i].addEventListener('click', function() {
        navbar.classList.toggle('active');
        overlay.classList.toggle('active');

        // To remove overflow from body
        document.body.classList.toggle('active');
    })
};

const navbarLinks = document.querySelectorAll('.navbar-list li');

for (let i = 0; i < navbarLinks.length; i++) {
    navbarLinks[i].addEventListener('click', function() {
        navbar.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.classList.toggle('active');
    })
};