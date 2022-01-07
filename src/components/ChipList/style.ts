import { makeStyles } from "@mui/styles";

const purple = "#b13d7c";
const lightPurple = "#f7eef7";

export const useStyles = makeStyles(() => ({
  chipContainer: {
    padding: 5,
    display: "flex",
    flexWrap: "wrap",
    border: "solid",
    borderColor: "lightgray",
    borderWidth: 1,
    minHeight: 80
  },
  defButton: {
    display: "flex",
    alignItems: "flex-start",
    marginTop: "5px !important",
    cursor: "pointer"
  },
  inputModal: {
    position: "absolute"
  },
  textFieldModal: {
    fontSize: 10
  }
}));
