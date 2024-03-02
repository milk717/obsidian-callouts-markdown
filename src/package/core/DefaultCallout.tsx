import {CalloutComponentProps} from '@/package/types/callout.ts';
import calloutOptions from '@/package/core/calloutOptions.ts';
// import '@/package/assets/styles/callouts.css';

const DefaultCallout: React.FC<CalloutComponentProps> = ({
  type,
  title,
  options,
  children,
}) => {
  const {
    icon: Icon,
    color,
    backgroundColor,
  } = {...calloutOptions, ...options}[type];

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
