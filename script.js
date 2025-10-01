const element = document.querySelector('.header__nav');
const onClick = () => {
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}

const scrollBtn = document.getElementById('scrollBtn');
const aboutSection = document.getElementById('abouttSection');
scrollBtn.addEventListener('click', () => {
  aboutSection.scrollIntoView({ behavior: 'smooth' });
});

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top < window.innerHeight &&
    rect.bottom >= 0
  );
}

function addActiveClassOnScroll() {
  const scrollElements = document.querySelectorAll('.scroll-animate');

  scrollElements.forEach(el => {
    if (isInViewport(el) && !el.classList.contains('active')) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', addActiveClassOnScroll);
window.addEventListener('load', addActiveClassOnScroll);
