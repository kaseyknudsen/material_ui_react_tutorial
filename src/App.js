import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import SendIcon from "@mui/icons-material/Send";
import { ButtonGroup } from "@mui/material";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import ElectricScooterIcon from "@mui/icons-material/ElectricScooter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button
          startIcon={<SaveAltIcon />}
          endIcon={<SendIcon />}
          onClick={() => alert("Hello")}
          size="large"
          href="#"
          variant="contained"
          color="primary"
          style={{
            fontSize: 25,
            margin: 10,
          }}
          // disabled
        >
          Hello World
        </Button>
        <ButtonGroup size="large" variant="contained">
          <Button startIcon={<SaveAltIcon />}>Save</Button>
          <Button startIcon={<SendIcon />}>End</Button>
          <Button startIcon={<AudiotrackIcon />}>Music</Button>
          <Button startIcon={<ElectricScooterIcon />}>Scooter</Button>
        </ButtonGroup>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
