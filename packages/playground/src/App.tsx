import {ChangeEventHandler, HTMLAttributes, useState} from 'react';
import {ObsidianCallout} from 'lib/src';
import TextArea from '@/components/ui/TextArea.tsx';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import BackgroundCover from '@/components/ui/BackgroundCover.tsx';
import TextLabel from '@/components/ui/TextLabel.tsx';

function App() {
  const [text, setText] = useState('');
  const components = {
    p: (props: HTMLAttributes<HTMLElement>) => (
      <p className="whitespace-pre-line" {...props} />
    ),
    blockquote: (props: HTMLAttributes<HTMLElement>) => (
      <ObsidianCallout {...props} />
    ),
  };

  const handleTextChange: ChangeEventHandler<HTMLTextAreaElement> = e => {
    setText(e.target.value);
  };

  return (
    <>
      <BackgroundCover />
      <header className="bg-gray-800 py-8">
        <h2 className="text-center text-2xl font-semibold leading-9 tracking-wide text-white">
          mdx-obsidian-callout playground 🚀
        </h2>
      </header>
      <main className="grid grid-cols-2 gap-8 m-8">
        <div className="flex flex-col gap-8">
          <div>
            <TextLabel>Customize the callout here</TextLabel>
          </div>
          <div>
            <TextArea
              id="callout-textarea"
              placeholder={
                `> [!info] callout title` + '\n' + `> this is callout body`
              }
              rows={10}
              value={text}
              onChange={handleTextChange}
            />
          </div>
        </div>
        <div className="">
          <TextLabel>Callout will be rendered here</TextLabel>
          <div className="min-h-64 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 mt-2 p-3 bg-gray-50 sm:h-[calc(100svh_-_12.25rem)] overflow-y-scroll">
            <ReactMarkdown
              rehypePlugins={[rehypeRaw, rehypeSanitize]}
              components={components}>
              {text}
            </ReactMarkdown>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
