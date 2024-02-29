import React, {HTMLAttributes} from 'react';
import {calloutParser} from './calloutParser.ts';
import {NORMAL_CALLOUT_TYPE} from '../constants.ts';
import calloutComponentOptions from './calloutComponentOptions.ts';

const isValidCalloutType = (
  type: string,
): type is keyof typeof calloutComponentOptions => {
  return Object.keys(calloutComponentOptions).includes(type);
};

const Callout: React.FC<HTMLAttributes<HTMLElement>> = ({...args}) => {
  const {type, title, children} = calloutParser(args.children);

  const validType = isValidCalloutType(type) ? type : NORMAL_CALLOUT_TYPE;

  const SelectedCallout = calloutComponentOptions[validType];

  return (
    <SelectedCallout
      type={validType}
      title={isValidCalloutType(type) ? title : type}>
      {children}
    </SelectedCallout>
  );
};

export default Callout;
