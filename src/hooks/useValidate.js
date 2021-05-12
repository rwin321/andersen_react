import React, { useState } from "react";

const useValidate = (initial, required) => {
  const [value, setValue] = useState(initial);
  const [error, setError] = useState(null);

  return {
    value,
    error,
    onChange: (e) => setValue(e.target.value),
    onBlur: (e) => {
      if (!e.target.value && required) {
        setError("Required field!");
        e.target.style.transition = ".5s";
        e.target.style.border = "1px solid red";
      } else {
        setError(null);
        e.target.style.border = "none";
      }
    },
  };
};

export default useValidate;
