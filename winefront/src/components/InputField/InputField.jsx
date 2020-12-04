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
  options,
}) {
  switch (type) {
    case "dropdown":
      return (
        <div>
          <S.Label>{labelText}</S.Label>
          <S.Select onChange={handleChange} defaultValue required>
            <option disabled value>
              {options[0].name}
            </option>

            {options &&
              options.slice(1).map((option) => (
                <option key={option.id} value={option.value}>
                  {option.name}
                </option>
              ))}
          </S.Select>
        </div>
      );
    default:
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
}

export default InputField;
