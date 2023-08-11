import { createContext } from "react";


export const CartidContext = createContext(0);
console.log("CartidContext", CartidContext)

export const CartidProvider = CartidContext.Provider;
export const CartidConsumer = CartidContext.Consumer;
