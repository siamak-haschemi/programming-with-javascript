import React from "react";
import {useSelector, useDispatch} from "react-redux";

import {
  selectCounter,
  incrementByValue,
  reset,
} from "../CounterSlice";

function CounterForm() {
  const counter = useSelector(selectCounter);
  const dispatch = useDispatch();

  return (<div className="Counter">
        <div>
          <span>Current Value: {counter.value}</span>
        </div>

        <div>
          <button onClick={() => dispatch(incrementByValue(1))}>+</button>
          <button onClick={() => dispatch(incrementByValue(-1))}>-</button>
          <button onClick={() => dispatch(reset())}>x</button>
        </div>
      </div>
  )
}

export default CounterForm;
