import React from "react";
import { TextField, Typography } from "@mui/material";
import { CSSProperties } from "@mui/styles";
import { useStyles } from "./style";

interface Props {
  caption?: string;
  placeholder?: string;
  type?: string;
  className?: string;
  style?: CSSProperties;
  multiline?: boolean;
  rows?: number;
  required?: boolean;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}

const MyTextBox: React.FC<Props> = (props: Props) => {
  const {
    caption,
    placeholder,
    type,
    className,
    style,
    multiline,
    required,
    rows,
    value,
    onChange
  } = props;
  const classes = useStyles();

  return (
    <div className={className} style={style}>
      <Typography variant="body1" className={classes.caption}>
        {caption}
      </Typography>
      <TextField
        required={required}
        variant="outlined"
        placeholder={placeholder}
        multiline={multiline}
        type={type}
        rows={multiline ? rows || 4 : undefined}
        onChange={onChange}
        value={value}
        className={classes.textField}
        inputProps={{
          style: {
            fontSize: 14,
            height: !multiline ? 40 : undefined,
            padding: "0 10px"
          }
        }}
      />
    </div>
  );
};

export default MyTextBox;
