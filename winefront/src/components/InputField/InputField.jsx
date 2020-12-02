import React from "react";
import * as S from "./InputField.style";

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
    <div>
      <S.Label>{labelText}</S.Label>
      <div>
        <S.Input
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
