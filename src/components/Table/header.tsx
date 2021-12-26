import React from "react";
import {
  Divider,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Typography
} from "@mui/material";
import { useStyles } from "./style";

const Header: React.FC = () => {
  const title = ["Name", "Description"];
  const classes = useStyles();

  return (
    <TableHead>
      <TableRow>
        <TableCell sx={{ width: "30%" }}>
          <TableSortLabel>
            <Typography variant="body2" className={classes.tableTextContent}>
              Name
            </Typography>
          </TableSortLabel>
        </TableCell>
        <TableCell sx={{ width: "60%" }}>
          <TableSortLabel>
            <Typography variant="body2" className={classes.tableTextContent}>
              Description
            </Typography>
          </TableSortLabel>
        </TableCell>
        <TableCell sx={{ width: "10%" }} />
      </TableRow>
    </TableHead>
  );
};

export default Header;
