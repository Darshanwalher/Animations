import { gsap } from "gsap";
import React from 'react'

const App = () => {
  const box = document.querySelector('.box');

  gsap.to(box, { x: 300, duration: 10, repeat: -1, yoyo: true });
}

export default App
