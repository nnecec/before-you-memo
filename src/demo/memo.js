import { useState, memo } from 'react';

export default function Origin () {
  let [color, setColor] = useState('red');
  return (
    <div>
      <h1>memo</h1>
      <input value={color} onChange={(e) => setColor(e.target.value)} />
      <p style={{ color }}>Hello, world!</p>
      <ExpensiveTree />
    </div>
  );
}

const ExpensiveTree = memo(() => {
  let now = performance.now();
  while (performance.now() - now < 100) {
    // Artificial delay -- do nothing for 100ms
  }
  return <p>I am a very slow component tree.</p>;
})