import rehypeRaw from 'rehype-raw';
import ReactMarkdown from 'react-markdown';
import {HTMLAttributes} from 'react';
import {ObsidianCallout} from '@/package';
import {
  CustomCalloutComponents,
  CustomCalloutOptions,
} from '@/package/types/callout.ts';

type CalloutMockProps = {
  mdText: string;
  components?: CustomCalloutComponents;
  options?: CustomCalloutOptions;
};

const CalloutMock: React.FC<CalloutMockProps> = ({
  mdText,
  components,
  options,
}) => {
  return (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw]}
      components={{
        blockquote: (props: HTMLAttributes<HTMLElement>) => (
          <ObsidianCallout
            {...props}
            components={components}
            options={options}
          />
        ),
      }}>
      {mdText}
    </ReactMarkdown>
  );
};

export default CalloutMock;
