import React from "react";
import TextInput from "./TextInput";
import useValidate from "../../hooks/useValidate";

const Form = () => {
  const emailInput = useValidate("", true);
  const nameInput = useValidate("", true);
  const surnameInput = useValidate("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form action="#" className="form" onSubmit={handleSubmit}>
      <TextInput
        {...emailInput}
        label="email"
        name="name"
        placeholder="type your email"
      />
      <TextInput
        {...nameInput}
        label="name"
        name="name"
        placeholder="type your name"
      />
      <TextInput
        {...surnameInput}
        label="surname"
        name="surname"
        placeholder="type your surname"
      />
      <button className="submit" type="submit">
        submit
      </button>
    </form>
  );
};

export default Form;
