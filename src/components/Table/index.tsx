/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
import {
  TableContainer,
  Table as Tb,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
  Typography,
  Tooltip
} from "@mui/material";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ShareIcon from "@mui/icons-material/Share";
import EditIcon from "@mui/icons-material/Edit";
import Header from "./header";
import { useStyles } from "./style";
import { IDataType } from "./datatype";
import { deleteMyTeams } from "../../services/myteams";

interface ButtonsProps {
  myteamId: string;
  onDeleteClick: (myteamID: string) => void;
  onEditClick: (myteamID: string) => void;
}

const Buttons: React.FC<ButtonsProps> = (props: ButtonsProps) => {
  const { myteamId, onDeleteClick, onEditClick } = props;
  const classes = useStyles();

  return (
    <div style={{ minWidth: 90 }}>
      <div id="tableButtonsItem" className={classes.tableButtons}>
        <Tooltip
          title="Remove"
          placement="top"
          arrow
          classes={{
            tooltip: classes.customTooltip,
            arrow: classes.customArrow
          }}
        >
          <IconButton size="small" onClick={() => onDeleteClick(myteamId)}>
            <DeleteIcon fontSize="small" className={classes.tableButtonsIcon} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Share" placement="top" arrow>
          <IconButton size="small">
            <ShareIcon fontSize="small" className={classes.tableButtonsIcon} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Edit" placement="top" arrow>
          <IconButton size="small" onClick={() => onEditClick(myteamId)}>
            <EditIcon fontSize="small" className={classes.tableButtonsIcon} />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
};

interface Props {
  data: Array<IDataType>;
  onDeleteClick: (myteamID: string) => void;
  onEditClick: (myteamID: string) => void;
}

const Table: React.FC<Props> = (props: Props) => {
  const { data, onDeleteClick, onEditClick } = props;
  const classes = useStyles();
  const [internalData, setInternalData] = useState<Array<IDataType>>([]);

  useEffect(() => {
    setInternalData(data);
  }, [data]);

  const sortByName = (sort: string) => {
    const dt = new Array(...internalData);
    if (sort === "asc") {
      dt.sort((a: IDataType, b: IDataType) => (a.name < b.name ? 1 : -1));
    } else {
      dt.sort((a: IDataType, b: IDataType) => (a.name > b.name ? 1 : -1));
    }
    setInternalData(dt);
  };

  const sortByDesc = (sort: string) => {
    const dt = new Array(...internalData);
    if (sort === "asc") {
      dt.sort((a: IDataType, b: IDataType) =>
        a.description < b.description ? 1 : -1
      );
    } else {
      dt.sort((a: IDataType, b: IDataType) =>
        a.description > b.description ? 1 : -1
      );
    }
    setInternalData(dt);
  };

  return (
    <div style={{ padding: 20 }}>
      <TableContainer>
        <Tb size="small" sx={{ borderBottom: "none" }}>
          <Header sortByName={sortByName} sortByDesc={sortByDesc} />
          <TableBody>
            {internalData.map((item) => (
              <TableRow key={item.name} hover className={classes.tableRow}>
                <TableCell sx={{ width: "30%" }}>
                  <Typography
                    id="cellContent"
                    variant="body2"
                    className={classes.tableTextContent}
                  >
                    {item.name}
                  </Typography>
                </TableCell>
                <TableCell sx={{ width: "60%" }}>
                  <Typography
                    id="cellContent"
                    variant="body2"
                    className={classes.tableTextContent}
                  >
                    {item.description}
                  </Typography>
                </TableCell>
                <TableCell sx={{ width: "10%" }}>
                  <Buttons
                    myteamId={item.id}
                    onDeleteClick={onDeleteClick}
                    onEditClick={onEditClick}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Tb>
      </TableContainer>
    </div>
  );
};

export default Table;
