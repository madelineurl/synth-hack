import React from "react";

const Key = ({ color, note, synth, octave }) => {
  const keyStyle = color === 'white' ? 'key white' : 'key black';

  const handleNote = () => {
    console.log({note}, {octave})
    synth.triggerAttackRelease(`${note}${octave}`, "8n");
  };

  return (
    <li onClick={handleNote} className={keyStyle}>{note}</li>
  );
};

export default Key;
