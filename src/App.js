import logo from "./logo.svg";
import "./App.css";
import { Dropdown } from "./components/dropdown/Dropdown";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Dropdown
          title={"Selecione sua versão"}
          options={["10.10x", "11.04", "12.08alpha"]}
        />
      </header>
    </div>
  );
}

export default App;
