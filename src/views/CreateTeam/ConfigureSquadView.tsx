import { Grid } from "@mui/material";
import React, { useState } from "react";
import FootballTable from "../../components/FootballTable";
import { FieldType } from "../../components/FootballTable/types";
import MySelect from "../../components/MySelect";
import ViewSubHeader from "../../components/ViewSubHeader";

const LeftContent: React.FC = () => {
  const [formation, setFormation] = useState<string>("3-4-3");
  const [players, setPlayers] = useState<Array<FieldType | undefined>>([
    { name: "GOL", position: 1 },
    { name: "2", position: 1 },
    { name: "3", position: 1 },
    { name: "4", position: 1 },
    { name: "5", position: 1 },
    { name: "6", position: 1 },
    { name: "7", position: 1 },
    { name: "8", position: 1 },
    { name: "9", position: 1 },
    { name: "10", position: 1 },
    { name: "11", position: 1 }
  ]);

  const onFormationChange = (value: string) => {
    setFormation(value);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <MySelect
          caption="Formation"
          options={[
            { value: "3-2-2-3", caption: "3-2-2-3" },
            { value: "3-2-3-2", caption: "3-2-3-2" },
            { value: "3-4-3", caption: "3-4-3" },
            { value: "3-5-2", caption: "3-5-2" },
            { value: "4-2-3-1", caption: "4-2-3-1" },
            { value: "4-3-2-1", caption: "4-3-2-1" },
            { value: "4-3-3", caption: "4-3-3" },
            { value: "4-4-2", caption: "4-4-2" },
            { value: "4-5-1", caption: "4-5-1" },
            { value: "5-4-1", caption: "5-4-1" }
          ]}
          defaultValue="3-4-3"
          onChange={onFormationChange}
        />
      </Grid>
      <Grid item xs={12}>
        <FootballTable formation={formation} players={players} />
      </Grid>
    </Grid>
  );
};

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
    <Grid container spacing={5} item xs={12} justifyContent="space-around">
      <Grid item xs={5}>
        <LeftContent />
      </Grid>
      <Grid item xs={5}>
        <RightContent />
      </Grid>
    </Grid>
  </Grid>
);

export default ConfigureSquadView;
