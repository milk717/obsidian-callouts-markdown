import {ChangeEventHandler, HTMLAttributes, useState} from 'react';
import {ObsidianCallout} from 'lib/src';
import TextArea from '@/components/ui/TextArea.tsx';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';

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
    <div className="grid grid-cols-2 gap-8 m-8">
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
      <div>
        <label className="block font-medium leading-6 text-gray-900">
          Callout will be rendered here
        </label>
        <div className="min-h-64 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 mt-2 p-3 bg-gray-50">
          <ReactMarkdown
            rehypePlugins={[rehypeRaw, rehypeSanitize]}
            components={components}>
            {text}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default App;
