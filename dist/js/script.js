"use strict";
//GLOBAL SCOPE ELEMENTS
const portfolio = document.querySelector('.portfolio');
const hero = document.querySelector('.hero');
const mapEl = document.querySelector('.map');
const skills = document.querySelector('.skills');
const skillsFull = document.querySelector('.skills-full');
const projects = document.querySelector('.projects');
const roadmap = document.querySelector('.roadmap');
const sectionsArray = [hero, mapEl, skills, projects, roadmap];
sectionsArray.forEach(el => {
    console.log(el.className);
});
//mouseenter
//mouseleave
//# MIN SECTIONS
//## SKILLS
const skillsText = document.querySelector('.skills__text');
const skillsImg = document.querySelector('.skills__img');
const hidingSections = function (sectionFull) {
    setTimeout(() => {
        hero.style.transform = 'translateX(-200%)';
        hero.style.opacity = '0';
        mapEl.style.transform = 'translateX(200%)';
        mapEl.style.opacity = '0';
        skills.style.transform = 'translateX(-200%)';
        skills.style.opacity = '0';
        projects.style.transform = 'translateX(200%)';
        projects.style.opacity = '0';
        roadmap.style.transform = 'translateX(-200%)';
        roadmap.style.opacity = '0';
        sectionFull.style.display = 'block';
        sectionFull.style.transform = 'translateY(300%)';
        setTimeout(() => {
            portfolio.style.display = 'none';
            setTimeout(() => {
                sectionFull.style.opacity = '1';
                sectionFull.style.transform = 'none';
            }, 1000);
        }, 2000);
    }, 5000);
};
skills.addEventListener('click', function (e) {
    console.log(e);
    projects.style.pointerEvents = 'none';
    skillsImg.style.transform = 'scale(0.87) translateY(-12%) rotate(2000deg)';
    skillsText.style.opacity = '1';
    skillsText.style.transform = 'none';
    hidingSections(skillsFull);
});
// skills.addEventListener('mouseenter', function () {
//   skillsImg.style.transform = 'scale(0.87) translateY(-12%) rotate(2000deg)';
//   skillsText.style.opacity = '1';
//   skillsText.style.transform = 'none';
//   setTimeout(() => {
//     skills.addEventListener('click', () => {
//       skillsImg.style.display = 'none';
//     });
//   }, 5000);
// });
// skills.addEventListener('mouseleave', function () {
//   skillsImg.style.transform = 'none';
//   skillsText.style.opacity = '0';
//   skillsText.style.transform = 'translateY(100%)';
// });
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
//#MAX SECTIONS
