import React, { useState } from "react";

interface MyPasswordInputProps {
  id?: string;
  fullWidth?: boolean;
  label?: string;
  name: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  autoFocus?: boolean;
  leftIcon: JSX.Element;
  onChangeHandler?: React.ChangeEventHandler<HTMLInputElement>;
}

const MyPasswordInput = React.forwardRef<
  HTMLInputElement,
  MyPasswordInputProps
>(
  (
    {
      id,
      fullWidth = true,
      label,
      name,
      value,
      defaultValue,
      placeholder,
      error,
      required,
      disabled,
      autoFocus,
      leftIcon,
      onChangeHandler,
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div
        className={`${
          fullWidth ? "block w-full" : "inline-block"
        } text-onSurface`}
      >
        <div className="relative">
          <input
            id={id}
            ref={ref}
            name={name}
            placeholder={placeholder}
            type={showPassword ? "text" : "password"}
            autoFocus={autoFocus}
            value={value}
            defaultValue={defaultValue}
            disabled={disabled}
            className={`peer ${leftIcon && "pl-10"} ${
              fullWidth ? "w-full" : "w-64"
            } rounded border-onBorder bg-surface transition-colors focus:border-primary disabled:bg-onDisabled disabled:font-semibold disabled:text-gray-500 ${
              error ? "border-error" : ""
            }`}
            onChange={onChangeHandler}
          />

          <label
            htmlFor={id}
            className={`absolute left-0 mx-3 duration-200 peer-focus:-top-2 ${
              error ? "text-error" : "text-primary"
            } cursor-text rounded bg-surface px-1 text-sm transition-all
            ${
              (value || defaultValue) && leftIcon
                ? leftIcon
                  ? "-top-2 ml-3 text-xs"
                  : ""
                : value || defaultValue
                ? "-top-2 ml-3 text-xs"
                : leftIcon
                ? "top-2.5 ml-10"
                : "top-2.5 ml-3"
            } 
            peer-focus:ml-3 peer-focus:text-xs peer-focus:text-primary`}
          >
            {label}
            <span className="font-medium text-error">
              {required ? " *" : ""}
            </span>
          </label>
          <div className="group absolute left-0 top-0 flex h-full w-12 flex-col items-center justify-center">
            {leftIcon}
          </div>
          <div
            className="group absolute right-0 top-0 flex h-full w-12 flex-col items-center justify-center"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6 group-hover:cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6 group-hover:cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            )}
          </div>
        </div>

        {error ? <span className={`text-xs text-error`}>{error}</span> : ""}
      </div>
    );
  }
);

export default MyPasswordInput;
