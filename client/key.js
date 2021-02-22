import React from "react";

const Key = ({ color, note }) => {
  const keyStyle = color === 'white' ? 'key white' : 'key black';

  return (
    <span className={keyStyle}>{note}</span>
  );
};

export default Key;
