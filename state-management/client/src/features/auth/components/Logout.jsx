import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {logout, selectAuth} from "../authSlice";

function Logout() {
  const dispatch = useDispatch();
  const auth = useSelector(selectAuth);

  return (
      <div>
        <span>Welcome user: {auth.user.username}</span>
        <br/>
        <button
            onClick={() => dispatch(logout())}>Logout
        </button>
      </div>
  )
};

export default Logout;
