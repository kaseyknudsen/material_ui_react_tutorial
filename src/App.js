import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button>
          Hello World
        </Button>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
