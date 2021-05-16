import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";

import {
  selectCounter,
  incrementByValue,
  reset,
} from "../counterSlice";

import {
  selectAuth,
  StatusValues
} from "../../auth/authSlice";

function Counter() {
  const auth = useSelector(selectAuth);
  const dispatch = useDispatch();
  const counter = useSelector(selectCounter);
  const [increment, setIncrement] = useState(0)

  return (
      auth.currentStatus !== StatusValues.loginSucceeded ?
          <div>Please login!</div>
          :
          <div className="Counter">
            <div>
              <span>Current Value: {counter.value}</span>
            </div>

            <div>
              <button onClick={() => dispatch(incrementByValue(1))}>+</button>
              <button onClick={() => dispatch(incrementByValue(-1))}>-</button>
              <button onClick={() => dispatch(reset())}>x</button>
            </div>

            <br/>

            <div>
              <span>Increment by value:</span>
              <br/>
              <input
                  value={increment}
                  onChange={e => setIncrement(Number(e.target.value))}/>
              <button onClick={() => dispatch(
                  incrementByValue(Number(increment)))}>Send
              </button>
            </div>
          </div>
  );
}

export default Counter;
