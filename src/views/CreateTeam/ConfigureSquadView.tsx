import { Button, Grid } from "@mui/material";
import React, { useContext } from "react";
import {
  DragDropContext,
  DropResult,
  ResponderProvided
} from "react-beautiful-dnd";
import FootballTable from "../../components/FootballTable";
import MySelect from "../../components/MySelect";
import PlayerSelect from "../../components/PlayerSelect";
import ViewSubHeader from "../../components/ViewSubHeader";
import { PrintConsole } from "../../utils/PrintConsole";
import { DataStatesCtx } from "./DataStatesContent";

const LeftContent: React.FC = () => {
  const { formation, setFormation, selectedPlayers, editMode } =
    useContext(DataStatesCtx);

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
        <FootballTable formation={formation} players={selectedPlayers} />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" type="submit">
          {!editMode ? "Save" : "Modify"}
        </Button>
      </Grid>
    </Grid>
  );
};

const RightContent: React.FC = () => (
  <div>
    <PlayerSelect maxHeight={550} />
  </div>
);

const ConfigureSquadView: React.FC = () => {
  // eslint-disable-next-line no-unused-vars
  const DragEnd = (result: DropResult, provided: ResponderProvided) => {
    PrintConsole(`Destination ${result.destination}`);
  };

  return (
    <DragDropContext onDragEnd={DragEnd}>
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
    </DragDropContext>
  );
};

export default ConfigureSquadView;
