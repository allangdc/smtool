import { PrintConsole } from "../utils/PrintConsole";
import firebase from "./firebaseConnection";

interface IPlayerList {
  id: string;
  name: string;
  age: number;
  nationality: string;
}

const PLAYER_DB = "players";

export const getPlayers = async (): Promise<Array<IPlayerList> | null> => {
  let playersList: Array<IPlayerList> | null = null;
  await firebase
    .firestore()
    .collection(PLAYER_DB)
    .get()
    .then((snapshot) => {
      playersList = snapshot.docs.map((doc) => doc.data() as IPlayerList);
    })
    .catch((error) => {
      PrintConsole(`getPlayers Error ${error}`);
    });
  return playersList;
};
