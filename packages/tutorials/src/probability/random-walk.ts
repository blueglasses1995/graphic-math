import { Tutorial } from '../types';

export const randomWalkTutorial: Tutorial = {
  id: 'random-walk',
  title: '【実践】ランダムウォーク',
  description: 'ランダムな一歩一歩が作る不思議な軌跡',
  category: 'probability',
  steps: [
    {
      id: 'hook',
      title: '酔っ払いの散歩',
      content:
        '酔っ払いが一歩ずつランダムに右か左に動きます。n歩後にどこにいるでしょう？この単純なモデルが株価変動から拡散現象まで多くの現象を説明します。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'one-dim',
      title: '1次元ランダムウォーク',
      content:
        '確率1/2で+1、確率1/2で-1動く。n歩後の位置 Sₙ = X₁+X₂+...+Xₙ\n\n• E[Sₙ] = 0（平均的には動かない）\n• Var(Sₙ) = n（バラつきは歩数に比例）\n• σ(Sₙ) = √n（広がりは√nに比例）',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'return',
      title: '原点への帰還',
      content:
        '1次元ランダムウォークは確率1で原点に戻ります（再帰性）。\n\nしかし2次元でも確率1で帰還しますが、3次元では約0.34の確率でしか帰還しません。\n\n「酔っ払いは必ず家に帰るが、酔った鳥は帰れないかもしれない」',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'interactive',
      title: 'ランダムウォークを描こう',
      content:
        'ランダムウォークの軌跡を複数本描いて、バラつきの様子を観察しましょう。歩数を増やすと√nの広がりが確認できます。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'quiz',
      title: 'クイズ',
      content: '100歩のランダムウォークで、原点からの距離の標準偏差は？',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '100歩後の位置の標準偏差は？',
        options: [
          { id: 'a', label: '100', correct: false },
          { id: 'b', label: '50', correct: false },
          { id: 'c', label: '10', correct: true },
          { id: 'd', label: '1', correct: false },
        ],
        explanation:
          'σ = √n = √100 = 10。100歩歩いても典型的な位置は原点から±10程度です。',
      },
    },
    {
      id: 'applications',
      title: '応用',
      content:
        'ランダムウォークの応用:\n\n• 株価モデル（ブラウン運動の離散版）\n• 分子の拡散\n• ギャンブラーの破産問題\n• ポリマーの形状\n• アルゴリズム（ランダムウォークアルゴリズム）',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        'ランダムウォーク:\n\n• E[Sₙ]=0, σ=√n\n• 1D/2Dでは確率1で原点回帰、3D以上では不確実\n• 株価・拡散・高分子など広範な応用\n• 単純だが豊かな数学的構造を持つ\n\n確率過程の最も基本的なモデルです。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
