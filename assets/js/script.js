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
        if (overlay.classList.contains('active')) {
            navbar.classList.toggle('active');
            overlay.classList.toggle('active');
            document.body.classList.toggle('active');
        }
    })
};


// Make Header Sticky & Go Top Button

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener('scroll', function() {
    this.scrollY >= 10 ? header.classList.add('active') : header.classList.remove('active');
    this.scrollY >= 500 ? goTopBtn.classList.add('active') : goTopBtn.classList.remove('active');
});