import { Divider } from "@material-ui/core";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  Typography
} from "@mui/material";
import React from "react";
import ChipList from "../../components/ChipList";
import MyTextBox from "../../components/MyTextBox";
import { useStyles } from "./style";

interface Props {
  id?: string;
}

const Header: React.FC = () => (
  <div style={{ paddingBottom: 20 }}>
    <Typography variant="h6">Create your team</Typography>
  </div>
);

const RadioButton: React.FC = () => (
  <FormControl component="fieldset">
    <FormLabel component="legend">Team type</FormLabel>
    <RadioGroup row aria-label="teamtype" name="row-radio-buttons-group">
      <FormControlLabel value="Real" control={<Radio />} label="Real" checked />
      <FormControlLabel value="Fantasy" control={<Radio />} label="Fantasy" />
    </RadioGroup>
  </FormControl>
);

const LeftContent: React.FC = () => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <MyTextBox caption="Team name" placeholder="Insert Team Name" />
    </Grid>
    <Grid item xs={12}>
      <MyTextBox caption="Description" multiline />
    </Grid>
  </Grid>
);

const RightContent: React.FC = () => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <MyTextBox caption="Team website" placeholder="http://myteam.com" />
    </Grid>
    <Grid item xs={12}>
      <RadioButton />
    </Grid>
    <Grid item xs={12}>
      <ChipList />
    </Grid>
  </Grid>
);

const CreateTeamView: React.FC<Props> = (props: Props) => {
  const { id } = props;

  return (
    <div style={{ margin: 20 }}>
      <Paper style={{ padding: 40 }}>
        <Header />
        <Divider />
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="body1" align="center" style={{ padding: 20 }}>
              TEAM INFORMATION
            </Typography>
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
      </Paper>
    </div>
  );
};

export default CreateTeamView;
