import { Tutorial } from '../types';

export const xCubedDerivativeTutorial: Tutorial = {
  id: 'x-cubed-derivative',
  title: 'x³の微分',
  description: 'x³ を微分して 3x² を導き、べき乗の微分法則を見出す',
  category: 'differential-calculus',
  steps: [
    {
      id: 'hook',
      title: 'S字カーブの傾き',
      content:
        'y = x³ はS字型のグラフ。左でも右でも急に立ち上がりますが、原点付近では平らです。この傾きの変化をアニメーションで確認しましょう。',
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
        'x の位置を動かして接線の傾きを観察してください。x=1 で傾き 3、x=2 で傾き 12。傾きの変化が x² に比べて激しいことに注目です。',
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
      title: '定義から計算',
      content:
        '[(x+h)³−x³]/h を展開します。(x+h)³ = x³+3x²h+3xh²+h³。差をとると 3x²h+3xh²+h³。h で割って 3x²+3xh+h²。h→0 で f\'(x) = 3x²。',
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
      title: 'パターン発見：べきの法則',
      content:
        'x² → 2x¹、x³ → 3x²。パターンが見えます。xⁿ → nxⁿ⁻¹。指数を係数に下ろし、指数を1減らす。これが「べきの微分法則（パワールール）」です。',
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
        'パワールールを使って、x⁴ の導関数は何でしょう？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '(x⁴)\' = ?',
        options: [
          { id: 'a', label: '4x⁴', correct: false },
          { id: 'b', label: '4x³', correct: true },
          { id: 'c', label: '3x⁴', correct: false },
          { id: 'd', label: 'x³', correct: false },
        ],
        explanation:
          'パワールール xⁿ → nxⁿ⁻¹ より、x⁴ → 4x³ です。指数4を前に出し、指数を3に下げます。',
      },
    },
    {
      id: 'alternate',
      title: '別の視点：立体の体積',
      content:
        '一辺 x の立方体の体積は x³。辺を Δx だけ伸ばすと、体積の増分は主に「3つの面 × Δx」≈ 3x²Δx。体積の変化率 = 3x²。幾何学的にも微分が見えるのです。',
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
        '(x³)\' = 3x²。一般に (xⁿ)\' = nxⁿ⁻¹（パワールール）。微分の最も基本的な公式です。\n\n次は、定数や直線の微分を確認して、基礎を固めましょう。',
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
