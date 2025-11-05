
import React, { useState, useCallback } from 'react';
import { PASSAGE, QUESTIONS, ANSWER_KEY } from './constants';
import { UserAnswers } from './types';
import ReadingPassage from './components/ReadingPassage';
import QuestionSheet from './components/QuestionSheet';
import Results from './components/Results';

const App: React.FC = () => {
  const [userAnswers, setUserAnswers] = useState<UserAnswers>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAnswerChange = useCallback((questionId: string, answer: string | string[]) => {
    setUserAnswers(prev => ({ ...prev, [questionId]: answer }));
  }, []);

  const handleSubmit = () => {
    setIsSubmitted(true);
    window.scrollTo(0, 0);
  };

  const handleRetake = () => {
    setUserAnswers({});
    setIsSubmitted(false);
    window.scrollTo(0, 0);
  }

  return (
    <div className="min-h-screen font-sans">
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">IELTS Reading Practice Test</h1>
          <p className="text-slate-600 mt-1">Section: Park the Car Permanently</p>
        </div>
      </header>
      
      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        {isSubmitted ? (
          <Results userAnswers={userAnswers} answerKey={ANSWER_KEY} questions={QUESTIONS} onRetake={handleRetake} />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
            <div className="lg:sticky lg:top-24 self-start">
              <ReadingPassage passage={PASSAGE} />
            </div>
            <div className="mt-8 lg:mt-0">
              <QuestionSheet 
                questions={QUESTIONS} 
                userAnswers={userAnswers} 
                onAnswerChange={handleAnswerChange}
                onSubmit={handleSubmit}
              />
            </div>
          </div>
        )}
      </main>

      <footer className="text-center py-6 mt-8 border-t border-slate-200">
          <p className="text-slate-500 text-sm">Created with expertise in React & UI/UX Design.</p>
      </footer>
    </div>
  );
};

export default App;
