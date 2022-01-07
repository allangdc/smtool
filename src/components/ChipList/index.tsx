import { Button, Chip, Grid, ListItem, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import DefButton from "./DefButton";
import { useStyles } from "./style";

interface ChipData {
  key: number;
  label: string;
}

interface Props {
  onChangeChipList?: (list: Array<ChipData>) => void;
}

const ChipList = (props: Props) => {
  const { onChangeChipList } = props;
  const classes = useStyles();

  const [dataChip, setDataChip] = useState<Array<ChipData>>([]);

  useEffect(() => {
    if (onChangeChipList) {
      onChangeChipList(dataChip);
    }
  }, [dataChip]);

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
