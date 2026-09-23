import gsap from "gsap";
import "./index.css"





const tl = gsap.timeline();

tl.to(".box1",{
    x: 1200,
    duration: 1.3,
    ease: "power4.out",
    delay: 0.6
}).to(".box2",{
    x: 1200,
    duration: 1.3,
    ease: "power4.out",
},"darshan").to(".box3",{
    x: 1200,
    duration: 1.3,
    ease: "power4.out",
},"+=0.5").to(".box4",{
    x: 1200,
    duration: 1.3,
    ease: "power4.out",
},"darshan+=0.2")