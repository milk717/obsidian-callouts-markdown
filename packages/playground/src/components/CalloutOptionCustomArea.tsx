import TextLabel from '@/components/ui/TextLabel.tsx';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {oneDark} from 'react-syntax-highlighter/dist/esm/styles/prism';
import TextInput from '@/components/ui/TextInput.tsx';
import React from 'react';

type CalloutOptionsCustomAreaProps = {
  options: {
    type: string;
    color: string;
    background: string;
  };
  onOptionChange: (key: string, value: string) => void;
};

const CalloutOptionCustomArea: React.FC<CalloutOptionsCustomAreaProps> = ({
  options,
  onOptionChange,
}) => {
  const {type, color, backgroundColor} = options;

  const calloutCode = `<ObsidianCallout
  options={{
    ${type}: {
      icon: '',
      color: '${color}',
      backgroundColor: '${backgroundColor}',
    },
  }}
/>`;

  return (
    <div>
      <TextLabel>Customize the callout options here</TextLabel>
      <div className="grid grid-cols-2 gap-4">
        <SyntaxHighlighter language="tsx" style={oneDark}>
          {calloutCode}
        </SyntaxHighlighter>
        <div className="flex flex-col gap-2">
          <TextInput
            labelText="callout type"
            placeholder="ex) info, error, customType"
            value={type}
            onChange={e => onOptionChange('type', e.target.value)}
          />
          <div className="col-span-full">
            <label className="block text-sm leading-2 text-gray-900">
              callout icon
            </label>
            <div className="flex gap-4 text-sm mt-0.5">temp</div>
          </div>
          <TextInput
            labelText="callout title color"
            placeholder="ex) red, #bdbdbd"
            value={color}
            onChange={e => onOptionChange('color', e.target.value)}
          />
          <TextInput
            labelText="callout background color"
            placeholder="ex) blue, #2411ff"
            value={backgroundColor}
            onChange={e => onOptionChange('backgroundColor', e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default CalloutOptionCustomArea;
