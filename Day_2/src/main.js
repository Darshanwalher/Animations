import { gsap } from "gsap";
import "./index.css";

gsap.to('.box',{
    x: 1000,
    duration: 3,
    delay: 0.2,
    ease: "expo.inOut",
    repeat: 1,
    yoyo: true
})