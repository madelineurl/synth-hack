import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import screenshot from '../public/screenshot.png';

const Landing = () => {
  const [nav, setNav] = useState('home');

  const info = {
    home: '../screenshot.png',
    'how-to': '',
    about: 'I enjoy exploring the boundaries & intersections of software and hardware and discovering what each can teach me about the other. This \'micrologue\' is loosely based on the Korg Minilogue, a polyphonic analog synthesizer that I use in a lot of music projects (it\'s the first synth I ever bought!). I\'ve been deepening my understanding of analog synthesis lately, so I took this opportunity to expand my knowledge of synthesis design by applying it within the Tone.js framework. It\'s a long way from being a true Minilogue clone, but I\'m enjoying the journey. \n\n When I\'m not building software synths in the browser, you can find me soldering hardware synths in my studio, practicing DJ sets on my turntables, baking sweet things, or playing with my cats.'
  };

  const selectTab = (evt) => {
    setNav(evt.target.value);
  };

  return (
    <div id='landing'>
      <ul id='navbar'>
        <li><button onClick={selectTab}>how to</button></li>
        <li><button onClick={selectTab}>about</button></li>
        <li><button onClick={selectTab}>home</button></li>
      </ul>
      <h1>micrologue</h1>
      {
        nav === 'home' ? <img src={info[nav]} /> : <p>{info[nav]} </p>
      }
      <li><Link to='/synth' id='play'>play</Link></li>
    </div>
  );
};

export default Landing;
