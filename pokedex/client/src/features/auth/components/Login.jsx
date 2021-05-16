import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {login} from "../authSlice";

function Login() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  return (
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
  )
};

export default Login;
