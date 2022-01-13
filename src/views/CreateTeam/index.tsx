import React, { useEffect, useState } from "react";
import { Divider } from "@material-ui/core";
import { Button, Paper, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import TeamInformationView from "./TeamInformationView";
import ConfigureSquadView from "./ConfigureSquadView";
import DataStatesContent from "./DataStatesContent";
import Form from "./Form";
import { findMyTeamByID, IMyTeams } from "../../services/myteams";

interface Props {
  editMode?: boolean;
}

const Header: React.FC = () => (
  <div style={{ paddingBottom: 20 }}>
    <Typography variant="h6">Create your team</Typography>
  </div>
);

const CreateTeamView: React.FC<Props> = (props: Props) => {
  const { editMode } = props;
  const { id } = useParams<string>();
  const [editMyTeam, setEditMyTeam] = useState<IMyTeams>();

  useEffect(() => {
    const ValidTeamId = async () => {
      if (editMode && id) {
        const myteam = await findMyTeamByID(id);
        if (myteam) {
          setEditMyTeam(myteam);
        } else {
          setEditMyTeam(undefined);
        }
      }
    };
    ValidTeamId();
  }, [editMode, id]);

  return (
    <DataStatesContent>
      <div style={{ margin: 20 }}>
        <Paper style={{ padding: 40 }}>
          <Form editModeID={editMode ? id : undefined}>
            <>
              <Header />
              <Divider />
              <TeamInformationView editItem={editMyTeam} />
              <ConfigureSquadView />
              <Button variant="contained" type="submit">
                {!editMode ? "Save" : "Modify"}
              </Button>
            </>
          </Form>
        </Paper>
      </div>
    </DataStatesContent>
  );
};

export default CreateTeamView;
