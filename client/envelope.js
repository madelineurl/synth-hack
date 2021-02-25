import React from 'react';

const Envelope = () => {
  return (
    <div id='envelope' className='section flex'>
      <label htmlFor='attack'>attack</label>
        <input
          id='attack'
          type='range'
        />
        <label htmlFor='decay'>decay</label>
        <input
          id='decay'
          type='range'
        />
        <label htmlFor='attack'>sustain</label>
        <input
          id='sustain'
          type='range'
        />
        <label htmlFor='attack'>release</label>
        <input
          id='release'
          type='range'
        />
    </div>
  );
};

export default Envelope;
