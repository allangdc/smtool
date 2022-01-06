import React, { useEffect, useState } from "react";
import { IAuthUser, isLogged } from "./services/auth";
import firebase, { firebaseAuth } from "./services/firebaseConnection";
import { getUserByID } from "./services/users";

export interface IAuthContext {
  authUser: IAuthUser | undefined;
  setAuthUser: React.Dispatch<React.SetStateAction<IAuthUser | undefined>>;
  userID: string | undefined;
  setUserID: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const initAuthContext: IAuthContext = {
  authUser: {
    id: "",
    email: "",
    firstname: "",
    lastname: ""
  },
  setAuthUser: () => {},
  userID: "",
  setUserID: () => {}
};

export const AuthContext = React.createContext<IAuthContext>(initAuthContext);

interface Props {
  children: React.ReactElement;
}

const AuthContextProvider: React.FC<Props> = (props: Props) => {
  const [authUser, setAuthUser] = useState<IAuthUser>();
  const [userID, setUserID] = useState<string>();
  const { children } = props;

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const authContext: IAuthContext = {
    authUser,
    setAuthUser,
    userID,
    setUserID
  };

  useEffect(() => {
    const getUSR = async () => {
      if (userID) {
        console.log("OI");
        const userdb = await getUserByID(userID);
        console.log("OI3");
        if (userdb) {
          setAuthUser({
            id: userID,
            email: null,
            firstname: userdb.firstname,
            lastname: userdb.lastname
          });
        }
      } else {
        setAuthUser(undefined);
      }
    };
    getUSR();
  }, [userID]);

  useEffect(() => {
    const startService = () => {
      const auth = firebaseAuth;
      auth.onAuthStateChanged((user: firebase.User | null) => {
        if (user) {
          if (user.uid !== userID) {
            console.log("USER_ID", user.uid);
            console.log("I'm logged");
            setUserID(user.uid);
          }
        } else {
          setUserID(undefined);
          console.log("I'm logouted");
        }
      });
    };
    startService();
  });

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
