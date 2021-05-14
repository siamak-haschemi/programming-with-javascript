import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";

import {
  increment,
  decrement,
  incrementByAmount,
  incrementByAmountAsync,
  selectCount
} from "./counterSlice";

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  const [incrementByValue, setIncrementByValue] = useState(0)

  return (
      <div className="Counter">
        <div>
          <span>Current Value: {count}</span>
          <br/>
          <br/>
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
          <br/>
          <br/>
          <span>Increment by value:</span>
          <br/>
          <input
              onChange={e => setIncrementByValue(Number(e.target.value))}/>
          <button onClick={() => dispatch(
              incrementByAmount(Number(incrementByValue)))}>Send
          </button>
          <br/>
          <br/>
          <span>Increment by value (async):</span>
          <br/>
          <input
              onChange={e => setIncrementByValue(Number(e.target.value))}/>
          <button onClick={() => dispatch(
              incrementByAmountAsync(Number(incrementByValue)))}>Send
          </button>
        </div>
      </div>
  );
}

export default Counter;
