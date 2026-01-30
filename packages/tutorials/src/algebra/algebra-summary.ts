import { Tutorial } from '../types';

export const algebraSummaryTutorial: Tutorial = {
  id: 'algebra-summary',
  title: '代数学のまとめ',
  description: '群・環・体の関係を俯瞰し、代数学の全体像を把握する',
  category: 'algebra',
  steps: [
    {
      id: 'hook',
      title: '代数構造の階層',
      content:
        'ここまで学んだ代数構造を俯瞰しましょう。\n\n群 → 環 → 体\n\nこの順に「できること」が増えていきます。\n\n群: 1つの演算（逆元あり）\n環: 2つの演算（加法の逆元あり）\n体: 2つの演算（両方の逆元あり）',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'algebra-summary-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'comparison',
      title: '構造の比較',
      content:
        '各構造に必要な条件:\n\n群: 閉性 + 結合 + 単位元 + 逆元\n環: 加法群 + 乗法の結合 + 分配法則\n整域: 環 + 可換 + 零因子なし\n体: 整域 + 乗法の逆元\n\n具体例:\n  群: (ℤ, +), Sₙ\n  環: ℤ, ℤ[x]\n  整域: ℤ\n  体: ℚ, ℝ, ℂ, GF(p)',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'key-ideas',
      title: '代数学の核心的アイデア',
      content:
        '代数学を貫く重要なアイデア:\n\n1. 抽象化: 具体的な計算から構造を抽出\n2. 同型: 構造が同じものを「同じ」と見なす\n3. 準同型: 構造を保つ写像で群を比較\n4. 剰余構造: 「大きな」構造から「小さな」構造を作る\n5. 分類: 同型の意味で構造を分類する',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'connections',
      title: '他分野とのつながり',
      content:
        '代数学は数学全体に浸透しています:\n\n数論: 素数の性質は環と体で理解される\n幾何学: 対称性は群で記述される\n位相幾何: 基本群、ホモロジー群\n物理学: 素粒子の分類にリー群を使用\n暗号理論: 有限体と楕円曲線\n\n代数学は「構造の科学」として、あらゆる分野の基盤となっています。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'roadmap',
      title: 'さらなる学びへ',
      content:
        '基礎編で学んだことを土台に、実践編では:\n\nルービックキューブの群構造\nRSA暗号の仕組み\n結晶と壁紙の対称群\n方程式の可解性（ガロア理論）\n楕円曲線の群構造\n\nなど、代数学が実世界でどう活躍するかを見ていきます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'quiz',
      title: '確認クイズ',
      content: '代数構造を確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '次のうち正しいものはどれですか？',
        options: [
          { id: 'a', label: 'すべての環は体である', correct: false },
          { id: 'b', label: 'すべての体は環である', correct: true },
          { id: 'c', label: 'すべての群は環である', correct: false },
          { id: 'd', label: 'すべての体は群である', correct: false },
        ],
        explanation:
          '正解は「すべての体は環である」です。体は環に「乗法の逆元」の条件を追加したものなので、体は必ず環です。逆は成り立ちません（ℤ は環ですが体ではない）。',
      },
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        '代数学の基礎を学びました:\n\n群: 対称性の数学、1つの演算\n環: 足し算と掛け算、分配法則\n体: 四則演算が自由にできる\n\n核心的概念:\n  準同型 → 同型 → 分類\n  部分群 → イデアル → 剰余構造\n\n実践編で、これらの概念が実世界でどう使われるかを体験しましょう！',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'algebra-summary-summary',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
