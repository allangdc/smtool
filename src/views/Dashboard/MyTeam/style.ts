import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  headerButton: {
    background: "linear-gradient(to bottom, #c00e4f, #662f88)",
    borderRadius: 5,
    width: 30,
    height: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  modalContent: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    backgroundColor: "white",
    border: "2px solid #000",
    padding: 20
  },
  modalTextField: {
    width: "100%"
  },
  modalButton: {
    width: "100%"
  }
}));
