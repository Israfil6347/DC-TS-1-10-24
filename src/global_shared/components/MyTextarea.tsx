import React from "react";

interface MyTextareaProps {
  id?: string;
  label: string;
  name: string;
  value: string | undefined;
  error: string | undefined;
  required?: boolean;
  disabled?: boolean;
  rows?: number;
  cols?: number;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}

const MyTextarea: React.FC<MyTextareaProps> = ({
  id,
  label,
  name,
  rows,
  cols,
  value,
  error,
  required,
  onChange,
  disabled,
}) => {
  return (
    <>
      <div className="relative  w-full text-onSurface">
        <textarea
          id={id}
          name={name}
          rows={rows}
          cols={cols}
          disabled={disabled}
          value={value}
          className={`peer w-full rounded bg-surface transition-colors focus:border-primary disabled:bg-onDisabled disabled:font-semibold disabled:text-gray-500 ${
            error ? "ring-error" : "ring-success"
          } `}
          onChange={onChange}
        ></textarea>

        <label
          htmlFor={id}
          className={`text absolute left-0 mx-3 cursor-text rounded bg-surface  px-1 transition-all duration-200 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-primary ${
            value
              ? value?.length > 0
                ? " -top-2 text-xs text-primary"
                : "top-2"
              : "top-2"
          }`}
        >
          {label}
          <span className="font-medium text-error">{required ? " *" : ""}</span>
        </label>

        {error ? <span className="text-xs text-error">{error}</span> : null}
      </div>
    </>
  );
};

export default MyTextarea;
