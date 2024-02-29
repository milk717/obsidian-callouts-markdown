import {ReactNode} from 'react';
import calloutStyleOptions from '../core/calloutStyleOptions.ts';

export type CalloutTypes = keyof typeof calloutStyleOptions;
export type CalloutProps = {
  type: CalloutTypes;
  title?: string;
  children: ReactNode;
};
