import { Tutorial } from '../types';

export const fourierPropertiesTutorial: Tutorial = {
  id: 'fourier-properties',
  title: 'フーリエ変換の性質',
  description: '線形性・シフト・スケーリングなどフーリエ変換の基本性質を学ぶ',
  category: 'fourier',
  steps: [
    {
      id: 'hook',
      title: '微分が掛け算になる？',
      content:
        'フーリエ変換の最も強力な性質:\n微分が周波数との掛け算に変わります。\n\nF{f\'(t)} = iω · F(ω)\n\n微分方程式が代数方程式に変身！\nこの魔法のような性質をアニメーションで見ましょう。',
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
      title: '性質を視覚的に確認',
      content:
        '時間シフトやスケーリングを適用して、スペクトルがどう変化するか確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'timeShift', min: -3, max: 3, step: 0.1, initial: 0 },
          { name: 'scale', min: 0.2, max: 5, step: 0.1, initial: 1.0 },
        ],
      },
    },
    {
      id: 'example-1',
      title: '線形性とシフト',
      content:
        '線形性: F{af + bg} = aF{f} + bF{g}\n\n時間シフト: F{f(t - t₀)} = e^(-iωt₀) F(ω)\n→ 時間をずらすと位相が回転する（振幅は不変）\n\n周波数シフト: F{e^(iω₀t) f(t)} = F(ω - ω₀)\n→ 複素指数をかけると周波数がずれる\n\nこれがAM変調の数学的基礎です。',
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
      title: 'スケーリングと微分',
      content:
        'スケーリング: F{f(at)} = (1/|a|) F(ω/a)\n→ 時間圧縮すると周波数が広がる\n\n微分: F{f\'(t)} = iω · F(ω)\n→ 時間微分は周波数領域での iω 倍\n\nn階微分: F{f⁽ⁿ⁾(t)} = (iω)ⁿ · F(ω)\n\n積分: F{∫f(t)dt} = F(ω)/(iω)\n→ 積分は 1/(iω) 倍',
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
      content: 'フーリエ変換の性質について考えてみましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'f(t) を時間方向に2倍に圧縮した f(2t) のスペクトルはどうなる？',
        options: [
          { id: 'a', label: '周波数方向にも2倍に圧縮', correct: false },
          { id: 'b', label: '周波数方向に2倍に広がり、振幅は1/2になる', correct: true },
          { id: 'c', label: '変化しない', correct: false },
          { id: 'd', label: '周波数方向に2倍に広がり、振幅は変わらない', correct: false },
        ],
        explanation:
          'スケーリング則 F{f(at)} = (1/|a|)F(ω/a) より、a=2 のとき F(ω/2)/2。周波数は2倍に広がり、振幅は半分になります。エネルギー保存の帰結です。',
      },
    },
    {
      id: 'alternate',
      title: '対称性の性質',
      content:
        '実関数のフーリエ変換: F(-ω) = F(ω)*（共役対称）\n\n偶関数のフーリエ変換: 実数かつ偶関数\n奇関数のフーリエ変換: 純虚数かつ奇関数\n\n時間と周波数の双対性:\n掛け算 ↔ 畳み込み\n微分 ↔ iω倍\n幅が狭い ↔ 幅が広い\n\nこの双対性がフーリエ変換の美しさの源泉です。',
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
      title: 'まとめ：フーリエ変換の性質',
      content:
        'フーリエ変換の性質を使うと複雑な計算が簡単になります。\n\nシフトとスケーリングの効果を操作して確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'shift', min: -5, max: 5, step: 0.1, initial: 0 },
          { name: 'scale', min: 0.2, max: 5, step: 0.1, initial: 1.0 },
        ],
      },
    },
  ],
};
