import Icon, {IconName, icons} from '@/components/ui/Icon.tsx';
import {useState} from 'react';
import {isIconName} from '@/types/guards.ts';

type IconSelectorProps = {
  iconName?: IconName;
  onIconChange: (name: string) => void;
};

const IconSelector: React.FC<IconSelectorProps> = ({
  iconName = 'info',
  onIconChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handlePopoverToggle = () => setIsOpen(prev => !prev);

  return (
    <div className="col-span-full">
      <label className="block text-sm leading-2 text-gray-900">
        callout icon
      </label>
      <div className="flex gap-4 text-sm mt-0.5">
        <div
          onClick={handlePopoverToggle}
          className="relative flex gap-x-2 w-full rounded-md border-0 px-3 py-2 text-gray-900 bg-white cursor-pointer shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          <Icon name={isIconName(iconName) ? iconName : 'info'} width={16} />
          <p>{iconName}</p>
          {isOpen && (
            <div className="absolute left-1/2 top-full -translate-x-1/2 translate-y-2 bg-white w-full min-h-20 rounded-md py-3 px-4 ring-1 ring-inset ring-gray-300">
              <div className="flex flex-wrap gap-2">
                {Object.entries(icons).map(([name, SvgIcon]) => (
                  <div
                    key={name}
                    className="flex flex-col flex-1 items-center rounded-md p-2 bg-violet-50 hover:bg-violet-100"
                    onClick={() => onIconChange(name)}>
                    <SvgIcon />
                    <p className="text-xs text-gray-700">{name}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IconSelector;
