import { gsap } from "gsap";
import "./index.css";

gsap.to('.box',{
    x: 800,
    duration: 1.5,
    delay: 0.5,
    ease: "power2.in",
})