import React from 'react';

const Envelope = ({ adjustEnvelope, envelope }) => {
  return (
    <div id='envelope' className='section flex'>
      <label htmlFor='attack'>attack</label>
        <input
          name='attack'
          type='range'
          min={0.0}
          max={4.0}
          // step='40'
          onChange={adjustEnvelope}
          value={envelope.attack}
        />
        <label htmlFor='decay'>decay</label>
        <input
          name='decay'
          type='range'
          min={0.0}
          max={4.0}
          // step='40'
          onChange={adjustEnvelope}
          value={envelope.decay}
        />
        <label htmlFor='sustain'>sustain</label>
        <input
          name='sustain'
          type='range'
          min={0.0}
          max={1.0}
          // step='10'
          onChange={adjustEnvelope}
          value={envelope.sustain}
        />
        <label htmlFor='release'>release</label>
        <input
          name='release'
          type='range'
          min={0.0}
          max={4.0}
          // step='40'
          onChange={adjustEnvelope}
          value={envelope.release}
        />
    </div>
  );
};

export default Envelope;
