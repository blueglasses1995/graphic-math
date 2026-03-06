import { supplementaryContent } from '../../data/epsilonDeltaGlossary';

interface SupplementPanelProps {
  contentIds: string[];
}

/**
 * 補足説明パネル
 * 「もっと詳しく」セクション
 */
export default function SupplementPanel({ contentIds }: SupplementPanelProps) {
  const contents = contentIds
    .map((id) => supplementaryContent[id])
    .filter((content) => content !== undefined);

  if (contents.length === 0) return null;

  return (
    <div className="bg-slate-800 rounded-xl p-6 mt-8">
      <h3 className="text-white font-bold text-xl mb-4 flex items-center">
        <span className="text-2xl mr-2">💡</span>
        もっと詳しく
      </h3>

      <div className="space-y-4">
        {contents.map((content, index) => (
          <details
            key={index}
            className="bg-slate-900 rounded-lg border border-slate-700 overflow-hidden group"
          >
            <summary className="px-4 py-3 cursor-pointer hover:bg-slate-800 transition-colors flex items-center justify-between list-none">
              <span className="text-white font-bold">{content.title}</span>
              <span className="text-blue-400 text-xl group-open:rotate-180 transition-transform">
                ▼
              </span>
            </summary>

            <div className="px-4 pb-4 pt-2 space-y-4">
              <div className="border-t border-slate-700 pt-4">
                <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-line">
                  {content.content}
                </p>
              </div>

              <div className="bg-blue-900/30 border border-blue-500/50 rounded-lg p-3">
                <h4 className="text-blue-400 font-bold text-xs mb-1">
                  なぜ重要か
                </h4>
                <p className="text-slate-300 text-sm">{content.relevance}</p>
              </div>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
