import firebase from "./firebaseConnection";

export interface IMyTeams {
  description: string;
  name: string;
  user_id: string;
  website: string;
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
