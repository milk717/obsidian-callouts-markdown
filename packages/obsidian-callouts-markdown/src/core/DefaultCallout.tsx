import {CalloutComponentProps} from '@/types/callout.ts';
import calloutOptions from '@/core/calloutOptions.ts';
import '@/assets/styles/callouts.css';
import NoteIcon from '@/assets/icons/note.svg?react';

const DefaultCallout: React.FC<CalloutComponentProps> = ({
  type,
  title,
  options,
  children,
}) => {
  const {icon, color, backgroundColor} = {...calloutOptions, ...options}[type];

  const Icon = typeof icon === 'function' ? icon : NoteIcon;

  return (
    <div className="callout-box" style={{backgroundColor: backgroundColor}}>
      <div className="callout-title" style={{color: color}}>
        <Icon width={20} />
        <p>{title ?? type.charAt(0).toUpperCase() + type.slice(1)}</p>
      </div>
      <div className="callout-body">{children}</div>
    </div>
  );
};

export default DefaultCallout;
