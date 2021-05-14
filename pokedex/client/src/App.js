import Counter from "./features/counter/Counter";
import Login from "./features/auth/Login";

import {useSelector} from "react-redux";
import {selectUser} from "./features/auth/authSlice";

function App() {
  const user = useSelector(selectUser);

  return (
      <div className="App">
        <Login/>
        <hr/>
        <Counter/>
      </div>
  );
}

export default App;
