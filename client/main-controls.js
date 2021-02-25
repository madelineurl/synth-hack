import React from 'react';

const MainControls = ({ adjustMainVol, adjustTempo, adjustPitch, volume, pitch, bpm }) => {
  return (
    <div id='main' className='section flex'>
      <label htmlFor='main-vol'>vol</label>
      <input
        id='main-vol'
        type='range'
        min={-16}
        max={4}
        value={volume}
        onChange={adjustMainVol}
      />
      <label htmlFor='main-tempo'>tempo</label>
      <input
        id='main-tempo'
        type='range'
        min={80}
        max={200}
        value={bpm}
        onChange={adjustTempo}
      />
      <label htmlFor='select-octave'>PITCH ({pitch}c)</label>
        <input
          id='pitch'
          type='range'
          min={-1200}
          max={1200}
          onChange={adjustPitch}
          value={pitch}
        />
    </div>
  );
};

export default MainControls;
