import { Grid } from "@mui/material";
import React from "react";
import FootballTable from "../../components/FootballTable";
import MySelect from "../../components/MySelect";
import ViewSubHeader from "../../components/ViewSubHeader";

const LeftContent: React.FC = () => (
  <Grid container spacing={2}>
    <Grid item xs={6}>
      <MySelect
        caption="Formation"
        options={[{ value: "343", caption: "3-4-3" }]}
        defaultValue="343"
      />
    </Grid>
    <Grid item xs={12}>
      <FootballTable />
    </Grid>
  </Grid>
);

const RightContent: React.FC = () => (
  <div>
    <h1>Test Right Region</h1>
  </div>
);

const ConfigureSquadView: React.FC = () => (
  <Grid container>
    <Grid item xs={12}>
      <ViewSubHeader title="CONFIGURE SQUAD" />
    </Grid>
    <Grid container spacing={5} item xs={12}>
      <Grid item xs={1} />
      <Grid item xs={4}>
        <LeftContent />
      </Grid>
      <Grid item xs={2} />
      <Grid item xs={4}>
        <RightContent />
      </Grid>
      <Grid item xs={1} />
    </Grid>
  </Grid>
);

export default ConfigureSquadView;
