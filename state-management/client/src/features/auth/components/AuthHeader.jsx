import React from "react";
import {useSelector} from "react-redux";
import {selectAuth, StatusValues} from "../authSlice";
import Login from "./Login";
import Welcome from "./Welcome";

function AuthHeader() {
  const auth = useSelector(selectAuth);

  return (<div className="AuthHeader">
        {
          auth.currentStatus === StatusValues.loginFailed ?
              <span>Login failed!</span>
              :
              <span/>
        }

        {auth.currentStatus === StatusValues.loginSucceeded ?
            <Welcome/> :
            <Login/>
        }
      </div>
  )
};

export default AuthHeader;
