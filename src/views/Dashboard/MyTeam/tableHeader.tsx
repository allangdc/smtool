import React from "react";
import { Typography } from "@mui/material";
import AddDataButton from "./addDataButton";

const TableHeader: React.FC = () => (
  <div style={{ padding: 20, display: "flex", flexDirection: "row" }}>
    <Typography variant="h5" style={{ flex: 2 }}>
      My teams
    </Typography>
    <AddDataButton />
  </div>
);

export default TableHeader;
