export const calloutNames = [
  'note',

  'abstract',
  'summary',
  'tldr',

  'info',
  'todo',

  'tip',
  'hint',
  'important',

  'success',
  'check',
  'done',

  'question',
  'help',
  'faq',

  'warning',
  'caution',
  'attention',

  'danger',
  'error',

  'bug',

  'example',

  'quote',
  'cite',
] as const;
export type CalloutNames = (typeof calloutNames)[number];
