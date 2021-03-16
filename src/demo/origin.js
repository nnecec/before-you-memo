import { useState } from 'react';

export default function Origin () {
  let [color, setColor] = useState('red');
  return (
    <div>
      <h1>origin</h1>
      <input value={color} onChange={(e) => setColor(e.target.value)} />
      <p style={{ color }}>Hello, {color}!</p>
      <ExpensiveTree />
    </div>
  );
}

function ExpensiveTree (props) {
  let now = performance.now();
  while (performance.now() - now < 500) {
    // Artificial delay -- do nothing for 100ms
  }
  return <p>I am a very slow component tree.</p>;
}