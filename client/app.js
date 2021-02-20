import React from "react";
import * as Tone from 'tone';

const App = () => {
  const synth = new Tone.Synth().toDestination();

  return (
    <>
      <div>Hello world!</div>
      <button onClick={() => synth.triggerAttackRelease("C4", "8n")}>Click for sound</button>
    </>
  );
};

export default App;
