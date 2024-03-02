import {TextareaHTMLAttributes} from 'react';

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextArea: React.FC<TextAreaProps> = ({...args}) => {
  return (
    <div className="col-span-full">
      <label
        htmlFor={args.id}
        className="block font-medium leading-6 text-gray-900">
        Write a callout text here!
      </label>
      <div className="mt-2">
        <textarea
          {...args}
          className="block w-full rounded-md border-0 px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};

export default TextArea;
