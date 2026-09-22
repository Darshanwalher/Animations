import { gsap } from "gsap";
import "./index.css";



gsap.from("h1 span",{
    yPercent: 100,
    opacity: 0,
    duration: 1.5,
    ease: "expo.out",
    stagger: {
        each: 0.08,
        from: "edges"
    },
})