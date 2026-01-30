import { Tutorial } from '../types';

export const pdeOverviewTutorial: Tutorial = {
  id: 'pde-overview',
  title: 'PDEの全体像',
  description: '偏微分方程式の世界を俯瞰し、各分野との繋がりを理解する',
  category: 'pde',
  steps: [
    {
      id: 'hook',
      title: 'PDEが描く世界地図',
      content:
        '熱・波・流体・量子・金融…PDEはあらゆる科学の言語です。PDEの分類と応用の全体像をアニメーションで俯瞰しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'pde-overview-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう：分野を探索',
      content:
        '各分野のノードをタッチして、そこで使われるPDEと応用例を確認してください。PDEの世界の広がりを体感しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'pde-overview-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '線形PDEと非線形PDE',
      content:
        '線形PDE（熱、波、ラプラス、シュレーディンガー）は重ね合わせの原理が成り立ち、フーリエ解析で体系的に解けます。非線形PDE（ナビエ・ストークス、バーガーズ）はずっと困難で、数値解法や特殊な手法が必要です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '現代のPDE研究',
      content:
        '機械学習とPDEの融合（PINN：Physics-Informed Neural Network）、確率PDEと不確実性定量化、幾何学的フローと位相変化など、PDEは現在も活発に研究されている数学の中心分野です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：PDEの全体像',
      content: 'PDEの学習で最も重要な概念はどれですか？',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '線形PDEの解法で最も重要な原理はどれですか？',
        options: [
          { id: 'a', label: 'カオス理論', correct: false },
          { id: 'b', label: '重ね合わせの原理', correct: true },
          { id: 'c', label: '相対性理論', correct: false },
          { id: 'd', label: '不確定性原理', correct: false },
        ],
        explanation:
          '線形PDEでは重ね合わせの原理が成り立ちます。これにより、複雑な解を単純な解の和として構成できます。フーリエ解析、グリーン関数、変数分離法すべてがこの原理に基づいています。',
      },
    },
    {
      id: 'alternate',
      title: '別の見方：PDEと他分野の融合',
      content:
        'PDEは純粋数学（微分幾何、代数幾何）とも深く結びついています。リッチフロー（PDEの一種）がポアンカレ予想の証明に使われたことは、その象徴です。PDEは数学の諸分野を繋ぐ架け橋です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：PDEの旅を振り返る',
      content:
        '基本方程式の型を選び、パラメータを変えて、PDEの世界を自由に探索しましょう。ここが新しい学びへの出発点です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'pde-overview-summary',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'equationType', min: 1, max: 5, step: 1, initial: 1 },
          { name: 'complexity', min: 1, max: 3, step: 1, initial: 1 },
        ],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
