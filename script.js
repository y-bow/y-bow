const header = document.querySelector('.topbar');

const handleScroll = () => {
  if (window.scrollY > 24) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
};

window.addEventListener('scroll', handleScroll, { passive: true });
window.addEventListener('load', handleScroll);

/* HERO TEXT PARALLAX */

const heroName = document.querySelector('.hero-name');
const mainText = document.querySelector('.hero-name-main');
const glowText = document.querySelector('.hero-name-glow');

if(heroName){

  let currentX = 0;
  let currentY = 0;

  let targetX = 0;
  let targetY = 0;

  heroName.addEventListener('mousemove',(e)=>{

    const rect = heroName.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    targetX = ((x / rect.width) - 0.5) * 45;
    targetY = ((y / rect.height) - 0.5) * 15;

  });

  heroName.addEventListener('mouseleave',()=>{

    targetX = 0;
    targetY = 0;

  });

  function animate(){

    currentX += (targetX - currentX) * 0.05;
    currentY += (targetY - currentY) * 0.05;

    heroName.style.transform =
      `translate3d(${currentX}px, ${currentY}px, 0)`;

    glowText.style.transform =
      `translate3d(${currentX * 1.8}px, ${currentY * 1.8}px, 0)`;


    requestAnimationFrame(animate);
  }

  animate();
}
const cursor = document.querySelector('.cursor');