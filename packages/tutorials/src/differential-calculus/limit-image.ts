import { Tutorial } from '../types';

export const limitImageTutorial: Tutorial = {
  id: 'limit-image',
  title: '極限のイメージ',
  description: '極限（リミット）の直感的な意味を理解する。「限りなく近づく」を体感する',
  category: 'differential-calculus',
  steps: [
    {
      id: 'hook',
      title: '到達できないけれど、近づける',
      content:
        '0.9, 0.99, 0.999, 0.9999… この数列は 1 に「限りなく近づく」けれど、永遠に 1 にはなりません。でも極限値は 1。この「たどり着く先」が極限です。',
      customScene: 'limit-image-animation',
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
        'スライダーで x を動かして、f(x) の値がどこに収束するか観察しましょう。x がある値に近づくとき、f(x) が向かう先が極限値です。',
      customScene: 'limit-image-interactive',
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
      title: 'lim(x→1) x² = 1',
      content:
        'x=0.9 のとき x²=0.81、x=0.99 のとき x²=0.9801、x=0.999 のとき x²=0.998001。x→1 で x²→1。この場合は f(1)=1 と一致しますが、いつもそうとは限りません。',
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
      title: 'lim(x→0) sin(x)/x = 1',
      content:
        'x=0 を直接代入すると 0/0 で不定形。しかし x を 0 に近づけると sin(x)/x は 1 に収束します。x=0.1 で 0.9983、x=0.01 で 0.99998。極限は「代入」ではなく「近づく先」です。',
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
        'lim(x→2) (x²−4)/(x−2) はいくつでしょう？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'lim(x→2) (x²−4)/(x−2) = ?',
        options: [
          { id: 'a', label: '0', correct: false },
          { id: 'b', label: '2', correct: false },
          { id: 'c', label: '4', correct: true },
          { id: 'd', label: '定義できない', correct: false },
        ],
        explanation:
          'x²−4 = (x+2)(x−2) なので、(x−2) で約分すると x+2。x→2 で x+2→4。直接代入は 0/0 ですが、極限は 4 です。',
      },
    },
    {
      id: 'alternate',
      title: '別の視点：ε-δ のイメージ',
      content:
        '「f(x) が L に近づく」とは、L の周りにどんなに狭い帯を取っても、x を a に十分近づければ f(x) がその帯に入ること。直感的には「逃げ場がなくなる」イメージです。',
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
        '極限とは「限りなく近づいた先の値」。代入した値とは違うことがあるのが重要です。\n\n微分は lim(Δx→0) Δy/Δx という極限で定義されます。極限の感覚が身についたら、次はいよいよ導関数の定義に進みましょう。',
      customScene: 'limit-image-summary',
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
