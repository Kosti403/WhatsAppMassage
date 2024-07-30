import React from "react";
import s from "./Input.module.scss";

interface InputProps {
  name?: string;
  placeholder: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  maxLength?: number;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({
  name,
  placeholder,
  type = "text",
  onChange,
  value,
  maxLength,
  onKeyDown,
}) => {
  return (
    <input
      className={s.input}
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      value={value}
      maxLength={maxLength}
      onKeyDown={onKeyDown}
    />
  );
};
