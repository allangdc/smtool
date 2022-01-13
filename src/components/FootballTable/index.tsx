import { Grid } from "@mui/material";
import React, { useMemo } from "react";
import LineField from "./lineField";
import { useStyles } from "./style";
import { FieldType } from "./types";

interface Props {
  formation: string;
  players: Array<FieldType | undefined>;
}

const FootballTable: React.FC<Props> = (props: Props) => {
  const { formation, players } = props;
  const classes = useStyles();

  const arrayFormation: Array<number> = useMemo(
    () => formation.split("-").map(Number),
    [formation]
  );

  return (
    <div className={classes.bodyField}>
      <div className={classes.lineCenterField} />
      <div className={classes.circleCenterField} />
      <Grid
        container
        direction="column"
        justifyContent="space-around"
        spacing={1}
        className={classes.footballField}
      >
        {arrayFormation.map((form, index) => (
          <LineField
            key={`lin${index}`}
            players={players}
            linePos={index}
            formation={arrayFormation}
          />
        ))}
        <LineField
          players={players}
          linePos={-1}
          formation={arrayFormation}
          goalkeeperLine
        />
      </Grid>
    </div>
  );
};

export default FootballTable;
