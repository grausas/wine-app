import React from "react";

function InputField({
  type,
  labelText,
  placeholder,
  required,
  minLength,
  maxLength,
  handleChange,
}) {
  return (
    <div className="field">
      <label>{labelText}</label>
      <div>
        <input
          type={type}
          placeholder={placeholder}
          required={required}
          minLength={minLength}
          maxLength={maxLength}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default InputField;
