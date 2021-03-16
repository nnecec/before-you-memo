import { useState } from 'react';

export default function MoveStateDown () {
  return (
    <div>
      <h1>Move State Down</h1>
      <ColorPicker />
      <ExpensiveTree />
    </div>
  );
}

function ColorPicker () {
  let [color, setColor] = useState('red');
  return (
    <>
      <input value={color} onChange={(e) => setColor(e.target.value)} />
      <p style={{ color }}>Hello, {color}!</p>
    </>
  );
}

function ExpensiveTree () {
  let now = performance.now();
  while (performance.now() - now < 500) {
    // Artificial delay -- do nothing for 100ms
  }
  return <p>I am a very slow component tree.</p>;
}