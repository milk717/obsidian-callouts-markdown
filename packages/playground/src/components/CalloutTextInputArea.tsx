import TextArea from '@/components/ui/TextArea.tsx';
import React from 'react';
import TextLabel from '@/components/ui/TextLabel.tsx';
import sampleMdText from '@/assets/markdown/sampleMdText.ts';

type CalloutTextInputAreaProps = {
  text: string;
  onChange: (text: string) => void;
};
const CalloutTextInputArea: React.FC<CalloutTextInputAreaProps> = ({
  text,
  onChange,
}) => {
  return (
    <div>
      <div className="mb-4 flex flex-col gap-4">
        <TextLabel>Try It Out with a Click</TextLabel>
        <div className="flex gap-2">
          {sampleMdText.map(({id, name, md}) => (
            <span
              key={id}
              className="inline-flex items-center rounded-md bg-indigo-200 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 cursor-pointer"
              onClick={() => onChange(md)}>
              {name}
            </span>
          ))}
        </div>
      </div>
      <TextArea
        id="callout-textarea"
        placeholder={
          `> [!info] callout title` + '\n' + `> this is callout body`
        }
        rows={10}
        labelText="Write a callout text here!"
        value={text}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
};

export default CalloutTextInputArea;
