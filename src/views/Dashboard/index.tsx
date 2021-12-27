import React from "react";
import { Paper } from "@material-ui/core";
import { Grid } from "@mui/material";
import MyTeamTable from "./MyTeam";

const DashBoard = () => (
  <div style={{ padding: 20 }}>
    <Grid container spacing={6}>
      <Grid item xs={6}>
        <Paper>
          <MyTeamTable />
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper>
          <h1>MyTeams</h1>
        </Paper>
      </Grid>
    </Grid>
  </div>
);

export default DashBoard;
