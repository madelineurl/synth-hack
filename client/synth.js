import React, { useState } from "react";
import Octave from "./octave";
import * as Tone from 'tone';


const Synth = () => {
  const [waveType, setWaveType] = useState('sine');
  const [lowestOctave, setLowestOctave] = useState(3);

  const selectWaveType = (evt) => {
    setWaveType(evt.target.value);
  };

  const selectLowestOctave = (evt) => {
    setLowestOctave(parseInt(evt.target.value));
  };

  const synth = new Tone.PolySynth(Tone.Synth, {
    oscillator: {
      type : waveType
    }
  }).toDestination();

  return (
    <div className='synth'>
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
      <ul className='keyboard'>
        <Octave octave={lowestOctave} synth={synth} />
        <Octave octave={lowestOctave + 1} synth={synth} />
        <Octave octave={lowestOctave + 2} synth={synth}/>
      </ul>
    </div>
  );
};

export default Synth;
