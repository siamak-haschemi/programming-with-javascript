import React from "react";
import {useSelector} from "react-redux";
import {selectAuth, StatusValues} from "../authSlice";
import Login from "./Login";
import Logout from "./Logout";

function AuthHeader() {
  const auth = useSelector(selectAuth);

  return (<div>
        {
          auth.currentStatus === StatusValues.loginFailed ?
              <span>Login failed!</span>
              :
              <span/>
        }

        {auth.currentStatus === StatusValues.loginSucceeded ?
            <Logout/> :
            <Login/>
        }
      </div>
  )
};

export default AuthHeader;
