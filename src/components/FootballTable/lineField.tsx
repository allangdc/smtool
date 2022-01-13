import React, { useEffect, useMemo } from "react";
import { Grid } from "@mui/material";
import CircleField from "./circlefield";
import { useStyles } from "./style";
import { FieldType } from "./types";

interface Props {
  players: Array<FieldType | undefined>;
  linePos: number;
  formation: Array<number>;
  goalkeeperLine?: boolean;
}

const LineField: React.FC<Props> = (props: Props) => {
  const { players, linePos, formation, goalkeeperLine } = props;
  const classes = useStyles();

  const minPos = useMemo(() => {
    if (goalkeeperLine) {
      return 0;
    }
    const items4sum = formation.filter((item, index) => index < linePos);
    const sum = items4sum.reduce((prevSum, value) => prevSum + value, 0);
    const resume = 11 - sum - formation[linePos];
    console.log(
      "min",
      "LINE",
      linePos,
      "items4sum",
      items4sum,
      "sum",
      sum,
      "Resume",
      resume
    );
    return resume;
  }, [formation, linePos]);

  const maxPos = useMemo(() => {
    if (goalkeeperLine) {
      return 0;
    }
    const items4sum = formation.filter((item, index) => index < linePos);
    const sum = items4sum.reduce((prevSum, value) => prevSum + value, 0);
    const resume = 10 - sum;
    console.log(
      "MAX",
      "LINE",
      linePos,
      "items4sum",
      items4sum,
      "sum",
      sum,
      "Resume",
      resume
    );
    return resume;
  }, [formation, linePos]);

  const playerFiltered = useMemo(
    () => players.filter((item, index) => index >= minPos && index <= maxPos),
    [players]
  );

  return (
    <Grid
      container
      item
      direction="row"
      spacing={1}
      justifyContent="space-around"
      alignItems="center"
    >
      {playerFiltered.reverse().map((items: FieldType | undefined) => (
        <Grid item xs={4} className={classes.lineTest}>
          <CircleField>{items?.name}</CircleField>
        </Grid>
      ))}
    </Grid>
  );
};

export default LineField;
