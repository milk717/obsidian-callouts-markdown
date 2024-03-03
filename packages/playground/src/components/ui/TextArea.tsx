import {TextareaHTMLAttributes} from 'react';
import TextLabel from '@/components/ui/TextLabel.tsx';

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextArea: React.FC<TextAreaProps> = ({...args}) => {
  return (
    <div className="col-span-full">
      <TextLabel htmlFor={args.id}>Write a callout text here!</TextLabel>
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
