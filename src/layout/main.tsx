import { Grid } from "@mui/material";
import React from "react";
import Content from "./content";
import Footer from "./footer";
import Header from "./header";

const Main: React.FC = () => (
  <Grid container>
    <Grid item xs={12}>
      <Header />
    </Grid>
    <Grid item xs={12}>
      <Content />
    </Grid>
    <Grid item xs={12}>
      <Footer />
    </Grid>
  </Grid>
);

export default Main;
