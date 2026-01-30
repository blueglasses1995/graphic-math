import { Tutorial } from '../types';

export const homologicalAlgebraTutorial: Tutorial = {
  id: 'homological-algebra',
  title: 'ホモロジー代数入門',
  category: 'category-theory',
  description: 'チェイン複体とホモロジーを圏論的に学ぶ',
  steps: [
    {
      id: 'hook',
      title: '代数で「穴」を測る',
      stepType: 'animation',
      content: 'ホモロジーは「核÷像」で代数的構造の「穴」を測ります。チェイン複体から計算されるホモロジー群の意味をアニメーションで直感的に理解しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'touch',
      title: 'チェイン複体とホモロジー',
      stepType: 'interactive',
      content: 'チェイン複体 ...→C₂→C₁→C₀→... の境界射を配置し、H_n = ker(∂_n)/im(∂_{n+1}) を計算してみましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
    },
    {
      id: 'example-1',
      title: 'チェイン複体',
      stepType: 'explanation',
      content: 'チェイン複体はアーベル圏の対象の列 ...→C_{n+1}→C_n→C_{n-1}→... で、連続する境界射の合成が0（∂_n∘∂_{n+1}=0）を満たすものです。この条件は im(∂_{n+1}) ⊂ ker(∂_n) を意味し、商 H_n = ker/im（ホモロジー群）が定義できます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'example-2',
      title: 'ホモロジーと完全列',
      stepType: 'explanation',
      content: '短完全列 0→A→B→C→0 からチェイン複体の短完全列を得ると、長完全ホモロジー列 ...→H_n(A)→H_n(B)→H_n(C)→H_{n-1}(A)→... が得られます。接続準同型が異なる次元のホモロジーを結びつけます。これはホモロジー代数の核心定理です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'predict',
      title: 'ホモロジーの確認',
      stepType: 'quiz',
      content: 'ホモロジーの基本を確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      quiz: {
        question: 'チェイン複体の境界射が満たすべき条件は？',
        options: [
          { id: 'a', label: '∂∘∂ = id', correct: false },
          { id: 'b', label: '∂∘∂ = 0', correct: true },
          { id: 'c', label: '∂∘∂ = ∂', correct: false },
          { id: 'd', label: '∂は同型射', correct: false }
        ],
        explanation: '∂∘∂ = 0 がチェイン複体の基本条件です。これにより im ⊂ ker が保証され、商 H = ker/im（ホモロジー）が定義できます。'
      }
    },
    {
      id: 'alternate',
      title: '導来関手',
      stepType: 'explanation',
      content: '左完全関手Fの右導来関手R^nFは、入射分解を取ってFを適用し、ホモロジーを計算します。Ext, Tor, 層コホモロジーなどが導来関手の例です。導来圏はチェイン複体の「ホモトピー不変な」圏で、現代的ホモロジー代数の基盤です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'summary',
      title: 'まとめ：ホモロジー代数の力',
      stepType: 'interactive',
      content: 'ホモロジー代数はアーベル圏の強力なツールです。チェイン複体とホモロジーにより代数的構造の「差分情報」を系統的に抽出できます。位相幾何、代数幾何、表現論で不可欠です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
    }
  ]
};
