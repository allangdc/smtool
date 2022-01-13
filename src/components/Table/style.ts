import { makeStyles } from "@mui/styles";

const purple = "#b13d7c";
const lightPurple = "#f7eef7";

export const useStyles = makeStyles(() => ({
  tableRow: {
    height: 50,
    "&:hover": {
      backgroundColor: `${lightPurple} !important`,
      "& #cellContent": {
        color: purple
      },
      "& #tableButtonsItem": {
        display: "flex !important"
      }
    }
  },
  tableTextContent: {
    fontWeight: "600 !important"
  },
  tableButtons: {
    display: "none !important",
    flexDirection: "row"
  },
  tableButtonsIcon: {
    color: purple
  },
  customTooltip: {
    backgroundColor: "black"
  },
  customArrow: {
    color: "black"
  }
}));
