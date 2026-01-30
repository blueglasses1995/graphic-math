import { useState } from 'react';
import type { QuizConfig } from '@learnmath/tutorials';
import Button from './Button';

interface Props {
  quiz: QuizConfig;
  onComplete: (correct: boolean) => void;
}

export default function QuizOverlay({ quiz, onComplete }: Props) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);

  const handleSubmit = () => {
    if (!selectedId) return;
    setAnswered(true);
    const isCorrect = quiz.options.find((o) => o.id === selectedId)?.correct ?? false;
    onComplete(isCorrect);
  };

  const getOptionClasses = (optionId: string, isCorrect: boolean) => {
    const base = 'w-full text-left px-4 py-3 rounded-lg border transition-colors';
    if (!answered) {
      if (selectedId === optionId) return `${base} border-indigo-400 bg-indigo-900/20 text-white`;
      return `${base} border-slate-600 text-gray-300 hover:border-slate-400`;
    }
    // After answering
    if (isCorrect) return `${base} border-green-500 bg-green-900/20 text-green-300`;
    if (selectedId === optionId && !isCorrect) return `${base} border-red-500 bg-red-900/20 text-red-300`;
    return `${base} border-slate-700 text-gray-500`;
  };

  return (
    <div className="absolute inset-0 bg-slate-900/80 flex items-center justify-center z-10">
      <div className="max-w-md w-full mx-4 space-y-4">
        <h3 className="text-lg font-semibold text-white">{quiz.question}</h3>
        <div className="space-y-2">
          {quiz.options.map((option) => (
            <button
              key={option.id}
              className={getOptionClasses(option.id, option.correct)}
              onClick={() => !answered && setSelectedId(option.id)}
              disabled={answered}
            >
              {option.label}
            </button>
          ))}
        </div>
        {!answered && (
          <Button variant="primary" onClick={handleSubmit} disabled={!selectedId} className="w-full">
            回答する
          </Button>
        )}
        {answered && (
          <div className="space-y-2">
            <p className="text-gray-300 text-sm leading-relaxed">{quiz.explanation}</p>
            <p className="text-indigo-400 text-sm">「次へ」をクリックして進みましょう</p>
          </div>
        )}
      </div>
    </div>
  );
}
