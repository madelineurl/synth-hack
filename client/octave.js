import React from "react";
import Key from "./key";

const Octave = ({ synth, octave }) => {
  const bindings = {
    'KeyA': 'C',
    'KeyW': 'C#',
    'KeyS': 'D',
    'KeyE': 'D#',
    'KeyD': 'E',
    'KeyF': 'F',
    'KeyT': 'F#',
    'KeyG': 'G',
    'KeyY': 'G#',
    'KeyH': 'A',
    'KeyU': 'A#',
    'KeyJ': 'B',
    'KeyK': 'C'
  };

  const singleOctave = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

  const handleAttack = (evt, note) => {
    console.log(evt.type, evt.code);
    if (evt.type === 'click') {
      synth.triggerAttackRelease(`${note}${octave.toString()}`, '8n');
    } else if (evt.type === 'mousdown') {
      synth.triggerAttack(`${note}${octave.toString()}`);
    } else if (evt.type === 'keydown' && bindings[evt.code]) {
      synth.triggerAttack(`${bindings[evt.code]}${octave.toString()}`);
    }
  };

  const handleRelease = (evt) => {
    if (evt.type === 'mouseup') {
      synth.triggerRelease();
    } else {
      bindings[evt.code] && synth.triggerRelease(`${bindings[evt.code]}${octave.toString()}`);
    }
  };

  document.addEventListener("keydown", handleAttack);
  document.addEventListener("keyup", handleRelease);

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
