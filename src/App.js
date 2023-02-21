import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import SendIcon from "@mui/icons-material/Send";
import {
  ButtonGroup,
  Checkbox,
  FormControl,
  FormControlLabel,
  TextField,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import ElectricScooterIcon from "@mui/icons-material/ElectricScooter";

import { useState } from "react";

// -import makeStyles from '@material-ui/styles/makeStyles';
// +import { makeStyles } from 'tss-react/mui';

//custom styles
// const useStyles = styled({
//   root: {
//     background: "linear-gradient(45deg, #333, #999)",
//     border: 0,
//     marginBottom: 15,
//     borderRadius: 15,
//     color: "white",
//     padding: "0 30px",
//   },
// });

// function ButtonStyled() {
//   const classes = useStyles()
//   return <Button className={classes.root}>Test Styled Button</Button>
// }

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
  const [card, setCard] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        {/* <ButtonStyled /> */}
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
          {/* number in the sx prop is multiplied by the default spacing of the theme (4px) */}
          {/* look up mui.com/system/properties/ for property shortcuts */}
          <Button
            startIcon={<SaveAltIcon />}
            color="primary"
            sx={{ m: 2, p: 2 }}
          >
            Save
          </Button>
          <Button startIcon={<SendIcon />} color="secondary">
            End
          </Button>
          <Button startIcon={<AudiotrackIcon />} color="success">
            Music
          </Button>
          <Button startIcon={<ElectricScooterIcon />} color="info">
            Scooter
          </Button>
        </ButtonGroup>
        <Button
          variant="contained"
          sx={{ m: 5 }}
          size="large"
          onClick={() => setCard("Hello")}
        >
          {card}
        </Button>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Typography variant="myVariant" style={{ marginTop: 20 }}>
          Hello and welcome to Typography
        </Typography>
      </header>
    </div>
  );
}

export default App;
