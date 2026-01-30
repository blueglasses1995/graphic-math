import { Tutorial } from '../types';

export const chainRuleTutorial: Tutorial = {
  id: 'chain-rule',
  title: '合成関数の微分（連鎖律）',
  description: '合成関数の微分法則 (f∘g)\' = f\'(g(x))·g\'(x) を理解する',
  category: 'differential-calculus',
  steps: [
    {
      id: 'hook',
      title: '関数の中に関数',
      content:
        'sin(x²) は「まず x² を計算し、次に sin をかける」合成関数です。この入れ子構造を微分するとき、外側と内側の両方を考慮する必要があります。歯車が連動するアニメーションで見てみましょう。',
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
        '内側の関数 g(x) と外側の関数 f(u) を切り替えて、合成関数の傾きがどう決まるか体験してください。',
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
      title: '連鎖律の公式',
      content:
        'y = f(g(x)) のとき dy/dx = f\'(g(x))·g\'(x)。外側を微分して内側をそのまま入れ、内側の微分を掛ける。「外微分 × 内微分」です。',
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
      title: '具体例：(2x+1)³',
      content:
        '外側 f(u) = u³、内側 g(x) = 2x+1。f\'(u) = 3u²、g\'(x) = 2。よって [(2x+1)³]\' = 3(2x+1)²·2 = 6(2x+1)²。展開せずに微分できるのが連鎖律の強みです。',
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
        'sin(3x) の導関数は何でしょう？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '[sin(3x)]\' = ?',
        options: [
          { id: 'a', label: 'cos(3x)', correct: false },
          { id: 'b', label: '3cos(3x)', correct: true },
          { id: 'c', label: '3sin(3x)', correct: false },
          { id: 'd', label: 'cos(3)', correct: false },
        ],
        explanation:
          '外側 sin の微分 = cos、内側 3x の微分 = 3。よって cos(3x)·3 = 3cos(3x) です。',
      },
    },
    {
      id: 'alternate',
      title: '別の視点：ライプニッツ記法',
      content:
        'dy/dx = (dy/du)·(du/dx)。まるで分数の du が約分されるように見えます。実際には約分ではありませんが、この「約分もどき」が覚えやすさの秘密。チェーン（鎖）のように繋がるから「連鎖律」です。',
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
        '[f(g(x))]\' = f\'(g(x))·g\'(x)。「外微分 × 内微分」。連鎖律は合成関数を分解して微分する最強ツールです。\n\n次は三角関数の微分に進みましょう。',
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
