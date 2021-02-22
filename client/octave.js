import React from "react";
import Key from "./key"

const Octave = () => {
  return (
    <>
      <Key color='white' note='C'/>
      <Key color='black' note='C#/Db'/>
      <Key color='white' note='D'/>
      <Key color='black' note='D#/Eb'/>
      <Key color='white' note='E'/>
      <Key color='white' note='F'/>
      <Key color='black' note='F#/Gb'/>
      <Key color='white' note='G'/>
      <Key color='black' note='G#/Ab'/>
      <Key color='white' note='A'/>
      <Key color='black' note='A#/Bb'/>
      <Key color='white' note='B'/>
    </>
  );
};

export default Octave;
