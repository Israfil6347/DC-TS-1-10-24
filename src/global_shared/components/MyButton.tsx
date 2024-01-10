import React, { ReactNode } from 'react';

interface MyButtonProps {
  label: string;
  name: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  disabled?: boolean;
  styleClass?: string;
  children?: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const MyButton: React.FC<MyButtonProps> = ({
  type,
  label,
  styleClass,
  onClick,
  disabled,
  children,
}) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className={
        styleClass +
        ' disabled:bg-onDisabled disabled:font-semibold disabled:text-primary'
      }
      onClick={onClick}
    >
      {children}
      {label}
    </button>
  );
};

export default MyButton;
