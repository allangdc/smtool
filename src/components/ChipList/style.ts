import { makeStyles } from "@mui/styles";

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
