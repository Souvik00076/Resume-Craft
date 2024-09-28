import { useContext } from "react";
import { LoaderContext } from "../context/loaderContext";

export const useLoader = () => {
  const context = useContext(LoaderContext);
  if (context === null) {
    throw new Error("Context must be within context provider");
  }
  return context;
};
