import { useState } from 'react';
import { glossaryTerms, GlossaryTerm } from '../../data/epsilonDeltaGlossary';

interface GlossaryPanelProps {
  termIds: string[];
}

/**
 * 用語集パネル
 * クリックで詳細を展開
 */
export default function GlossaryPanel({ termIds }: GlossaryPanelProps) {
  const [expandedTerm, setExpandedTerm] = useState<string | null>(null);

  const terms = termIds
    .map((id) => glossaryTerms[id])
    .filter((term): term is GlossaryTerm => term !== undefined);

  if (terms.length === 0) return null;

  return (
    <div className="bg-slate-800 rounded-xl p-6 mt-8">
      <h3 className="text-white font-bold text-xl mb-4 flex items-center">
        <span className="text-2xl mr-2">📖</span>
        用語集
      </h3>

      <div className="space-y-3">
        {terms.map((term) => (
          <div
            key={term.id}
            className="bg-slate-900 rounded-lg overflow-hidden border border-slate-700"
          >
            <button
              onClick={() =>
                setExpandedTerm(expandedTerm === term.id ? null : term.id)
              }
              className="w-full px-4 py-3 text-left hover:bg-slate-800 transition-colors flex items-center justify-between"
            >
              <div>
                <span className="text-white font-bold">{term.term}</span>
                {term.reading && (
                  <span className="text-slate-400 text-sm ml-2">
                    ({term.reading})
                  </span>
                )}
                <p className="text-slate-400 text-sm mt-1">
                  {term.shortDefinition}
                </p>
              </div>
              <span className="text-blue-400 text-xl">
                {expandedTerm === term.id ? '−' : '+'}
              </span>
            </button>

            {expandedTerm === term.id && (
              <div className="px-4 pb-4 space-y-4 animate-slideDown">
                <div className="border-t border-slate-700 pt-4">
                  <h4 className="text-blue-400 font-bold text-sm mb-2">
                    詳しい説明
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {term.detailedExplanation}
                  </p>
                </div>

                <div className="bg-purple-900/30 border border-purple-500/50 rounded-lg p-4">
                  <h4 className="text-purple-400 font-bold text-sm mb-2">
                    ε-δ論法との関係
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {term.relatedToEpsilonDelta}
                  </p>
                </div>

                {term.historicalContext && (
                  <div className="bg-amber-900/30 border border-amber-500/50 rounded-lg p-4">
                    <h4 className="text-amber-400 font-bold text-sm mb-2">
                      歴史的背景
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {term.historicalContext}
                    </p>
                  </div>
                )}

                {term.examples && term.examples.length > 0 && (
                  <div>
                    <h4 className="text-green-400 font-bold text-sm mb-2">
                      例
                    </h4>
                    <ul className="space-y-1">
                      {term.examples.map((example, index) => (
                        <li
                          key={index}
                          className="text-slate-300 text-sm flex items-start"
                        >
                          <span className="text-green-400 mr-2">•</span>
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
          }
          to {
            opacity: 1;
            max-height: 1000px;
          }
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
