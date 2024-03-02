import {HTMLAttributes} from 'react';
import {ObsidianCallout} from 'lib/src';
import Post from '@/assets/markdown/posts.mdx';

function App() {
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
      <Post components={components} />
    </div>
  );
}

export default App;
