import React from "react";
import {useSelector} from "react-redux";

import {
  selectAuth,
  AuthStatus
} from "../../auth/AuthSlice";

import CounterForm from "./CounterForm";

function Counter() {
  const auth = useSelector(selectAuth);

  const renderSwitch = (currentStatus) => {
    switch (currentStatus) {
      case AuthStatus.loginSucceeded:
        return <CounterForm/>;
      default:
        return <div>Please login!</div>;
    }
  };

  return (<div className="Counter">{
    renderSwitch(auth.currentStatus)
  }</div>)
}

export default Counter;
