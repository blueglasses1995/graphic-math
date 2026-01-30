import { Tutorial } from '../types';

export const linearityTutorial: Tutorial = {
  id: 'linearity',
  title: '定数倍と和の積分',
  description: '積分の線形性 ── 定数倍と和に関する基本法則',
  category: 'integral-calculus',
  steps: [
    {
      id: 'hook',
      title: '積分はバラせる',
      content:
        '∫ [2f(x) + 3g(x)] dx を計算したいとき、一度に計算する必要があるでしょうか？\n\n実は積分は「バラして」計算できます。\n\n2∫ f(x) dx + 3∫ g(x) dx に分解できるのです。\n\nこの性質を「線形性」と呼びます。',
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
        'f(x) と g(x) のグラフ、そして af(x) + bg(x) のグラフが表示されています。\n\n係数 a, b をスライダーで変えてみてください。\n\n合成関数の面積が、個別の面積の a倍 + b倍 になっていることを確かめましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '定数倍の法則',
      content:
        '∫ c·f(x) dx = c · ∫ f(x) dx\n\n定数は積分の外に出せます。\n\n例：∫ 5x² dx = 5 · ∫ x² dx = 5 · x³/3 + C = 5x³/3 + C\n\nこれは「面積を c 倍に拡大する」ことと同じです。\n\n高さが c 倍になれば、面積も c 倍になりますね。',
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
      title: '和と差の法則',
      content:
        '∫ [f(x) + g(x)] dx = ∫ f(x) dx + ∫ g(x) dx\n∫ [f(x) - g(x)] dx = ∫ f(x) dx - ∫ g(x) dx\n\n例：∫ (x² + 3x) dx = ∫ x² dx + ∫ 3x dx = x³/3 + 3x²/2 + C\n\nこの2つの法則を合わせて「積分の線形性」と呼びます。\n\n多項式の積分は、項ごとにバラして計算できるということです。',
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
        '∫ (3x² - 4x + 2) dx を計算してみましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '∫ (3x² - 4x + 2) dx は？',
        options: [
          { id: 'a', label: 'x³ - 2x² + 2x + C', correct: true },
          { id: 'b', label: '3x³ - 4x² + 2x + C', correct: false },
          { id: 'c', label: 'x³ - 2x² + C', correct: false },
          { id: 'd', label: '6x - 4 + C', correct: false },
        ],
        explanation:
          '正解は x³ - 2x² + 2x + C です。\n\n∫ 3x² dx = x³\n∫ 4x dx = 2x²（符号はマイナス）\n∫ 2 dx = 2x\n\n合わせて x³ - 2x² + 2x + C。',
      },
    },
    {
      id: 'alternate',
      title: '線形性が使えない場合',
      content:
        '注意：積分の線形性は「和と定数倍」にしか使えません。\n\n∫ f(x)·g(x) dx ≠ ∫ f(x) dx · ∫ g(x) dx\n\n積の積分は、個別の積分の積にはなりません！\n\n積の積分には「部分積分」や「置換積分」などの別の技法が必要です。\n\nこの違いを覚えておくことが重要です。',
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
        '積分の線形性：\n∫ c·f(x) dx = c · ∫ f(x) dx\n∫ [f(x) ± g(x)] dx = ∫ f(x) dx ± ∫ g(x) dx\n\n多項式は項ごとにバラして積分できます。\n\nただし積や商の積分には使えません。\n\n係数を変えて、線形性を体感してみてください。',
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
