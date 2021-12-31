import { makeStyles } from "@mui/styles";

const purple = "#b13d7c";
const lightPurple = "#f7eef7";

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
