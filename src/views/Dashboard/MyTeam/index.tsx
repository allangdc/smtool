import React, { useState } from "react";
import { Divider, Typography } from "@mui/material";
import Table from "../../../components/Table";
import { IDataType } from "../../../components/Table/datatype";
import { dataContext, IDataContext } from "./dataContext";
import AddDataButton from "./addDataButton";

const TableHeader: React.FC = () => (
  <div style={{ padding: 20, display: "flex", flexDirection: "row" }}>
    <Typography variant="h5" style={{ flex: 2 }}>
      My teams
    </Typography>
    <AddDataButton />
  </div>
);

const Temp: IDataType[] = [
  { name: "Allan", description: "Teste 20" },
  { name: "Mariana", description: "Teste 10" },
  { name: "Bruno", description: "Teste 05" }
];

const MyTeamTable: React.FC = () => {
  const [data, setData] = useState<Array<IDataType>>(Temp);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const valueDataContext: IDataContext = {
    data,
    setData
  };

  return (
    <dataContext.Provider value={valueDataContext}>
      <div>
        <TableHeader />
        <Divider />
        <Table data={data} />
      </div>
    </dataContext.Provider>
  );
};

export default MyTeamTable;
