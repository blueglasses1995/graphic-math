interface PrerequisiteCardProps {
  icon: string;
  title: string;
  description: string;
  concepts: string[];
  link: string;
}

/**
 * 前提知識カードコンポーネント
 * ε-δ論法の理解に必要な前提知識を表示
 */
export default function PrerequisiteCard({
  icon,
  title,
  description,
  concepts,
  link,
}: PrerequisiteCardProps) {
  return (
    <a
      href={link}
      className="block bg-slate-800 hover:bg-slate-700 rounded-xl p-6 transition-all hover:scale-105 hover:shadow-xl border-2 border-slate-700 hover:border-blue-500"
    >
      {/* アイコン */}
      <div className="text-5xl mb-4">{icon}</div>

      {/* タイトル */}
      <h3 className="text-white font-bold text-xl mb-2">{title}</h3>

      {/* 説明 */}
      <p className="text-slate-400 text-sm mb-4">{description}</p>

      {/* 学習内容 */}
      <div className="space-y-2">
        <div className="text-slate-500 text-xs font-bold uppercase">学習内容：</div>
        <ul className="space-y-1">
          {concepts.map((concept, index) => (
            <li key={index} className="flex items-center text-slate-300 text-sm">
              <span className="text-blue-400 mr-2">•</span>
              {concept}
            </li>
          ))}
        </ul>
      </div>

      {/* 矢印 */}
      <div className="mt-4 text-right text-blue-400 font-bold">
        学習する →
      </div>
    </a>
  );
}
