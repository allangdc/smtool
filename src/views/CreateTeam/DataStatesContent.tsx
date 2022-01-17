import React, { useMemo, useState } from "react";
import { ChipData } from "../../components/ChipList";
import { FieldType } from "../../components/FootballTable/types";

export interface IDataStates {
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
  isOpenModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  formation: string;
  setFormation: React.Dispatch<React.SetStateAction<string>>;
  selectedPlayers: (FieldType | undefined)[];
  setSelectedPlayers: React.Dispatch<
    React.SetStateAction<(FieldType | undefined)[]>
  >;
  editMode: boolean;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
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
  setChipItems: () => {},
  isOpenModal: false,
  setIsOpenModal: () => {},
  formation: "",
  setFormation: () => {},
  selectedPlayers: [],
  setSelectedPlayers: () => {},
  editMode: false,
  setEditMode: () => {}
};

export const DataStatesCtx = React.createContext<IDataStates>(initDataStates);

interface Props {
  children: React.ReactElement;
}

const DataStatesContent: React.FC<Props> = (props: Props) => {
  const { children } = props;
  const [teamName, setTeamName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [teamWebsite, setTeamWebsite] = useState<string>("");
  const [teamType, setTeamType] = useState<string>("real");
  const [chipItems, setChipItems] = useState<Array<ChipData>>([]);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [formation, setFormation] = useState<string>("3-4-3");
  const [editMode, setEditMode] = useState<boolean>(false);
  const [selectedPlayers, setSelectedPlayers] = useState<
    Array<FieldType | undefined>
  >([
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined
  ]);

  const dataStates = useMemo(
    () => ({
      teamName,
      setTeamName,
      description,
      setDescription,
      teamWebsite,
      setTeamWebsite,
      teamType,
      setTeamType,
      chipItems,
      setChipItems,
      isOpenModal,
      setIsOpenModal,
      formation,
      setFormation,
      selectedPlayers,
      setSelectedPlayers,
      editMode,
      setEditMode
    }),
    [
      teamName,
      description,
      teamWebsite,
      teamType,
      chipItems,
      isOpenModal,
      formation,
      selectedPlayers,
      editMode
    ]
  );

  return (
    <DataStatesCtx.Provider value={dataStates}>
      {children}
    </DataStatesCtx.Provider>
  );
};

export default DataStatesContent;
