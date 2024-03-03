import {IconName, icons} from '@/components/ui/Icon.tsx';

export const isIconName = (name: string): name is IconName => {
  return Object.keys(icons).includes(name);
};
