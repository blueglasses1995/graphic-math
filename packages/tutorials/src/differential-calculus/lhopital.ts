import { Tutorial } from '../types';

export const lhopitalTutorial: Tutorial = {
  id: 'lhopital',
  title: '【実践】ロピタルの法則',
  description: '0/0 や ∞/∞ の不定形極限を微分で求めるロピタルの法則を学ぶ',
  category: 'differential-calculus',
  steps: [
    {
      id: 'hook',
      title: '0/0 を解決する',
      content:
        'lim(x→0) sin(x)/x は 0/0 の不定形。でも答えは 1 です。こういう不定形の極限を、分子・分母をそれぞれ微分するだけで求められる法則があります。',
      customScene: 'lhopital-animation',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう',
      content:
        'x を 0 に近づけて、f(x)/g(x) と f\'(x)/g\'(x) の値を比べてください。不定形に近づくほど、両者が一致することが見えます。',
      customScene: 'lhopital-interactive',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'ロピタルの法則',
      content:
        'lim f(x)/g(x) が 0/0 または ∞/∞ のとき、lim f(x)/g(x) = lim f\'(x)/g\'(x)（右辺の極限が存在すれば）。分子・分母を「それぞれ別々に」微分します。商の微分ではないので注意。',
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
      id: 'example-2',
      title: '具体例',
      content:
        'lim(x→0) (eˣ−1)/x → 0/0 不定形。ロピタル: lim eˣ/1 = e⁰ = 1。\nlim(x→∞) x/eˣ → ∞/∞ 不定形。ロピタル: lim 1/eˣ = 0。指数関数は多項式より速く増大します。',
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
      id: 'predict',
      title: '予測してみよう',
      content:
        'lim(x→0) (1−cos x)/x² = ?',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'lim(x→0) (1−cos x)/x² は？',
        options: [
          { id: 'a', label: '0', correct: false },
          { id: 'b', label: '1/2', correct: true },
          { id: 'c', label: '1', correct: false },
          { id: 'd', label: '∞', correct: false },
        ],
        explanation:
          '0/0 不定形。ロピタル1回: sin(x)/(2x) → まだ 0/0。もう1回: cos(x)/2 → cos(0)/2 = 1/2。',
      },
    },
    {
      id: 'alternate',
      title: '別の視点：テイラー展開との関係',
      content:
        '1−cos x ≈ x²/2（マクローリン展開）なので (1−cos x)/x² ≈ (x²/2)/x² = 1/2。テイラー展開でも同じ答えが得られます。ロピタルとテイラーは不定形を解くための二刀流です。',
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
      id: 'summary',
      title: 'まとめ',
      content:
        'ロピタルの法則: 0/0 や ∞/∞ の極限は、分子・分母を各々微分して再度極限を取る。必要なら繰り返し適用できます。\n\n次は「微分方程式の入口」を覗いてみましょう。',
      customScene: 'lhopital-summary',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
