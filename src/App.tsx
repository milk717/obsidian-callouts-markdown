import {HTMLAttributes} from 'react';
import {ObsidianCallout} from './package';
import rehypeRaw from 'rehype-raw';
import ReactMarkdown from 'react-markdown';

function App() {
  const mdxText = `
  > [!note] <span><span>title in two span tag </span>title in one span tag</span>
  > note callout  <span>content in span</span>
  > second line`;
  const components = {
    p: (props: HTMLAttributes<HTMLElement>) => (
      <p className="whitespace-pre-line" {...props} />
    ),
    blockquote: (props: HTMLAttributes<HTMLElement>) => (
      <ObsidianCallout {...props} />
    ),
  };

  return (
    <div className="flex flex-col gap-y-4 m-8">
      <ReactMarkdown rehypePlugins={[rehypeRaw]} components={components}>
        {mdxText}
      </ReactMarkdown>
    </div>
  );
}

export default App;
