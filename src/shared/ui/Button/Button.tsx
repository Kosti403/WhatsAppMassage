import React from "react";
import s from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean; // Добавляем свойство disabled
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = "",
  disabled = false, // По умолчанию кнопка не отключена
}) => {
  return (
    <button
      className={`${s.button} ${className}`}
      onClick={onClick}
      disabled={disabled} // Применяем свойство disabled
    >
      {children}
    </button>
  );
};
