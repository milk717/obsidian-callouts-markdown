import {isValidElement, ReactNode} from 'react';

const NORMAL_CALLOUT_TYPE = 'normal';

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
    type,
    title,
    children: [
      ...children.slice(0, firstChildrenIndex),
      newChildren,
      ...children.slice(firstChildrenIndex + 1),
    ] as ReactNode,
  };
};
