import React from "react";
import { Chip, Typography } from "@mui/material";
import DefButton from "./DefButton";
import { useStyles } from "./style";

export interface ChipData {
  key: number;
  label: string;
}

interface Props {
  dataChip: ChipData[];
  setDataChip: React.Dispatch<React.SetStateAction<ChipData[]>>;
  // eslint-disable-next-line no-unused-vars
  onChangeModal: (isOpen: boolean) => void;
}

const ChipList = (props: Props) => {
  const { dataChip, setDataChip, onChangeModal } = props;
  const classes = useStyles();

  const onDelete = (e: any) => {
    const dt = dataChip.filter((item) => item.key !== e);
    setDataChip(dt);
  };

  const addChip = (val: string) => {
    const dtchip = new Array<ChipData>(...dataChip);
    const maxKey = dtchip.reduce((a, b) => (a.key > b.key ? a : b), {
      key: -1,
      label: ""
    });
    dtchip.push({
      key: maxKey.key + 1,
      label: val
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
            onDelete={() => onDelete(item.key)}
          />
        ))}
        <DefButton onEnterValue={addChip} onChangeModal={onChangeModal} />
      </div>
    </div>
  );
};

export default ChipList;
