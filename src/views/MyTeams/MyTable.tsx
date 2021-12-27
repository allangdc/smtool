import React, { useState } from "react";
import { Divider, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import MinSquareButton from "../../components/MinSquareButton";
import Table from "../../components/Table";
import { IDataType } from "../../components/Table/datatype";

const Header: React.FC = () => (
  <div style={{ padding: 20, display: "flex", flexDirection: "row" }}>
    <Typography variant="h5" style={{ flex: 2 }}>
      My teams
    </Typography>
    <MinSquareButton size={30}>
      <AddIcon style={{ color: "white" }} />
    </MinSquareButton>
  </div>
);

const Temp: IDataType[] = [
  { name: "Allan", description: "Teste 1" },
  { name: "Bruno", description: "Teste 2" }
];

const MyTable: React.FC = () => {
  const [data, setData] = useState<Array<IDataType>>(Temp);

  return (
    <div>
      <Header />
      <Divider />
      <Table data={data} />
    </div>
  );
};

export default MyTable;
