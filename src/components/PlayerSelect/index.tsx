import React, { useEffect, useMemo, useState } from "react";
import { Grid, List, ListItem } from "@mui/material";
import PlayerCard, { PlayerType } from "./PlayerCard";
import MyTextBox from "../MyTextBox";
import { DragObject, DropObject } from "../DraggableElement";
import { getPlayers } from "../../services/players";

interface Props {
  maxHeight?: number;
}

const PlayerSelect: React.FC<Props> = (props: Props) => {
  const { maxHeight } = props;
  const [search, setSearch] = useState<string>("");
  const [players, setPlayers] = useState<Array<PlayerType>>([]);

  useEffect(() => {
    const getData = async () => {
      const pl: PlayerType[] | null = await getPlayers();
      if (pl) {
        setPlayers(pl);
      } else {
        setPlayers([]);
      }
    };
    getData();
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
        <List style={{ maxHeight, overflow: "auto" }}>
          <DropObject id="Players">
            {filteredPlayers.map((player, index) => (
              <DragObject id={index.toString()} index={index}>
                <ListItem key={`lstid${index}`}>
                  <PlayerCard player={player} />
                </ListItem>
              </DragObject>
            ))}
          </DropObject>
        </List>
      </Grid>
    </Grid>
  );
};

export default PlayerSelect;
