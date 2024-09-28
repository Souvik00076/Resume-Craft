import { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoaderContextProvider, UserContextProvider } from "./context";
import { routes } from "./constants";
import "./index.css";
export const App: FC = () => {
  const router = createBrowserRouter(routes);
  return (
    <UserContextProvider>
      <LoaderContextProvider>
        <RouterProvider router={router} />
      </LoaderContextProvider>
    </UserContextProvider>
  );
};
