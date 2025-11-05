
import React from 'react';
import { UserAnswers, AnswerKey, Question } from '../types';
import { CheckIcon, CrossIcon } from './Icons';

interface ResultsProps {
  userAnswers: UserAnswers;
  answerKey: AnswerKey;
  questions: Question[];
  onRetake: () => void;
}

const Results: React.FC<ResultsProps> = ({ userAnswers, answerKey, questions, onRetake }) => {
  let totalCorrect = 0;
  let totalQuestions = 0;

  const resultItems = questions.flatMap(qGroup => {
    if (qGroup.type === 'multi_select') {
      totalQuestions += qGroup.maxSelection || 0;
      const userAns = ((userAnswers[qGroup.id] || []) as string[]).sort();
      const correctAns = (answerKey[qGroup.id] as string[]);
      
      // Calculate score based on how many of the user's answers are in the correct answer list
      const score = userAns.filter(answer => correctAns.includes(answer)).length;
      totalCorrect += score;
      
      const isAllCorrect = score === (qGroup.maxSelection || 0) && userAns.length === correctAns.length;
      
      return [{
        id: qGroup.id,
        userAnswer: userAns.join(', ') || 'No answer',
        correctAnswer: (correctAns as string[]).sort().join(', '),
        isCorrect: isAllCorrect,
        scoreText: `(Correct ${score}/${qGroup.maxSelection})`,
      }];
    }
    
    return qGroup.questions.map(q => {
      totalQuestions++;
      const userAns = userAnswers[q.id] || 'No answer';
      const correctAns = answerKey[q.id];
      const isCorrect = userAns === correctAns;
      if(isCorrect) totalCorrect++;
      return {
        id: q.id,
        userAnswer: userAns,
        correctAnswer: correctAns,
        isCorrect: isCorrect,
        scoreText: null
      };
    })
  });

  return (
    <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg border border-slate-200 animate-fade-in">
      <div className="text-center border-b border-slate-200 pb-6 mb-6">
        <h2 className="text-3xl font-bold text-slate-800">Your Results</h2>
        <p className="text-5xl font-bold mt-4" style={{ color: totalCorrect > totalQuestions / 2 ? '#10b981' : '#ef4444'}}>
          {totalCorrect} / {totalQuestions}
        </p>
        <p className="text-slate-500 mt-2">Correct Answers</p>
      </div>

      <h3 className="text-xl font-bold text-slate-700 mb-4">Answer Breakdown</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
        {resultItems.map(item => (
          <div key={item.id} className="flex items-center space-x-4 p-3 rounded-lg bg-slate-50 border border-slate-200">
            <div className="flex-shrink-0 h-10 w-10 bg-teal-600 text-white flex items-center justify-center rounded-full font-bold text-lg">
              {item.id.replace(/-/g,'- ')}
            </div>
            <div className="flex-grow text-sm">
              <p className="text-slate-800 font-semibold">Your answer: {item.userAnswer} {item.scoreText}</p>
              {!item.isCorrect && (
                 <p className="text-emerald-600">Correct answer: {item.correctAnswer}</p>
              )}
            </div>
            <div className="flex-shrink-0">
              {item.isCorrect ? <CheckIcon /> : <CrossIcon />}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <button 
          onClick={onRetake}
          className="bg-slate-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-500 focus:ring-opacity-50 transition-transform transform hover:scale-105"
        >
          Retake Test
        </button>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Results;
