import { Typography } from "@material-ui/core";
import { Grid } from "@mui/material";
import React from "react";
import { useStyles } from "./style";

export interface PlayerType {
  name: string;
  age: number;
  nationality: string;
}

interface Props {
  player: PlayerType;
}

const PlayerCard: React.FC<Props> = (props: Props) => {
  const { player } = props;
  const { name, age, nationality } = player;
  const classes = useStyles();

  return (
    <Grid container className={classes.card}>
      <Grid container item xs={9}>
        <Grid item xs={12}>
          <Typography variant="caption" className={classes.cardLegend}>
            Name:
          </Typography>
          <Typography variant="caption" className={classes.cardData}>
            {name}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="caption" className={classes.cardLegend}>
            Nationality:
          </Typography>
          <Typography variant="caption" className={classes.cardData}>
            {nationality}
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="caption" className={classes.cardLegend}>
          Age:
        </Typography>
        <Typography variant="caption" className={classes.cardData}>
          {age}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default PlayerCard;
