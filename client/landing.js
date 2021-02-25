import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  const [nav, setNav] = useState('home');

  const selectTab = (evt) => {
    setNav(evt.target.value);
  };

  return (
    <>
    <div id='landing'>
      <h1>softlogue</h1>
      <ul id='navbar'>
        <li><button onClick={selectTab} value='how-to'>how to</button></li>
        <li><button onClick={selectTab} value='about'>about</button></li>
        <li><button onClick={selectTab} value='home' id='home-link'>home</button></li>
      </ul>
      {
        nav === 'home' && <img src='../screenshot.png'/>
      }
      {
        nav === 'how-to' && (
          <>
          <p>Click on the keys with a mouse or use the keyboard to use this synth. Middle C is mapped to the `A` key. Not all of the keys displayed in the UI fit logically into the keyboard mappings, so the keyboard starts one octave higher than the first key you see in the browser.</p> <p>You can shift the available octaves up using `X`, or down using `Z`. Click or press briefly for a shorter note or hold the keys to extend the note. </p><p>The control board is divided into four sections representing the main controls, oscillator controls, filter controls and envelope. Adjust these inputs to shape the synth with different qualities. </p><p>If you`re new to synths and interested in learning more, Ableton has a great interactive tutorial (also built using Tone.js) available <a href='https://learningsynths.ableton.com' alt='ableton learning synths site'>here</a>, and <a href='https://www.youtube.com/watch?v=06cMw_WupZM&ab_channel=JefGibbons' alt='jeff gibbons synth basics on youtube' >Jef Gibbons</a> has a great YouTube channel if you prefer that type of learning.</p>
          </>
        )
      }
      {
        nav === 'about' && (
          <>
          <p>I like exploring the boundaries and intersections of software and hardware and discovering what each can teach me about the other. This `micrologue` is loosely based on the Korg Minilogue, a polyphonic analog synthesizer that I use in a lot of music projects (it`s the first synth I ever bought!). I`ve been deepening my understanding of analog synthesis lately, so I took this opportunity to expand my knowledge of synthesis design by applying it within the Tone.js framework. It`s a long way from being a true Minilogue clone, but I`m enjoying the process.</p> <p>This project was built with Tone.js, webpack, React, and CSS as part of a <a href='https://mintbean.io'>Mintbean</a> hackathon. When I`m not building software synths in the browser, you can find me soldering hardware synths in my studio, practicing DJ sets on my turntables, baking sweets, or playing with my cats.</p>
          </>
        )
      }
      <li><Link to='/synth' id='play'>play</Link></li>
    </div>
    </>
  );
};

export default Landing;
