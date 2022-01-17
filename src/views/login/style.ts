import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  formLogin: {
    maxWidth: 250,
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, 50%)"
  },
  btnSignin: {
    width: "100%"
  }
}));
