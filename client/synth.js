import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Octave from "./octave";
import * as Tone from 'tone';


const Synth = () => {
  const [waveType, setWaveType] = useState('sine');
  const [lowestOctave, setLowestOctave] = useState(3);
  const [volume, setVolume] = useState(-6);

  const setMainVol = (evt) => {
    setVolume(evt.target.value);
  };

  const selectWaveType = (evt) => {
    setWaveType(evt.target.value);
  };

  const selectLowestOctave = (evt) => {
    setLowestOctave(parseInt(evt.target.value));
  };

  const mainVol = new Tone.Volume(volume);

  const synth = new Tone.PolySynth(Tone.Synth, {
    oscillator: {
      type: waveType
    }
  }).chain(mainVol, Tone.Destination);

  // console.log(synth.activeVoices);

  return (
    <>
    <ul id='navbar'>
      <li><Link to='/'>back</Link></li>
      <li><button>how-to</button></li>
    </ul>
    <div className='synth'>
      <div id='main'>
        <label htmlFor='main-vol'>vol</label>
        <input id='main-vol'type='range' min={-16} max={4} value={volume} onChange={setMainVol} />
        <div>tempo</div>
      </div>
      <div id='vco-controls'>
        <div id='vco1'>
          <label htmlFor='select-wave'>WAVE</label>
          <select
            id='select-wave'
            onChange={selectWaveType}
            value={waveType}
          >
              <option>sine</option>
              <option>square</option>
              <option>triangle</option>
              <option>sawtooth</option>
          </select>
          <label htmlFor='select-octave'>OCTAVE</label>
          <select
            id='select-octave'
            onChange={selectLowestOctave}
            value={lowestOctave}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          </div>
      </div>
      <ul className='keyboard'>
        <Octave octave={lowestOctave} synth={synth} />
        <Octave octave={lowestOctave + 1} synth={synth} />
        <Octave octave={lowestOctave + 2} synth={synth}/>
      </ul>
    </div>
    </>
  );
};

export default Synth;
