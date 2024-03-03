import TextLabel from '@/components/ui/TextLabel.tsx';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {oneDark} from 'react-syntax-highlighter/dist/esm/styles/prism';
import TextInput from '@/components/ui/TextInput.tsx';
import React from 'react';
import IconSelector from '@/components/IconSelector.tsx';
import {IconName} from '@/components/ui/Icon.tsx';

type CalloutOptionsCustomAreaProps = {
  options: {
    type: string;
    iconName: IconName;
    color: string;
    backgroundColor: string;
  };
  onOptionChange: (key: string, value: string) => void;
};

const CalloutOptionCustomArea: React.FC<CalloutOptionsCustomAreaProps> = ({
  options,
  onOptionChange,
}) => {
  const {type, iconName, color, backgroundColor} = options;

  const calloutCode = `<ObsidianCallout
  options={{
    ${type}: {
      icon: ${iconName.charAt(0).toUpperCase() + iconName.slice(1)}Icon,
      color: '${color}',
      backgroundColor: '${backgroundColor}',
    },
  }}
/>`;

  return (
    <div>
      <TextLabel>Customize the callout options here</TextLabel>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 mt-2">
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
          <IconSelector
            iconName={iconName}
            onIconChange={name => onOptionChange('iconName', name)}
          />
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
