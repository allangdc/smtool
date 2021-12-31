/* eslint-disable no-shadow */
import { collection, getDocs } from "firebase/firestore/lite";
import { firebaseDB } from "./firebaseConnection";

export interface IMyTeams {
  description: string;
  name: string;
  user_id: string;
  website: string;
}

export const getMyTeams = async (): Promise<Array<IMyTeams>> => {
  const myTeamsCollection = collection(firebaseDB, "myTeams");
  const snapshot = await getDocs(myTeamsCollection);
  const myTeamsList = snapshot.docs.map((doc) => doc.data() as IMyTeams);
  return myTeamsList;
};
