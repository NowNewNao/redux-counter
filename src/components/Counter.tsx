import React, {useState} from 'react';
import './Counter.css';

const Counter = () => {
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

  const asyncCountUp = () => {
    setTimeout(countUp, 3000);
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
      <button onClick={asyncCountUp}>+1 after 3 sec</button>
    </>
  );
}

export default Counter;