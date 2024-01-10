import React, { ChangeEvent } from 'react';
interface MyImageInputProps {
  id?: string;
  label: string;
  name: string;
  heightClass?: string;
  widthClass?: string;
  value?: string;
  error?: string;
  minSize?: number;
  maxSize?: number;
  required?: boolean;
  disabled?: boolean;
  onChangeHandler?(name: string, value: string): void;
}

const MyImageInput: React.FC<MyImageInputProps> = ({
  id,
  label,
  name,
  value,
  error,
  required,
  minSize = 10048,
  maxSize = 1048576,
  disabled,
  onChangeHandler,
  heightClass = 'h-32',
  widthClass = 'w-full',
}) => {
  const pictureInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files === null) {
      return;
    }

    if (event.target.files[0].size > maxSize) {
      alert(
        `Your image size is (${
          event.target.files[0].size / 1048576
        } MB) too large. Maximum allowed size is ${maxSize / 1048576} MB`
      );
      return;
    } else if (event.target.files[0].size < minSize) {
      alert(
        `Your image size is (${
          event.target.files[0].size / 1048576
        } MB) too small. Minimum allowed size is ${minSize / 1048576} MB`
      );
      return;
    } else {
      let reader = new FileReader();
      reader.onload = (e) => {
        if (e.target !== null) {
          const text = e.target.result;
          if (text !== null) {
            const myArray = text.toString().split(',');
            if (onChangeHandler) {
              onChangeHandler(event.target.name, myArray[1]);
            }
          }
        }
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  return (
    <div className={`w-full`}>
      {label ? (
        <label className="inline-block text-onSurface">{label}</label>
      ) : null}

      <div
        className={`${heightClass} flex items-center justify-center ${widthClass}`}
      >
        <label
          className={`flex h-full w-full flex-col items-center justify-center border-4 border-dashed ${
            error ? 'border-error' : 'border-gray-400'
          } bg-surface hover:border-primary hover:bg-gray-100`}
        >
          <input
            type="file"
            className="h-full w-full  opacity-0"
            accept="image/*"
            hidden={true}
            name={name}
            disabled={disabled}
            onChange={(event) => {
              pictureInputHandler(event);
            }}
          />

          <div className="relative flex h-full w-full flex-col items-center justify-center">
            {value ? (
              <>
                {disabled ? (
                  ''
                ) : (
                  <span className="absolute top-1 right-1 h-6 w-6">
                    <i className="fa-solid fa-image fa-xl inline-block transition-all duration-300 hover:scale-125 "></i>
                  </span>
                )}
                <img
                  src={`data:image/png;base64, ${value}`}
                  className="h-full"
                  alt=""
                />
              </>
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center">
                <i className="fa-solid fa-image fa-2xl"></i>
                <p className="pt-4 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                  Select a photo
                  {required ? (
                    <span className="font-bold text-error"> *</span>
                  ) : (
                    ''
                  )}
                </p>
              </div>
            )}
          </div>
        </label>
      </div>
    </div>
  );
};

export default MyImageInput;
