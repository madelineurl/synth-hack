import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import screenshot from '../public/screenshot.png';

const Landing = () => {
  const [nav, setNav] = useState('home');

  const info = {
    home: '../screenshot.png',
    'how-to': 'Click on the keys with a mouse or use the keyboard to use this synth. Middle C is mapped to the \'A\' key. Not all of the keys displayed in the UI fit logically into the keyboard mappings, so the keyboard starts one octave higher than the first key you see in the browser. \n\nYou can shift the octaves up using \'X\', or down using \'Z\'. Click or press briefly for a shorter note or hold the keys to extend the note. The control board is divided into four sections representing the main controls, oscillator controls, filter controls and envelope. Adjust these inputs to shape the synth with different qualities. If you\'re new to synths and interested in learning more, https://learningsynths.ableton.com is a great resource.',
    about: 'I enjoy exploring the boundaries & intersections of software and hardware and discovering what each can teach me about the other. This \'micrologue\' is loosely based on the Korg Minilogue, a polyphonic analog synthesizer that I use in a lot of music projects (it\'s the first synth I ever bought!). I\'ve been deepening my understanding of analog synthesis lately, so I took this opportunity to expand my knowledge of synthesis design by applying it within the Tone.js framework. It\'s a long way from being a true Minilogue clone, but I\'m enjoying the journey. \n\n This project was built with Tone.js, webpack, React, and CSS as part of a Mintbean hackathon (https://mintbean.io). When I\'m not building software synths in the browser, you can find me soldering hardware synths in my studio, practicing DJ sets on my turntables, baking sweets, or playing with my cats.'
  };

  const selectTab = (evt) => {
    setNav(evt.target.value);
  };

  console.log(nav)

  return (
    <div id='landing'>
      <ul id='navbar'>
        <li><button onClick={selectTab} value='how-to'>how to</button></li>
        <li><button onClick={selectTab} value='about'>about</button></li>
        <li><button onClick={selectTab} value='home'>home</button></li>
      </ul>
      <h1>softlogue</h1>
      {
        nav === 'home' ? <img src={info[nav]} /> : <p>{info[nav]} </p>
      }
      <li><Link to='/synth' id='play'>play</Link></li>
    </div>
  );
};

export default Landing;
