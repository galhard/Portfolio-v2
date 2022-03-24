//GLOBAL SCOPE ELEMENTS

const skills = (<HTMLElement>(
  document.querySelector('.skills')
)) as HTMLDivElement;

//mouseenter
//mouseleave
//# MIN SECTIONS

//## SKILLS
skills.addEventListener('mouseenter', function () {
  const text = skills.firstElementChild as HTMLParagraphElement;
  const img = skills.lastElementChild as HTMLImageElement;
  img.style.transform = 'scale(0.87) translateY(-12%) rotate(2000deg)';
});

skills.addEventListener('mouseleave', function () {
  const text = skills.firstElementChild as HTMLParagraphElement;
  const img = skills.lastElementChild as HTMLImageElement;
  img.style.transform = 'none';
});
