import React from "react";

const Key = ({ color, note, synth, octave }) => {
  const keyStyle = color === 'white' ? 'key white' : 'key black';

  const handleNote = () => {
    synth.triggerAttackRelease(`${note}${octave.toString()}`, "8n");
  };

  return (
    <li onClick={handleNote} className={`${keyStyle} ${note}`}></li>
  );
};

export default Key;
