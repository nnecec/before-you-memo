import { useEffect, useState, memo } from 'react';

export default function Memo() {
  let [color, setColor] = useState('red');
  return (
    <div>
      <h1>memo</h1>
      <input value={color} onChange={(e) => setColor(e.target.value)} />
      <p style={{ color }}>Hello, {color}!</p>
      <ExpensiveTree />
    </div>
  );
}

const ExpensiveTree = memo((props) => {
  let now = performance.now();
  while (performance.now() - now < 500) {
    // Artificial delay -- do nothing for 100ms
  }
  return <p>I am a very slow component tree.</p>;
})
ExpensiveTree.displayName = 'ExpensiveTree'