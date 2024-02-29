import {isValidElement, ReactNode} from 'react';
import {NORMAL_CALLOUT_TYPE} from './constants.ts';

const defaultResponse = {
  type: NORMAL_CALLOUT_TYPE,
  title: undefined,
  children: undefined,
};

const parseCallout = (children: ReactNode) => {
  const str = Array.isArray(children) ? children.at(0) : children;
  const pattern = `\\[!([^\\n]+)\\]\\s+`;
  const regex = new RegExp(pattern);
  const matches = str.match(regex);

  if (!matches)
    return {
      type: NORMAL_CALLOUT_TYPE,
      title: undefined,
      content: str,
    };

  return {
    type: matches.at(1),
    title: Array.isArray(children) ? children.at(1) : matches.at(2),
    content: Array.isArray(children)
      ? [children.at(2).replace(/^\n/, ''), ...children.slice(3)]
      : str.replace(regex, ''),
  };
};

export const calloutParser = (children: ReactNode) => {
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
