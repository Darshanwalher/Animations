import { gsap } from "gsap";
import React from 'react'

const App = () => {
  const box = document.querySelector('.box');

  gsap.from(box, { delay: 0.6, x: 300, duration: 2, repeat: -1, yoyo: true });
}

export default App
