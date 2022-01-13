import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { useStyles } from "./style";

interface Props {
  children?: React.ReactNode;
}

const CircleField: React.FC<Props> = (props: Props) => {
  const { children } = props;
  const classes = useStyles();

  return (
    <div>
      <div className={classes.externalCircle}>
        <div className={classes.internalCircle}>
          <div className={classes.contentCircle}>
            {!children ? <AddIcon /> : children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircleField;
