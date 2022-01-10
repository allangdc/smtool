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

interface IDataStates {
  teamName: string;
  setTeamName: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  teamWebsite: string;
  setTeamWebsite: React.Dispatch<React.SetStateAction<string>>;
  teamType: string;
  setTeamType: React.Dispatch<React.SetStateAction<string>>;
  chipItems: ChipData[];
  setChipItems: React.Dispatch<React.SetStateAction<ChipData[]>>;
}

const initDataStates: IDataStates = {
  teamName: "",
  setTeamName: () => {},
  description: "",
  setDescription: () => {},
  teamWebsite: "",
  setTeamWebsite: () => {},
  teamType: "",
  setTeamType: () => {},
  chipItems: [],
  setChipItems: () => {}
};

const DataStatesContext = React.createContext<IDataStates>(initDataStates);

const RadioButton: React.FC = () => {
  const context = useContext(DataStatesContext);
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
  const context = useContext(DataStatesContext);
  const { teamName, setTeamName, description, setDescription } = context;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <MyTextBox
          caption="Team name"
          placeholder="Insert Team Name"
          value={teamName}
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
  const context = useContext(DataStatesContext);
  const { teamWebsite, setTeamWebsite, setChipItems, chipItems } = context;

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
        <ChipList dataChip={chipItems} setDataChip={setChipItems} />
      </Grid>
    </Grid>
  );
};

interface Props {
  id?: string;
}

const TeamInformationView: React.FC<Props> = (props: Props) => {
  const { id } = props;
  const [teamName, setTeamName] = useState<string>("Oia");
  const [description, setDescription] = useState<string>("OiDa");
  const [teamWebsite, setTeamWebsite] = useState<string>("OiDaTeam");
  const [teamType, setTeamType] = useState<string>("fantasy");
  const [chipItems, setChipItems] = useState<Array<ChipData>>([
    {
      key: 0,
      label: "Oi"
    }
  ]);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const dataStates: IDataStates = {
    teamName,
    setTeamName,
    description,
    setDescription,
    teamWebsite,
    setTeamWebsite,
    teamType,
    setTeamType,
    chipItems,
    setChipItems
  };

  return (
    <DataStatesContext.Provider value={dataStates}>
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
    </DataStatesContext.Provider>
  );
};

export default TeamInformationView;
