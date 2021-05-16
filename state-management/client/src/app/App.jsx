import './App.css';
import Counter from "../features/counter/components/Counter";
import AuthHeader from "../features/auth/components/AuthHeader";

function App() {
  return (
      <div className="App">
        <AuthHeader/>
        <hr/>
        <Counter/>
      </div>
  );
}

export default App;
