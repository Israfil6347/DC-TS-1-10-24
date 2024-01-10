import * as React from "react";

interface IMySearchInputProps {
  id?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  fullWidth?: boolean;
  label: string;
  leftIcon: JSX.Element;
  name: string;
  value?: string;
  defaultValue?: string | number | readonly string[] | undefined;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  searchButton?: boolean;
  isView?: boolean;
  autoFocus?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onResetClick?: React.MouseEventHandler<HTMLButtonElement>;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}

const MySearchInput: React.FunctionComponent<IMySearchInputProps> = ({
  id,
  inputRef,
  fullWidth = true,
  label,
  leftIcon,
  name,
  value,
  defaultValue,
  required,
  isView,
  error,
  disabled,
  autoFocus,
  onChange,
  onSubmit,
}) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(event);
      }}
    >
      <div
        className={`${
          fullWidth ? "block w-full" : "inline-block"
        } relative text-onSurface`}
      >
        <input
          name={name}
          id={id}
          type="text"
          autoComplete="off"
          ref={inputRef}
          disabled={isView ? true : disabled}
          value={value}
          defaultValue={defaultValue}
          className={`peer ${leftIcon && "pl-10"} ${
            fullWidth ? "w-full" : "w-64"
          } rounded border-onBorder bg-surface transition-colors focus:border-primary disabled:bg-onDisabled disabled:font-semibold disabled:text-primary ${
            error ? "border-error" : ""
          }`}
          autoFocus={autoFocus}
          onChange={onChange}
        />

        <label
          htmlFor={id}
          className={`absolute left-0 mx-3 duration-200 peer-focus:-top-2 ${
            error ? "text-error" : "text-primary"
          } cursor-text rounded bg-surface px-1 text-sm transition-all
            ${
              (defaultValue || value) && leftIcon
                ? "-top-2 ml-3 text-xs"
                : leftIcon
                ? "top-2.5 ml-10"
                : "top-2.5 ml-3"
            } 
            peer-focus:ml-3 peer-focus:text-xs peer-focus:text-primary`}
        >
          {label}
          <span className="font-medium text-error">{required ? " *" : ""}</span>
        </label>

        <div className="absolute left-0 top-0 flex h-full w-12 flex-col items-center justify-center">
          {leftIcon}
        </div>

        {/* {value && (
          <button
            type="button"
            onClick={onResetClick}
            className="absolute top-0 left-0 flex h-full w-10 flex-col items-center justify-center rounded-l bg-primary text-onPrimary transition-all duration-300 hover:scale-105 hover:ring-1 hover:ring-pink-500"
          >
            <i className="fa-solid fa-xmark text-3xl"></i>
          </button>
        )} */}
        <button
          type="submit"
          className="absolute top-0 right-0 h-full w-10 rounded-r bg-primary text-onPrimary transition-all duration-300 hover:scale-105 hover:ring-1 hover:ring-pink-500"
        >
          <i className="fa-brands fa-golang fa-lg"></i>
        </button>
      </div>

      {error ? <div className="text-xs text-error">{error}</div> : null}
    </form>
  );
};

export default MySearchInput;
