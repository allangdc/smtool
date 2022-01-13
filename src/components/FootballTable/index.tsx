import { Grid } from "@mui/material";
import React, { useMemo, useState } from "react";
import LineField from "./lineField";
import { useStyles } from "./style";
import { FieldType, FormationField } from "./types";

interface Props {
  id?: string;
}

const FootballTable: React.FC<Props> = (props: Props) => {
  const { id } = props;
  const classes = useStyles();
  const [players, setPlayers] = useState<Array<FieldType | undefined>>([
    { name: "GOL", position: 1 },
    { name: "2", position: 1 },
    { name: "3", position: 1 },
    { name: "4", position: 1 },
    { name: "5", position: 1 },
    { name: "6", position: 1 },
    { name: "7", position: 1 },
    { name: "8", position: 1 },
    { name: "9", position: 1 },
    { name: "10", position: 1 },
    { name: "11", position: 1 }
  ]);
  const [formation, setFormation] = useState<Array<number>>([2, 3, 5]);

  return (
    <Grid
      container
      direction="column"
      justifyContent="space-around"
      spacing={1}
      className={classes.footballField}
    >
      {formation.map((form, index) => (
        <LineField players={players} linePos={index} formation={formation} />
      ))}
      <LineField
        players={players}
        linePos={-1}
        formation={formation}
        goalkeeperLine
      />
    </Grid>
  );
};

export default FootballTable;
