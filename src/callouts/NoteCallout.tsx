import {CalloutProps} from '../types/callout.ts';
import NoteIcon from '../assets/icons/note.svg?react';

const NoteCallout: React.FC<CalloutProps> = ({title, children}) => {
  return (
    <div className="bg-blue-100 p-4 rounded-md">
      <div className="flex gap-2 text-blue-700 font-semibold mb-4">
        <NoteIcon width={20} />
        <p>{title ?? 'Note'}</p>
      </div>
      {children}
    </div>
  );
};

export default NoteCallout;
