import { FC } from "react";
export const Nav: FC = () => {
  return (
    <nav className=" bg-primary-light  ">
      <ul className="flex items-center justify-end  text-white-smoke gap-x-4 px-4 py-4 font-semibold text-lg">
        <li className="li">
          <a href="edit-resume">Start</a>
        </li>
        <li className="li">Login</li>
      </ul>
    </nav>
  );
};
