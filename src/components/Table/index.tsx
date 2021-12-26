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
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ShareIcon from "@mui/icons-material/Share";
import EditIcon from "@mui/icons-material/Edit";
import Header from "./header";
import { useStyles } from "./style";

export interface IDataType {
  name: string;
  description: string;
}

interface Props {
  data: Array<IDataType>;
}

const Buttons: React.FC = () => {
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
          <IconButton size="small">
            <DeleteIcon fontSize="small" className={classes.tableButtonsIcon} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Share" placement="top" arrow>
          <IconButton size="small">
            <ShareIcon fontSize="small" className={classes.tableButtonsIcon} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Edit" placement="top" arrow>
          <IconButton size="small">
            <EditIcon fontSize="small" className={classes.tableButtonsIcon} />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
};

const Table: React.FC<Props> = (props: Props) => {
  const { data } = props;
  const classes = useStyles();

  return (
    <div style={{ padding: 20 }}>
      <TableContainer>
        <Tb size="small" sx={{ borderBottom: "none" }}>
          <Header />
          <TableBody>
            {data.map((item) => (
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
                  <Buttons />
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
