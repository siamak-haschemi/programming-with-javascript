import React from "react";
import {useSelector} from "react-redux";
import {selectAuth, AuthStatus} from "../AuthSlice";
import Login from "./Login";
import Welcome from "./Welcome";

function AuthHeader() {
  const auth = useSelector(selectAuth);

  const renderSwitch = (currentStatus) => {
    switch (currentStatus) {
      case AuthStatus.loginPending:
        return <div><b>Try to login ...</b></div>;
      case AuthStatus.logoutPending:
        return <div><b>Try to logout ...</b></div>;
      case AuthStatus.loginSucceeded:
        return <Welcome/>;
      default:
        return <Login/>;
    }
  };

  return (<div className="AuthHeader">{
    renderSwitch(auth.currentStatus)
  }</div>)
};

export default AuthHeader;
