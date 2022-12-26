import { FC } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";
import style from "./style.module.css";
import { StateType } from "../../store/types";

interface IProps {
  children: JSX.Element | JSX.Element[];
}

const Layout: FC<IProps> = ({ children }) => {
  const loaded = useSelector((state: StateType) => state.game.loaded);

  return (
    <div
      className={classNames(style.layout, {
        [style.fast]: !loaded,
      })}
    >
      <div className="mx-auto max-w-[390px] w-[390px] h-full flex flex-col py-8 px-4">
        {children}
      </div>
    </div>
  );
};

export default Layout;
