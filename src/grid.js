import Grid from "@mui/material/Grid";
import { Paper } from "@mui/material";


const GridPage = () => {
  return (
    // 2 basic components of grid are component and item
    // each item needs to be within a container

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper>xs=12</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>xs=6</Paper>
        </Grid>
      </Grid>
    
  );
};

export default GridPage;
