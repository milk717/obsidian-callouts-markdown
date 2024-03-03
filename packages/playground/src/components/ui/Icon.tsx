import NoteIcon from '@/assets/icons/note.svg?react';
import ClipboardIcon from '@/assets/icons/clipboard.svg?react';
import InfoIcon from '@/assets/icons/info.svg?react';
import TipIcon from '@/assets/icons/tip.svg?react';
import CheckIcon from '@/assets/icons/check.svg?react';
import QuestionIcon from '@/assets/icons/question.svg?react';
import WarningIcon from '@/assets/icons/warning.svg?react';
import ErrorIcon from '@/assets/icons/error.svg?react';
import BugIcon from '@/assets/icons/bug.svg?react';
import ExampleIcon from '@/assets/icons/example.svg?react';
import QuoteIcon from '@/assets/icons/quote.svg?react';
import React, {SVGProps} from 'react';

export const icons = {
  note: NoteIcon,
  clipboard: ClipboardIcon,
  info: InfoIcon,
  tip: TipIcon,
  subtitle: CheckIcon,
  question: QuestionIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  bug: BugIcon,
  example: ExampleIcon,
  quote: QuoteIcon,
};

export type IconName = keyof typeof icons;
type IconProps = {
  name: IconName;
} & SVGProps<SVGSVGElement>;

const Icon: React.FC<IconProps> = ({name, ...args}) => {
  const SvgIcon = icons[name];
  return <SvgIcon {...args} />;
};

export default Icon;
