import TextArea from '@/components/ui/TextArea.tsx';
import React, {ChangeEventHandler} from 'react';

type CalloutTextInputAreaProps = {
  text: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
};
const CalloutTextInputArea: React.FC<CalloutTextInputAreaProps> = ({
  text,
  onChange,
}) => {
  return (
    <div>
      <TextArea
        id="callout-textarea"
        placeholder={
          `> [!info] callout title` + '\n' + `> this is callout body`
        }
        rows={10}
        labelText="Write a callout text here!"
        value={text}
        onChange={onChange}
      />
    </div>
  );
};

export default CalloutTextInputArea;
