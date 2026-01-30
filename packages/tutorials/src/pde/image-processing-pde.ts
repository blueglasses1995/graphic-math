import { Tutorial } from '../types';

export const imageProcessingPdeTutorial: Tutorial = {
  id: 'image-processing-pde',
  title: '画像処理とPDE',
  description: 'PDEを用いた画像処理技法を学ぶ',
  category: 'pde',
  steps: [
    {
      id: 'hook',
      title: '画像をぼかす＝熱方程式',
      content:
        'ガウスぼかし（ガウシアンブラー）は、実は画像に熱方程式を適用していることと同じです。時間が経つほど画像がぼやけます。ぼかしの過程をアニメーションで見てみましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'image-processing-pde-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう：拡散の強さを調整',
      content:
        '拡散パラメータを変えて、画像のぼかし具合がどう変わるか試してください。大きくするほどぼやけ、小さくすると鮮明なままです。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'image-processing-pde-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '等方拡散と異方性拡散',
      content:
        '等方拡散（熱方程式）は全方向に均一にぼかし、エッジも消えます。ペロナ・マリク方程式は異方性拡散で、エッジを保ちつつノイズだけを除去します。∂u/∂t = div(g(|∇u|)∇u)。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: 'スケールスペース理論',
      content:
        'ガウスぼかし（熱方程式の解）は「スケールスペース」を定義します。細かい構造から徐々に消えていき、大きな構造だけが残ります。コンピュータビジョンのSIFT特徴量の基礎です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：画像処理とPDE',
      content: 'ガウスぼかしとPDEの関係として正しいものはどれですか？',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'ガウスぼかしは、どのPDEを画像に適用していることに対応しますか？',
        options: [
          { id: 'a', label: '波動方程式', correct: false },
          { id: 'b', label: '熱方程式（拡散方程式）', correct: true },
          { id: 'c', label: 'ラプラス方程式', correct: false },
          { id: 'd', label: 'バーガーズ方程式', correct: false },
        ],
        explanation:
          'ガウスぼかしは画像の輝度値に対して熱方程式 ∂u/∂t = ∇²u を適用することと数学的に等価です。',
      },
    },
    {
      id: 'alternate',
      title: '別の見方：画像修復（インペインティング）',
      content:
        '画像の欠損部分を補修するインペインティングもPDEで実現できます。欠損部分でラプラス方程式や高次のPDEを解き、周囲の情報から自然に補間します。古い写真の修復に使われています。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：画像処理PDEを体感する',
      content:
        '拡散の種類とパラメータを変えて、画像処理の効果を確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'image-processing-pde-summary',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'diffusionStrength', min: 0, max: 5, step: 0.1, initial: 1 },
          { name: 'iterations', min: 1, max: 50, step: 1, initial: 10 },
        ],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
