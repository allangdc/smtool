import { ChipData } from "../components/ChipList";
import firebase from "./firebaseConnection";

export interface IMyTeams {
  id: string;
  description: string;
  name: string;
  uid: string;
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
      myTeamsList = snapshot.docs.map((doc) => {
        const dt = doc.data() as IMyTeams;
        dt.id = doc.id;
        return dt;
      });
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
      uid: data.uid,
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

export const deleteMyTeams = async (myteamId: string): Promise<boolean> => {
  let wasRemoved = false;
  await firebase
    .firestore()
    .collection("myTeams")
    .doc(myteamId)
    .delete()
    .then(() => {
      console.log("Data Deleted");
      wasRemoved = true;
    })
    .catch((error) => {
      console.log("DeleteMyTeams Error", error);
    });
  return wasRemoved;
};
