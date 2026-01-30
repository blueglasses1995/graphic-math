import { Tutorial } from '../types';

export const finiteGroupClassificationTutorial: Tutorial = {
  id: 'finite-group-classification',
  title: '有限群の分類',
  description: '有限単純群の分類定理と群の構造解析を学ぶ',
  category: 'algebra',
  steps: [
    {
      id: 'hook',
      title: '数学の巨大定理',
      content:
        '有限単純群の分類 ── 数学史上最大の定理。\n\n証明は数百の論文、1万ページ以上。\n100人以上の数学者が50年以上かけて完成させました。\n\n全ての有限群は「原子」（単純群）に分解できます。\nその原子の完全なリストが存在するのです。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'finite-group-classification-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '組成列を作る',
      content:
        '群を単純群に分解する過程を見てみましょう。\n\nS₄ の組成列:\nS₄ ▷ A₄ ▷ V₄ ▷ Z₂ ▷ {e}\n\n組成因子: S₄/A₄ ≅ Z₂, A₄/V₄ ≅ Z₃, V₄/Z₂ ≅ Z₂, Z₂/{e} ≅ Z₂\n\n群を選んで組成列を構成してみましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'finite-group-classification-interactive',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '有限単純群の分類',
      content:
        'すべての有限単純群は以下のいずれかに分類されます:\n\n1. 巡回群 Z_p（p は素数）\n2. 交代群 A_n（n ≥ 5）\n3. リー型の群（16族）\n4. 26個の散在型単純群\n\n散在型にはモンスター群（位数 ≈ 8×10⁵³）など\n不思議な群が含まれます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: 'ジョルダン・ヘルダーの定理',
      content:
        'ジョルダン・ヘルダーの定理:\n\n有限群の組成列の組成因子は（順序と同型を除いて）一意。\n\nつまり「分解の仕方」は本質的に一通り。\n\n群 → 組成因子（単純群のリスト）\n\nこれは整数の素因数分解の一意性の一般化です。\n12 = 2² × 3 が一通りであるように。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: '確認クイズ',
      content: '有限群の分類を確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '散在型単純群はいくつありますか？',
        options: [
          { id: 'a', label: '5個', correct: false },
          { id: 'b', label: '16個', correct: false },
          { id: 'c', label: '26個', correct: true },
          { id: 'd', label: '無限個', correct: false },
        ],
        explanation:
          '散在型単純群は正確に26個あります。最大のものはモンスター群（位数 ≈ 8×10⁵³）で、最小はマシュー群M₁₁（位数7920）です。',
      },
    },
    {
      id: 'alternate',
      title: 'モンスター群とムーンシャイン',
      content:
        'モンスター群 M は位数が約 8×10⁵³ の散在型単純群です。\n\nモンストラス・ムーンシャイン予想:\nモンスター群の表現の次元と、\nモジュラー関数 j(τ) のフーリエ係数が一致する！\n\n196884 = 196883 + 1\n\nこの「あり得ない一致」は深い数学的関係を示しており、\n頂点作用素代数で説明されます（ボーチャーズ、1998年フィールズ賞）。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：有限群の分類',
      content:
        '有限群の分類:\n\n• 組成列で単純群に分解（ジョルダン・ヘルダーの定理）\n• 有限単純群: 巡回群、交代群、リー型、26個の散在型\n• 分類定理の証明は数学史上最大の共同作業\n• モンスター群とムーンシャインの神秘的な繋がり\n\n代数学の最も壮大な成果の一つです。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'finite-group-classification-summary',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
