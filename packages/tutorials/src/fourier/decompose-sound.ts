import { Tutorial } from '../types';

export const decomposeSoundTutorial: Tutorial = {
  id: 'decompose-sound',
  title: '音を分解する',
  description: '複雑な音が単純な正弦波の重ね合わせでできていることを体感する',
  category: 'fourier',
  steps: [
    {
      id: 'hook',
      title: '和音の正体',
      content:
        'ピアノでドとミとソを同時に弾くと和音が鳴ります。\n\nこの複雑な波形は、実は3つの単純な正弦波を足し合わせたもの。\n\nアニメーションで合成の様子を見てみましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'decompose-sound-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '波を重ねてみよう',
      content:
        '3つの正弦波の振幅と周波数を自由に変えて、合成波形がどう変わるか確認しましょう。\n\n各スライダーを動かして、音の重ね合わせを体感してください。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'decompose-sound-interactive',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'freq1', min: 100, max: 1000, step: 10, initial: 262 },
          { name: 'freq2', min: 100, max: 1000, step: 10, initial: 330 },
          { name: 'freq3', min: 100, max: 1000, step: 10, initial: 392 },
        ],
      },
    },
    {
      id: 'example-1',
      title: '正弦波の基本',
      content:
        '正弦波は最も単純な周期的振動です。\n\nf(t) = A sin(2πft + φ)\n\nA: 振幅（音の大きさ）\nf: 周波数（音の高さ、Hz）\nφ: 位相（波の開始位置）\n\n例えばラの音は 440Hz。1秒間に440回振動します。',
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
      title: '重ね合わせの原理',
      content:
        '複雑な波形 = 正弦波の足し算\n\ng(t) = A₁sin(2πf₁t) + A₂sin(2πf₂t) + A₃sin(2πf₃t) + …\n\nドミソの和音の場合:\ng(t) = sin(2π·262t) + sin(2π·330t) + sin(2π·392t)\n\nこれがフーリエ解析の出発点です。\nどんな複雑な音も正弦波に分解できるのです。',
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
      content: '周波数200Hzと300Hzの正弦波を足し合わせたとき、合成波の周期はいくつですか？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '周波数200Hzと300Hzの正弦波を合成した波の基本周期は？',
        options: [
          { id: 'a', label: '1/200 秒', correct: false },
          { id: 'b', label: '1/300 秒', correct: false },
          { id: 'c', label: '1/100 秒', correct: true },
          { id: 'd', label: '1/500 秒', correct: false },
        ],
        explanation:
          '200Hzと300Hzの最大公約数は100Hzです。合成波は100Hzの周期、つまり1/100秒 = 0.01秒を基本周期として繰り返します。',
      },
    },
    {
      id: 'alternate',
      title: '倍音と音色',
      content:
        '同じドの音でも、ピアノとバイオリンでは音色が違います。\n\nこれは基本周波数（基音）に対する倍音の含まれ方が違うためです。\n\n基音: f₀\n第2倍音: 2f₀\n第3倍音: 3f₀\n…\n\n楽器ごとに各倍音の振幅が異なり、それが音色の個性を生みます。\nフーリエ解析はこの倍音構造を明らかにします。',
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
      title: 'まとめ：音の分解',
      content:
        '複雑な波形は単純な正弦波の重ね合わせで表現できます。\n\nスライダーで振幅を調整して、元の波形を再現してみましょう。\n\nこの「分解と合成」がフーリエ解析の核心です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'decompose-sound-summary',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'amplitude1', min: 0, max: 2, step: 0.1, initial: 1.0 },
          { name: 'amplitude2', min: 0, max: 2, step: 0.1, initial: 0.5 },
          { name: 'amplitude3', min: 0, max: 2, step: 0.1, initial: 0.3 },
        ],
      },
    },
  ],
};
