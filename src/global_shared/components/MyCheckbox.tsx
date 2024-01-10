import React from 'react';

interface MyCheckBoxProps {
  label: string;
  name: string;
  value?: boolean;
  error?: string | undefined;
  disabled?: boolean;
  onChangeHandler?: React.ChangeEventHandler<HTMLInputElement>;
  onClick?: any;
  styleClass?: string;
}

const MyCheckBox: React.FC<MyCheckBoxProps> = ({
  label,
  name,
  value,
  error,
  disabled,
  onChangeHandler,
  onClick,
  styleClass,
}) => {
  return (
    <>
      <div className="flex  items-center rounded text-onSurface">
        <input
          id={name}
          name={name}
          type="checkbox"
          disabled={disabled}
          defaultChecked={value}
          checked={value}
          className="h-4 w-4 appearance-none rounded"
          onChange={onChangeHandler}
        />
        <label
          htmlFor=""
          className={`py-2.5 px-2 text-sm font-medium ${styleClass}`}
          onClick={onClick}
        >
          {label}
        </label>
      </div>
    </>
  );
};

export default MyCheckBox;
