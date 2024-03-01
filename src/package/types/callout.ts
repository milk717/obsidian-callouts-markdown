import {ReactNode} from 'react';

export type CalloutTypes = 'note' | 'abstract' | 'summary' | 'tldr' | 'info' | 'todo' | 'tip' | 'hint' | 'important' | 'success' | 'check' | 'done' | 'question' | 'help' | 'faq' | 'warning' | 'caution' | 'attention' | 'danger' | 'error' | 'bug' | 'example' | 'quote' | 'cite' | 'normal'

export type CalloutProps = {
  type: CalloutTypes;
  title?: string;
  children: ReactNode;
};

export type CalloutComponentOptions = {
  [key in CalloutTypes]: React.FC<CalloutProps>
}

export type CalloutStyleOptions = {
  [key in CalloutTypes]: {
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
    color: string,
    backgroundColor: string
  }
}
