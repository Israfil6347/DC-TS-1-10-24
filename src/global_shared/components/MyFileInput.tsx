import { ChangeEvent, useState } from 'react';
interface MyFileInputProps {
  label: string;
  name: string;
  value: string | undefined;
  error: string | undefined;
  required?: boolean;
  disabled?: boolean;
  heightClass?: string | undefined;
  onChangeHandler: (name: string, value: string) => void;
}

const MyFileInput: React.FC<MyFileInputProps> = ({
  label,
  name,
  value,
  error,
  required,
  disabled,
  heightClass,
  onChangeHandler,
}) => {
  const [url, setUrl] = useState('');
  const fileInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files !== null) {
      if (event.target.files[0].size > 1048576) {
        alert('Your image size is too large');
        return;
      } else if (event.target.files && event.target.files[0]) {
        setUrl(event.target.value);
        let reader = new FileReader();
        reader.onload = (e) => {
          if (e.target !== null) {
            const text = e.target.result;
            if (text !== null) {
              const myArray = text.toString().split(',');
              onChangeHandler(event.target.name, myArray[1]);
            }
          }
        };
        reader.readAsDataURL(event.target.files[0]);
      }
    }
  };
  return (
    <div className="text-onBorder flex w-full items-center justify-center">
      <label className="group relative flex h-32 w-full flex-col border-4 border-dashed bg-surface hover:border-primary hover:bg-gray-100">
        <label className="text-light absolute -top-3 left-2 mb-1 bg-surface px-1 text-xs uppercase text-gray-500 md:text-sm">
          {label}
          <span className="font-medium text-error">{required ? ' *' : ''}</span>
        </label>
        <div className="flex flex-col items-center justify-center pt-7">
          <i className="fa-solid fa-file-pdf"></i>
          <p className="pt-1 text-sm lowercase tracking-wider text-gray-400 group-hover:text-primary">
            {url != null ? url : 'Select Resume'}
          </p>
        </div>

        <input
          hidden
          className="h-full w-full"
          name={name}
          disabled={disabled}
          type="file"
          required={required}
          accept=".pdf"
          onChange={(event) => {
            fileInputHandler(event);
          }}
        />
      </label>
    </div>
  );
};

export default MyFileInput;
