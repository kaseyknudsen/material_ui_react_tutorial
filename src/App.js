import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import SendIcon from "@mui/icons-material/Send";
import { ButtonGroup } from "@mui/material";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import ElectricScooterIcon from "@mui/icons-material/ElectricScooter";
import { Checkbox } from "@mui/material";
import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import { FormControlLabel } from "@mui/material";
import { TextField } from "@mui/material";

function CheckBoxExample() {
  const [checked, setChecked] = useState(true);
  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            icon={<SendIcon />}
            checkedIcon={<SaveAltIcon />}
            onChange={(e) => setChecked(e.target.checked)}
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
        }
        label="Testing Checkbox"
      />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TextField 
        variant="outlined"
        color="secondary"
        // type="date"
        // type="time"
        type="email"
        placeholder="kasey@kasey.com"
       
        />
        <CheckBoxExample />
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
