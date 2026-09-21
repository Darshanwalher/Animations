import { gsap } from "gsap";
import "./index.css";

gsap.set('.box',{
    overflow: 'hidden',
    x: -300,
})

gsap.to('.box',{
    x: 1550,
    duration: 3,
    delay: 0.2,
    ease: "expo.inOut",
    repeat: -1,
})