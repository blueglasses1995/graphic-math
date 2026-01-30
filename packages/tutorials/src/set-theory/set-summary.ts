import { Tutorial } from '../types';

export const setSummaryTutorial: Tutorial = {
  id: 'set-summary',
  title: '集合のまとめ',
  description: '集合論の基礎を総復習し、全体像をつかむ',
  category: 'set-theory',
  steps: [
    {
      id: 'hook',
      title: '集合論の世界地図',
      content:
        'これまで学んだ概念が、ネットワーク図として表示されています。\n\n集合→演算→関係→無限→公理。\n\nすべてが繋がった美しい体系です。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
        circles: [{ radius: 1, color: '#42a5f5', plane: 'xy' }, { radius: 1, color: '#ef5350', plane: 'xy' }],
      },
      customScene: 'set-summary-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '概念を探索しよう',
      content:
        '各概念をクリックして、定義と具体例を確認しましょう。\n\n忘れた部分があれば、ここで復習できます。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'set-summary-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-operations',
      title: '演算のまとめ',
      content:
        '集合の基本演算：\n\n・∪ 和集合（OR）\n・∩ 共通部分（AND）\n・\\ 差集合\n・ᶜ 補集合（NOT）\n・× 直積（ペア）\n・P( ) 冪集合（すべての部分集合）\n\nド・モルガンの法則で ∪ と ∩ が補集合で入れ替わります。',
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
      id: 'example-structures',
      title: '構造のまとめ',
      content:
        '集合に構造を与える概念：\n\n・写像: 集合間の対応関係（単射・全射・全単射）\n・同値関係: 分類（反射・対称・推移）\n・順序関係: 大小（反射・反対称・推移）\n\n無限の深淵：\n・可算無限 ℵ₀（自然数と同じ大きさ）\n・非可算無限 𝔠（実数の大きさ）\n・カントールの対角線論法',
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
      id: 'predict',
      title: '総合クイズ',
      content: 'これまでの知識を使って答えてみましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '次のうち正しいものは？',
        options: [
          { id: 'a', label: '有理数は非可算無限', correct: false },
          { id: 'b', label: '∅ ∈ {∅} かつ ∅ ⊆ {∅}', correct: true },
          { id: 'c', label: 'A ∪ B = A ∩ B は常に成り立つ', correct: false },
          { id: 'd', label: '全射ならば逆写像が一意に存在する', correct: false },
        ],
        explanation:
          '正解は ∅ ∈ {∅} かつ ∅ ⊆ {∅} です。\n\n∅ は {∅} の要素（∈）であり、同時にすべての集合の部分集合（⊆）です。\n有理数は可算無限、A∪B=A∩BはA=Bのときのみ、全射の右逆写像は一意とは限りません。',
      },
    },
    {
      id: 'alternate',
      title: '集合論の意義',
      content:
        '集合論は数学の「共通言語」です。\n\n・代数学: 群、環、体はすべて集合＋演算\n・解析学: 実数の構成、位相空間\n・計算機科学: 型理論、データベース\n・論理学: 命題と集合の対応\n\nカントールが19世紀末に始めた集合論は、20世紀の数学の基礎となりました。',
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
      title: 'おわりに',
      content:
        '集合論の基礎をすべて学びました！\n\n次のステップ：\n・実践問題でスキルを磨く\n・ベン図の問題を解く\n・データベースや確率への応用を学ぶ\n\n実践編のチュートリアルに進みましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'set-summary-summary',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
