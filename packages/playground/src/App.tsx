import {ChangeEventHandler, HTMLAttributes, useState} from 'react';
import {ObsidianCallout} from 'lib/src';
import BackgroundCover from '@/components/ui/BackgroundCover.tsx';
import CalloutOptionCustomArea from '@/components/CalloutOptionCustomArea.tsx';
import CalloutRenderArea from '@/components/CalloutRenderArea.tsx';
import CalloutTextInputArea from '@/components/CalloutTextInputArea.tsx';

function App() {
  const [text, setText] = useState('');
  const components = {
    p: (props: HTMLAttributes<HTMLElement>) => (
      <p className="whitespace-pre-line" {...props} />
    ),
    blockquote: (props: HTMLAttributes<HTMLElement>) => (
      <ObsidianCallout
        {...props}
        options={{
          info: {
            icon: '',
            color: 'teal',
            backgroundColor: 'white',
          },
        }}
      />
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
          <CalloutOptionCustomArea />
          <CalloutTextInputArea text={text} onChange={handleTextChange} />
        </div>
        <CalloutRenderArea text={text} />
      </main>
    </>
  );
}

export default App;
