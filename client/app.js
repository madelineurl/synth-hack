import React from "react";
import * as Tone from 'tone';
import Synth from './synth';

const App = () => {
  const synth = new Tone.Synth().toDestination();

  return (
    <>
      <div>Hello world!</div>
      <button onClick={() => synth.triggerAttackRelease("C4", "8n")}>Click for sound</button>
      <Synth />
    </>
  );
};

export default App;
