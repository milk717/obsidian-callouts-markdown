import {HTMLAttributes} from 'react';
import Post from './tests/posts.mdx';
import Callout from './core/Callout.tsx';

function App() {
  const components = {
    p: (props: HTMLAttributes<HTMLElement>) => (
      <p className="whitespace-pre-line" {...props} />
    ),
    blockquote: (props: HTMLAttributes<HTMLElement>) => <Callout {...props} />,
  };

  return (
    <div className="flex flex-col gap-y-4 m-8">
      <Post components={components} />
    </div>
  );
}

export default App;
