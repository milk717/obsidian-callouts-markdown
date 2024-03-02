import rehypeRaw from 'rehype-raw';
import ReactMarkdown from 'react-markdown';
import {HTMLAttributes} from 'react';
import {ObsidianCallout} from '@/package';

type CalloutMockProps = {
  mdText: string;
};

const components = {
  blockquote: (props: HTMLAttributes<HTMLElement>) => (
    <ObsidianCallout {...props} />
  ),
};

const CalloutMock: React.FC<CalloutMockProps> = ({mdText}) => {
  return (
    <ReactMarkdown rehypePlugins={[rehypeRaw]} components={components}>
      {mdText}
    </ReactMarkdown>
  );
};

export default CalloutMock;
