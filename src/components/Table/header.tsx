import React, { useState } from "react";
import {
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Typography
} from "@mui/material";
import { useStyles } from "./style";

interface Props {
  sortByName: (sort: string) => void;
  sortByDesc: (sort: string) => void;
}

const Header: React.FC<Props> = (props: Props) => {
  const { sortByName, sortByDesc } = props;
  const classes = useStyles();
  const [sortTypeName, setSortTypeName] = useState<string>("asc");
  const [sortTypeDesc, setSortTypeDesc] = useState<string>("asc");

  const SortByName = () => {
    sortByName(sortTypeName);
    if (sortTypeName === "asc") {
      setSortTypeName("desc");
    } else {
      setSortTypeName("asc");
    }
  };

  const SortByDesc = () => {
    sortByDesc(sortTypeDesc);
    if (sortTypeDesc === "asc") {
      setSortTypeDesc("desc");
    } else {
      setSortTypeDesc("asc");
    }
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell sx={{ width: "30%" }}>
          <TableSortLabel
            direction={sortTypeName === "asc" ? "asc" : "desc"}
            onClick={() => SortByName()}
          >
            <Typography variant="body2" className={classes.tableTextContent}>
              Name
            </Typography>
          </TableSortLabel>
        </TableCell>
        <TableCell sx={{ width: "60%" }}>
          <TableSortLabel
            direction={sortTypeDesc === "asc" ? "asc" : "desc"}
            onClick={() => SortByDesc()}
          >
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
