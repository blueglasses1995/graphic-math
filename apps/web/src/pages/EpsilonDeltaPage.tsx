import { useState } from 'react';
import Prologue from '../components/epsilon-delta/Prologue';
import Chapter1Berkeley from '../components/epsilon-delta/Chapter1Berkeley';
import Chapter2Cauchy from '../components/epsilon-delta/Chapter2Cauchy';
import Chapter3Functions from '../components/epsilon-delta/Chapter3Functions';
import Chapter2RealNumbers from '../components/epsilon-delta/Chapter2RealNumbers';
import Chapter2Sets from '../components/epsilon-delta/Chapter2Sets';
import Chapter2Logic from '../components/epsilon-delta/Chapter2Logic';
import Chapter3Birth from '../components/epsilon-delta/Chapter3Birth';
import EpsilonDeltaGame from '../components/epsilon-delta/EpsilonDeltaGame';
import Chapter5Physics from '../components/epsilon-delta/Chapter5Physics';

type Chapter =
  | 'prologue'
  | 'ch1'
  | 'ch2'
  | 'ch3-1'
  | 'ch3-2'
  | 'ch3-3'
  | 'ch3-4'
  | 'ch4'
  | 'ch5-1'
  | 'ch5-2'
  | 'ch5-3'
  | 'ch6';

interface ChapterInfo {
  id: Chapter;
  title: string;
  subtitle: string;
  icon: string;
  time: string;
  completed: boolean;
  unlocked: boolean;
}

/**
 * ε-δ論法への旅 - 完全版
 *
 * 正しい歴史の流れ（時代の前後あり）:
 * 序章（1638-1687）→ 第1章（1734）→ 第2章（1821コーシー）
 * → 第3章（基礎整備: 1837→1872→1874→1879）
 * → 第4章（1861ワイエルシュトラス）→ 第5章（実践）→ 第6章（物理応用）
 */
export default function EpsilonDeltaPage() {
  const [currentChapter, setCurrentChapter] = useState<Chapter>('prologue');
  const [chapters, setChapters] = useState<ChapterInfo[]>([
    {
      id: 'prologue',
      title: '序章',
      subtitle: 'ガリレオ〜ニュートン',
      icon: '🏛️',
      time: '7分',
      completed: false,
      unlocked: true,
    },
    {
      id: 'ch1',
      title: '第1章',
      subtitle: 'バークリーの批判',
      icon: '⚠️',
      time: '5分',
      completed: false,
      unlocked: false,
    },
    {
      id: 'ch2',
      title: '第2章',
      subtitle: 'コーシーの挑戦',
      icon: '👨‍🏫',
      time: '7分',
      completed: false,
      unlocked: false,
    },
    {
      id: 'ch3-1',
      title: '第3-1章',
      subtitle: '関数の再定義',
      icon: '📐',
      time: '5分',
      completed: false,
      unlocked: false,
    },
    {
      id: 'ch3-2',
      title: '第3-2章',
      subtitle: '実数の厳密化',
      icon: '🔢',
      time: '7分',
      completed: false,
      unlocked: false,
    },
    {
      id: 'ch3-3',
      title: '第3-3章',
      subtitle: '集合論',
      icon: '📊',
      time: '5分',
      completed: false,
      unlocked: false,
    },
    {
      id: 'ch3-4',
      title: '第3-4章',
      subtitle: '記号論理学',
      icon: '🧠',
      time: '7分',
      completed: false,
      unlocked: false,
    },
    {
      id: 'ch4',
      title: '第4章',
      subtitle: 'ε-δ論法の誕生',
      icon: '✨',
      time: '7分',
      completed: false,
      unlocked: false,
    },
    {
      id: 'ch5-1',
      title: '第5-1章',
      subtitle: '実践（1次関数）',
      icon: '📐',
      time: '10分',
      completed: false,
      unlocked: false,
    },
    {
      id: 'ch5-2',
      title: '第5-2章',
      subtitle: '実践（2次関数）',
      icon: '📈',
      time: '10分',
      completed: false,
      unlocked: false,
    },
    {
      id: 'ch5-3',
      title: '第5-3章',
      subtitle: '実践（3次関数）',
      icon: '📊',
      time: '10分',
      completed: false,
      unlocked: false,
    },
    {
      id: 'ch6',
      title: '第6章',
      subtitle: '物理法則（伏線回収）',
      icon: '🚀',
      time: '15分',
      completed: false,
      unlocked: false,
    },
  ]);

  const handleChapterComplete = (chapterId: Chapter) => {
    setChapters((prev) =>
      prev.map((ch, index) => {
        if (ch.id === chapterId) {
          return { ...ch, completed: true };
        }
        // 次の章を解放
        if (index > 0 && prev[index - 1].id === chapterId) {
          return { ...ch, unlocked: true };
        }
        return ch;
      })
    );

    // 次の章へ自動遷移
    const currentIndex = chapters.findIndex((ch) => ch.id === chapterId);
    if (currentIndex < chapters.length - 1) {
      setTimeout(() => {
        setCurrentChapter(chapters[currentIndex + 1].id);
      }, 2000);
    }
  };

  const handleChapterSelect = (chapterId: Chapter) => {
    const chapter = chapters.find((ch) => ch.id === chapterId);
    if (chapter?.unlocked) {
      setCurrentChapter(chapterId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* ヘッダー & ナビゲーション */}
      <div className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <h1 className="text-xl md:text-2xl font-bold text-white mb-3 text-center">
            📚 ε-δ論法への旅（1638-1988: 350年の歴史）
          </h1>

          {/* チャプターナビゲーション */}
          <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-thin">
            {chapters.map((chapter) => (
              <button
                key={chapter.id}
                onClick={() => handleChapterSelect(chapter.id)}
                disabled={!chapter.unlocked}
                className={`flex-shrink-0 px-3 py-2 rounded-lg transition-all text-center min-w-[90px] ${
                  currentChapter === chapter.id
                    ? 'bg-blue-600 text-white scale-105 shadow-lg'
                    : chapter.completed
                    ? 'bg-green-900/50 text-green-400 hover:bg-green-900'
                    : chapter.unlocked
                    ? 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    : 'bg-slate-800 text-slate-600 cursor-not-allowed opacity-50'
                }`}
              >
                <div className="text-xl mb-1">{chapter.icon}</div>
                <div className="text-xs font-bold whitespace-nowrap">{chapter.title}</div>
                <div className="text-xs opacity-75 whitespace-nowrap">{chapter.subtitle}</div>
                {chapter.completed && (
                  <div className="text-xs text-green-400 mt-1">✓</div>
                )}
                {!chapter.unlocked && (
                  <div className="text-xs mt-1">🔒</div>
                )}
              </button>
            ))}
          </div>

          {/* 進捗バー */}
          <div className="mt-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-slate-400">進捗</span>
              <span className="text-xs font-bold text-blue-400">
                {chapters.filter((ch) => ch.completed).length} / {chapters.length}
              </span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-amber-500 via-blue-500 via-purple-500 to-green-500 h-full transition-all duration-500"
                style={{
                  width: `${
                    (chapters.filter((ch) => ch.completed).length /
                      chapters.length) *
                    100
                  }%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="container mx-auto px-4 py-8">
        {currentChapter === 'prologue' && (
          <Prologue onComplete={() => handleChapterComplete('prologue')} />
        )}

        {currentChapter === 'ch1' && (
          <Chapter1Berkeley onComplete={() => handleChapterComplete('ch1')} />
        )}

        {currentChapter === 'ch2' && (
          <Chapter2Cauchy onComplete={() => handleChapterComplete('ch2')} />
        )}

        {currentChapter === 'ch3-1' && (
          <Chapter3Functions onComplete={() => handleChapterComplete('ch3-1')} />
        )}

        {currentChapter === 'ch3-2' && (
          <Chapter2RealNumbers
            onComplete={() => handleChapterComplete('ch3-2')}
          />
        )}

        {currentChapter === 'ch3-3' && (
          <Chapter2Sets onComplete={() => handleChapterComplete('ch3-3')} />
        )}

        {currentChapter === 'ch3-4' && (
          <Chapter2Logic onComplete={() => handleChapterComplete('ch3-4')} />
        )}

        {currentChapter === 'ch4' && (
          <Chapter3Birth onComplete={() => handleChapterComplete('ch4')} />
        )}

        {currentChapter === 'ch5-1' && (
          <EpsilonDeltaGame
            config={{
              name: '📐 第5-1章: ε-δ実践（1次関数）',
              f: (x) => 2 * x,
              derivative: () => 2,
              a: 3.0,
              L: 6.0,
              xMin: 0,
              xMax: 4,
              yMin: 0,
              yMax: 8,
              hint: '1次関数の傾きは一定で2。だから δ = ε/2 が最適！',
            }}
            onComplete={() => handleChapterComplete('ch5-1')}
          />
        )}

        {currentChapter === 'ch5-2' && (
          <EpsilonDeltaGame
            config={{
              name: '📈 第5-2章: ε-δ実践（2次関数）',
              f: (x) => x * x,
              derivative: (x) => 2 * x,
              a: 2.0,
              L: 4.0,
              xMin: 0,
              xMax: 4,
              yMin: 0,
              yMax: 16,
              hint: 'x=2での傾きは f\'(2)=4。傾きが変化する関数では、極限点での傾きを使う！',
            }}
            onComplete={() => handleChapterComplete('ch5-2')}
          />
        )}

        {currentChapter === 'ch5-3' && (
          <EpsilonDeltaGame
            config={{
              name: '📊 第5-3章: ε-δ実践（3次関数）',
              f: (x) => x * x * x,
              derivative: (x) => 3 * x * x,
              a: 2.0,
              L: 8.0,
              xMin: 0,
              xMax: 3,
              yMin: 0,
              yMax: 27,
              hint: 'x=2での傾きは f\'(2)=12。傾きが急なほど、δは小さく必要！',
            }}
            onComplete={() => handleChapterComplete('ch5-3')}
          />
        )}

        {currentChapter === 'ch6' && (
          <Chapter5Physics onComplete={() => handleChapterComplete('ch6')} />
        )}
      </div>
    </div>
  );
}
