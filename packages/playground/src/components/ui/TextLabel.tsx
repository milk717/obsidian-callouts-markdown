import React, {HTMLProps} from 'react';

type TextLabelProps = HTMLProps<HTMLLabelElement>;
const TextLabel: React.FC<TextLabelProps> = ({...args}) => {
  return (
    <label {...args} className="block font-medium leading-6 text-gray-900">
      {args.children}
    </label>
  );
};

export default TextLabel;
