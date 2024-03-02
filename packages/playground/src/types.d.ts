declare module '*.mdx' {
  import {ReactNode} from 'react';
  let MDXComponent: (props: any) => ReactNode;
  export default MDXComponent;
}
