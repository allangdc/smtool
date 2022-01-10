import React, { useEffect, useMemo, useState } from "react";
import { ChipData } from "../../components/ChipList";

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
  setIsOpenModal: () => {}
};

export const DataStatesCtx = React.createContext<IDataStates>(initDataStates);

interface Props {
  children: React.ReactElement;
}

const DataStatesContent: React.FC<Props> = (props: Props) => {
  const { children } = props;
  const [teamName, setTeamName] = useState<string>("POia");
  const [description, setDescription] = useState<string>("POiDa");
  const [teamWebsite, setTeamWebsite] = useState<string>("POiDaTeam");
  const [teamType, setTeamType] = useState<string>("fantasy");
  const [chipItems, setChipItems] = useState<Array<ChipData>>([
    {
      key: 0,
      label: "Oia Aí"
    }
  ]);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

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
      setIsOpenModal
    }),
    [teamName, description, teamWebsite, teamType, chipItems, isOpenModal]
  );

  return (
    <DataStatesCtx.Provider value={dataStates}>
      {children}
    </DataStatesCtx.Provider>
  );
};

export default DataStatesContent;
