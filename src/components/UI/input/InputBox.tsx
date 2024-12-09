import React from "react";
import { twMerge } from "tailwind-merge";

interface InputBoxProps {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  maxLength?: number;
  minLength?: number;
  required?: boolean;
  errorMessage?: string;
  className?: string;
}

const InputBox: React.FC<InputBoxProps> = ({
  label,
  name,
  type,
  value,
  onChange,
  placeholder = "",
  maxLength,
  minLength,
  required = false,
  errorMessage,
  className,
}) => {
  return (
    <div className={twMerge([className, "mb-4"])}>
      <label htmlFor={name} className="block mb-2 font-semibold">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        minLength={minLength}
        required={required}
        className="w-full px-3 py-2 border border-gray-300 rounded-md text-base focus:outline-none focus:border-gray-500"
      />
      {errorMessage && (
        <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
      )}
    </div>
  );
};

export default InputBox;
