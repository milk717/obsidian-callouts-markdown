import React, {InputHTMLAttributes} from 'react';

type TextInputProps = {
  labelText?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const TextInput: React.FC<TextInputProps> = ({labelText, ...args}) => {
  return (
    <div className="col-span-full">
      <label className="block text-sm leading-2 text-gray-900">
        {labelText}
      </label>
      <div className="mt-0.5">
        <input
          {...args}
          className="block w-full rounded-md border-0 px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};

export default TextInput;
