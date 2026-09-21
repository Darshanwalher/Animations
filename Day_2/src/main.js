import { gsap } from "gsap";
import "./index.css";



gsap.to('.box',{
    x: 500,
    duration: 3,
    delay: 0.2,
    ease: "expo.inOut",
    onStart: () => {
        console.log("animation started!...");
        
    },
    onComplete: () => {
        console.log("animation completed!...");
        
    }
})