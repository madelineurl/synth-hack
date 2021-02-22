import React from "react";
import Key from "./key";

const Octave = ({ synth, octave }) => {
  return (
    <ul>
      <Key color='white' note='C'octave={octave} synth={synth} />
      <Key color='black' note='C#' octave={octave} synth={synth}/>
      <Key color='white' note='D' octave={octave} synth={synth}/>
      <Key color='black' note='D#' octave={octave} synth={synth}/>
      <Key color='white' note='E' octave={octave} synth={synth}/>
      <Key color='white' note='F' octave={octave} synth={synth}/>
      <Key color='black' note='F#' octave={octave} synth={synth}/>
      <Key color='white' note='G' octave={octave} synth={synth}/>
      <Key color='black' note='G#' octave={octave} synth={synth}/>
      <Key color='white' note='A' octave={octave} synth={synth}/>
      <Key color='black' note='A#' octave={octave} synth={synth}/>
      <Key color='white' note='B' octave={octave} synth={synth}/>
    </ul>
  );
};

export default Octave;
