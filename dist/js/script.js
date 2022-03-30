"use strict";
//GLOBAL SCOPE ELEMENTS
const portfolio = document.querySelector('.portfolio');
const navigation = document.querySelector('.nav');
const navigationElements = document.querySelectorAll('.nav__el');
const contact = document.querySelector('.contact');
const contactElements = document.querySelectorAll('.hero__left__contact__link');
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
const sectionFullArray = [skillsFull, projectsFull, roadmapFull];
const roadmapInnerHTML = roadmap.innerHTML;
const skillsInnerHTML = skills.innerHTML;
const projectsInnerHTML = projects.innerHTML;
const portfolioInnerHTML = portfolio.innerHTML;
const roadmapFullInnerHTML = roadmapFull.innerHTML;
const skillsFullInnerHTML = skillsFull.innerHTML;
const projectsFullInnerHTML = projectsFull.innerHTML;
//mouseenter
//mouseleave
//# MIN SECTIONS
//####### RESET SECTIONS
const wait = (seconds) => new Promise(resolve => {
    setTimeout(resolve, seconds);
});
const resetSections = function () {
    skillsImg.style.transform = 'none';
    skillsText.style.opacity = '0';
    skillsText.style.transform = 'translateY(100%)';
    projects.innerHTML = projectsInnerHTML;
    roadmap.innerHTML = roadmapInnerHTML;
};
const resetSectionsFull = function () {
    roadmapFull.innerHTML = roadmapFullInnerHTML;
    skillsFull.innerHTML = skillsFullInnerHTML;
    projectsFull.innerHTML = projectsFullInnerHTML;
};
//##CONTACT
contact.addEventListener('click', () => {
    console.log(contactElements);
    contactElements.forEach((el, index) => {
        wait((index + 1) * 300).then(() => {
            el.style.opacity = '1';
        });
    });
});
//## SKILLS
const skillsText = document.querySelector('.skills__text');
const skillsImg = document.querySelector('.skills__img');
const showFullSection = function (sectionFull, displayType) {
    wait(1750)
        .then(() => {
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
        return wait(500);
    })
        .then(() => {
        portfolio.style.display = 'none';
        sectionsArray.forEach(el => {
            el.style.display = 'none';
        });
        contact.style.display = 'none';
        return wait(500);
    })
        .then(() => {
        sectionFull.style.opacity = '1';
        sectionFull.style.transform = 'none';
        navigation.scrollIntoView();
        return wait(500);
    })
        .then(() => {
        navigationElements.forEach(el => {
            if (el.dataset.number !== sectionFull.dataset.number) {
                el.style.pointerEvents = 'auto';
            }
        });
        sectionsArray.forEach(el => {
            resetSections();
            el.style.pointerEvents = 'auto';
        });
    });
};
const disablePointerEvents = function (section) {
    sectionsArray.forEach(el => {
        if (el.className !== section.className) {
            el.style.pointerEvents = 'none';
        }
    });
    navigationElements.forEach(navEl => {
        navEl.style.pointerEvents = 'none';
        if (navEl.textContent?.toLowerCase() === section.className) {
            navEl.classList.add('nav__active');
        }
        else {
            navEl.classList.remove('nav__active');
        }
    });
};
const roadmapAnimation = function (time) {
    wait(time).then(() => {
        const stageArray = [];
        for (let i = 1; i < 36; i++) {
            stageArray.unshift(document.querySelector(`.stage${i}`));
        }
        stageArray.forEach((el, index) => {
            if (el.hasChildNodes()) {
                el.insertAdjacentHTML('beforeend', '<img class="roadmap-full__road__arrow" src="img/link-arrow.svg" alt="Link Arrow"/>');
            }
            wait((index + 1) * 75).then(() => {
                el.style.opacity = '1';
            });
        });
    });
};
const app = function () {
    skills.addEventListener('click', function () {
        disablePointerEvents(skills);
        skillsImg.style.transform = 'scale(0.87) translateY(-12%) rotate(1100deg)';
        skillsText.style.opacity = '1';
        skillsText.style.transform = 'none';
        showFullSection(skillsFull, 'flex');
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
                wait(1800).then(() => {
                    projectsFullProjects.style.opacity = '1';
                    projectsFullProjects.style.pointerEvents = 'auto';
                });
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
    const stagesCompleted = document.querySelectorAll('.stage__completed');
    stagesCompleted.forEach(el => {
        el.querySelector('.roadmap-full__road__img').style.opacity = '1';
    });
    roadmap.addEventListener('click', function () {
        disablePointerEvents(roadmap);
        roadmapFace.setAttribute('src', 'img/road-face2.svg');
        roadmapFace.style.transform = 'translateX(2000rem)';
        showFullSection(roadmapFull, 'grid');
        roadmapAnimation(3500);
    });
};
app();
//#NAVIGATION
// const navigationElements = document.querySelectorAll('.nav__el');
// navigationElements.forEach(el => {
//   const elDataSetName = (el as HTMLParagraphElement).dataset.name;
// });
//##ALL przycisk
navigationElements.forEach(el => {
    const heroImg = document.querySelector('.hero__header__img');
    el.addEventListener('click', function () {
        if (el.dataset.number !== '5') {
            heroImg.style.transform = 'rotate(5400deg)';
        }
        for (let child of navigation.children) {
            child.classList.remove('nav__active');
            child.style.pointerEvents = 'none';
            wait(3000).then(() => {
                child.style.pointerEvents = 'auto';
                el.style.pointerEvents = 'none';
            });
        }
        el.classList.add('nav__active');
        if (el.dataset.number === '0') {
            contact.style.display = 'block';
            navigation.scrollIntoView();
            heroImg.style.transform = 'none';
            contactElements.forEach(el => {
                el.style.opacity = '0';
            });
            sectionFullArray.forEach((section) => {
                if ((section.style.opacity = '1')) {
                    section.style.opacity = '0';
                    wait(1000).then(() => {
                        portfolio.style.display = 'grid';
                        section.style.display = 'none';
                    });
                }
            });
            wait(1500).then(() => {
                sectionsArray.forEach(el => {
                    let sectionDisplay = '';
                    const elNumber = el.dataset.number;
                    if (elNumber === '1') {
                        sectionDisplay = 'flex';
                    }
                    else if (elNumber === 'map') {
                        sectionDisplay = 'block';
                    }
                    else if (elNumber === '2') {
                        sectionDisplay = 'flex';
                    }
                    else if (elNumber === '3') {
                        sectionDisplay = 'flex';
                    }
                    else if (elNumber === '4') {
                        sectionDisplay = 'flex';
                    }
                    el.style.display = `${sectionDisplay}`;
                    wait(500).then(() => {
                        el.style.transform = '';
                        el.style.opacity = '1';
                    });
                });
            });
            wait(3050).then(() => {
                resetSectionsFull();
                app();
            });
        }
        if (el.dataset.number !== '0') {
            sectionFullArray.forEach((sectionFull) => {
                if ((sectionFull.style.opacity = '1')) {
                    sectionFull.style.opacity = '0';
                    wait(1000).then(() => {
                        sectionFull.style.display = 'none';
                        resetSectionsFull();
                        app();
                    });
                }
            });
        }
        if (el.dataset.number === '2') {
            showFullSection(skillsFull, 'flex');
        }
        if (el.dataset.number === '3') {
            showFullSection(projectsFull, 'flex');
            // projectsFullAnimation(5000);
        }
        if (el.dataset.number === '4') {
            showFullSection(roadmapFull, 'grid');
            roadmapAnimation(3500);
        }
    });
});
