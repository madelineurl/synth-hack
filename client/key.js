import React from "react";

const Key = ({ color }) => {
  const keyStyle = color === 'white' ? 'white-key' : 'black-key';

  return (
    <span className={keyStyle}/>
  );
};

export default Key;
