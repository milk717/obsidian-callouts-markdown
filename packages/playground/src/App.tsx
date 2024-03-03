import {useState} from 'react';
import BackgroundCover from '@/components/ui/BackgroundCover.tsx';
import CalloutOptionCustomArea from '@/components/CalloutOptionCustomArea.tsx';
import CalloutRenderArea from '@/components/CalloutRenderArea.tsx';
import CalloutTextInputArea from '@/components/CalloutTextInputArea.tsx';

function App() {
  const [text, setText] = useState('');
  const [options, setOptions] = useState({
    type: 'info',
    color: '#17803D',
    backgroundColor: '#EFFDF4',
  });

  const handleTextChange = (text: string) => {
    setText(text);
  };

  const handleOptionChange = (key: string, value: string) => {
    setOptions(prev => ({...prev, [key]: value}));
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
          <CalloutOptionCustomArea
            options={options}
            onOptionChange={handleOptionChange}
          />
          <CalloutTextInputArea text={text} onChange={handleTextChange} />
        </div>
        <CalloutRenderArea text={text} options={options} />
      </main>
    </>
  );
}

export default App;
