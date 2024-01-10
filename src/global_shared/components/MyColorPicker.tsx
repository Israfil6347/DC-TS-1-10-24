import * as React from 'react';

interface IMyColorPickerProps {
  id?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  widthClass?: string;
  label: string;
  leftIcon?: JSX.Element;
  name: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  error?: string;
  inputType: React.HTMLInputTypeAttribute;
  required?: boolean;
  disabled?: boolean;
  isView?: boolean;
  autoFocus?: boolean;
  onChangeHandler?: React.ChangeEventHandler<HTMLInputElement>;
}

const MyColorPicker: React.FunctionComponent<IMyColorPickerProps> = ({
  id,
  inputRef,
  widthClass = 'w-full',
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
    <div className={`${widthClass} inline-block text-onSurface`}>
      <div className="relative">
        <input
          name={name}
          id={id}
          placeholder={placeholder}
          type={inputType}
          ref={inputRef}
          disabled={isView ? true : disabled}
          value={value}
          defaultValue={defaultValue}
          className={`peer form-input h-10 rounded border p-0 ${
            isView ? 'border-none' : ' border-onBorder'
          } bg-surface ${
            leftIcon && 'pl-10'
          } disabled:bg-onDisabled transition-colors focus:border-primary 
          ${widthClass} disabled:font-semibold disabled:text-primary ${
            error ? 'border-error' : ''
          }`}
          autoFocus={autoFocus}
          onChange={onChangeHandler}
        />

        <label
          htmlFor={id}
          className={`absolute -top-2.5 left-0 mx-3 cursor-text rounded bg-surface
          ${error ? 'text-error' : 'text-primary'}
          ml-3 px-1 text-xs transition-all duration-200`}
        >
          {label}
          <span className="font-medium text-error">{required ? ' *' : ''}</span>
        </label>

        <div className="absolute left-0 top-0 flex h-full w-12 flex-col items-center justify-center">
          {leftIcon}
        </div>
      </div>

      {error ? <span className="text-xs text-error">{error}</span> : null}
    </div>
  );
};

export default MyColorPicker;
