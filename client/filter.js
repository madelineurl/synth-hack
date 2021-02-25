import React from 'react';

const Filter = ({ setFilterCutoff }) => {
  return (
    <div id='filter' className='section flex'>
      <label htmlFor='filter-adjust'>FILTER CUTOFF</label>
        <input
          id='filter-adjust'
          type='range'
          min={-12}
          max={12}
          onChange={(evt) => setFilterCutoff(evt.target.value)}
        />
    </div>
  );
};

export default Filter;
