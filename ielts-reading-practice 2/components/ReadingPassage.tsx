
import React from 'react';
import { PASSAGE } from '../constants';

interface ReadingPassageProps {
  passage: typeof PASSAGE;
}

const ReadingPassage: React.FC<ReadingPassageProps> = ({ passage }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 prose prose-slate max-w-none">
      <h2 className="text-2xl font-semibold mb-4 text-slate-700">{passage.title}</h2>
      {passage.paragraphs.map(p => (
        <div key={p.id} className="flex gap-4">
          <span className="font-bold text-slate-500">{p.id}</span>
          <p className="mt-0">{p.content}</p>
        </div>
      ))}
    </div>
  );
};

export default ReadingPassage;
