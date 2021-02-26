import { useState } from 'react'
import './App.css';

import Origin from './demo/origin'
import Memo from './demo/memo'
import MoveStateDown from './demo/move-state-down';
import LiftContentUp from './demo/lift-content-up';

function App () {
  const [visible, setVisible] = useState()
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setVisible('origin')}>origin</button>
        <button onClick={() => setVisible('memo')}>memo</button>
        <button onClick={() => setVisible('move-state-down')}>move state down</button>
        <button onClick={() => setVisible('lift-content-up')}>lift content up</button>
      </header>

      <div className="App-content">
        {visible === 'origin' && <Origin />}
        {visible === 'memo' && <Memo />}
        {visible === 'move-state-down' && <MoveStateDown />}
        {visible === 'lift-content-up' && <LiftContentUp />}
      </div>
    </div>
  );
}

export default App;
