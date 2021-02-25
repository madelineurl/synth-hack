import React from "react";

const Key = ({ color, note, handleAttack, handleRelease }) => {
  const keyStyle = color === 'white' ? 'white key' : 'black key';

  return (
    <li className={`${keyStyle} ${note}`} onMouseDown={handleAttack} onMouseUp={handleRelease}></li>
  );
};

export default Key;
