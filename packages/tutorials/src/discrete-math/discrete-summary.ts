import { Tutorial } from '../types';

export const discreteSummaryTutorial: Tutorial = {
  id: 'discrete-summary',
  title: '離散数学のまとめ',
  description: 'グラフ理論・組合せ論・論理学の全体像を振り返る',
  category: 'discrete-math',
  steps: [
    {
      id: 'hook',
      title: '3つの柱',
      content:
        '離散数学は大きく3つの柱で構成されています：\n\n1. グラフ理論：つながりの数学\n2. 組合せ論：数え上げの数学\n3. 論理学：推論の数学\n\nこれらはコンピュータサイエンスの基盤であり、互いに深く関連しています。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'discrete-summary-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'graph-review',
      title: 'グラフ理論の振り返り',
      content:
        'ケーニヒスベルクの橋から始まったグラフ理論：\n\n・頂点と辺で「つながり」を抽象化\n・次数、パス、サイクル、連結性\n・木と全域木\n・最短パス（ダイクストラ法）\n・彩色、平面性、マッチング\n\nSNS分析、ルート検索、ネットワーク設計に直結します。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'combinatorics-review',
      title: '組合せ論の振り返り',
      content:
        '数え上げの基本から高度なテクニックまで：\n\n・和の法則と積の法則\n・順列と組合せ\n・二項係数とパスカルの三角形\n・包除原理\n・鳩の巣原理\n\n確率、統計、暗号理論、アルゴリズムの計算量分析に不可欠です。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'logic-review',
      title: '論理学の振り返り',
      content:
        '厳密な推論の道具：\n\n・命題論理：真偽と論理結合子\n・述語論理：量化子 ∀ と ∃\n・証明技法：帰納法、背理法、対偶\n\nプログラミングの条件分岐、型理論、形式検証、\nデータベース（SQL）の理論的基盤です。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'quiz',
      title: '総合クイズ',
      content: '離散数学全体の理解を確認しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '次のうち、離散数学の範囲に含まれないものは？',
        options: [
          { id: 'a', label: 'グラフ理論', correct: false },
          { id: 'b', label: '微分積分', correct: true },
          { id: 'c', label: '組合せ論', correct: false },
          { id: 'd', label: '命題論理', correct: false },
        ],
        explanation:
          '正解は微分積分です。微分積分は連続量を扱う解析学の分野です。離散数学は「飛び飛びの値」を扱い、グラフ理論・組合せ論・論理学が主な柱です。',
      },
    },
    {
      id: 'connections',
      title: '分野間のつながり',
      content:
        '離散数学の各分野は深くつながっています：\n\n・グラフの数え上げ ← 組合せ論\n・グラフの性質の証明 ← 論理学\n・組合せ論の公式の証明 ← 帰納法\n・アルゴリズムの正しさ ← 論理学 + 帰納法\n\nこれらを統合的に理解することで、真の問題解決力が身につきます。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめと次のステップ',
      content:
        '離散数学は「飛び飛びの構造」を扱う数学です。\n\n・グラフ理論でつながりを分析\n・組合せ論で場合の数を数え\n・論理学で厳密に推論する\n\nこれらはすべてコンピュータサイエンスの言語です。\n\n実践編では、これらの知識を具体的な問題に応用していきます。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'discrete-summary-summary',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
