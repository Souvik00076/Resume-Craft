import { createContext, FC, useState } from "react";
import { TContextProps, TLoaderContext } from "../@types";
export const LoaderContext = createContext<TLoaderContext | null>(null);
const LoaderContextProvider: FC<TContextProps> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const value = {
    loading,
    setLoading,
  };
  return (
    <LoaderContext.Provider value={value}>{children}</LoaderContext.Provider>
  );
};
export default LoaderContextProvider;
