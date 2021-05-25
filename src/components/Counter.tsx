import React from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { counterValue } from '../counter/reducer';
import './Counter.css';
import {increment, decrement, reset} from '../counter/reducer'

const Counter = () => {
  // UIにステート管理をもたせていたとき
  // const [count, setCount] = useState(0);
  // const countUp = () => {
  //   setCount(count + 1);
  // }
  // const countDown = () => {
  //   if(count === 0) return;
  //   setCount(count - 1);
  // }
  // const reset = () => {
  //   setCount(0);
  // }
  // const asyncCountUp = () => {
  //   setTimeout(countUp, 3000);
  // }

  const count = useAppSelector(counterValue); // reducerでmutateされたvalueをとってくる
  const dispatch = useAppDispatch(); // 変更をdispatchする。今回の場合はonClickイベントの発火にて

  return (
    <>
      <h1>counter</h1>    
      <div data-testid='count'>
        {count}
      </div>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>reset</button>
      <button onClick={()=>{setTimeout(()=>{ dispatch(increment())}, 3000)}} // たぶんsetTimeoutじゃないほうがよさそうではある
        >
          +1 after 3 sec
      </button>
    </>
  );
}

export default Counter;