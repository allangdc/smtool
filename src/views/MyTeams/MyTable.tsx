import React from "react";
import { Divider, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import MinSquareButton from "../../components/MinSquareButton";
import Table, { IDataType } from "../../components/Table";
import { useStyles } from "./style";

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <div style={{ padding: 20, display: "flex", flexDirection: "row" }}>
      <Typography variant="h5" style={{ flex: 2 }}>
        My teams
      </Typography>
      <MinSquareButton size={30}>
        <AddIcon style={{ color: "white" }} />
      </MinSquareButton>
    </div>
  );
};

const Temp: IDataType[] = [
  { name: "Allan", description: "Teste 1" },
  { name: "Bruno", description: "Teste 2" }
];

const MyTable: React.FC = () => (
  <div>
    <Header />
    <Divider />
    <Table data={Temp} />
  </div>
);

export default MyTable;
