import { gsap } from "gsap";
import "./index.css";



gsap.to('.box',{
    x: 500,
    duration: 1.4,
    delay: 0.2,
    ease: "power4.Out",
    stagger: {
        each: 0.1,
        from: "edges"
    }
})