import { Button, Chip, Grid, ListItem, Typography } from "@mui/material";
import React, { useState } from "react";
import DefButton from "./DefButton";
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
    { key: 1, label: "PTW" }
  ]);

  const onDelete = (e: any) => {
    const dt = dataChip.filter((item) => item.key !== e);
    setDataChip(dt);
  };

  const addChip = (value: string) => {
    const dtchip = new Array<ChipData>(...dataChip);
    dtchip.push({
      key: dtchip.length,
      label: value
    });
    setDataChip(dtchip);
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
            style={{ marginRight: 3, marginBottom: 1 }}
            onDelete={(e) => onDelete(item.key)}
          />
        ))}
        <DefButton onEnterValue={addChip} />
      </div>
    </div>
  );
};

export default ChipList;
