import DefaultCallout from './DefaultCallout.tsx';
import {NORMAL_CALLOUT_TYPE} from '@package/constants.ts';
import {CalloutComponentOptions} from '@package/types/callout.ts';

const calloutComponents: CalloutComponentOptions = {
  note: DefaultCallout,

  abstract: DefaultCallout,
  summary: DefaultCallout,
  tldr: DefaultCallout,

  info: DefaultCallout,
  todo: DefaultCallout,

  tip: DefaultCallout,
  hint: DefaultCallout,
  important: DefaultCallout,

  success: DefaultCallout,
  check: DefaultCallout,
  done: DefaultCallout,

  question: DefaultCallout,
  help: DefaultCallout,
  faq: DefaultCallout,

  warning: DefaultCallout,
  caution: DefaultCallout,
  attention: DefaultCallout,

  danger: DefaultCallout,
  error: DefaultCallout,

  bug: DefaultCallout,

  example: DefaultCallout,

  quote: DefaultCallout,
  cite: DefaultCallout,
  [NORMAL_CALLOUT_TYPE]: DefaultCallout,
} as const;

export default calloutComponents;
