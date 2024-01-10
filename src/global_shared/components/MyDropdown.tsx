import { IMyDropdownOption } from 'global_shared/model/data/IMyDropdownOption';
import { useState } from 'react';

interface MyDropdownProps {
  id?: string;
  name: string;
  label: string;
  value?: string | number | readonly string[] | undefined;
  defaultValue?: string | number;
  error?: string;
  required?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  isView?: boolean;
  leftIcon: JSX.Element;
  dropDownData?: IMyDropdownOption[] | null;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
}

const MyDropdown: React.FC<MyDropdownProps> = ({
  id,
  name,
  label,
  value,
  defaultValue,
  error,
  required,
  disabled,
  fullWidth = true,
  isView,
  leftIcon,
  dropDownData,
  onChange,
}) => {
  const [selected, setSelected] = useState<any>(value);

  return (
    <div className={`${fullWidth ? 'block w-full' : 'inline'} text-onSurface`}>
      <div className="relative">
        <select
          name={name}
          disabled={isView ? true : disabled}
          value={selected ? selected : value}
          className={`peer ${
            isView ? 'border-none' : ' border-onBorder'
          } rounded border-onBorder bg-surface
          ${
            fullWidth ? 'w-full' : 'w-64'
          } transition-colors focus:border-primary 
          ${
            leftIcon && 'pl-10'
          } disabled:bg-onDisabled disabled:font-semibold disabled:text-gray-500 ${
            error
              ? 'border-error focus:border-error focus:ring-1 focus:ring-error'
              : 'focus:border-primary'
          }`}
          onChange={(event) => {
            onChange(event);
            setSelected(event.target.value);
          }}
        >
          <option key={-1} value={''}>
            None
          </option>
          {dropDownData?.map((item, index) => (
            <option key={index} value={item.value!}>
              {item.label}
            </option>
          ))}
        </select>

        <label
          htmlFor={id}
          className={`absolute left-0  mx-3 cursor-text rounded  bg-surface peer-focus:ml-3
          ${
            (selected || defaultValue) && leftIcon
              ? leftIcon
                ? '-top-2 ml-3 text-xs'
                : ''
              : selected || defaultValue
              ? '-top-2 ml-3 text-xs'
              : leftIcon
              ? 'top-2.5 ml-10'
              : 'top-2.5 ml-3'
          } 
      px-1 transition-all duration-200 peer-focus:-top-2 peer-focus:bg-surface
      ${(disabled || isView) && 'bg-onDisabled text-primary'}
      peer-focus:text-xs peer-focus:text-primary`}
        >
          {label}
          <span className="text-xs text-error">{required ? ' *' : ''}</span>
        </label>

        {leftIcon && (
          <span className="absolute left-0 top-0 flex h-full w-12 flex-col items-center justify-center">
            {leftIcon}
          </span>
        )}
      </div>
      <div className="text-error">
        {error ? <span className="text-xs text-error">{error}</span> : null}
      </div>
    </div>
  );
};

export default MyDropdown;
