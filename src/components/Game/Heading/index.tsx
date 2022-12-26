import { FC } from "react";
import { motion } from "framer-motion";
import classNames from "classnames";
import style from "./style.module.css";

interface IProps {
  children: string;
}

const Heading: FC<IProps> = ({ children }) => (
  <motion.h1
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.3 }}
    className={classNames(
      "text-4xl",
      "text-white",
      "text-center",
      style.heading
    )}
  >
    {children}
  </motion.h1>
);

export default Heading;
