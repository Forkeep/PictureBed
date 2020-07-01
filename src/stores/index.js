import React, {createContext,useContext} from "react";
import {AuthStore} from "./auth.js";

const context = createContext({
  AuthStore: new AuthStore()
});

export  const useStores = ()=> useContext(context);
