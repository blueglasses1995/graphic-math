import { Tutorial } from '../types';

export const expSpecialTutorial: Tutorial = {
  id: 'exp-special',
  title: 'eˣの特別さ',
  description: '微分しても変わらないeˣの驚くべき性質を視覚的に理解する',
  category: 'exponential',
  steps: [
    {
      id: 'hook',
      title: '自分自身の微分',
      content:
        'eˣ のグラフ上の任意の点で接線を引くと、その傾きはちょうどその点のy座標と同じ。つまり値が大きいところでは急に変化し、小さいところではゆっくり変化する。この驚きの性質をアニメーションで確認しましょう。',
      customScene: "exp-special-animation",
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
      title: '接線の傾きを確認しよう',
      content:
        'グラフ上の点を動かして、各点での接線の傾きが常にy座標と等しいことを確認してください。x=0ではy=1で傾きも1、x=1ではy≈2.718で傾きも≈2.718。',
      customScene: "exp-special-interactive",
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
      title: '(eˣ)\' = eˣ の意味',
      content:
        'd/dx(eˣ) = eˣ\n\nこれは「eˣの瞬間的な変化率は、eˣの現在の値に等しい」ということ。\n\n人口でいえば「今の人口が多いほど、増加速度も速い」という自己増殖的な成長。銀行の連続複利でいえば「利息にも利息がつき続ける」究極の形です。',
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
      title: '他の底との比較',
      content:
        'd/dx(2ˣ) = 2ˣ · ln2 ≈ 0.693 · 2ˣ\nd/dx(3ˣ) = 3ˣ · ln3 ≈ 1.099 · 3ˣ\nd/dx(eˣ) = eˣ · lne = 1 · eˣ = eˣ\n\nlne = 1 だから余計な係数がつかない。これがeを底にする最大の利点です。計算がシンプルになります。',
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
      content: 'f(x) = e²ˣ の微分 f\'(x) は？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'f(x) = e²ˣ の微分は？',
        options: [
          { id: 'a', label: 'e²ˣ', correct: false },
          { id: 'b', label: '2e²ˣ', correct: true },
          { id: 'c', label: '2xeˣ', correct: false },
          { id: 'd', label: 'e²ˣ⁻¹', correct: false },
        ],
        explanation:
          '合成関数の微分（チェーンルール）で、外側の微分 e²ˣ に内側の微分 2 を掛けて 2e²ˣ。eˣ の微分公式がシンプルだからこそ、合成も簡単です。',
      },
    },
    {
      id: 'alternate',
      title: 'eˣのテイラー展開',
      content:
        'eˣ = 1 + x + x²/2! + x³/3! + x⁴/4! + ...\n\nこの級数を項ごとに微分すると：\n0 + 1 + x + x²/2! + x³/3! + ... = eˣ\n\n微分しても元に戻る！テイラー展開でもeˣの自己再生性が確認できます。',
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
        'eˣの特別さ：\n• (eˣ)\' = eˣ（微分しても自分自身）\n• 接線の傾き = その点のy座標\n• 他の底には余計な係数がつく\n• テイラー展開でも自己再生性を確認できる\n\neˣは数学で最も重要な関数の一つです。',
      customScene: "exp-special-summary",
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
