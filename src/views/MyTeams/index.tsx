import { Paper } from "@material-ui/core";
import { Grid } from "@mui/material";
import React from "react";
import MyTable from "./MyTable";

const MyTeams = () => (
  <div style={{ padding: 20 }}>
    <Grid container spacing={6}>
      <Grid item xs={6}>
        <Paper>
          <MyTable />
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

export default MyTeams;
