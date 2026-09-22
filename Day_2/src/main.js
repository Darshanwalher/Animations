import { gsap } from "gsap";
import "./index.css";



gsap.to('.box',{
    x: 500,
    duration: 3,
    delay: 0.2,
    ease: "power1.inOut",
    stagger: -0.2
})