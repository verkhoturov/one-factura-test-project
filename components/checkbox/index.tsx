import React from "react";
import styles from "./index.module.scss";

interface CheckboxProps {
  onClick?: () => void;
  children: React.ReactNode;
}

export const Checkbox = ({ onClick, children }: CheckboxProps) => {
  const [checked, setChecked] = React.useState<boolean>(false);

  return (
    <div className={styles.wrapper}>
      <label
        onClick={(e) => {
          e.preventDefault();
          setChecked(!checked);
          onClick && onClick();
        }}
        className={styles.label}
      >
        <span>{children}</span>
        <input
          className={styles.input}
          type="checkbox"
          defaultChecked={checked}
        />
        <div
          className={`${styles.checkbox} ${checked ? styles.checked : ""}`}
        ></div>
      </label>
    </div>
  );
};
