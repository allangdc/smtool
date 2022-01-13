import { alpha } from "@mui/material";
import { makeStyles } from "@mui/styles";

const radius = 30;
const intRadius = radius * 0.9;
const circleColor = alpha("#FFFFFF", 0.3);

export const useStyles = makeStyles(() => ({
  footballField: {
    background: "linear-gradient(to bottom, #c00e4f, #662f88)",
    minHeight: 600
  },
  lineTest: {
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
