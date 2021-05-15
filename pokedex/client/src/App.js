import Counter from "./features/counter/components/Counter";
import Auth from "./features/auth/components/Auth";

function App() {
  return (
      <div className="App">
        <Auth/>
        <hr/>
        <Counter/>
      </div>
  );
}

export default App;
