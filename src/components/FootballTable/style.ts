import { alpha } from "@mui/material";
import { makeStyles } from "@mui/styles";

const radius = 30;
const intRadius = radius * 0.9;
const circleColor = alpha("#FFFFFF", 0.3);
const sizeHeight = 600;

export const useStyles = makeStyles(() => ({
  footballField: {
    background: "linear-gradient(to bottom, #c00e4f, #662f88)",
    height: sizeHeight
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
    color: circleColor,
    zIndex: 10
  },
  internalCircle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: circleColor,
    height: intRadius * 2,
    width: intRadius * 2,
    borderRadius: intRadius,
    zIndex: 10
  },
  contentCircle: {
    color: "lightgray",
    zIndex: 10
  },
  bodyField: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative"
  },
  lineCenterField: {
    position: "absolute",
    borderTop: "solid",
    width: "100%",
    borderWidth: 1,
    left: -5,
    color: circleColor
  },
  circleCenterField: {
    position: "absolute",
    border: "solid",
    width: 100,
    height: 100,
    borderWidth: 1,
    borderRadius: 50,
    color: circleColor
  }
}));
