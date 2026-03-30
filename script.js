const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  reveals.forEach((el, index) => {
    const boxTop = el.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      setTimeout(() => {
        el.classList.add('active');
      }, index * 120); // stagger smooth
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();
