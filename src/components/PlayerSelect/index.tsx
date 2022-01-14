import React, { useMemo, useState } from "react";
import { Grid, List, ListItem } from "@mui/material";
import PlayerCard, { PlayerType } from "./PlayerCard";
import MyTextBox from "../MyTextBox";

interface Props {
  id?: string;
}

const PlayerSelect: React.FC<Props> = (props: Props) => {
  const { id } = props;
  const [search, setSearch] = useState<string>("");
  const players: Array<PlayerType> = useMemo(() => {
    const pl: PlayerType[] = [];
    for (let i = 0; i < 10; i += 1) {
      pl.push({
        id: i.toString(),
        name: "Cristiano Ronaldo",
        age: 38,
        country: "Portugal"
      });
    }
    return pl;
  }, []);

  const filteredPlayers: Array<PlayerType> = useMemo(
    () =>
      players.filter((player) => search === "" || player.name.includes(search)),
    [players, search]
  );

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <MyTextBox
          caption="Search Players"
          placeholder="Player Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <List style={{ maxHeight: 600, overflow: "auto" }}>
          {filteredPlayers.map((player) => (
            <ListItem key={`lstid${player.id}`}>
              <PlayerCard player={player} />
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
};

export default PlayerSelect;
