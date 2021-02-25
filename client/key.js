import React from "react";

const Key = ({ color, note, handleAttack, handleRelease }) => {
  const keyStyle = color === 'white' ? 'white key' : 'black key';

  return (
    <li
      id={note}
      className={`${keyStyle} ${note}`}
      onMouseDown={evt => handleAttack(note, evt)}
      onMouseUp={evt => handleRelease(note, evt)}>
    </li>
  );
};

export default Key;
