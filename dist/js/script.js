"use strict";
//GLOBAL SCOPE ELEMENTS
const skills = (document.querySelector('.skills'));
//mouseenter
//mouseleave
//# MIN SECTIONS
//## SKILLS
skills.addEventListener('mouseenter', function () {
    const text = skills.firstElementChild;
    const img = skills.lastElementChild;
    img.style.transform = 'scale(0.87) translateY(-12%) rotate(2000deg)';
});
skills.addEventListener('mouseleave', function () {
    const text = skills.firstElementChild;
    const img = skills.lastElementChild;
    img.style.transform = 'none';
});
