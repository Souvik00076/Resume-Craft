import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Nav } from "../components";
import { useLoader } from "../hooks";
import { Loading } from "../components";

export const Dashboard: FC = () => {
  const { loading } = useLoader();
  return (
    <div>
      <Nav />
      {loading ? <Loading /> : <Outlet />}
    </div>
  );
};
