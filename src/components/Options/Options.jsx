import { useState } from "react";
const Options = () => {
  let clicks = 0;
  const handleClick = () => {
    clicks = clicks + 1;
  };

  return (
    <div>
      <button onClick={handleClick}>Good: {clicks}</button>
      <button onClick={(evt) => console.log(evt)}>Second button</button>
    </div>
  );
};

export default Options;
