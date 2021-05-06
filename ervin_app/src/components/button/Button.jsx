import React from "react";

import style from "./Button.module.css";

export const Button = ({ type, btnName, disabled, onFocusHandler }) => {
  return (
    <>
      <button
        disabled={disabled}
        className={style.btn}
        onClick={onFocusHandler}
        type={type}
      >
        {btnName}
      </button>
    </>
  );
};

export default Button;
