/* eslint-disable no-unused-vars */
import React from "react";
import { useStyles } from "./style";

interface Props {
  children: React.ReactElement;
  size: number;
  onClick?: () => void;
}

const MinSquareButton = (props: Props) => {
  const { children, size, onClick } = props;
  const classes = useStyles();

  const Click = (e: React.MouseEvent<HTMLElement>) => {
    if (onClick) onClick();
  };

  const onKeyPress = (e: React.KeyboardEvent<HTMLElement>) => {
    if (onClick) onClick();
  };

  return (
    <div
      style={{ width: size, height: size }}
      className={classes.divButton}
      onClick={Click}
      onKeyPress={onKeyPress}
      role="button"
      tabIndex={0}
    >
      {children}
    </div>
  );
};

export default MinSquareButton;
