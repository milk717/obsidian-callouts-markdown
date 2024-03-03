import React from 'react';
import {calloutParser} from './calloutParser.ts';
import {NORMAL_CALLOUT_TYPE} from '../constants.ts';
import calloutComponents from './calloutComponents.ts';
import {
  CalloutConfig,
  CalloutTypes,
  CustomCalloutComponents,
  CustomCalloutOptions,
} from '@/types/callout.ts';
import DefaultCallout from '@/core/DefaultCallout.tsx';
import ErrorBoundary from '@/utils/ErrorBoundary.tsx';

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

const InnerCallout: React.FC<CalloutConfig> = ({
  components,
  options,
  ...args
}) => {
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

const Callout: React.FC<CalloutConfig> = ({...args}) => {
  return (
    <ErrorBoundary>
      <InnerCallout {...args} />
    </ErrorBoundary>
  );
};

export default Callout;
