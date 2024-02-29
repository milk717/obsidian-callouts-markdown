import {isValidElement, ReactNode} from 'react';

const NORMAL_CALLOUT_TYPE = 'normal';

const defaultResponse = {
  type: NORMAL_CALLOUT_TYPE,
  title: undefined,
  children: undefined,
};

const parseCallout = (str: string) => {
  const pattern = `\\[!([^\\n]+)\\](?:[ ]+([^\\n]+))?`;
  const regex = new RegExp(pattern);
  const matches = str.match(regex);

  return matches
    ? {
        type: matches.at(1),
        title: matches.at(2),
        content: str.replace(matches.at(0) + '\n', ''),
      }
    : {
        type: NORMAL_CALLOUT_TYPE,
        title: undefined,
        content: str,
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
