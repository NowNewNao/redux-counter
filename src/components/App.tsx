import React, {useEffect, useState} from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  const countUp = () => {
    setCount(count + 1);
  }

  const countDown = () => {
    if(count === 0) return;
    setCount(count - 1);
  }

  const reset = () => {
    setCount(0);
  }

  return (
    <>
      <h1>counter</h1>    
      <div data-testid='count'>
        {count}
      </div>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
      <button onClick={reset}>reset</button>
      <button>+1 after 3 sec</button>
    </>
  );
}

export default App;
