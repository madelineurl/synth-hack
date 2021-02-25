import React from 'react';

const OscillatorControls = ({ lowestOctave, voiceMode, selectInstrument, waveType, selectWaveType, setLowestOctave }) => {
  return (
  <div id='osc' className='section flex'>
    <label htmlFor='select-wave'>VOICE MODE</label>
    <select
      id='select-wave'
      onChange={selectInstrument}
      value={voiceMode}
    >
      <option>mono</option>
      <option>poly</option>
    </select>
    <label htmlFor='select-wave'>WAVE</label>
    <select
      id='select-wave'
      onChange={selectWaveType}
      value={waveType}
    >
        <option>sine</option>
        <option>square</option>
        <option>triangle</option>
        <option>sawtooth</option>
    </select>
    <label htmlFor='select-octave'>OCTAVE</label>
    <select
      id='select-octave'
      onChange={(evt) => setLowestOctave(parseInt(evt.target.value))}
      value={lowestOctave}
    >
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  );
};

export default OscillatorControls;
