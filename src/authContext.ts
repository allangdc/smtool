import React from "react";
import { IAuthUser } from "./services/auth";

export interface IAuthContext {
  authUser: IAuthUser | undefined;
  setAuthUser: React.Dispatch<React.SetStateAction<IAuthUser | undefined>>;
}

const initAuthContext: IAuthContext = {
  authUser: undefined,
  setAuthUser: () => {}
};
export const AuthContext = React.createContext<IAuthContext>(initAuthContext);
