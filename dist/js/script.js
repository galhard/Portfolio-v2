"use strict";
//GLOBAL SCOPE ELEMENTS
const portfolio = document.querySelector('.portfolio');
const navigation = document.querySelector('.nav');
const header = document.querySelector('header');
const hero = document.querySelector('.hero');
const mapEl = document.querySelector('.map');
const skills = document.querySelector('.skills');
const skillsFull = document.querySelector('.skills-full');
const projects = document.querySelector('.projects');
const projectsFull = document.querySelector('.projects-full');
const roadmap = document.querySelector('.roadmap');
const roadmapFull = document.querySelector('.roadmap-full');
const sectionsArray = [hero, mapEl, skills, projects, roadmap];
//mouseenter
//mouseleave
//# MIN SECTIONS
//## SKILLS
const skillsText = document.querySelector('.skills__text');
const skillsImg = document.querySelector('.skills__img');
const showFullSection = function (sectionFull, displayType) {
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
        sectionFull.style.display = displayType;
        sectionFull.style.transform = 'translateY(300%)';
        setTimeout(() => {
            portfolio.style.display = 'none';
            setTimeout(() => {
                sectionFull.style.opacity = '1';
                sectionFull.style.transform = 'none';
                navigation.scrollIntoView();
                // setTimeout(() => {
                // }, 500);
            }, 1000);
        }, 1000);
    }, 5000);
};
const disablePointerEvents = function (section) {
    sectionsArray.forEach(el => {
        if (el.className !== section.className) {
            el.style.pointerEvents = 'none';
        }
    });
};
skills.addEventListener('click', function () {
    disablePointerEvents(skills);
    skillsImg.style.transform = 'scale(0.87) translateY(-12%) rotate(2000deg)';
    skillsText.style.opacity = '1';
    skillsText.style.transform = 'none';
    showFullSection(skillsFull, 'block');
});
//##PROJECTS
const projectsText = document.querySelector('.projects__text');
const projectsImgGear = document.querySelector('.projects__img-gear');
projects.addEventListener('click', function () {
    disablePointerEvents(projects);
    projectsImgGear.style.transform = 'rotate(6000deg)';
    projectsText.style.opacity = '1';
    showFullSection(projectsFull, 'flex');
});
//###PROJECTS FULL
let gears = [];
for (let i = 1; i < 5; i++) {
    gears.push(document.querySelector(`.projects-full__gear${i}`));
}
const projectsFullBulb = document.querySelector('.projects-full__bulb');
const projectsFullHeader = document.querySelector('.projects-full__header');
const projectsFullProjects = document.querySelector('.projects-full__projects');
const projectsFullProjectsBoxes = projectsFullProjects.querySelectorAll('.projects-full__projects__box');
let bulbOpacityCounter = 0;
gears.forEach(gear => {
    gear.addEventListener('click', () => {
        gear.style.pointerEvents = 'none';
        bulbOpacityCounter++;
        projectsFullBulb.style.opacity = `${0.25 * bulbOpacityCounter}`;
        gear.style.transform = 'rotate(25000deg)';
        if (bulbOpacityCounter === 4) {
            projectsFullHeader.style.opacity = '0';
            projectsFullBulb.style.top = '10%';
            projectsFullBulb.style.filter = 'drop-shadow(0 0 5px #51cf66)';
            projectsFullBulb.style.height = '10rem';
            setTimeout(() => {
                projectsFullProjects.style.opacity = '1';
                projectsFullProjects.style.pointerEvents = 'auto';
            }, 1800);
        }
    });
});
projectsFullProjectsBoxes.forEach(box => {
    const githubBox = box.querySelector('.projects-full__projects__box__btns-github');
    let githubTimer;
    const projectFullGithubTimer = function (n) {
        if (n === 1) {
            githubTimer = setTimeout(() => {
                githubBox.style.opacity = '0.5';
                box
                    .querySelector('.projects-full__projects__box__btns-github-img')
                    ?.setAttribute('src', 'img/github-proj-logo.svg');
            }, 2010);
        }
        else {
            clearTimeout(githubTimer);
        }
    };
    box.addEventListener('mouseenter', () => {
        projectFullGithubTimer(2);
        githubBox.style.width = '30%';
        githubBox.style.opacity = '1';
        githubBox.style.border = '1px solid #51cf66';
        githubBox.style.borderRadius = '20px';
        githubBox.style.padding = '0.5rem 1.5rem';
        box
            .querySelector('.projects-full__projects__box__btns-github-img')
            ?.setAttribute('src', 'img/github-text.svg');
    });
    box.addEventListener('mouseleave', () => {
        githubBox.style.width = '3rem';
        githubBox.style.opacity = '0';
        githubBox.style.border = 'none';
        githubBox.style.borderRadius = 'none';
        githubBox.style.padding = 'none';
        projectFullGithubTimer(1);
    });
});
//##ROADMAP
const roadmapFace = document.querySelector('.roadmap__animation__road__part1-face');
roadmap.addEventListener('click', function () {
    disablePointerEvents(roadmap);
    roadmapFace.setAttribute('src', 'img/road-face2.svg');
    roadmapFace.style.transform = 'translateX(2000rem)';
    showFullSection(roadmapFull, 'grid');
    setTimeout(() => {
        const stageArray = [];
        for (let i = 1; i < 36; i++) {
            stageArray.unshift(document.querySelector(`.stage${i}`));
        }
        stageArray.forEach((el, index) => {
            setTimeout(() => {
                el.style.opacity = '1';
            }, (index + 1) * 75);
        });
    }, 7050);
});
