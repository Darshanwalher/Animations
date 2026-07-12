import { gsap } from "gsap";
import React from 'react'

const App = () => {
  const box = document.querySelector('.box');

  gsap.fromTo(box, { delay: 0.6, x: 300, duration: 2, repeat: -1, yoyo: true },{ x: 0, duration: 2, repeat: -1, yoyo: true });
}

export default App
