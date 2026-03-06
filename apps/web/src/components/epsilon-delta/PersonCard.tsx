import { useState } from 'react';
import { personProfiles } from '../../data/epsilonDeltaGlossary';

interface PersonCardProps {
  personId: string;
  inline?: boolean;
}

/**
 * 人物詳細カード
 * inline=true: ボタンクリックで展開
 * inline=false: 常に表示
 */
export default function PersonCard({ personId, inline = true }: PersonCardProps) {
  const [isExpanded, setIsExpanded] = useState(!inline);
  const person = personProfiles[personId];

  if (!person) return null;

  if (inline && !isExpanded) {
    return (
      <button
        onClick={() => setIsExpanded(true)}
        className="inline-flex items-center gap-2 bg-blue-900/30 hover:bg-blue-900/50 border border-blue-500/50 rounded-lg px-4 py-2 transition-colors"
      >
        <span className="text-2xl">{person.portrait}</span>
        <span className="text-blue-400 font-bold">{person.name}</span>
        <span className="text-slate-400 text-sm">詳しく →</span>
      </button>
    );
  }

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border-2 border-blue-500/50 animate-fadeIn">
      {inline && (
        <button
          onClick={() => setIsExpanded(false)}
          className="float-right text-slate-400 hover:text-white"
        >
          ✕
        </button>
      )}

      <div className="flex items-start gap-6 mb-6">
        <div className="text-6xl">{person.portrait}</div>
        <div className="flex-1">
          <h3 className="text-white font-bold text-2xl mb-1">{person.name}</h3>
          <p className="text-slate-400 text-sm mb-1">{person.nameEn}</p>
          <p className="text-slate-400 text-sm mb-2">
            {person.lifespan} · {person.nationality}
          </p>
          <p className="text-blue-400 text-sm">{person.occupation}</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-blue-900/30 border border-blue-500/50 rounded-lg p-4">
          <h4 className="text-blue-400 font-bold mb-2 text-sm">背景</h4>
          <ul className="space-y-1">
            {person.background.map((item, index) => (
              <li key={index} className="text-slate-300 text-sm flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-green-900/30 border border-green-500/50 rounded-lg p-4">
          <h4 className="text-green-400 font-bold mb-2 text-sm">主要業績</h4>
          <ul className="space-y-1">
            {person.mainAchievements.map((achievement, index) => (
              <li
                key={index}
                className="text-slate-300 text-sm flex items-start"
              >
                <span className="text-green-400 mr-2">✓</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-purple-900/30 border border-purple-500/50 rounded-lg p-4">
          <h4 className="text-purple-400 font-bold mb-2 text-sm">
            ε-δ論法への貢献
          </h4>
          <p className="text-slate-300 text-sm leading-relaxed">
            {person.epsilonDeltaContribution}
          </p>
        </div>

        {person.anecdotes && person.anecdotes.length > 0 && (
          <div className="bg-amber-900/30 border border-amber-500/50 rounded-lg p-4">
            <h4 className="text-amber-400 font-bold mb-2 text-sm">逸話</h4>
            <ul className="space-y-2">
              {person.anecdotes.map((anecdote, index) => (
                <li key={index} className="text-slate-300 text-sm flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>{anecdote}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {person.famousQuote && (
          <div className="bg-slate-900 border border-slate-600 rounded-lg p-4">
            <div className="text-yellow-400 text-xs mb-2">名言</div>
            <blockquote className="text-slate-300 italic">
              "{person.famousQuote}"
            </blockquote>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
