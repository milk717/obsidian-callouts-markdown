import React, {HTMLAttributes} from 'react';
import {calloutParser} from './calloutParser.ts';
import {NORMAL_CALLOUT_TYPE} from './constants.ts';
import NoteCallout from '../callouts/NoteCallout.tsx';

const calloutsObject = {
  note: NoteCallout,
  abstract: NoteCallout,
  summary: NoteCallout,
  tldr: NoteCallout,

  info: NoteCallout,
  todo: NoteCallout,

  tip: NoteCallout,
  hint: NoteCallout,
  important: NoteCallout,

  success: NoteCallout,
  check: NoteCallout,
  done: NoteCallout,

  question: NoteCallout,
  help: NoteCallout,
  faq: NoteCallout,

  warning: NoteCallout,
  caution: NoteCallout,
  attention: NoteCallout,

  danger: NoteCallout,
  error: NoteCallout,

  bug: NoteCallout,

  example: NoteCallout,

  quote: NoteCallout,
  cite: NoteCallout,
  [NORMAL_CALLOUT_TYPE]: NoteCallout,
} as const;

const isValidCalloutType = (
  type: string,
): type is keyof typeof calloutsObject => {
  return Object.keys(calloutsObject).includes(type);
};

const Callout: React.FC<HTMLAttributes<HTMLElement>> = ({...args}) => {
  const {type, title, children} = calloutParser(args.children);

  const SelectedCallout = isValidCalloutType(type)
    ? calloutsObject[type]
    : calloutsObject[NORMAL_CALLOUT_TYPE];

  return (
    <SelectedCallout title={isValidCalloutType(type) ? title : type}>
      {children}
    </SelectedCallout>
  );
};

export default Callout;
