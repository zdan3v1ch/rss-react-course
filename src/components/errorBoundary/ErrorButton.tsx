import React, { useState } from 'react';

export function ClickComponentFunc(): React.ReactElement {
  const [state, setState] = useState(false);
  const handleClick = () => {
    setState(true);
  };
  if (state) {
    throw new Error('I crashed!');
  }
  return <button onClick={handleClick}>Crash me</button>;
}
