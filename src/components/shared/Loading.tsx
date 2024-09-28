import { FC } from "react";

export const Loading: FC = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-[250px] loader flex justify-between items-center relative">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
