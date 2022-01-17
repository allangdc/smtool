import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useStyles } from "./style";

export interface MySelectOption {
  value: string;
  caption: string;
}

interface Props {
  caption: string;
  options: Array<MySelectOption>;
  // eslint-disable-next-line no-unused-vars
  onChange?: (value: string) => void;
  defaultValue?: string;
}

const MySelect = (props: Props) => {
  const { caption, options, onChange, defaultValue } = props;
  const classes = useStyles();
  const [value, setValue] = useState<string>(defaultValue || "");

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <div className={classes.content}>
      <Typography variant="body1" className={classes.caption}>
        {caption}
      </Typography>
      <Select
        value={value}
        onChange={handleChange}
        className={classes.textField}
      >
        {options.map((opt: MySelectOption, index: number) => (
          <MenuItem key={`sel${index}`} value={opt.value}>
            {opt.caption}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default MySelect;
