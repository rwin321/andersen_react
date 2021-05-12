import React from "react";

const TextInput = ({
  name,
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
}) => {
  return (
    <div className="fieled-group">
      <label className="label" htmlFor={name}>
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        type="text"
        name={name}
        placeholder={placeholder}
        className="input"
      />
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default TextInput;
