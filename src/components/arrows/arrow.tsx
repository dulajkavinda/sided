import React from "react";
import styles from "./arrow.module.css";

interface IArrow {
  icon: any;
  action: () => void;
  disabled?: boolean;
  fill?: string;
}

const Arrow = (props: IArrow) => {
  const { icon, action, disabled, fill } = props;
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => {
        action();
      }}
      className={`${styles.arrow} ${disabled ? styles.disabled : ""}`}
      style={{ backgroundColor: fill }}
    >
      {icon}
    </div>
  );
};

export default Arrow;
