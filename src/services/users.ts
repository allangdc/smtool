import firebase from "./firebaseConnection";

interface IUserList {
  firstname: string;
  lastname: string;
}

const USER_DB = "users";

export const getUsers = async (): Promise<Array<IUserList> | null> => {
  let usersList: Array<IUserList> | null = null;
  await firebase
    .firestore()
    .collection(USER_DB)
    .get()
    .then((snapshot) => {
      usersList = snapshot.docs.map((doc) => doc.data() as IUserList);
    })
    .catch((error) => {
      console.log("getUsers Error", error);
    });
  return usersList;
};

export const getUserByID = async (id: string): Promise<IUserList | null> => {
  let user: IUserList | null = null;
  await firebase
    .firestore()
    .collection(USER_DB)
    .where("__name__", "==", id)
    .get()
    .then((snapshot) => {
      console.log("VAI1");
      const usersList = snapshot.docs.map((doc) => doc.data() as IUserList);
      if (usersList.length > 0) {
        // eslint-disable-next-line prefer-destructuring
        user = usersList[0];
      }
    })
    .catch((error) => {
      console.log("getUsers Error", error);
    });
  return user;
};
