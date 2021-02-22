import React, { useState } from "react";
import Octave from "./octave";
import * as Tone from 'tone';


const Synth = () => {
  const [waveType, setWaveType] = useState('sine');

  const selectWaveType = (evt) => {
    setWaveType(evt.target.value);
  };

  const synth = new Tone.PolySynth(Tone.Synth, {
    oscillator: {
      type : waveType
    }
  }).toDestination();

  return (
    <div className='synth'>
      <label htmlFor='select-wave'>WAVE</label>
      <select id='select-wave' onChange={selectWaveType}>
          <option>sine</option>
          <option>square</option>
          <option>triangle</option>
          <option>sawtooth</option>
      </select>

      <ul className='keyboard'>
        <Octave octave='3' synth={synth} />
        <Octave octave='4' synth={synth} />
        <Octave octave='5' synth={synth}/>
      </ul>
    </div>
  );
};

export default Synth;
