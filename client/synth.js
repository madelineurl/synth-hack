import React from "react";
import Octave from "./octave";
import * as Tone from 'tone';

const Synth = () => {
  const synth = new Tone.Synth().toDestination();

  return (
    <ul className='keyboard'>
      <Octave octave='3' synth={synth} />
      <Octave octave='4' synth={synth} />
      <Octave octave='5' synth={synth}/>
    </ul>
  );
};

export default Synth;
