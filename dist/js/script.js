"use strict";
//GLOBAL SCOPE ELEMENTS
const skills = (document.querySelector('.skills'));
//mouseenter
//mouseleave
//# MIN SECTIONS
//## SKILLS
const text = skills.firstElementChild;
const img = skills.lastElementChild;
skills.addEventListener('mouseenter', function () {
    img.style.transform = 'scale(0.87) translateY(-12%) rotate(2000deg)';
    setTimeout(() => {
        text.style.opacity = '1';
    }, 2000);
});
skills.addEventListener('mouseleave', function () {
    img.style.transform = 'none';
    text.style.opacity = '0';
});
