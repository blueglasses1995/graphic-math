import { Tutorial } from '../types';

export const gibbsPhenomenonTutorial: Tutorial = {
  id: 'gibbs-phenomenon',
  title: 'ギブス現象',
  description: 'フーリエ級数の不連続点近傍で生じるオーバーシュートを理解する',
  category: 'fourier',
  steps: [
    {
      id: 'hook',
      title: '消えないヒゲ',
      content:
        '矩形波をフーリエ級数で近似すると、不連続点の近くに「ヒゲ」のような突起が現れます。\n\n項数を増やしても、この突起は消えません。高さは常に約9%。\n\nこれがギブス現象です。アニメーションで確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'gibbs-phenomenon-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: 'オーバーシュートを観察',
      content:
        '項数Nを増やして、不連続点付近のオーバーシュートがどう変化するか確認しましょう。\n\nヒゲは細くなりますが、高さは変わりません。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'gibbs-phenomenon-interactive',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'terms', min: 1, max: 100, step: 1, initial: 5 },
        ],
      },
    },
    {
      id: 'example-1',
      title: 'ギブス現象の数学',
      content:
        '矩形波の部分和 Sₙ(t) の不連続点付近での最大値:\n\nlim[N→∞] Sₙ(π/N) = (2/π) ∫₀π (sinx/x) dx ≈ 1.1789...\n\n理想値は 1 なので、オーバーシュートは約 8.95%。\n\nこれはN をどんなに大きくしても変わりません。\n項数を増やすと突起は細くなりますが、高さは一定です。',
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
      title: 'なぜ消えないのか',
      content:
        'フーリエ級数は L² ノルム（二乗平均）の意味で収束します。\n\n∫|f(t) - Sₙ(t)|² dt → 0 (N→∞)\n\nしかし、各点での収束（一様収束）は不連続点では成り立ちません。\n\nこれは「どの意味で近似するか」の違いが重要であることを示しています。\n\n平均二乗誤差はゼロに近づくが、点ごとの最大誤差は残る。',
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
      content: 'ギブス現象について考えてみましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'ギブス現象のオーバーシュートの割合（不連続の跳躍に対する比率）は約何%？',
        options: [
          { id: 'a', label: '約5%', correct: false },
          { id: 'b', label: '約9%', correct: true },
          { id: 'c', label: '約15%', correct: false },
          { id: 'd', label: '項数による', correct: false },
        ],
        explanation:
          'ギブス現象のオーバーシュートは不連続の跳躍量の約8.95%（≈9%）です。この値は項数Nに依存せず、N→∞ の極限でも変わりません。',
      },
    },
    {
      id: 'alternate',
      title: '対処法：σ因子',
      content:
        'ギブス現象を抑制するにはフェイエール総和法（セザロ平均）があります。\n\nσₙ(t) = (S₀ + S₁ + … + Sₙ) / (N+1)\n\nこの平均化により、オーバーシュートが消えます。\n\nまた、ランチョス σ因子を使う方法もあります:\n各係数に sinc(n/N) をかけることでギブス現象を軽減できます。',
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
      title: 'まとめ：ギブス現象',
      content:
        'フーリエ級数の不連続点では約9%のオーバーシュートが不可避です。\n\nフェイエール平均との比較を操作して確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'gibbs-phenomenon-summary',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'terms', min: 1, max: 100, step: 1, initial: 10 },
          { name: 'useSigmaFactor', min: 0, max: 1, step: 1, initial: 0 },
        ],
      },
    },
  ],
};
