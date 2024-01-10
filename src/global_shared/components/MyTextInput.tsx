import React from 'react';
interface MyTextInputProps {
  id?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  fullWidth?: boolean;
  label: string;
  leftIcon: JSX.Element;
  name: string;
  placeholder?: string;
  value?: string | number;
  defaultValue?: string | number;
  error?: string;
  inputType: React.HTMLInputTypeAttribute;
  required?: boolean;
  disabled?: boolean;
  isView?: boolean;
  autoFocus?: boolean;
  onChangeHandler?: React.ChangeEventHandler<HTMLInputElement>;
}

const MyTextInput: React.FC<MyTextInputProps> = ({
  id,
  inputRef,
  fullWidth = true,
  label,
  placeholder,
  leftIcon,
  name,
  value,
  defaultValue,
  inputType,
  required,
  isView,
  error,
  disabled,
  autoFocus,
  onChangeHandler,
}) => {
  return (
    <div
      className={`${
        fullWidth ? 'block w-full' : 'inline-block'
      } text-onSurface`}
    >
      <div className="relative">
        <input
          name={name}
          id={id}
          size={4}
          placeholder={placeholder}
          type={inputType}
          ref={inputRef}
          disabled={isView ? true : disabled}
          value={value}
          defaultValue={defaultValue}
          className={`peer form-input rounded border ${
            isView ? 'border-none' : 'border-onBorder'
          } bg-surface ${
            leftIcon && 'pl-10'
          } transition-colors disabled:bg-onDisabled 
          ${
            fullWidth ? 'w-full' : 'w-64'
          } disabled:font-semibold disabled:text-gray-500 ${
            error
              ? 'border-error focus:border-error focus:ring-1 focus:ring-error'
              : 'focus:border-primary'
          }`}
          autoFocus={autoFocus}
          onChange={onChangeHandler}
        />

        <label
          htmlFor={id}
          className={`absolute left-0 mx-3 cursor-text rounded bg-surface
          px-1 transition-all duration-200
          peer-focus:-top-2 peer-focus:ml-3 peer-focus:text-xs
          ${
            (value || defaultValue) && leftIcon
              ? leftIcon
                ? '-top-2 ml-3 text-xs'
                : ''
              : value || defaultValue
              ? '-top-2 ml-3 text-xs'
              : leftIcon
              ? 'top-2.5 ml-10'
              : 'top-2.5 ml-3'
          } 
          ${
            error
              ? 'text-error peer-focus:text-error'
              : 'text-primary peer-focus:text-primary'
          }`}
        >
          {label}
          <span className="font-medium text-error">{required ? ' *' : ''}</span>
        </label>

        {leftIcon && (
          <div className="absolute left-0 top-0 flex h-full w-12 flex-col items-center justify-center">
            {leftIcon}
          </div>
        )}
      </div>

      {error ? <span className="text-xs text-error">{error}</span> : null}
    </div>
  );
};

export default MyTextInput;
