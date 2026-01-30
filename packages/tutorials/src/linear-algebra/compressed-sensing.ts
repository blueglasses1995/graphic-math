import { Tutorial } from '../types';

export const compressedSensingTutorial: Tutorial = {
  id: 'compressed-sensing',
  title: '圧縮センシング',
  description: 'スパース性を活用して少ない測定から信号を復元する理論を学ぶ',
  category: 'linear-algebra',
  steps: [
    {
      id: 'hook',
      title: 'シャノンを超える',
      content:
        'シャノン・ナイキストの定理では\n' +
        '信号を正確に復元するには周波数の2倍以上の\n' +
        'サンプリングが必要です。\n\n' +
        'しかし信号がスパース（多くの成分がゼロ）なら、\n' +
        '理論的に必要な量よりはるかに少ない測定で\n' +
        '信号を正確に復元できます。\n\n' +
        'これが「圧縮センシング」の革命的なアイデアで、\n' +
        'MRI撮像の高速化などに応用されています。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: 'スパース復元を体感',
      content:
        '問題設定：\n' +
        'y = Ax（y: m次元の測定、x: n次元の信号、m << n）\n' +
        '劣決定連立方程式（解が無数にある）\n\n' +
        'しかし x がスパース（非ゼロ要素が少ない）なら\n' +
        '解を一意に決定できます。\n\n' +
        '例：n=100の信号で非ゼロが5個\n' +
        '→ m=30程度の測定で正確に復元可能！\n\n' +
        '100次元の信号を30回の測定で復元する。\n' +
        'スパース性という「事前知識」が鍵です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'L1最小化',
      content:
        'スパースな解を見つける定式化：\n\n' +
        'min |x|₁ subject to y = Ax\n\n' +
        'L1ノルム最小化は凸最適化問題（線形計画法）で\n' +
        '効率的に解けます。\n\n' +
        'なぜL1？L1の単位球はひし形で角がある。\n' +
        'y=Axの超平面との接触点が角（スパースな点）に\n' +
        'なりやすいのです。\n\n' +
        'L2最小化では密な解が得られてしまいます。\n' +
        'L1の幾何学的性質がスパース性を促進するのです。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: 'RIP条件とランダム測定',
      content:
        '復元が成功する条件としてRIP（制限等長性）があります。\n\n' +
        'RIP：スパースベクトルに対してAが「ほぼ等長」\n' +
        '(1-δ)|x|² ≤ |Ax|² ≤ (1+δ)|x|²\n\n' +
        '驚くべきことに、ランダム行列（ガウス分布等）は\n' +
        '高確率でRIPを満たします。\n\n' +
        '必要な測定数：m ≥ C·s·log(n/s)\n' +
        's：スパース度、n：信号次元\n\n' +
        'つまりランダムに測定するだけで\n' +
        '圧縮と復元が同時に達成されるのです。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：圧縮センシング',
      content: '圧縮センシングの基本を確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '圧縮センシングでスパースな信号を復元するために最小化するのは？',
        options: [
          { id: 'a', label: 'L2ノルム', correct: false },
          { id: 'b', label: 'L1ノルム', correct: true },
          { id: 'c', label: 'L∞ノルム', correct: false },
          { id: 'd', label: 'フロベニウスノルム', correct: false },
        ],
        explanation:
          'L1ノルム最小化はスパースな解を促進します。L1の単位球の「角」がスパースな点に対応するため、L1最小化は自然にスパースな解を見つけます。',
      },
    },
    {
      id: 'alternate',
      title: 'MRIへの応用',
      content:
        '圧縮センシングの最も成功した応用がMRI（磁気共鳴画像）です。\n\n' +
        '従来のMRI：フーリエ空間の全データを取得\n' +
        '→ 撮像に長時間かかる\n\n' +
        '圧縮センシングMRI：20-30%のデータだけ取得\n' +
        '→ スパース復元で完全な画像を再構成\n' +
        '→ 撮像時間を3-5倍短縮！\n\n' +
        '2016年にFDA承認を受け、臨床現場で使われています。\n\n' +
        '線形代数の理論が患者の待ち時間を短縮し、\n' +
        '動きに弱いMRIの品質を向上させました。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：圧縮センシング',
      content:
        'この章で学んだことを整理しましょう。\n\n' +
        '1. スパースな信号は少ない測定で復元可能\n' +
        '2. L1ノルム最小化がスパース復元の標準手法\n' +
        '3. ランダム測定行列がRIP条件を満たす\n' +
        '4. 必要測定数はO(s log(n/s))\n' +
        '5. MRI高速化に実用的に応用\n\n' +
        'スパース性と線形代数の融合が新しい計測理論を生みました。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
