import { Tutorial } from '../types';

export const finiteElementIntroTutorial: Tutorial = {
  id: 'finite-element-intro',
  title: '有限要素法入門',
  description: '有限要素法の基本的な考え方を学ぶ',
  category: 'pde',
  steps: [
    {
      id: 'hook',
      title: '領域を三角形で埋める',
      content:
        '有限要素法（FEM）は、領域を小さな要素（三角形や四面体）に分割し、各要素内で簡単な関数で近似する方法です。メッシュが生成されるアニメーションを見てみましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'finite-element-intro-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう：メッシュを細分化',
      content:
        'メッシュの細かさを変えて、解の精度がどう改善するか確認してください。複雑な形状でも柔軟にメッシュを生成できるのがFEMの強みです。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'finite-element-intro-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '弱形式（変分形式）',
      content:
        'PDEに試験関数vを掛けて積分します。-∇²u = f を変換すると ∫∇u·∇v dx = ∫fv dx。微分の階数が1つ下がり、境界条件の扱いが容易になります。これが弱形式です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '基底関数と剛性行列',
      content:
        '解を u ≈ Σ uⱼφⱼ(x) と展開します。φⱼは各節点で1、他で0になる帽子関数です。弱形式に代入すると Ku = f（連立方程式）が得られます。Kは剛性行列と呼ばれます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：有限要素法',
      content: '有限要素法が有限差分法に比べて優れている点はどれですか？',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '有限要素法の有限差分法に対する主な利点はどれですか？',
        options: [
          { id: 'a', label: '常に計算が速い', correct: false },
          { id: 'b', label: '複雑な形状の領域に柔軟に対応できる', correct: true },
          { id: 'c', label: 'プログラミングが簡単', correct: false },
          { id: 'd', label: '安定性条件が不要', correct: false },
        ],
        explanation:
          '有限要素法は三角形・四面体メッシュを使うため、複雑な形状の領域にも柔軟に対応できます。有限差分法は規則的な格子に限られがちです。',
      },
    },
    {
      id: 'alternate',
      title: '別の見方：構造解析とFEM',
      content:
        '建物や橋の強度解析、車の衝突シミュレーション、半導体の熱設計など、FEMは工学のあらゆる分野で標準的なツールです。CAEソフトウェアの核となる技術です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：有限要素法を体感する',
      content:
        'メッシュの細かさと要素次数を変えて、近似精度の変化を確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'finite-element-intro-summary',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'meshSize', min: 2, max: 50, step: 1, initial: 10 },
          { name: 'polynomialOrder', min: 1, max: 3, step: 1, initial: 1 },
        ],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
