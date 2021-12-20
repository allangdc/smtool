import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  header: {
    background: "linear-gradient(to right, #c00e4f, #662f88)"
  },
  headerTitle: {
    flex: 1,
    fontWeight: "bold"
  },
  footer: {
    backgroundColor: "#e9e3e9",
    minHeight: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}));
