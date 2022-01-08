import React from "react";
import { Divider } from "@material-ui/core";
import { Paper, Typography } from "@mui/material";
import TeamInformationView from "./TeamInformationView";
import ConfigureSquadView from "./ConfigureSquadView";
import { useStyles } from "./style";

interface Props {
  id?: string;
}

const Header: React.FC = () => (
  <div style={{ paddingBottom: 20 }}>
    <Typography variant="h6">Create your team</Typography>
  </div>
);

const CreateTeamView: React.FC<Props> = (props: Props) => {
  const { id } = props;

  return (
    <div style={{ margin: 20 }}>
      <Paper style={{ padding: 40 }}>
        <Header />
        <Divider />
        <TeamInformationView />
        <ConfigureSquadView />
      </Paper>
    </div>
  );
};

export default CreateTeamView;
