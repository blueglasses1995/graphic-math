import { Tutorial } from '../types';

export const extremaTutorial: Tutorial = {
  id: 'extrema',
  title: '増減と極値',
  description: '導関数の符号から関数の増減を判定し、極大・極小を求める',
  category: 'differential-calculus',
  steps: [
    {
      id: 'hook',
      title: '山と谷を見つける',
      content:
        'グラフの山のてっぺん（極大）と谷の底（極小）では、接線が水平になります。つまり f\'(x) = 0。導関数がゼロになる点を探せば、山と谷が見つかるのです。',
      customScene: 'extrema-animation',
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
        'x を動かして f\'(x) の符号を確認してください。f\'>0 で増加（右上がり）、f\'<0 で減少（右下がり）、f\'=0 で極値の候補です。',
      customScene: 'extrema-interactive',
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
      title: '具体例：f(x) = x³ − 3x',
      content:
        'f\'(x) = 3x² − 3 = 3(x²−1) = 3(x+1)(x−1)。f\'=0 となるのは x=−1 と x=1。x=−1 の前後で f\' の符号は +→− だから極大、x=1 では −→+ だから極小。',
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
      title: '増減表',
      content:
        'x: … −1 … 1 …\nf\': + 0 − 0 +\nf: ↗ 極大 ↘ 極小 ↗\n\nこの「増減表」が微分の応用で最も使う道具です。符号の変化を見るだけで、グラフの概形がわかります。',
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
        'f(x) = x² − 4x + 3 の極小値はいくつ？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'f(x) = x²−4x+3 の極小値は？',
        options: [
          { id: 'a', label: '−1', correct: true },
          { id: 'b', label: '0', correct: false },
          { id: 'c', label: '2', correct: false },
          { id: 'd', label: '3', correct: false },
        ],
        explanation:
          'f\'(x) = 2x−4 = 0 より x=2。f(2) = 4−8+3 = −1。下に凸の放物線なので x=2 で極小値 −1 です。',
      },
    },
    {
      id: 'alternate',
      title: '別の視点：二次導関数テスト',
      content:
        'f\'(a)=0 のとき、f\'\'(a)>0 なら極小、f\'\'(a)<0 なら極大。二次導関数の符号で判定できます。f\'\'は「傾きの変化率」。正なら傾きが増加中→谷（極小）です。',
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
        'f\'(x)=0 の点が極値の候補。f\' の符号変化で極大・極小を判定します。増減表はグラフ描画の最強ツールです。\n\n次は「凹凸と変曲点」を学んで、グラフの形をさらに詳しく分析しましょう。',
      customScene: 'extrema-summary',
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
