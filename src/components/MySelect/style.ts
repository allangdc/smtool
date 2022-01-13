import { makeStyles } from "@mui/styles";

const purple = "#b13d7c";

export const useStyles = makeStyles(() => ({
  content: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  caption: {
    fontWeight: "bold !important",
    color: purple,
    paddingBottom: 5,
    marginRight: 30
  },
  textField: {
    width: "100%",
    fontSize: 14,
    maxHeight: 30,
    padding: "0 10px"
  }
}));
