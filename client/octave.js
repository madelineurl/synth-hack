import React from "react";
import Key from "./key";

const Octave = ({ synth, octave, bindings }) => {
  const singleOctave = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

  const handleAttack = (note, evt) => {
    const noteToPlay = `${note}${octave.toString()}`;

    if (evt.type === 'click') {
      if (synth.name === 'Monosynth') synth.triggerAttackRelease(noteToPlay, '8n');
      else synth.triggerAttackRelease([noteToPlay], '8n');
    } else if (evt.type === 'mousedown') {
      if (synth.name === 'MonoSynth') synth.triggerAttack(noteToPlay);
      else synth.triggerAttack([noteToPlay]);
    }
  };

  const handleRelease = (note, evt) => {
    if (evt.type === 'mouseup') {
      if (synth.name === 'MonoSynth') synth.triggerRelease();
      else synth.triggerRelease([ `${note}${octave.toString()}`]);
    }
  };

  const handleKeyboardAttack = (evt) => {
    const noteToPlay = bindings[evt.code];
    if (noteToPlay) {
      synth.name === 'MonoSynth' ? synth.triggerAttack(noteToPlay) : synth.triggerAttack([noteToPlay]);
    }
  };

  const handleKeyboardRelease = (evt) => {
    const noteToStop = bindings[evt.code];
    if (noteToStop) {
      synth.name === 'MonoSynth' ? synth.triggerRelease() : synth.triggerRelease([noteToStop]);
    }
  };

  document.addEventListener("keydown", handleKeyboardAttack);
  document.addEventListener("keyup", handleKeyboardRelease);

  return (
    <>
      {
        singleOctave.map(note => {
          let color;
          if (note.indexOf('#') > 0) color = 'black';
          else color = 'white';
          return (
            <Key
              key={`${note}${octave}`}
              color={color}
              note={note}
              octave={octave}
              synth={synth}
              handleAttack={handleAttack}
              handleRelease={handleRelease}
            />
          );
        })
      }
    </>
  );
};

export default Octave;
