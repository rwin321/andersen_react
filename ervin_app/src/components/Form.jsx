import React, { useState, useEffect } from "react";
import style from "./Form.module.css";
import TextField from "./textfiled/TextField";
import Button from "./button/Button";

const Form = ({ counter, setCounter }) => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = React.createRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`input value: ${inputValue}`);
  };

  const onHandleChange = (e) => {
    setInputValue(e.target.value);
  };

  const onFocusHandler = () => {
    console.log(
      "focus handler usage -> rerender whole APP, because it changes the APP local state"
    );
    inputRef.current.focus();
    setCounter({ counter: counter + 1 });
    console.log(counter);
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      {console.log("FORM rendered")}

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
        <Button type="submit" disabled={inputValue.includes("react")}>
          submit
        </Button>
        <Button type="button" onFocusHandler={onFocusHandler}>
          focus
        </Button>
      </div>
    </form>
  );
};

export default Form;
