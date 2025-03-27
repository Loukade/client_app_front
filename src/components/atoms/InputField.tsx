import React from 'react';

interface InputFieldProps {
  type: string;
  value: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ type, value, placeholder, onChange }) => {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className="appearance-none relative block w-full px-4 py-2 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm bg-blue-100 bg-opacity-50 rounded"
    />
  );
};

export default InputField;
