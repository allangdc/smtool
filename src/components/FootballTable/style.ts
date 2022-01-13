import { alpha } from "@mui/material";
import { makeStyles } from "@mui/styles";

const purple = "#b13d7c";
const lightPurple = "#f7eef7";
const radius = 30;
const intRadius = radius * 0.9;
const circleColor = alpha("#FFFFFF", 0.3);

export const useStyles = makeStyles(() => ({
  footballField: {
    backgroundColor: "blue",
    minHeight: 600
  },
  lineTest: {
    background: "red",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  externalCircle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: radius * 2,
    width: radius * 2,
    borderRadius: radius,
    border: "solid",
    borderStyle: "dashed",
    borderWidth: 2,
    color: circleColor
  },
  internalCircle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: circleColor,
    height: intRadius * 2,
    width: intRadius * 2,
    borderRadius: intRadius
  },
  contentCircle: {
    color: "lightgray"
  }
}));
