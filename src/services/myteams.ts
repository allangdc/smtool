import { ChipData } from "../components/ChipList";
import firebase from "./firebaseConnection";

export interface IMyTeams {
  description: string;
  name: string;
  user_id: string;
  website: string;
  teamtype: string;
  tags: Array<ChipData>;
}

export const getMyTeams = async (
  uid: string
): Promise<Array<IMyTeams> | null> => {
  let myTeamsList: Array<IMyTeams> | null = null;
  await firebase
    .firestore()
    .collection("myTeams")
    .where("uid", "==", uid)
    .get()
    .then((snapshot) => {
      myTeamsList = snapshot.docs.map((doc) => doc.data() as IMyTeams);
    })
    .catch((error) => {
      console.log("GetMyTeams Error", error);
    });
  return myTeamsList;
};

export const addMyTeams = async (data: IMyTeams): Promise<void> => {
  await firebase
    .firestore()
    .collection("myTeams")
    .doc()
    .set({
      description: data.description,
      name: data.name,
      uid: data.user_id,
      website: data.website,
      type: data.teamtype,
      tag: data.tags.map((item) => item.label)
    })
    .then(() => {
      console.log("Data Added");
    })
    .catch((error) => {
      console.log("AddMyTeams Error", error);
    });
};
