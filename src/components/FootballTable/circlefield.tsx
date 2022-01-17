/* eslint-disable react/no-unstable-nested-components */
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { useStyles } from "./style";
import { DropObject } from "../DraggableElement";

interface Props {
  children?: React.ReactNode;
  id: string;
}

const CircleField: React.FC<Props> = (props: Props) => {
  const { children, id } = props;
  const classes = useStyles();

  return (
    <DropObject id={`playerField_${id}`}>
      <div className={classes.externalCircle}>
        <div className={classes.internalCircle}>
          <div className={classes.contentCircle}>
            {!children ? <AddIcon /> : children}
          </div>
        </div>
      </div>
    </DropObject>
  );
};

export default CircleField;
