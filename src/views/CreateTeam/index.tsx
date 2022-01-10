import React, { useContext, useState } from "react";
import { Divider } from "@material-ui/core";
import { Button, Paper, Typography } from "@mui/material";
import TeamInformationView from "./TeamInformationView";
import ConfigureSquadView from "./ConfigureSquadView";
import DataStatesContent, { DataStatesCtx } from "./DataStatesContent";
import { addMyTeams, IMyTeams } from "../../services/myteams";
import { AuthContext } from "../../authContext";
import Form from "./Form";

interface Props {
  edit?: boolean;
}

const Header: React.FC = () => (
  <div style={{ paddingBottom: 20 }}>
    <Typography variant="h6">Create your team</Typography>
  </div>
);

const CreateTeamView: React.FC<Props> = (props: Props) => {
  const { edit } = props;

  return (
    <DataStatesContent>
      <div style={{ margin: 20 }}>
        <Paper style={{ padding: 40 }}>
          <Form>
            <>
              <Header />
              <Divider />
              <TeamInformationView />
              <ConfigureSquadView />
              <Button variant="contained" type="submit">
                Save
              </Button>
            </>
          </Form>
        </Paper>
      </div>
    </DataStatesContent>
  );
};

export default CreateTeamView;
