//GLOBAL SCOPE ELEMENTS

const skills = document.querySelector('.skills') as HTMLDivElement;
const projects = document.querySelector('.projects') as HTMLDivElement;
//mouseenter
//mouseleave
//# MIN SECTIONS

//## SKILLS
const skillsText = document.querySelector(
  '.skills__text'
) as HTMLParagraphElement;
const skillsImg = document.querySelector('.skills__img') as HTMLImageElement;

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
const projectsText = document.querySelector(
  '.projects__text'
) as HTMLParagraphElement;
const projectsImgGear = document.querySelector(
  '.projects__img-gear'
) as HTMLImageElement;
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
const roadmap = document.querySelector('.roadmap') as HTMLDivElement;
const roadmapFace = document.querySelector(
  '.roadmap__animation__road__part1-face'
) as HTMLImageElement;
const roadmapTitle = document.querySelector(
  '.roadmap__title'
) as HTMLParagraphElement;
const roadmapStart = document.querySelector(
  '.roadmap__animation__start'
) as HTMLParagraphElement;
const roadmapFinish = document.querySelector(
  '.roadmap__animation__finish'
) as HTMLParagraphElement;
const roadmapLine = document.querySelector(
  '.roadmap__animation__road__part2'
) as HTMLDivElement;
const roadmapOpacityElements = [
  roadmapTitle,
  roadmapStart,
  roadmapFinish,
  roadmapLine,
];
let roadmapOpacTime: number;
const roadmapTimer = function (type: 1 | 2) {
  if (type === 1) {
    roadmapOpacTime = setTimeout(() => {
      roadmapFace.setAttribute('src', 'img/road-face2.svg');
      (roadmapFace.parentNode as HTMLDivElement).style.transform =
        'translateX(90%)';
      (roadmapFace.parentNode as HTMLDivElement).style.transition = 'all 100s';
    }, 5000);
  } else {
    clearTimeout(roadmapOpacTime);
  }
};
let roadmapFaceTime: number;
const roadmapFaceTimer = function (type: 1 | 2) {
  if (type === 1) {
    roadmapFaceTime = setTimeout(() => {
      roadmapFace.setAttribute('src', 'img/road-face1.svg');
    }, 5000);
  } else {
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
  (roadmapFace.parentNode as HTMLDivElement).style.transform = 'none';
  roadmapFaceTimer(2);
});
roadmap.addEventListener('mouseleave', () => {
  roadmapTimer(2);
  roadmapOpacityElements.forEach(el => {
    el.style.opacity = '0';
  });
  roadmapFace.style.height = '20rem';
  roadmapFace.setAttribute('src', 'img/road-face3.svg');
  (roadmapFace.parentNode as HTMLDivElement).style.transform =
    'translateX(35%)';
  (roadmapFace.parentNode as HTMLDivElement).style.transition = 'all 5s';
  roadmapFaceTimer(1);
});
