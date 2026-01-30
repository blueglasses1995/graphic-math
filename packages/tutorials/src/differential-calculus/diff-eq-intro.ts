import { Tutorial } from '../types';

export const diffEqIntroTutorial: Tutorial = {
  id: 'diff-eq-intro',
  title: '【実践】微分方程式の入口',
  description: '導関数を含む方程式「微分方程式」の基本的な考え方を学ぶ',
  category: 'differential-calculus',
  steps: [
    {
      id: 'hook',
      title: '変化の法則を方程式にする',
      content:
        '「人口の増加率は現在の人口に比例する」→ dP/dt = kP。変化率の関係を式にしたものが微分方程式です。自然法則の多くは微分方程式で記述されます。',
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
        '初期値と成長率 k を変えて、解の曲線がどう変わるか観察してください。k > 0 で指数増大、k < 0 で指数減衰です。',
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
      title: 'dy/dx = ky の解',
      content:
        'dy/dx = ky を「y に比例する変化率」と読みます。この微分方程式の解は y = Ceᵏˣ。なぜなら (Ceᵏˣ)\' = kCeᵏˣ = ky。微分しても形が変わらない eˣ の性質が活きています。',
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
      title: '放射性崩壊',
      content:
        '放射性物質の崩壊: dN/dt = −λN。解は N(t) = N₀e⁻ᵏᵗ。半減期 T で N = N₀/2 となるので T = ln2/λ。カーボン14の半減期は約5730年。微分方程式が年代測定を可能にしています。',
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
        'y\' = 2y、y(0) = 3 のとき y(1) は？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'y\'=2y, y(0)=3 のとき y(1) = ?',
        options: [
          { id: 'a', label: '3e', correct: false },
          { id: 'b', label: '3e²', correct: true },
          { id: 'c', label: '6', correct: false },
          { id: 'd', label: '6e', correct: false },
        ],
        explanation:
          '解は y = 3e²ˣ。x=1 で y = 3e² ≈ 22.17。初期値3が指数的に成長します。',
      },
    },
    {
      id: 'alternate',
      title: '別の視点：方向場',
      content:
        '微分方程式は「各点での傾き」を決めます。xy平面の各点に小さな線分（傾き）を描くと「方向場」ができます。解の曲線はこの方向場に沿って流れるように進みます。',
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
        '微分方程式は「変化の法則」を記述する。最も基本的な dy/dx = ky の解は y = Ceᵏˣ。物理・生物・経済学の基盤です。\n\n次は「曲率」。曲線の曲がり具合を数値化しましょう。',
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
