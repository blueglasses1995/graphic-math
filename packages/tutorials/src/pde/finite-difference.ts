import { Tutorial } from '../types';

export const finiteDifferenceTutorial: Tutorial = {
  id: 'finite-difference',
  title: '有限差分法',
  description: '有限差分法による微分の近似と数値解法を学ぶ',
  category: 'pde',
  steps: [
    {
      id: 'hook',
      title: '微分を引き算で近似する',
      content:
        '∂u/∂x ≈ (u(x+Δx) - u(x-Δx))/(2Δx)。微分を隣接する格子点の差で近似するのが有限差分法です。近似の精度をアニメーションで見てみましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'finite-difference-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう：Δxを変えて精度を確認',
      content:
        'Δxの大きさを変えて、差分近似が真の微分にどれだけ近いか確認してください。小さいほど正確ですが、丸め誤差に注意。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'finite-difference-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '前進・中心・後退差分',
      content:
        '前進差分：(u_{i+1}-u_i)/Δx（1次精度）。中心差分：(u_{i+1}-u_{i-1})/(2Δx)（2次精度）。後退差分：(u_i-u_{i-1})/Δx（1次精度）。2階微分は (u_{i+1}-2u_i+u_{i-1})/Δx² です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '熱方程式の差分スキーム',
      content:
        'FTCS（前進時間中心空間）スキーム：(uᵢⁿ⁺¹ - uᵢⁿ)/Δt = α(uᵢ₊₁ⁿ - 2uᵢⁿ + uᵢ₋₁ⁿ)/Δx²。次の時刻の値を明示的に計算できます。ただし安定性条件 αΔt/Δx² ≤ 1/2 が必要です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：有限差分法',
      content: '中心差分の精度は何次ですか？',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '1階微分の中心差分 (u_{i+1}-u_{i-1})/(2Δx) の精度は？',
        options: [
          { id: 'a', label: 'O(Δx)：1次精度', correct: false },
          { id: 'b', label: 'O(Δx²)：2次精度', correct: true },
          { id: 'c', label: 'O(Δx³)：3次精度', correct: false },
          { id: 'd', label: '精度は保証されない', correct: false },
        ],
        explanation:
          'テイラー展開で確認すると、中心差分の誤差は O(Δx²) です。前進・後退差分は O(Δx) なので、中心差分はより高精度です。',
      },
    },
    {
      id: 'alternate',
      title: '別の見方：高次の差分公式',
      content:
        'より多くの格子点を使うと、より高次の差分公式が得られます。例えば5点公式 (-u_{i+2}+8u_{i+1}-8u_{i-1}+u_{i-2})/(12Δx) は4次精度です。精度と計算量のトレードオフがあります。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：有限差分法を体感する',
      content:
        '格子幅と差分の種類を変えて、近似精度の違いを確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'finite-difference-summary',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'deltaX', min: 0.01, max: 1, step: 0.01, initial: 0.1 },
          { name: 'position', min: -3, max: 3, step: 0.1, initial: 0 },
        ],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
