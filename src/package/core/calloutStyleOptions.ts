import NoteIcon from '../assets/icons/note.svg?react';
import ClipboardIcon from '../assets/icons/clipboard.svg?react';
import InfoIcon from '../assets/icons/info.svg?react';
import TipIcon from '../assets/icons/tip.svg?react';
import CheckIcon from '../assets/icons/check.svg?react';
import QuestionIcon from '../assets/icons/question.svg?react';
import WarningIcon from '../assets/icons/warning.svg?react';
import ErrorIcon from '../assets/icons/error.svg?react';
import BugIcon from '../assets/icons/bug.svg?react';
import ExampleIcon from '../assets/icons/example.svg?react';
import QuoteIcon from '../assets/icons/quote.svg?react';
import {NORMAL_CALLOUT_TYPE} from '../constants.ts';

const calloutStyleOptions = {
  note: {
    icon: NoteIcon,
    color: '#306BD6',
    backgroundColor: '#E6ECF7',
  },

  abstract: {
    icon: ClipboardIcon,
    color: '#56BCBB',
    backgroundColor: '#EEF8F8',
  },
  summary: {
    icon: ClipboardIcon,
    color: '#56BCBB',
    backgroundColor: '#EEF8F8',
  },
  tldr: {
    icon: ClipboardIcon,
    color: '#56BCBB',
    backgroundColor: '#EEF8F8',
  },

  info: {
    icon: InfoIcon,
    color: '#306BD6',
    backgroundColor: '#E6ECF7',
  },
  todo: {
    icon: InfoIcon,
    color: '#306BD6',
    backgroundColor: '#E6ECF7',
  },

  tip: {
    icon: TipIcon,
    color: '#56BCBB',
    backgroundColor: '#EEF8F8',
  },
  hint: {
    icon: TipIcon,
    color: '#56BCBB',
    backgroundColor: '#EEF8F8',
  },
  important: {
    icon: TipIcon,
    color: '#56BCBB',
    backgroundColor: '#EEF8F8',
  },

  success: {
    icon: CheckIcon,
    color: '#5AC561',
    backgroundColor: '#E2F1E7',
  },
  check: {
    icon: CheckIcon,
    color: '#5AC561',
    backgroundColor: '#E2F1E7',
  },
  done: {
    icon: CheckIcon,
    color: '#5AC561',
    backgroundColor: '#E2F1E7',
  },

  question: {
    icon: QuestionIcon,
    color: '#85DA47',
    backgroundColor: '#EAF5E2',
  },
  help: {
    icon: QuestionIcon,
    color: '#85DA47',
    backgroundColor: '#EAF5E2',
  },
  faq: {
    icon: QuestionIcon,
    color: '#85DA47',
    backgroundColor: '#EAF5E2',
  },

  warning: {
    icon: WarningIcon,
    color: '#F09637',
    backgroundColor: '#F6EDE0',
  },
  caution: {
    icon: WarningIcon,
    color: '#F09637',
    backgroundColor: '#F6EDE0',
  },
  attention: {
    icon: WarningIcon,
    color: '#F09637',
    backgroundColor: '#F6EDE0',
  },

  danger: {
    icon: ErrorIcon,
    color: '#EA394B',
    backgroundColor: '#F4E1E5',
  },
  error: {
    icon: ErrorIcon,
    color: '#EA394B',
    backgroundColor: '#F4E1E5',
  },

  bug: {
    icon: BugIcon,
    color: '#E1315A',
    backgroundColor: '#F3DFE7',
  },

  example: {
    icon: ExampleIcon,
    color: '#7952F6',
    backgroundColor: '#EAE6F7',
  },

  quote: {
    icon: QuoteIcon,
    color: '#9E9E9E',
    backgroundColor: '#EEEEEE',
  },
  cite: {
    icon: QuoteIcon,
    color: '#9E9E9E',
    backgroundColor: '#EEEEEE',
  },

  [NORMAL_CALLOUT_TYPE]: {
    icon: NoteIcon,
    color: '#5688F7',
    backgroundColor: '#E6ECF7',
  },
} as const;

export default calloutStyleOptions;
