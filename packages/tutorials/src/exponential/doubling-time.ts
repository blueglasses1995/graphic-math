import { Tutorial } from '../types';

export const doublingTimeTutorial: Tutorial = {
  id: 'doubling-time',
  title: '倍増時間',
  description: '量が2倍になるまでの時間の求め方と応用を学ぶ',
  category: 'exponential',
  steps: [
    {
      id: 'hook',
      title: '2倍になるのはいつ？',
      content:
        '世界の人口は約60年で2倍になりました。GDPが年3%成長なら2倍になるのは？投資が年5%なら？「倍増時間」を知れば未来が見通せます。成長する量が次々と2倍を超えていくアニメーションを見てみましょう。',
      customScene: "doubling-time-animation",
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
      title: '成長率で倍増時間を調べよう',
      content:
        '成長率(%)を変えて、倍増時間がどう変わるか確認しましょう。成長率が2倍になると、倍増時間はおよそ半分になります。',
      customScene: "doubling-time-interactive",
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
      title: '倍増時間の公式',
      content:
        'N₀·eʳᵀ = 2N₀ を解くと：\neʳᵀ = 2\nrT = ln2\nT = ln2/r ≈ 0.693/r\n\n例：年率5%（r=0.05）なら\nT = 0.693/0.05 ≈ 13.9年\n\n約14年で2倍になります。半減期の公式と同じ構造です。',
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
      title: '72の法則（予告）',
      content:
        '暗算で倍増時間を求める裏技「72の法則」：\n\n倍増時間 ≈ 72 ÷ 成長率(%)\n\n例：\n年率3% → 72÷3 = 24年\n年率6% → 72÷6 = 12年\n年率12% → 72÷12 = 6年\n\nなぜ72なのか？ln2 ≈ 0.693 ≈ 0.72 の近似と、72が多くの数で割り切れるからです。',
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
      content: '年率2%で成長する経済が2倍になるのはおよそ何年後？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '年率2%成長の倍増時間は？',
        options: [
          { id: 'a', label: '約20年', correct: false },
          { id: 'b', label: '約36年', correct: true },
          { id: 'c', label: '約50年', correct: false },
          { id: 'd', label: '約72年', correct: false },
        ],
        explanation:
          '72÷2 = 36年。正確にはln2/0.02 ≈ 34.7年ですが、72の法則で十分良い近似が得られます。',
      },
    },
    {
      id: 'alternate',
      title: '倍増時間と半減期の対称性',
      content:
        '倍増時間と半減期は表裏一体：\n\n倍増時間 T₂ = ln2/r\n半減期 T₁/₂ = ln2/k\n\n成長(r)の逆が減衰(k)。同じ数学で正反対の現象を記述できます。成長の勢いを知りたいときは倍増時間、減衰の速さを知りたいときは半減期を使います。',
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
        '倍増時間：\n• T = ln2/r ≈ 0.693/r\n• 72の法則：T ≈ 72/成長率(%)\n• 半減期と同じ構造\n• 成長率が2倍→倍増時間は半分\n\n成長の速さを直感的に理解するための強力なツールです。',
      customScene: "doubling-time-summary",
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
