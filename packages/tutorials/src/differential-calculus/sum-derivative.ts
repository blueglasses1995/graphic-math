import { Tutorial } from '../types';

export const sumDerivativeTutorial: Tutorial = {
  id: 'sum-derivative',
  title: '和の微分',
  description: '関数の和・差の微分法則を理解する。項ごとに微分できる便利さ',
  category: 'differential-calculus',
  steps: [
    {
      id: 'hook',
      title: '足し算と微分は仲良し',
      content:
        'f(x) + g(x) を微分すると f\'(x) + g\'(x)。足し算を微分すると、微分の足し算になります。このシンプルな性質が、複雑な式をバラバラに処理できる理由です。',
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
        'f(x) と g(x) それぞれの導関数と、f+g の導関数を比べてみてください。色分けされたグラフを切り替えて確認しましょう。',
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
      title: '具体例：x² + x³',
      content:
        'f(x) = x² + x³ を微分します。和の法則より (x²+x³)\' = (x²)\' + (x³)\' = 2x + 3x²。各項を独立に微分して足すだけです。',
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
      title: '差も同じ',
      content:
        'f(x) = x³ − 5x² + 2x − 7 を微分すると 3x² − 10x + 2。各項を独立に微分します。定数 −7 の微分はゼロ。引き算でも同じルールが使えます。',
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
        'f(x) = 4x³ + 2x² − x + 10 の導関数は？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '(4x³ + 2x² − x + 10)\' = ?',
        options: [
          { id: 'a', label: '12x² + 4x − 1', correct: true },
          { id: 'b', label: '12x² + 4x + 10', correct: false },
          { id: 'c', label: '4x² + 2x − 1', correct: false },
          { id: 'd', label: '12x² + 2x − 1', correct: false },
        ],
        explanation:
          '各項を微分: 4·3x² + 2·2x − 1 + 0 = 12x² + 4x − 1。定数10は消えます。',
      },
    },
    {
      id: 'alternate',
      title: '別の視点：線形性',
      content:
        '(af+bg)\' = af\'+bg\' が成り立ちます。これを「微分の線形性」と呼びます。定数倍と和の法則を合わせたもの。線形性があるおかげで、多項式は項ごとに処理できるのです。',
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
        '(f+g)\' = f\' + g\'、(f−g)\' = f\' − g\'。微分は足し算・引き算を素通しにします。\n\nでは掛け算はどうでしょう？(f·g)\' = f\'·g\' ではありません。次は「積の微分」を学びましょう。',
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
