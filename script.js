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
