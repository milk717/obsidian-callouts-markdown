import {ReactNode} from 'react';
import calloutStyleOptions from '../callouts/calloutStyleOptions.tsx';

export type CalloutTypes = keyof typeof calloutStyleOptions;
export type CalloutProps = {
  type: CalloutTypes;
  title?: string;
  children: ReactNode;
};
