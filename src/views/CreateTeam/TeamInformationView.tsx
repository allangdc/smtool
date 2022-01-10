import React, { useContext, useState } from "react";
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
import ChipList, { ChipData } from "../../components/ChipList";
import ViewSubHeader from "../../components/ViewSubHeader";
import { DataStatesCtx } from "./DataStatesContent";

const RadioButton: React.FC = () => {
  const context = useContext(DataStatesCtx);
  const { teamType, setTeamType } = context;

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Team type</FormLabel>
      <RadioGroup
        row
        aria-label="teamtype"
        name="row-radio-buttons-group"
        value={teamType}
        onChange={(e) => setTeamType(e.target.value)}
      >
        <FormControlLabel value="real" control={<Radio />} label="Real" />
        <FormControlLabel value="fantasy" control={<Radio />} label="Fantasy" />
      </RadioGroup>
    </FormControl>
  );
};

const LeftContent: React.FC = () => {
  const context = useContext(DataStatesCtx);
  const { teamName, setTeamName, description, setDescription } = context;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <MyTextBox
          caption="Team name"
          placeholder="Insert Team Name"
          value={teamName}
          required
          onChange={(e) => setTeamName(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <MyTextBox
          caption="Description"
          multiline
          rows={6}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Grid>
    </Grid>
  );
};

const RightContent: React.FC = () => {
  const context = useContext(DataStatesCtx);
  const {
    teamWebsite,
    setTeamWebsite,
    setChipItems,
    chipItems,
    setIsOpenModal
  } = context;

  const onChangeTagModal = (isOpen: boolean) => {
    setIsOpenModal(isOpen);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <MyTextBox
          caption="Team website"
          placeholder="http://myteam.com"
          value={teamWebsite}
          onChange={(e) => setTeamWebsite(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <RadioButton />
      </Grid>
      <Grid item xs={12}>
        <ChipList
          dataChip={chipItems}
          setDataChip={setChipItems}
          onChangeModal={onChangeTagModal}
        />
      </Grid>
    </Grid>
  );
};

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
