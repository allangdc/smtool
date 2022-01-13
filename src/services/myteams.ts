import firebase from "./firebaseConnection";

export interface IMyTeams {
  id: string;
  description: string;
  name: string;
  uid: string;
  website: string;
  type: string;
  tag: Array<string>;
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

export const addMyTeams = async (data: IMyTeams): Promise<boolean> => {
  let wasAdded = false;
  await firebase
    .firestore()
    .collection("myTeams")
    .doc()
    .set({
      description: data.description,
      name: data.name,
      uid: data.uid,
      website: data.website,
      type: data.type,
      tag: data.tag
    })
    .then(() => {
      wasAdded = true;
    })
    .catch((error) => {
      console.log("AddMyTeams Error", error);
    });
  return wasAdded;
};

export const updateMyTeams = async (data: IMyTeams): Promise<boolean> => {
  let wasUpdate = false;
  await firebase
    .firestore()
    .collection("myTeams")
    .doc(data.id)
    .update({
      description: data.description,
      name: data.name,
      uid: data.uid,
      website: data.website,
      type: data.type,
      tag: data.tag
    })
    .then(() => {
      wasUpdate = true;
    })
    .catch((error) => {
      console.log("UpdatedMyTeams Error", error);
    });
  return wasUpdate;
};

export const deleteMyTeams = async (myteamId: string): Promise<boolean> => {
  let wasRemoved = false;
  await firebase
    .firestore()
    .collection("myTeams")
    .doc(myteamId)
    .delete()
    .then(() => {
      wasRemoved = true;
    })
    .catch((error) => {
      console.log("DeleteMyTeams Error", error);
    });
  return wasRemoved;
};

export const findMyTeamByID = async (
  myteamId: string
): Promise<IMyTeams | null> => {
  let myTeam: IMyTeams | null = null;
  await firebase
    .firestore()
    .collection("myTeams")
    .doc(myteamId)
    .get()
    .then((snapshot) => {
      myTeam = snapshot.data() as IMyTeams;
      myTeam.id = snapshot.id;
    })
    .catch((error) => {
      console.log("FindMyTeams Error", error);
    });
  return myTeam;
};
