import { Tutorial } from '../types';

export const pdeBasicsSummaryTutorial: Tutorial = {
  id: 'pde-basics-summary',
  title: 'PDEの基本まとめ',
  description: 'これまで学んだPDEの基本を総復習する',
  category: 'pde',
  steps: [
    {
      id: 'hook',
      title: '3つの基本方程式を振り返る',
      content:
        '熱方程式（放物型）、波動方程式（双曲型）、ラプラス方程式（楕円型）。3つの基本PDEの解が同時に変化するアニメーションで、それぞれの特徴を比較しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'pde-basics-summary-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう：方程式を切り替え',
      content:
        '方程式の種類を切り替えて、同じ初期条件でも全く異なる時間発展をすることを体感してください。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'pde-basics-summary-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '分類と物理的意味',
      content:
        '放物型（∂u/∂t = α∇²u）：拡散、不可逆。双曲型（∂²u/∂t² = c²∇²u）：波の伝播、可逆。楕円型（∇²u = 0）：定常状態、時間なし。分類は方程式の係数行列の固有値で決まります。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '解法の見取り図',
      content:
        '解析的解法：変数分離法、フーリエ級数、グリーン関数。数値的解法：有限差分法、有限要素法。各方法に適した場面があり、実用ではこれらを組み合わせます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：PDE総復習',
      content: '以下のPDEの分類として正しいものはどれですか？',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '熱方程式 ∂u/∂t = α∇²u はどの型に分類されますか？',
        options: [
          { id: 'a', label: '楕円型', correct: false },
          { id: 'b', label: '双曲型', correct: false },
          { id: 'c', label: '放物型', correct: true },
          { id: 'd', label: '混合型', correct: false },
        ],
        explanation:
          '熱方程式は時間の1階微分と空間の2階微分を含む放物型PDEです。拡散過程を記述します。',
      },
    },
    {
      id: 'alternate',
      title: '別の見方：適切な問題設定',
      content:
        '適切な初期条件・境界条件がなければ、PDEの解は一意に定まりません（不良設定問題）。方程式の型に応じて必要な条件数が異なります。アダマールの意味での「適切設定」が重要です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：PDEの基本を確認する',
      content:
        '方程式の型、パラメータ、初期条件を自由に変えて、PDEの世界を総復習しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'pde-basics-summary-summary',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'equationType', min: 1, max: 3, step: 1, initial: 1 },
          { name: 'parameter', min: 0.1, max: 3, step: 0.1, initial: 1 },
        ],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
