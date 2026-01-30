import { Tutorial } from '../types';

export const piFromComplexTutorial: Tutorial = {
  id: 'pi-from-complex',
  title: '【実践】複素数でπを求める',
  description: '複素数を使ったπの計算方法とその背景',
  category: 'complex-numbers',
  steps: [
    {
      id: 'hook',
      title: 'πと複素数',
      content:
        'πは円周率として知られますが、複素数と深い関係があります。\n\nオイラーの等式 e^(iπ) = -1 から:\nπ = -i × ln(-1)\n\nまた、複素数を使ったπの計算公式がいくつも存在します。',
      customScene: 'pi-from-complex-animation',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        circles: [{ radius: 1, color: '#8888ff', plane: 'xy' }],
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'leibniz',
      title: 'ライプニッツの公式',
      content:
        'arctan(1) = π/4 より:\n\nπ/4 = 1 - 1/3 + 1/5 - 1/7 + ...\n\nこれは複素数の観点からは:\nln(1+i) = ln(√2) + iπ/4\n\nの虚部を取ったものです。\n\n複素対数関数からπの級数表現が自然に導かれます。',
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
      id: 'gaussian-integers',
      title: 'ガウス整数とπ',
      content:
        'ガウス整数 a + bi（a, b は整数）を使った面白い結果:\n\n半径 √N の円内のガウス整数の個数 ≈ πN\n\nつまり格子点を数えることでπを近似できます！\n\nN = 10000 なら、|a+bi| ≦ 100 のガウス整数を数えて、その数を N で割れば π ≈ 3.14... が得られます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        circles: [{ radius: 1, color: '#8888ff', plane: 'xy' }],
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'interactive',
      title: 'πの近似を体験',
      content:
        '半径を変えて、円内の格子点の数がπRに近づく様子を観察しましょう。\n\n半径が大きくなるほど、近似の精度が上がります。',
      customScene: 'pi-from-complex-interactive',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        circles: [{ radius: 1, color: '#8888ff', plane: 'xy' }],
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: '半径R', min: 1, max: 10, step: 1, initial: 3 },
        ],
      },
    },
    {
      id: 'quiz',
      title: '確認クイズ',
      content: '複素数とπの関係を確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'e^(iπ) = -1 から π を表すと？',
        options: [
          { id: 'a', label: 'π = e^(-i)', correct: false },
          { id: 'b', label: 'π = ln(-1)/i', correct: true },
          { id: 'c', label: 'π = i × ln(-1)', correct: false },
          { id: 'd', label: 'π = -ln(i)', correct: false },
        ],
        explanation:
          'e^(iπ) = -1 → iπ = ln(-1) → π = ln(-1)/i です。複素対数を使ってπを定義できます。',
      },
    },
    {
      id: 'wallis',
      title: 'ウォリス積',
      content:
        'π/2 = (2/1)(2/3)(4/3)(4/5)(6/5)(6/7)...\n\nこのウォリス積も複素数から導けます:\n\nsin(πz)/πz = Π(1 - z²/n²)\n\nに z = 1/2 を代入すると:\n2/π = (1-1/4)(1-1/16)(1-1/36)...\n\nこれを変形するとウォリス積が得られます。複素関数論の積表示からの帰結です。',
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
        '複素数でπを求める:\n\n・π = ln(-1)/i（オイラーの等式から）\n・ライプニッツ公式: 複素対数から導出\n・ガウス整数: 格子点の数 ≈ πR²\n・ウォリス積: sin の無限積表示から\n\nπは円周率ですが、複素数を通じてあらゆる数学とつながっています。\n\nこれで複素数チュートリアルは完了です。おつかれさまでした！',
      customScene: 'pi-from-complex-summary',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        circles: [{ radius: 1, color: '#8888ff', plane: 'xy' }],
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
