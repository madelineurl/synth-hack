import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  const [nav, setNav] = useState('home');

  const info = {
    home: 'img URL',
    'how-to': '',
    about: 'I love exploring the boundaries & intersections of software and hardware and discovering what each can teach me about the other. I took this opportunity to expand my understanding of synthesis design--which I\'ve been diving back into since becoming a developer--and how to apply it within the Tone.js framework. When I\'m not building software synths in the browser, you can find me soldering hardware synths in my studio, practicing DJ sets on my turntables, baking sweet things, or playing with my cats.'
  };

  const selectTab = (tab) => {
    setNav(tab);
  };

  return (
    <div id='landing'>
      <h1>softsynth</h1>
      <p>{info[nav]} </p>
      <ul id='navbar'>
        <li><button onClick={() => selectTab('how-to')}>how-to</button></li>
        <li><button onClick={() => selectTab('about')}>about</button></li>
      </ul>
      <li><Link to='/synth'>play</Link></li>
    </div>
  );
};

export default Landing;
