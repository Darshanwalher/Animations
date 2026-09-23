import gsap from "gsap";
import "./index.css";

const counter = { value: 0 };
const loaderCountEl = document.querySelector(".loadercount h1");
const loaderBarEl = document.querySelector(".loaderbar span");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Ease the counter up to 100 instead of a linear setInterval tick
gsap.to(counter, {
  value: 100,
  duration: reduceMotion ? 0.3 : 2.2,
  ease: "power2.inOut",
  onUpdate: () => {
    const val = Math.round(counter.value);
    loaderCountEl.textContent = `${val}%`;
    loaderBarEl.style.width = `${val}%`;
  },
  onComplete: landingAnimation,
});

function landingAnimation() {
  const words = document.querySelectorAll(".heading .word");
  const tl = gsap.timeline();

  tl.to(".loadercount, .loaderbar", {
    opacity: 0,
    duration: 0.6,
    ease: "power2.inOut",
  })
    .to(".loader", {
      yPercent: -100,
      duration: 1.4,
      ease: "power4.inOut",
      onComplete: () => document.querySelector(".loader")?.remove(),
    })
    .from(
      ".background img",
      {
        scale: 1.25,
        duration: 2.2,
        ease: "power3.out",
      },
      "-=0.9"
    )
    .from(
      words,
      {
        y: 110,
        opacity: 0,
        stagger: 0.12,
        duration: 1.1,
        ease: "power4.out",
      },
      "-=1.1"
    )
    .from(
      ".subheading h2",
      {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.7"
    )
    .to(
      ".scrollCue",
      {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.3"
    )
    .add(startAmbientDrift);
}

// Slow continuous Ken Burns drift after the intro settles
function startAmbientDrift() {
  if (reduceMotion) return;
  gsap.to(".background img", {
    scale: 1.05,
    duration: 14,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1,
  });
}