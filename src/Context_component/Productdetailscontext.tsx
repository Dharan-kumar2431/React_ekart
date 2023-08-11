import { createContext } from "react";
import { productDetails } from "../InterfacesData/Productdetailsdata";

export const ProductdetailsContext = createContext(productDetails)
console.log('ProductdetailsContext',ProductdetailsContext)
export const ProductdetailsProvider = ProductdetailsContext.Provider;
export const ProductdetailsConsumer = ProductdetailsContext.Consumer;