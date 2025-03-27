import React from 'react';
interface InputGroupProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputGroup: React.FC<InputGroupProps> = ({ label, name, type, placeholder, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
        {label}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputGroup;