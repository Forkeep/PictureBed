import {createContext, useContext} from "react";
import AuthStore from "./auth.js";
import UserStore from "./user";

const context = createContext({
  AuthStore,
  UserStore
});

window.store = {
  AuthStore,
  UserStore
};

export const useStores = () => useContext(context);
