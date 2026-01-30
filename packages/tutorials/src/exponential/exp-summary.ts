import { Tutorial } from '../types';

export const expSummaryTutorial: Tutorial = {
  id: 'exp-summary',
  title: '指数関数のまとめ',
  description: '指数関数の全体像を振り返り、知識を整理する',
  category: 'exponential',
  steps: [
    {
      id: 'hook',
      title: '指数関数の全体像',
      content:
        'ここまで学んだ指数関数の世界を一望しましょう。基本法則から応用まで、すべてが「一定割合で変化する」という1つのアイデアから生まれています。全体像をアニメーションで振り返りましょう。',
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
      title: '知識マップを探索しよう',
      content:
        '各トピックのつながりを確認しましょう。指数法則→グラフ→ネイピア数→成長と減衰→応用。どのトピックも互いに関連しています。',
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
      title: '指数法則の全体像',
      content:
        '指数法則まとめ：\n• aᵐ × aⁿ = aᵐ⁺ⁿ\n• aᵐ ÷ aⁿ = aᵐ⁻ⁿ\n• (aᵐ)ⁿ = aᵐⁿ\n• a⁰ = 1\n• a⁻ⁿ = 1/aⁿ\n• a^(1/n) = ⁿ√a\n• (ab)ⁿ = aⁿbⁿ\n\nこれらすべてが「aをn回掛ける」から自然に導かれます。',
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
      title: '応用の全体像',
      content:
        '指数関数の応用：\n• 成長：N₀eʳᵗ（人口、投資、細菌）\n• 減衰：N₀e⁻ᵏᵗ（放射性崩壊、冷却）\n• 複利：P(1+r/n)ⁿᵗ → Peʳᵗ\n• ロジスティック：K/(1+Ce⁻ʳᵗ)\n• 波動：eⁱωᵗ = cosωt + i·sinωt\n\nすべての根底に「変化率が現在の量に比例する」があります。',
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
      title: '総合クイズ',
      content: '指数関数 y = 3·2ˣ について、x=0のときの値は？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'y = 3·2ˣ で x=0 のときの y の値は？',
        options: [
          { id: 'a', label: '0', correct: false },
          { id: 'b', label: '1', correct: false },
          { id: 'c', label: '3', correct: true },
          { id: 'd', label: '6', correct: false },
        ],
        explanation:
          'y = 3·2⁰ = 3·1 = 3。どんな指数関数 y=a·bˣ でも、x=0のときy=aです。2⁰=1を忘れずに。',
      },
    },
    {
      id: 'alternate',
      title: '対数への橋渡し',
      content:
        '指数関数の逆関数が「対数関数」です。2ˣ=8 → x=log₂8=3。「答えがわかっていて、指数を求める」のが対数。指数関数を理解した今、対数関数を学ぶ準備が整いました。指数と対数は表裏一体の関係にあります。',
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
        '指数関数の全体まとめ：\n• 核心：一定割合での変化\n• 基本：aⁿ と指数法則\n• 特別な底：e ≈ 2.718（微分不変）\n• 成長と減衰のモデル\n• オイラーの公式で三角関数と統一\n• 逆関数は対数関数\n\n実践チュートリアルで応用力を高めましょう！',
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
