interface CheckBoxInputProps {
  name: string;
  label: string;
  value: string;
  error: string;
  isChecked: boolean;
  disabled: boolean;
  onChangeHandler: () => void;
}

const CheckBoxInput: React.FC<CheckBoxInputProps> = ({
  name,
  label,
  value,
  error,
  isChecked,
  disabled,
  onChangeHandler,
}) => {
  return (
    <div className="rounded text-onSurface">
      <input
        id={name}
        name={name}
        type="checkbox"
        checked={isChecked}
        disabled={disabled}
        className="h-4 w-4 appearance-none rounded hover:scale-110 disabled:bg-gray-200 disabled:text-onSurface "
        onClick={onChangeHandler}
      />
      <label htmlFor="" className="py-3 px-2 text-sm font-medium">
        {label}
      </label>
    </div>
  );
};

export default CheckBoxInput;
