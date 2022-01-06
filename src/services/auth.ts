import firebase, { firebaseAuth } from "./firebaseConnection";

export interface IAuthUser {
  id: string;
  email: string | null;
  firstname: string;
  lastname: string;
}

export const authLogin = async (
  email: string,
  password: string
): Promise<[string | null, string]> => {
  let uid: string | null = null;
  let code: string = "";
  await firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential: firebase.auth.UserCredential) => {
      const { user } = userCredential;
      if (user) {
        uid = user.uid;
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("ERROR LOGIN", errorCode, errorMessage);
      code = errorCode;
    });
  return [uid, code];
};

export const isLogged = (): firebase.User | null => {
  const auth = firebaseAuth;
  return auth.currentUser;
};

export const authLogout = async () => {
  const auth = firebaseAuth;
  await auth
    .signOut()
    .then(() => {})
    .catch((error) => {
      console.log("LOGOUT ERROR", error);
    });
};
