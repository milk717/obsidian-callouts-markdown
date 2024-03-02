import {HTMLAttributes} from 'react';
import {ObsidianCallout} from './package';
import CalloutMock from '@/tests/__mocks__/CalloutMock.tsx';
import Post from '@/tests/posts.mdx';

function App() {
  const mdxText = `
> [!question] title
> note callout
> second line
>> [!tip] multi
>> inner callout
>> second line`;
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
      <CalloutMock mdText={mdxText} />
      <Post components={components} />
    </div>
  );
}

export default App;
