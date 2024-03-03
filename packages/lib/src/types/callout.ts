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
  options?: CustomCalloutOptions;
  children: ReactNode;
};

export type CalloutComponentOptions = {
  [key in CalloutTypes]: React.FC<CalloutComponentProps>;
};

export type CalloutOptions = {
  [key in CalloutTypes]: {
    icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    color?: string;
    backgroundColor?: string;
  };
};

export type CalloutParser = (children: ReactNode) => {
  type: string;
  title?: string | undefined;
  children: ReactNode;
};

export type CustomCalloutComponentProps = Omit<
  CalloutComponentProps,
  'type'
> & {type?: string};

export type CustomCalloutComponents = {
  [key: string]: React.FC<CustomCalloutComponentProps>;
};

export type CustomCalloutOptions = {
  [key: string]: {
    icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    color?: string;
    backgroundColor?: string;
  };
};

export type CalloutConfig = {
  components?: CustomCalloutComponents;
  options?: CustomCalloutOptions;
} & HTMLAttributes<HTMLElement>;
