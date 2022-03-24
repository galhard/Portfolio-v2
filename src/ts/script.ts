//GLOBAL SCOPE ELEMENTS

const skills = (<HTMLElement>(
  document.querySelector('.skills')
)) as HTMLDivElement;

//mouseenter
//mouseleave
//# MIN SECTIONS

//## SKILLS
const text = skills.firstElementChild as HTMLParagraphElement;
const img = skills.lastElementChild as HTMLImageElement;
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
