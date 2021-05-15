import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";

import {
  login, logout, selectUser
} from "../authSlice";

function Auth() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  return (user ?
          <button onClick={() => dispatch(logout(user))}>Logout</button>
          :
          <div className="Login">
            <div>
              <span>Login:</span>

              <input onChange={e => setUsername(e.target.value)}/>
              <input type='password'
                     onChange={e => setPassword(e.target.value)}/>

              <button onClick={() => dispatch(login({username, password}))}>
                Login
              </button>
            </div>

          </div>
  );
}

export default Auth;
