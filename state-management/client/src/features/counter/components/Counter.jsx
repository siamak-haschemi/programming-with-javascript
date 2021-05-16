import React from "react";
import {useSelector, useDispatch} from "react-redux";

import {
  selectCounter,
  incrementByValue,
  reset,
} from "../CounterSlice";

import {
  selectAuth,
  AuthStatus
} from "../../auth/AuthSlice";
import Welcome from "../../auth/components/Welcome";
import Login from "../../auth/components/Login";

function Counter() {
  const auth = useSelector(selectAuth);
  const dispatch = useDispatch();
  const counter = useSelector(selectCounter);

  const renderSwitch = (currentStatus) => {
    switch (currentStatus) {
      case AuthStatus.loginSucceeded:

        return <div className="Counter">
          <div>
            <span>Current Value: {counter.value}</span>
          </div>

          <div>
            <button onClick={() => dispatch(incrementByValue(1))}>+</button>
            <button onClick={() => dispatch(incrementByValue(-1))}>-</button>
            <button onClick={() => dispatch(reset())}>x</button>
          </div>
        </div>;

      default:
        return <div>Please login!</div>;
    }
  };

  return (<div className="Counter">{
    renderSwitch(auth.currentStatus)
  }</div>)
}

export default Counter;
