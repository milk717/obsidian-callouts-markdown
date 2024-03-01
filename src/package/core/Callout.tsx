import React from 'react';
import {calloutParser} from './calloutParser.ts';
import {NORMAL_CALLOUT_TYPE} from '../constants.ts';
import calloutComponentOptions from './calloutComponentOptions.ts';
import {CalloutConfig, CalloutTypes} from '../types/callout.ts';

const isValidCalloutType = (type: string): type is CalloutTypes => {
  return Object.keys(calloutComponentOptions).includes(type);
};

const Callout: React.FC<CalloutConfig> = ({components, ...args}) => {
  const {type, title, children} = calloutParser(args.children);

  const validType = isValidCalloutType(type) ? type : NORMAL_CALLOUT_TYPE;

  const SelectedCallout = {...calloutComponentOptions, ...components}[
    validType
  ];

  return (
    <SelectedCallout
      type={validType}
      title={isValidCalloutType(type) ? title : type}>
      {children}
    </SelectedCallout>
  );
};

export default Callout;
