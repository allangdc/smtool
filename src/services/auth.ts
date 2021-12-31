import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getUserByID } from "./users";

export interface IAuthUser {
  id: string;
  email: string | null;
  firstname: string;
  lastname: string;
}

export const authLogin = async (
  email: string,
  password: string
): Promise<IAuthUser | null> => {
  const auth = getAuth();
  let authUser: IAuthUser | null = null;
  await signInWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const { user } = userCredential;
      const userdb = await getUserByID(user.uid);
      if (userdb) {
        authUser = {
          id: user.uid,
          email: user.email,
          firstname: userdb.firstname,
          lastname: userdb.lastname
        };
      }
      authUser = null;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("ERROR LOGIN", errorCode, errorMessage);
      authUser = null;
    });
  return authUser;
};

export const authLogout = () => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log("LOGOUT");
    })
    .catch((error) => {
      // An error happened.
      console.log("LOGOUT ERROR", error);
    });
};
