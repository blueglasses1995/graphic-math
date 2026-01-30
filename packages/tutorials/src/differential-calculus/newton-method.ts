import { Tutorial } from '../types';

export const newtonMethodTutorial: Tutorial = {
  id: 'newton-method',
  title: '【実践】ニュートン法',
  description: '接線を使って方程式の解を高速に求めるニュートン法を体験する',
  category: 'differential-calculus',
  steps: [
    {
      id: 'hook',
      title: '接線で根を探す',
      content:
        'f(x) = 0 の解を見つけたい。適当な初期値から接線を引き、x軸との交点を次の近似値にする。この繰り返しで解に高速収束するのがニュートン法です。',
      customScene: 'newton-method-animation',
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
        '初期値 x₀ をクリックで選んで、ニュートン法の反復を観察してください。何回で解に収束するかカウントしてみましょう。',
      customScene: 'newton-method-interactive',
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
      title: '公式',
      content:
        'xₙ₊₁ = xₙ − f(xₙ)/f\'(xₙ)。現在の点での接線がx軸と交わる点を次の近似値にします。f\'が傾き、f/f\'が「傾きに対する現在の高さの比」。一歩でどれだけ進むかを教えてくれます。',
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
      title: '√2 を求める',
      content:
        'f(x) = x²−2 の正の根が √2。x₀=1 から始めると: x₁ = 1−(−1)/2 = 1.5、x₂ = 1.5−0.25/3 = 1.4167、x₃ = 1.41422…。わずか3回で6桁正確に。二次収束の威力です。',
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
        'f(x) = x²−3、x₀ = 2 のとき、x₁ は？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'f(x)=x²−3、x₀=2 でニュートン法の x₁ は？',
        options: [
          { id: 'a', label: '1.5', correct: false },
          { id: 'b', label: '1.75', correct: true },
          { id: 'c', label: '1.8', correct: false },
          { id: 'd', label: '√3', correct: false },
        ],
        explanation:
          'x₁ = 2 − (4−3)/(2·2) = 2 − 1/4 = 1.75。実際の √3 ≈ 1.732 にかなり近いです。',
      },
    },
    {
      id: 'alternate',
      title: '別の視点：失敗するケース',
      content:
        'f\'(xₙ)=0 のとき分母がゼロで発散します。また初期値が悪いと収束しないことも。振動したりサイクルに陥ったりする例もあります。万能ではないことも知っておきましょう。',
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
        'ニュートン法: xₙ₊₁ = xₙ − f(xₙ)/f\'(xₙ)。接線で根を近似する反復法。二次収束で非常に高速。コンピュータの数値計算で広く使われています。\n\n次は「関連変化率」の問題に挑戦しましょう。',
      customScene: 'newton-method-summary',
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
