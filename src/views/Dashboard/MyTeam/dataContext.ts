import React from "react";
import { IDataType } from "../../../components/Table/datatype";

export interface IDataContext {
  data: Array<IDataType>;
  setData: React.Dispatch<React.SetStateAction<IDataType[]>>;
}

const initDataContext: IDataContext = {
  data: [],
  setData: () => {}
};

export const dataContext = React.createContext<IDataContext>(initDataContext);
