import {HTMLAttributes, ReactNode} from 'react';

export type CalloutTypes =
  | 'note'
  | 'abstract'
  | 'summary'
  | 'tldr'
  | 'info'
  | 'todo'
  | 'tip'
  | 'hint'
  | 'important'
  | 'success'
  | 'check'
  | 'done'
  | 'question'
  | 'help'
  | 'faq'
  | 'warning'
  | 'caution'
  | 'attention'
  | 'danger'
  | 'error'
  | 'bug'
  | 'example'
  | 'quote'
  | 'cite'
  | 'normal';

export type CalloutComponentProps = {
  type: CalloutTypes;
  title?: string;
  children: ReactNode;
};

export type CalloutComponentOptions = {
  [key in CalloutTypes]: React.FC<CalloutComponentProps>;
};

export type CalloutStyleOptions = {
  [key in CalloutTypes]: {
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    color: string;
    backgroundColor: string;
  };
};

export type CalloutParser = (children: ReactNode) => {
  type: string;
  title?: string | undefined;
  children: ReactNode;
};

export type CustomCalloutOptions = {
  [key: string]: React.FC<CalloutComponentProps>;
};

export type CalloutConfig = {
  components?: CustomCalloutOptions;
} & HTMLAttributes<HTMLElement>;
