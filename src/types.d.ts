declare module '*.mdx' {
  let MDXComponent: (props: never) => Element;
  export default MDXComponent;
}

declare module '@mdx-js/runtime' {
  import {ComponentType} from 'react';

  interface MDXRuntimeProps {
    children: string;
    components?: {[elementName: string]: ComponentType<never>};
  }

  const MDXRuntime: ComponentType<MDXRuntimeProps>;
  export default MDXRuntime;
}
