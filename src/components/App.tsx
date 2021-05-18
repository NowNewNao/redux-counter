import React, {useState} from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);


  return (
    <>
      <h1>counter</h1>    
      <div>
        {count}
      </div>
      <button onClick={() => {setCount(count + 1)}}>+1</button>
      <button onClick={() => {setCount(count - 1)}}>-1</button>
      <button onClick={() => {setCount(0)}}>reset</button>
      <button>+1 after 3 sec</button>
    </>
  );
}

export default App;
