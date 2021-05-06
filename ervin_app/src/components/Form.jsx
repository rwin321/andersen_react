import React, { useState, useEffect } from "react";
import style from "./Form.module.css";
import TextField from "./textfiled/TextField";
import Button from "./button/Button";

const Form = () => {
  const [inputValue, setInputValue] = useState("");
  const [disabled, setDisabled] = useState(false);
  const inputRef = React.createRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`input value: ${inputValue}`);
  };

  const onHandleChange = (e) => {
    setInputValue(e.target.value);
    if (inputValue.includes("react")) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };

  const onFocusHandler = () => inputRef.current.focus();

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <TextField
        inputRef={inputRef}
        name="input"
        label="input"
        placeholder="type some text"
        type="text"
        value={inputValue}
        onChange={onHandleChange}
      />
      <div className={style.btnBlock}>
        <Button type="submit" btnName="submit" disabled={disabled} />
        <Button type="button" btnName="focus" onFocusHandler={onFocusHandler} />
      </div>
    </form>
  );
};

export default Form;
