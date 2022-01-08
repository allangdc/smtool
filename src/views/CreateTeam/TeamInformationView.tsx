import React from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography
} from "@mui/material";
import MyTextBox from "../../components/MyTextBox";
import ChipList from "../../components/ChipList";
import ViewSubHeader from "../../components/ViewSubHeader";

const RadioButton: React.FC = () => (
  <FormControl component="fieldset">
    <FormLabel component="legend">Team type</FormLabel>
    <RadioGroup row aria-label="teamtype" name="row-radio-buttons-group">
      <FormControlLabel value="real" control={<Radio />} label="Real" checked />
      <FormControlLabel value="fantasy" control={<Radio />} label="Fantasy" />
    </RadioGroup>
  </FormControl>
);

const LeftContent: React.FC = () => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <MyTextBox caption="Team name" placeholder="Insert Team Name" />
    </Grid>
    <Grid item xs={12}>
      <MyTextBox caption="Description" multiline rows={6} />
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

interface Props {
  id?: string;
}

const TeamInformationView: React.FC<Props> = (props: Props) => {
  const { id } = props;

  return (
    <Grid container>
      <Grid item xs={12}>
        <ViewSubHeader title="TEAM INFORMATION" />
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
};

export default TeamInformationView;
