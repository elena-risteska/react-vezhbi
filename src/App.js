import "./App.css";
import { BackgroundSelector } from "./BackgroundSelector";
import { Counter } from "./Counter";
import { CharacterCounter } from "./CharacterCounter";

function App() {
  return (
    <div className="App">
      <div className="big-container">
        <h2>Character counter</h2>
        <CharacterCounter />
      </div>
      <div className="big-container">
        <Counter />
      </div>
      <div className="big-container">
        <h2>Background selector</h2>
        <BackgroundSelector />
      </div>
    </div>
  );
}

export default App;
