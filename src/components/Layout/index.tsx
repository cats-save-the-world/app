import { FC } from "react";
import style from "./style.module.css";

interface IProps {
  children: JSX.Element | JSX.Element[];
}

const Layout: FC<IProps> = ({ children }) => (
  <div className={style.layout}>
    <div className="mx-auto max-w-[390px] w-[390px] h-full flex flex-col py-8 px-4">
      {children}
    </div>
  </div>
);

export default Layout;
