// GSAP INTRO ANIMATION
gsap.from(".hero-title", {
  y: 100,
  opacity: 0,
  duration: 1.2,
  ease: "power4.out"
});

gsap.from(".hero-subtitle", {
  y: 50,
  opacity: 0,
  duration: 1.2,
  delay: 0.2,
  ease: "power4.out"
});

// SCROLL ANIMATION
gsap.utils.toArray(".card").forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 85%"
    },
    y: 80,
    opacity: 0,
    duration: 1,
    delay: i * 0.2,
    ease: "power3.out"
  });
});

// CUSTOM CURSOR
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});
