import { Tutorial } from '../types';

export const earthquakeMagnitudeTutorial: Tutorial = {
  id: 'earthquake-magnitude',
  title: '【実践】地震のマグニチュード',
  description: '地震のエネルギーとマグニチュードの指数的関係を理解する',
  category: 'exponential',
  steps: [
    {
      id: 'hook',
      title: 'M7とM9の違い',
      content:
        'マグニチュード7とマグニチュード9。差はたった2ですが、エネルギーの差は約1000倍。東日本大震災（M9.0）は阪神大震災（M7.3）の約350倍のエネルギーでした。この指数的スケールをアニメーションで見てみましょう。',
      customScene: "earthquake-magnitude-animation",
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
      title: 'マグニチュードを比較しよう',
      content:
        '2つのマグニチュード値を選んで、エネルギーの比を確認しましょう。マグニチュードが1増えるとエネルギーが約31.6倍になることを体感してください。',
      customScene: "earthquake-magnitude-interactive",
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
      title: 'マグニチュードとエネルギー',
      content:
        'logE = 4.8 + 1.5M\n\nつまり E = 10^(4.8 + 1.5M)\n\nMが1増えると：E は 10^1.5 ≈ 31.6倍\nMが2増えると：E は 10³ = 1,000倍\n\n例：\nM5: E ≈ 2×10¹² J\nM7: E ≈ 2×10¹⁵ J（1000倍）\nM9: E ≈ 2×10¹⁸ J（100万倍）',
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
      title: '日本の主な地震',
      content:
        '歴史的な地震のマグニチュード：\n• 関東大震災（1923）：M7.9\n• 阪神大震災（1995）：M7.3\n• 東日本大震災（2011）：M9.0\n• 熊本地震（2016）：M7.3\n\nM9.0 vs M7.3 のエネルギー比：\n10^(1.5×1.7) ≈ 355倍\n\nマグニチュードの数値以上にエネルギー差は圧倒的です。',
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
      title: '計算してみよう',
      content: 'M6の地震何回分でM8の地震1回分のエネルギーに相当する？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'M8 = M6 × ?回',
        options: [
          { id: 'a', label: '100回', correct: false },
          { id: 'b', label: '約300回', correct: false },
          { id: 'c', label: '約1000回', correct: true },
          { id: 'd', label: '約10000回', correct: false },
        ],
        explanation:
          'Mが2違うとエネルギーは10³ = 1000倍。つまりM6の地震を約1000回起こしてやっとM8の地震1回分。小さな地震では大きな地震のエネルギーを解放できないのです。',
      },
    },
    {
      id: 'alternate',
      title: '震度との違い',
      content:
        'マグニチュードは地震そのものの規模。震度は各地点での揺れの強さ。マグニチュードが大きくても、遠ければ震度は小さい。震度は距離によって指数的に減衰します（地震波のエネルギーが距離の2乗に反比例して減少）。',
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
        '地震のマグニチュード：\n• logE = 4.8 + 1.5M\n• M+1でエネルギー約31.6倍\n• M+2でエネルギー1000倍\n• 対数スケールで巨大な差を表現\n• 震度とは異なる概念\n\nデシベルやpHと同じ、対数スケールの実例です。',
      customScene: "earthquake-magnitude-summary",
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
