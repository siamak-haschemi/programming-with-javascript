import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";

import {
  increment,
  decrement,
  reset,
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
        </div>

        <div>
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(decrement())}>-</button>
          <button onClick={() => dispatch(reset())}>Reset</button>
        </div>

        <br/>

        <div>
          <span>Increment by value:</span>
          <br/>
          <input
              value={incrementByValue}
              onChange={e => setIncrementByValue(Number(e.target.value))}/>
          <button onClick={() => dispatch(
              incrementByAmount(Number(incrementByValue)))}>Send
          </button>
        </div>

        <br/>

        <div>
          <span>Increment by value (async):</span>
          <br/>
          <input
              value={incrementByValue}
              onChange={e => setIncrementByValue(Number(e.target.value))}/>
          <button onClick={() => dispatch(
              incrementByAmountAsync(Number(incrementByValue)))}>Send
          </button>
        </div>
      </div>
  );
}

export default Counter;
