import { makeStyles } from "@mui/styles";

const purple = "#b13d7c";

export const useStyles = makeStyles(() => ({
  card: {
    border: "solid",
    borderWidth: 1,
    borderStyle: "dashed",
    background: "linear-gradient(to bottom, #FFFFFF, #E9E9E9)",
    padding: 15,
    color: "lightgray"
  },
  cardLegend: {
    fontWeight: "bold !important",
    marginRight: 5,
    color: "black"
  },
  cardData: {
    color: purple
  }
}));
