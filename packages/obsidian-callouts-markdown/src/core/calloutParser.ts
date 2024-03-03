import {isValidElement, ReactNode} from 'react';
import {NORMAL_CALLOUT_TYPE} from '@/constants.ts';
import {CalloutParser} from '@/types/callout.ts';

const defaultResponse = {
  type: NORMAL_CALLOUT_TYPE,
  title: undefined,
  children: undefined,
};

const parseCallout = (children: ReactNode) => {
  if (
    isValidElement(children) ||
    (Array.isArray(children) && isValidElement(children?.at(0)))
  )
    return {
      type: NORMAL_CALLOUT_TYPE,
      title: undefined,
      content: children,
    };

  const calloutTypeString = Array.isArray(children) ? children.at(0) : children;
  const pattern = `\\[!([^\\n]+)\\](?:[ ]+([^\\n]+))?`;

  const regex = new RegExp(pattern);
  const matches = calloutTypeString.match(regex);

  if (!matches)
    return {
      type: NORMAL_CALLOUT_TYPE,
      title: undefined,
      content: calloutTypeString,
    };

  const [, type, title] = matches;

  return {
    type: type,
    title: Array.isArray(children) ? children.at(1) : title,
    content: Array.isArray(children)
      ? [children.at(2).trim(), ...children.slice(3)]
      : calloutTypeString.replace(regex, '').trim(),
  };
};

export const calloutParser: CalloutParser = (children: ReactNode) => {
  if (!Array.isArray(children)) return defaultResponse;
  if (children.every(v => !isValidElement(v))) return defaultResponse;

  const firstChildrenIndex = children.findIndex(v => isValidElement(v));
  const firstChildren = children.at(firstChildrenIndex).props.children;

  const {type, title, content} = parseCallout(firstChildren);

  const newChildren = {
    ...children.at(firstChildrenIndex),
    props: {children: content},
  };

  return {
    type: type as string,
    title,
    children: [
      ...children.slice(0, firstChildrenIndex),
      newChildren,
      ...children.slice(firstChildrenIndex + 1),
    ] as ReactNode,
  };
};
