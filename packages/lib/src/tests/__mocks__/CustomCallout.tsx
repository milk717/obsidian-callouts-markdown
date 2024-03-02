import {CustomCalloutComponentProps} from '@/types/callout.ts';

const CustomCallout: React.FC<CustomCalloutComponentProps> = ({
  type,
  children,
}) => {
  return (
    <div className="bg-teal-100 p-4 rounded-md">
      <div className="flex gap-2 text-teal-700 font-semibold mb-4">
        <p>[{type}] title</p>
      </div>
      {children}
    </div>
  );
};

export default CustomCallout;
