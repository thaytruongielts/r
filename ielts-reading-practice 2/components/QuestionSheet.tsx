
import React from 'react';
import { Question, UserAnswers, Option } from '../types';

interface QuestionSheetProps {
  questions: Question[];
  userAnswers: UserAnswers;
  onAnswerChange: (questionId: string, answer: string | string[]) => void;
  onSubmit: () => void;
}

const QuestionSheet: React.FC<QuestionSheetProps> = ({ questions, userAnswers, onAnswerChange, onSubmit }) => {
  
  const handleMultiSelectChange = (questionId: string, value: string, maxSelection: number) => {
    const currentAnswers = (userAnswers[questionId] as string[] | undefined) || [];
    let newAnswers;
    if (currentAnswers.includes(value)) {
      newAnswers = currentAnswers.filter(ans => ans !== value);
    } else {
      if (currentAnswers.length < maxSelection) {
        newAnswers = [...currentAnswers, value];
      } else {
        // Optional: show a notification that max selection is reached
        newAnswers = currentAnswers;
      }
    }
    onAnswerChange(questionId, newAnswers.sort());
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 space-y-8">
      {questions.map((qGroup) => (
        <div key={qGroup.id}>
          <h3 className="text-xl font-bold text-slate-700 border-b pb-2 mb-4">{qGroup.title}</h3>
          <p className="text-slate-600 mb-6">{qGroup.instructions}</p>
          
          {qGroup.type === 'heading_matching' && (
            <div className='space-y-4'>
                <div className='bg-slate-100 p-4 rounded-md border border-slate-200'>
                    <h4 className='font-semibold mb-2'>List of Headings</h4>
                    <ul className='list-inside list-roman text-slate-600'>
                        {qGroup.headings?.map((h: Option, index) => <li key={index}>{h.label}</li>)}
                    </ul>
                </div>
                {qGroup.questions.map(q => (
                    <div key={q.id} className="flex items-center gap-4">
                        <label htmlFor={q.id} className="font-semibold w-8">{q.id}.</label>
                        <select
                            id={q.id}
                            value={(userAnswers[q.id] as string) || ''}
                            onChange={(e) => onAnswerChange(q.id, e.target.value)}
                            className="flex-1 p-2 border border-slate-300 rounded-md shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                        >
                            <option value="" disabled>Select a paragraph</option>
                            {qGroup.paragraphRange?.split(' - ').reduce((acc, val, i, arr) => {
                                if (i === 0) {
                                    for (let j = val.charCodeAt(0); j <= arr[1].charCodeAt(0); j++) {
                                        acc.push(String.fromCharCode(j));
                                    }
                                }
                                return acc;
                            }, [] as string[]).map(p => (
                                <option key={p} value={p}>Paragraph {p}</option>
                            ))}
                        </select>
                         <span className='w-40'>{q.prompt}</span>
                    </div>
                ))}
            </div>
          )}

          {qGroup.type === 'multi_select' && qGroup.maxSelection && (
            <div className="space-y-3">
              {qGroup.questions[0].options?.map(opt => (
                <div key={opt.value} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-100 transition-colors">
                  <input
                    type="checkbox"
                    id={`q-${qGroup.id}-${opt.value}`}
                    name={qGroup.id}
                    value={opt.value}
                    checked={(userAnswers[qGroup.id] as string[] || []).includes(opt.value)}
                    onChange={() => handleMultiSelectChange(qGroup.id, opt.value, qGroup.maxSelection!)}
                    className="mt-1 h-5 w-5 rounded border-slate-300 text-teal-600 focus:ring-teal-500"
                  />
                  <label htmlFor={`q-${qGroup.id}-${opt.value}`} className="flex-1 text-slate-700">
                    <span className="font-bold mr-2">{opt.value}</span>{opt.label}
                  </label>
                </div>
              ))}
            </div>
          )}

          {qGroup.type === 'single_choice' && (
            <div className="space-y-6">
              {qGroup.questions.map(q => (
                <div key={q.id}>
                  <p className="font-semibold mb-3 text-slate-700">{q.id}. {q.prompt}</p>
                  <div className="space-y-2 pl-6">
                    {q.options?.map(opt => (
                      <div key={opt.value} className="flex items-center gap-3">
                        <input
                          type="radio"
                          id={`q-${q.id}-${opt.value}`}
                          name={q.id}
                          value={opt.value}
                          checked={userAnswers[q.id] === opt.value}
                          onChange={(e) => onAnswerChange(q.id, e.target.value)}
                           className="h-4 w-4 border-slate-300 text-teal-600 focus:ring-teal-500"
                        />
                        <label htmlFor={`q-${q.id}-${opt.value}`} className="text-slate-700">
                           {opt.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
       <button 
        onClick={onSubmit}
        className="w-full bg-teal-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-500 focus:ring-opacity-50 transition-transform transform hover:scale-105"
      >
        Submit Answers
      </button>
    </div>
  );
};

export default QuestionSheet;
