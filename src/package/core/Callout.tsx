import React from 'react';
import {calloutParser} from './calloutParser.ts';
import {NORMAL_CALLOUT_TYPE} from '../constants.ts';
import calloutComponents from './calloutComponents.ts';
import {
  CalloutConfig,
  CalloutTypes,
  CustomCalloutComponents,
  CustomCalloutOptions,
} from '@/package/types/callout.ts';
import DefaultCallout from '@/package/core/DefaultCallout.tsx';

/**
 * Because users sometimes create new callouts through components or options,
 * a type verification function is created as follows
 */
const isValidCalloutType = (
  type: string,
  components?: CustomCalloutComponents,
  options?: CustomCalloutOptions,
): type is CalloutTypes => {
  return !!(
    Object.keys(calloutComponents).includes(type) ||
    (components && Object.keys(components).includes(type)) ||
    (options && Object.keys(options).includes(type))
  );
};

const Callout: React.FC<CalloutConfig> = ({components, options, ...args}) => {
  const {type, title, children} = calloutParser(args.children);

  const validType = isValidCalloutType(type, components, options)
    ? type
    : NORMAL_CALLOUT_TYPE;

  const SelectedCallout =
    {...calloutComponents, ...components}[validType] || DefaultCallout;

  return (
    <SelectedCallout
      type={validType}
      title={isValidCalloutType(type) ? title : type}
      options={options}>
      {children}
    </SelectedCallout>
  );
};

export default Callout;
