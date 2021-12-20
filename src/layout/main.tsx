import { Grid } from "@mui/material";
import React from "react";
import Content from "./content";
import Footer from "./footer";
import Header from "./header";

const Main: React.FC = () => (
  <Grid container>
    <Grid item xs={12} style={{ minHeight: "10vh" }}>
      <Header />
    </Grid>
    <Grid item xs={12} style={{ minHeight: "80vh" }}>
      <Content />
    </Grid>
    <Grid item xs={12} style={{ minHeight: "10vh" }}>
      <Footer />
    </Grid>
  </Grid>
);

export default Main;
