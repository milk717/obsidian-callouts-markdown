import {CalloutComponentProps} from '../types/callout.ts';
import '../assets/styles/callouts.css';
import CheckIcon from '../assets/icons/check.svg?react';

const TextCallout: React.FC<CalloutComponentProps> = ({
  type,
  title,
  children,
}) => {
  return (
    <div className="callout-box" style={{backgroundColor: 'lightgray'}}>
      <div className="callout-title" style={{color: 'black'}}>
        <CheckIcon width={20} />
        <p>{title ?? type.charAt(0).toUpperCase() + type.slice(1)}</p>
      </div>
      <div className="callout-body">{children}</div>
    </div>
  );
};

export default TextCallout;
