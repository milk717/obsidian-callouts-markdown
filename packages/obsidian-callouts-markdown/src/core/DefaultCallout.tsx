import {CalloutComponentProps} from '@/types/callout.ts';
import calloutOptions from '@/core/calloutOptions.ts';
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
    <div style={{backgroundColor: backgroundColor, padding: '1rem 1rem 0.625rem 1.5rem', borderRadius: '0.5rem', margin: '0.5rem 0'}}>
      <div style={{color: color, display: 'flex', gap: '0.25rem', fontWeight: 600 }}>
        <Icon width={20} />
        <p>{title ?? type.charAt(0).toUpperCase() + type.slice(1)}</p>
      </div>
      <div style={{padding: '1rem 0'}}>{children}</div>
    </div>
  );
};

export default DefaultCallout;
