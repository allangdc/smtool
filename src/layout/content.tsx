import React from "react";
import RoutesSwitch from "../RoutesSwitch";
import { useStyles } from "./style";

const Content: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <RoutesSwitch />
    </div>
  );
};

export default Content;
