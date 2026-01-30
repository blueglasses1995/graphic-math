import { Tutorial } from '../types';

export const expTrigConnectionTutorial: Tutorial = {
  id: 'exp-trig-connection',
  title: '指数関数と三角関数',
  description: '指数関数と三角関数の深いつながりを探る',
  category: 'exponential',
  steps: [
    {
      id: 'hook',
      title: '回転と成長の統一',
      content:
        '指数関数は「成長」、三角関数は「回転」。一見無関係な2つが、複素数を通じて統一されます。eⁱθが単位円上を回転する様子と、cosθ・sinθの波が同時に生まれるアニメーションを見てみましょう。',
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
      title: '回転と波を操ろう',
      content:
        'θを変えながら、複素平面上の円運動と、実軸・虚軸への射影（cos, sin）の関係を確認しましょう。',
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
      title: 'cosとsinをeで表す',
      content:
        'オイラーの公式から：\n\neⁱθ = cosθ + i·sinθ\ne⁻ⁱθ = cosθ - i·sinθ\n\nこの2式を足すと：\ncosθ = (eⁱθ + e⁻ⁱθ) / 2\n\n引くと：\nsinθ = (eⁱθ - e⁻ⁱθ) / 2i\n\n三角関数は指数関数で表現できるのです！',
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
      title: '双曲線関数との対比',
      content:
        '実数版もあります：\n\ncosh x = (eˣ + e⁻ˣ) / 2（双曲線余弦）\nsinh x = (eˣ - e⁻ˣ) / 2（双曲線正弦）\n\n三角関数の式でiを取り除いた形です。\ncos → cosh、sin → sinh の対応は美しい対称性です。吊り橋のケーブルの形がcoshです。',
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
      content: 'eⁱπ/³ の実部（cosの値）はいくつ？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'cos(π/3) の値は？',
        options: [
          { id: 'a', label: '√3/2', correct: false },
          { id: 'b', label: '1/2', correct: true },
          { id: 'c', label: '√2/2', correct: false },
          { id: 'd', label: '0', correct: false },
        ],
        explanation:
          'eⁱπ/³ = cos(π/3) + i·sin(π/3) = 1/2 + i·√3/2。π/3 = 60°なので、cos60° = 1/2 です。',
      },
    },
    {
      id: 'alternate',
      title: '交流電気回路への応用',
      content:
        '電気工学では交流をeⁱωᵗで表します。V(t) = V₀·eⁱωᵗ のように書くと、微分が簡単になります（iωを掛けるだけ）。三角関数のまま計算するよりはるかに効率的です。実部を取ればcos、虚部を取ればsinの波形が得られます。',
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
        '指数関数と三角関数のつながり：\n• eⁱθ = cosθ + i·sinθ\n• cosθ = (eⁱθ + e⁻ⁱθ)/2\n• sinθ = (eⁱθ - e⁻ⁱθ)/2i\n• 双曲線関数は実数版\n• 交流回路など工学に広く応用\n\n異なる分野を橋渡しする数学の統一性です。',
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
