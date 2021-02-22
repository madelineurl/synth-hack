import React from "react";
import Octave from "./octave";
import * as Tone from 'tone';

const Synth = () => {
  const synth = new Tone.Synth().toDestination();

  return (
    <div className='synth'>
      <Octave octave='3' synth={synth} />
      <Octave octave='4' synth={synth} />
      <Octave octave='5' synth={synth}/>
    </div>
  );
};

export default Synth;
