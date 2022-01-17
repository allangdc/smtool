import { Typography } from "@mui/material";
import React from "react";
import { useStyles } from "./style";

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Typography variant="caption" align="center">
        2020 - All rights reserved
      </Typography>
    </div>
  );
};

export default Footer;
