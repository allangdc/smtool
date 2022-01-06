import { Logout } from "@mui/icons-material";
import { Button, Divider, Grid, Paper, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../authContext";
import MyTextBox from "../../components/MyTextBox";
import { authLogin, authLogout } from "../../services/auth";
import { useStyles } from "./style";

const Login = () => {
  const classes = useStyles();
  const [usrEmail, setUsrEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errMessage, setErrMessage] = useState<string>();
  const { setUserID } = useContext(AuthContext);

  const clearItems = () => {
    setUsrEmail("");
    setPassword("");
    setErrMessage(undefined);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const [uid, code] = await authLogin(usrEmail, password);
    console.log("MY UID", uid);
    if (uid) {
      setUserID(uid);
      clearItems();
    } else if (code === "auth/wrong-password") {
      setErrMessage("Invalid password");
    } else if (code === "auth/user-not-found") {
      setErrMessage("User not found");
    } else {
      setErrMessage(code);
    }
  };

  const onLogout = async () => {
    await authLogout();
    setUserID(undefined);
    clearItems();
  };

  return (
    <form onSubmit={onSubmit}>
      <Paper className={classes.formLogin}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6" align="center">
              Login
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <MyTextBox
              required
              caption="Email"
              placeholder="Enter with an email"
              type="email"
              value={usrEmail}
              onChange={(e) => setUsrEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <MyTextBox
              required
              caption="Password"
              placeholder="Enter with password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" align="center">
              {errMessage}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              type="submit"
              className={classes.btnSignin}
            >
              Sign In
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              type="button"
              className={classes.btnSignin}
              onClick={onLogout}
            >
              Logout
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </form>
  );
};

export default Login;
