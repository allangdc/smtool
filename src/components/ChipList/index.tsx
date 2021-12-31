import { Chip, Grid, ListItem, Typography } from "@mui/material";
import React, { useState } from "react";
import { useStyles } from "./style";

interface Props {
  id?: string;
}

interface ChipData {
  key: number;
  label: string;
}

const ChipList = (props: Props) => {
  const { id } = props;
  const classes = useStyles();

  const [dataChip, setDataChip] = useState<Array<ChipData>>([
    { key: 0, label: "BR" },
    { key: 1, label: "PTW" },
    { key: 2, label: "ABR" },
    { key: 3, label: "APTW" },
    { key: 4, label: "BBR" },
    { key: 5, label: "BPTW" },
    { key: 6, label: "CBR" },
    { key: 7, label: "CPTW" },
    { key: 8, label: "DBR" },
    { key: 9, label: "DPTW" },
    { key: 10, label: "EBR" },
    { key: 11, label: "EPTW" }
  ]);

  const onDelete = (e: any) => {
    const dt = dataChip.filter((item) => item.key !== e);
    setDataChip(dt);
  };

  return (
    <div>
      <Typography variant="body1">Tags</Typography>
      <div className={classes.chipContainer}>
        {dataChip.map((item) => (
          <Chip
            key={item.key}
            label={item.label}
            color="primary"
            style={{ marginRight: 3 }}
            onDelete={(e) => onDelete(item.key)}
          />
        ))}
      </div>
    </div>
  );
};

export default ChipList;
