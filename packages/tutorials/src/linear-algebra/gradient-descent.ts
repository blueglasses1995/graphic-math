import { Tutorial } from '../types';

export const gradientDescentTutorial: Tutorial = {
  id: 'gradient-descent',
  title: '勾配降下法',
  description: '勾配ベクトルを使った最適化手法の線形代数的理解を学ぶ',
  category: 'linear-algebra',
  steps: [
    {
      id: 'hook',
      title: '谷底を目指して下る',
      content:
        '山の斜面で最も急な方向に下り続ければ、\n' +
        'いつか谷底にたどり着きます。\n\n' +
        'これが勾配降下法（Gradient Descent）の基本アイデアです。\n\n' +
        '関数 f(x) の勾配 ∇f(x) は「最も急に増加する方向」を指すので、\n' +
        '-∇f(x) 方向に進めば関数値が減少します。\n\n' +
        'x_{n+1} = x_n - α∇f(x_n)\n\n' +
        'αは学習率（ステップサイズ）です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '勾配ベクトルを体感',
      content:
        'f(x,y) = x² + 4y² の勾配を考えます。\n\n' +
        '∇f = (2x, 8y)\n\n' +
        '点(2,1)での勾配：∇f(2,1) = (4, 8)\n' +
        '最も急に増加する方向は(4,8)、つまり降下方向は(-4,-8)。\n\n' +
        '学習率α=0.1とすると：\n' +
        '(2,1) → (2-0.4, 1-0.8) = (1.6, 0.2)\n\n' +
        'f(2,1) = 8 → f(1.6,0.2) = 2.72\n' +
        '一歩で大幅に値が減りました！',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '収束速度と条件数',
      content:
        '勾配降下法の収束速度はヘッセ行列の条件数で決まります。\n\n' +
        '条件数 κ = λ_max / λ_min\n\n' +
        'κが大きい（楕円が細長い）と、\n' +
        '勾配の方向と最適解への方向がずれて\n' +
        'ジグザグに振動し、収束が遅くなります。\n\n' +
        'f(x,y) = x² + 100y²（κ=100）は\n' +
        'f(x,y) = x² + y²（κ=1）より\n' +
        'はるかに収束が遅いのです。\n\n' +
        'これを改善するのが前処理（プリコンディショニング）です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '確率的勾配降下法（SGD）',
      content:
        '深層学習ではデータが膨大なため、\n' +
        '全データの勾配を計算するのは非効率です。\n\n' +
        'SGDはランダムに選んだミニバッチ（例：32個）\n' +
        'だけで勾配を近似します。\n\n' +
        'θ_{t+1} = θ_t - α∇L_batch(θ_t)\n\n' +
        'ノイズが入りますが、期待値は正しい勾配方向です。\n' +
        'むしろノイズが局所最適解からの脱出を助けます。\n\n' +
        'Adam、AdaGrad等の改良版は\n' +
        '過去の勾配情報を行列的に蓄積して\n' +
        '学習率を自動調整します。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：勾配降下法',
      content: '勾配降下法の理解を確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '勾配降下法で学習率αが大きすぎるとどうなりますか？',
        options: [
          { id: 'a', label: '常に最適解に速く収束する', correct: false },
          { id: 'b', label: '発散して最適解に到達できない', correct: true },
          { id: 'c', label: '局所最適解に確実にはまる', correct: false },
          { id: 'd', label: '勾配がゼロになる', correct: false },
        ],
        explanation:
          '学習率が大きすぎると、最適解を飛び越えてしまい、振動が拡大して発散します。適切な学習率の選択が勾配降下法の重要なポイントです。',
      },
    },
    {
      id: 'alternate',
      title: 'ニュートン法との比較',
      content:
        'ニュートン法はヘッセ行列（二次微分）も使います。\n\n' +
        'x_{n+1} = x_n - H⁻¹∇f(x_n)\n\n' +
        'ヘッセ行列で勾配方向を補正するため、\n' +
        '条件数の影響を受けにくく、二次収束します。\n\n' +
        'ただし欠点も：\n' +
        '・H⁻¹の計算がO(n³)で高コスト\n' +
        '・大規模問題には非実用的\n\n' +
        'L-BFGSはヘッセ行列の近似を低コストで更新する\n' +
        '準ニュートン法で、中規模問題に効果的です。\n' +
        '線形代数の知識が最適化アルゴリズムの選択に活きます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：勾配降下法',
      content:
        'この章で学んだことを整理しましょう。\n\n' +
        '1. 勾配降下法：x_{n+1} = x_n - α∇f(x_n)\n' +
        '2. 収束速度はヘッセ行列の条件数に依存\n' +
        '3. SGDはミニバッチで勾配を近似\n' +
        '4. 学習率の選択が収束に重要\n' +
        '5. ニュートン法はH⁻¹で方向を補正\n\n' +
        '最適化は線形代数と微分の融合分野です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
