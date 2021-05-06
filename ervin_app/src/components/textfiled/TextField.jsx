import React from "react";
import style from "./TextField.module.css";

const TextField = ({
  value,
  name,
  type,
  onChange,
  label,
  placeholder,
  inputRef,
}) => {
  return (
    <div className={style.inputGroup}>
      <label className={style.label}>{label}</label>
      <input
        ref={inputRef}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={style.input}
      />
    </div>
  );
};

export default TextField;
