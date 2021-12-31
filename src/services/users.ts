/* eslint-disable no-shadow */
import { collection, getDocs, where, query } from "firebase/firestore/lite";
import { firebaseDB } from "./firebaseConnection";

interface IUserList {
  firstname: string;
  lastname: string;
}

const USER_DB = "users";

export const getUsers = async (): Promise<Array<IUserList>> => {
  const usersCollection = collection(firebaseDB, USER_DB);
  const snapshot = await getDocs(usersCollection);
  const usersList = snapshot.docs.map((doc) => doc.data() as IUserList);
  return usersList;
};

export const getUserByID = async (id: string): Promise<IUserList | null> => {
  const usersCollection = collection(firebaseDB, USER_DB);
  const q = query(usersCollection, where("__name__", "==", id));
  const snapshot = await getDocs(q);
  const usersList = snapshot.docs.map((doc) => doc.data() as IUserList);
  if (usersList.length > 0) {
    return usersList[0];
  }
  return null;
};
