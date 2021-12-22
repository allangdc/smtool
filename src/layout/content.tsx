import React from "react";
import { useStyles } from "./style";

const Content: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <h1>Content</h1>
    </div>
  );
};

export default Content;
