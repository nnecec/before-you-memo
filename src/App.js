import './App.css';

import Origin from './demo/origin'
import Memo from './demo/memo'
import MoveStateDown from './demo/move-state-down';
import LiftContentUp from './demo/lift-content-up';

function App () {
  return (
    <div className="App">
      Article url: <a href="https://overreacted.io/before-you-memo/" target="_blank" rel="noreferrer">before you memo()</a>
      <Origin />
      <Memo />
      <MoveStateDown />
      <LiftContentUp />
    </div>
  );
}

export default App;
