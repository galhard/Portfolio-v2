"use strict";
//GLOBAL SCOPE ELEMENTS
const skills = document.querySelector('.skills');
const projects = document.querySelector('.projects');
//mouseenter
//mouseleave
//# MIN SECTIONS
//## SKILLS
const skillsText = document.querySelector('.skills__text');
const skillsImg = document.querySelector('.skills__img');
skills.addEventListener('mouseenter', function () {
    skillsImg.style.transform = 'scale(0.87) translateY(-12%) rotate(2000deg)';
    skillsText.style.opacity = '1';
    skillsText.style.transform = 'none';
    setTimeout(() => {
        skills.addEventListener('click', () => {
            skillsImg.style.display = 'none';
        });
    }, 5000);
});
skills.addEventListener('mouseleave', function () {
    skillsImg.style.transform = 'none';
    skillsText.style.opacity = '0';
    skillsText.style.transform = 'translateY(100%)';
});
//##PROJECTS
const projectsText = document.querySelector('.projects__text');
const projectsImgGear = document.querySelector('.projects__img-gear');
projects.addEventListener('mouseenter', function () {
    projectsImgGear.style.transform = 'rotate(6000deg)';
    projectsText.style.opacity = '1';
    setTimeout(() => {
        projects.addEventListener('click', () => {
            projectsImgGear.style.display = 'none';
        });
    }, 5000);
});
projects.addEventListener('mouseleave', function () {
    projectsImgGear.style.transform = 'none';
    projectsText.style.opacity = '0';
});
//##ROADMAP
const roadmap = document.querySelector('.roadmap');
const roadmapFace = document.querySelector('.roadmap__animation__road__part1-face');
const roadmapTitle = document.querySelector('.roadmap__title');
const roadmapStart = document.querySelector('.roadmap__animation__start');
const roadmapFinish = document.querySelector('.roadmap__animation__finish');
const roadmapLine = document.querySelector('.roadmap__animation__road__part2');
const roadmapOpacityElements = [
    roadmapTitle,
    roadmapStart,
    roadmapFinish,
    roadmapLine,
];
let roadmapOpacTime;
const roadmapTimer = function (type) {
    if (type === 1) {
        roadmapOpacTime = setTimeout(() => {
            roadmapFace.setAttribute('src', 'img/road-face2.svg');
            roadmapFace.parentNode.style.transform =
                'translateX(90%)';
            roadmapFace.parentNode.style.transition = 'all 100s';
        }, 5000);
    }
    else {
        clearTimeout(roadmapOpacTime);
    }
};
let roadmapFaceTime;
const roadmapFaceTimer = function (type) {
    if (type === 1) {
        roadmapFaceTime = setTimeout(() => {
            roadmapFace.setAttribute('src', 'img/road-face1.svg');
        }, 5000);
    }
    else {
        clearTimeout(roadmapFaceTime);
    }
};
roadmap.addEventListener('mouseenter', () => {
    roadmapFace.setAttribute('src', 'img/road-face1.svg');
    roadmapOpacityElements.forEach(el => {
        el.style.opacity = '1';
    });
    roadmapTimer(1);
    roadmapFace.style.height = '6rem';
    roadmapFace.parentNode.style.transform = 'none';
    roadmapFaceTimer(2);
});
roadmap.addEventListener('mouseleave', () => {
    roadmapTimer(2);
    roadmapOpacityElements.forEach(el => {
        el.style.opacity = '0';
    });
    roadmapFace.style.height = '20rem';
    roadmapFace.setAttribute('src', 'img/road-face3.svg');
    roadmapFace.parentNode.style.transform =
        'translateX(35%)';
    roadmapFace.parentNode.style.transition = 'all 5s';
    roadmapFaceTimer(1);
});
