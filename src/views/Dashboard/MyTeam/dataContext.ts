import React from "react";
import { IMyTeams } from "../../../services/myteams";

export interface IDataContext {
  data: Array<IMyTeams>;
  setData: React.Dispatch<React.SetStateAction<IMyTeams[]>>;
}

const initDataContext: IDataContext = {
  data: [],
  setData: () => {}
};

export const dataContext = React.createContext<IDataContext>(initDataContext);
