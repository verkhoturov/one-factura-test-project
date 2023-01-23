import React from "react";
import styles from "./index.module.scss";

interface InputProps {
  type?: React.HTMLInputTypeAttribute;
  name?: string;
  onChange: (val: string) => void;
  placeholder?: string;
  label?: string;
}

export const Input = ({
  type = "text",
  name,
  onChange,
  placeholder,
  label,
}: InputProps) => {
  const [value, setValue] = React.useState("");

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        className={styles.input}
        name={name}
        type={type}
        value={value}
        onChange={onHandleChange}
        placeholder={placeholder}
      />
    </div>
  );
};
