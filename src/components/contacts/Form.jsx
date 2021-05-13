import React, { useState } from "react";
import TextInput from "./TextInput";
import useValidate from "../../hooks/useValidate";

const Form = () => {
  console.log("FORM was rendered");
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    surname: "",
  });

  const emailInput = useValidate("", true);
  const nameInput = useValidate("", true);
  const surnameInput = useValidate("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(formData, null, 2));
    setFormData({
      email: "",
      name: "",
      surname: "",
    });
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <form action="#" className="form" onSubmit={handleSubmit}>
        <TextInput
          {...emailInput}
          label="email"
          name="email"
          placeholder="type your email"
          onChange={handleOnChange}
          value={formData.email}
        />
        <TextInput
          {...nameInput}
          label="name"
          name="name"
          placeholder="type your name"
          onChange={handleOnChange}
          value={formData.name}
        />
        <TextInput
          {...surnameInput}
          label="surname"
          name="surname"
          placeholder="type your surname"
          onChange={handleOnChange}
          value={formData.surname}
        />
        <button className="submit" type="submit">
          submit
        </button>
      </form>
      {formData.email !== "" && formData.name !== "" && (
        <ul>
          <li>{JSON.stringify(formData.email)}</li>
          <li>{JSON.stringify(formData.name)}</li>
          <li>{formData.surname && JSON.stringify(formData.surname)}</li>
        </ul>
      )}
    </>
  );
};

export default React.memo(Form);
