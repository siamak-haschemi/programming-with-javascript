import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {logout, selectAuth} from "../authSlice";

function Welcome() {
  const dispatch = useDispatch();
  const auth = useSelector(selectAuth);

  return (
      <div className="Welcome">
        <span>Welcome user: {auth.user.username}</span>
        <br/>
        <button
            onClick={() => dispatch(logout())}>Logout
        </button>
      </div>
  )
};

export default Welcome;
