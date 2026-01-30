import { Tutorial } from '../types';

export const quantumCategoryTutorial: Tutorial = {
  id: 'quantum-category',
  title: '量子力学と圏',
  category: 'category-theory',
  description: '量子力学のモノイダル圏による記述を学ぶ',
  steps: [
    {
      id: 'hook',
      title: '量子の圏',
      stepType: 'animation',
      content: 'ヒルベルト空間を対象、線形写像を射とする圏FdHilbは量子力学の舞台です。テンソル積によるモノイダル構造が量子もつれを記述します。この構造をアニメーションで見ましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'quantum-category-animation',
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'touch',
      title: '量子回路を構成',
      stepType: 'interactive',
      content: '量子ゲート（射）をつないで量子回路を構成してみましょう。テンソル積（並列）と合成（直列）の2つの「つなぎ方」を体験できます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'quantum-category-interactive',
      interactive: true,
      nextCondition: 'interaction',
    },
    {
      id: 'example-1',
      title: 'モノイダル圏',
      stepType: 'explanation',
      content: 'モノイダル圏は圏C、テンソル積 ⊗: C×C→C、単位対象Iの組で、結合律と単位律を同型の意味で満たすものです。FdHilb（有限次元ヒルベルト空間の圏）はテンソル積によるモノイダル圏で、量子系の合成を記述します。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'example-2',
      title: '圏論的量子力学（CQM）',
      stepType: 'explanation',
      content: 'Abramsky-Coeckeの圏論的量子力学では、量子プロセスをダガー・コンパクト圏で記述します。ストリング図（string diagram）により量子もつれ、テレポーテーション、量子プロトコルを視覚的に推論できます。ZX計算は量子回路最適化の実用的ツールです。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'predict',
      title: '量子と圏の対応を確認',
      stepType: 'quiz',
      content: '量子力学の圏論的記述を確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      quiz: {
        question: '量子系の合成（複合系）は圏論的に何に対応しますか？',
        options: [
          { id: 'a', label: '射の合成', correct: false },
          { id: 'b', label: '積（直積）', correct: false },
          { id: 'c', label: 'テンソル積（モノイダル積）', correct: true },
          { id: 'd', label: '余積', correct: false }
        ],
        explanation: '量子系の合成はテンソル積 ⊗ で記述されます。これはモノイダル圏のモノイダル積に対応します。射の合成は量子プロセスの逐次実行に対応します。'
      }
    },
    {
      id: 'alternate',
      title: 'TQFT（位相的量子場の理論）',
      stepType: 'explanation',
      content: 'TQFTはコボルディズム圏からベクトル空間の圏への対称モノイダル関手です。(n+1)次元コボルディズム（n次元多様体間の境界）を線形写像に移します。Atiyahの公理化により、位相不変量が圏論的に構成されます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'summary',
      title: 'まとめ：量子と圏の交差',
      stepType: 'interactive',
      content: 'モノイダル圏の構造が量子力学を自然に記述します。ストリング図による視覚的推論は量子情報理論の強力なツールです。圏論は量子コンピューティングの理論的基盤としても注目されています。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'quantum-category-summary',
      interactive: true,
      nextCondition: 'interaction',
    }
  ]
};
