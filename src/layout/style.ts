import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  header: {
    background: "linear-gradient(to right, #c00e4f, #662f88)"
  },
  headerTitle: {
    flex: 1,
    fontWeight: "bold"
  },
  content: {
    backgroundColor: "yellow",
    minHeight: "100%",
    position: "relative",
    top: 55
  },
  footer: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    backgroundColor: "#e9e3e9",
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}));
