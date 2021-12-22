import React from "react";
import { AppBar, Avatar, IconButton, Toolbar, Typography } from "@mui/material";
import { AvatarNames } from "../utils/Avatar";
import VenturusIcon from "../components/VenturusIcon";
import { useStyles } from "./style";

const avatarSize = 32;

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" elevation={0} className={classes.header}>
      <Toolbar variant="dense">
        <IconButton>
          <VenturusIcon style={{ fontSize: 40 }} />
        </IconButton>
        <Typography variant="body1" className={classes.headerTitle}>
          Squad Management Tool
        </Typography>
        <Typography variant="body1">John Doe</Typography>
        <Avatar
          sx={{
            bgcolor: "white",
            color: "#662f88",
            width: avatarSize,
            height: avatarSize,
            fontWeight: 600,
            fontSize: 15,
            marginLeft: 1
          }}
        >
          {AvatarNames("John Doe")}
        </Avatar>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
