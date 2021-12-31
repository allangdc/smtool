import { Button, Divider, Grid, Paper, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../authContext";
import MyTextBox from "../../components/MyTextBox";
import { authLogin } from "../../services/auth";
import { useStyles } from "./style";

const Login = () => {
  const classes = useStyles();
  const [usrEmail, setUsrEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { authUser, setAuthUser } = useContext(AuthContext);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const auth = await authLogin(usrEmail, password);
    if (auth) {
      setAuthUser(auth);
    }
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
            <Button
              variant="contained"
              type="submit"
              className={classes.btnSignin}
            >
              Sign In
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </form>
  );
};

export default Login;
