import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";

import {
  increment,
  decrement,
  incrementByAmount,
  selectCount
} from "./counterSlice";

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  const [incrementByValue, setIncrementByValue] = useState(0)

  return (
      <div className="Counter">
        <div>
          <button onClick={() => dispatch(increment())}>{count}</button>

          <input
              onChange={e => setIncrementByValue(Number(e.target.value))}/>
          <button onClick={() => dispatch(
              incrementByAmount(Number(incrementByValue)))}>Send
          </button>
        </div>
      </div>
  );
}

export default Counter;
