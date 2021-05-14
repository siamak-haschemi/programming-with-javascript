import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";

import {
  increment,
  decrement,
  incrementByAmount,
  selectCount
} from "./features/counter/counterSlice";

function App() {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  const [incrementByValue, setIncrementByValue] = useState(0)

  return (
      <div className="App">
        <button onClick={() => dispatch(increment())}>{count}</button>

        <input onChange={e => setIncrementByValue(e.target.value)}/>
        <button onClick={() => dispatch(
            incrementByAmount(Number(incrementByValue)))}>Send
        </button>
      </div>
  );
}

export default App;
