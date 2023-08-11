import { createContext } from "react";

export const LoginContext = createContext<any>(undefined);
export const LoginnameContext = createContext<any>(undefined);
console.log("filtervaluedetails====>", LoginContext)

export const LoginContextProvider = LoginContext.Provider;
export const LoginContextConsumer = LoginContext.Consumer;

export const LoginnameContextProvider = LoginnameContext.Provider
export const LoginnameContextConsumer = LoginnameContext.Consumer

