import { gsap } from "gsap";
import React from 'react'

const App = () => {
  const box = document.querySelector('.box');

  gsap.fromTo(box, { delay: 2, x: 500, duration: 2, repeat: -1, yoyo: true },{ x: 0, duration: 5, repeat: -1, yoyo: true });
}

export default App
