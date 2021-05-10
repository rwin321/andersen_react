import React from "react";

import style from "./Button.module.css";

export const Button = ({ type, disabled, onFocusHandler, children }) => {
  return (
    <>
      <button
        disabled={disabled}
        className={style.btn}
        onClick={onFocusHandler}
        type={type}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
