import { useState, useCallback } from 'react';
import { glossary } from '@learnmath/tutorials';

interface GlossaryModalProps {
  entryId: string;
  onClose: () => void;
}

export default function GlossaryModal({ entryId, onClose }: GlossaryModalProps) {
  const [stack, setStack] = useState<string[]>([entryId]);
  const currentId = stack[stack.length - 1];
  const entry = glossary[currentId];

  const openRelated = useCallback((id: string) => {
    setStack(prev => [...prev, id]);
  }, []);

  const goBack = useCallback(() => {
    setStack(prev => prev.length > 1 ? prev.slice(0, -1) : prev);
  }, []);

  if (!entry) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-slate-800 rounded-xl p-6 max-w-md w-full mx-4 shadow-2xl border border-slate-700" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            {stack.length > 1 && (
              <button onClick={goBack} className="text-gray-400 hover:text-white text-sm">&larr; 戻る</button>
            )}
            <h3 className="text-lg font-bold text-white">{entry.term}</h3>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-xl">&times;</button>
        </div>

        <p className="text-gray-300 leading-relaxed mb-4">{entry.definition}</p>

        {entry.relatedTerms && entry.relatedTerms.length > 0 && (
          <div>
            <p className="text-sm text-gray-500 mb-2">関連用語:</p>
            <div className="flex flex-wrap gap-2">
              {entry.relatedTerms.map(id => {
                const related = glossary[id];
                if (!related) return null;
                return (
                  <button key={id} onClick={() => openRelated(id)}
                    className="px-3 py-1 bg-slate-700 hover:bg-slate-600 rounded-full text-sm text-indigo-300 transition-colors">
                    {related.term}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
