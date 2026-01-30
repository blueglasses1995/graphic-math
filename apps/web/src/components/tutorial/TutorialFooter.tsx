import { Link } from 'react-router-dom';
import { getTutorialById } from '@learnmath/tutorials';

interface TutorialFooterProps {
  relatedTutorials: string[];
  category: string;
}

export function TutorialFooter({ relatedTutorials, category }: TutorialFooterProps) {
  // Get tutorial data for related tutorials
  const relatedTutorialData = relatedTutorials
    .map((id) => getTutorialById(id))
    .filter(Boolean);

  return (
    <div className="mt-12 space-y-6">
      {/* Next Tutorial (first related tutorial) */}
      {relatedTutorialData.length > 0 && (
        <div className="bg-slate-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-3">次に進む</h3>
          <Link
            to={`/tutorial/${relatedTutorialData[0]!.id}`}
            className="flex items-center justify-between p-4 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors group"
          >
            <div>
              <p className="font-medium text-white group-hover:text-indigo-300 transition-colors">
                {relatedTutorialData[0]!.title}
              </p>
              <p className="text-sm text-gray-400 mt-1">
                {relatedTutorialData[0]!.description}
              </p>
            </div>
            <svg
              className="w-6 h-6 text-gray-400 group-hover:text-indigo-400 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      )}

      {/* Related Tutorials */}
      {relatedTutorialData.length > 1 && (
        <div className="bg-slate-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-3">関連チュートリアル</h3>
          <div className="grid md:grid-cols-2 gap-3">
            {relatedTutorialData.slice(1).map((tutorial) => (
              <Link
                key={tutorial!.id}
                to={`/tutorial/${tutorial!.id}`}
                className="p-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
              >
                <p className="font-medium text-white text-sm">{tutorial!.title}</p>
                <p className="text-xs text-gray-400 mt-1">{tutorial!.description}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Back to Category */}
      <div className="text-center">
        <Link
          to={`/?category=${category}`}
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          カテゴリに戻る
        </Link>
      </div>
    </div>
  );
}
