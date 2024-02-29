import {CalloutProps} from '../types/callout.ts';
import calloutStyleOptions from './calloutStyleOptions.ts';
import './callouts.css';

const DefaultCallout: React.FC<CalloutProps> = ({type, title, children}) => {
  const {icon: Icon, color, backgroundColor} = calloutStyleOptions[type];

  return (
    <div
      className="pl-6 pr-4 pt-4 pb-2.5 rounded-md"
      style={{backgroundColor: backgroundColor}}>
      <div className="flex gap-2 font-semibold" style={{color: color}}>
        <Icon width={20} />
        <p>{title ?? type.charAt(0).toUpperCase() + type.slice(1)}</p>
      </div>
      <div className="callout-body">{children}</div>
    </div>
  );
};

export default DefaultCallout;
