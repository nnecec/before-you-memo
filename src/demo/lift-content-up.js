import { useState } from 'react';

export default function LiftContentUp () {
  return (
    <div>
      <h1>Lift Content Up</h1>
      <ColorPicker>
        <ExpensiveTree />
      </ColorPicker>
    </div>
  );
}

function ColorPicker ({ children }) {
  let [color, setColor] = useState('red');
  return (
    <div style={{ color }}>
      <input value={color} onChange={(e) => setColor(e.target.value)} />
      <p>Hello, {color}!</p>
      {children}
    </div>
  );
}

function ExpensiveTree () {
  let now = performance.now();
  while (performance.now() - now < 500) {
    // Artificial delay -- do nothing for 100ms
  }
  return <p>I am a very slow component tree.</p>;
}