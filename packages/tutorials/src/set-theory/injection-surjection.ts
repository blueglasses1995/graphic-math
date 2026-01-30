import { Tutorial } from '../types';

export const injectionSurjectionTutorial: Tutorial = {
  id: 'injection-surjection',
  title: '全射・単射・全単射',
  description: '写像の3つの重要な分類（単射・全射・全単射）を学ぶ',
  category: 'set-theory',
  steps: [
    {
      id: 'hook',
      title: '3種類の矢印パターン',
      content:
        '3つの写像が並んでいます。\n\n1つ目は「矢印が重ならない」、2つ目は「すべての行き先が使われる」、3つ目は「両方を満たす」。\n\nこれが単射・全射・全単射の違いです。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
        circles: [{ radius: 1, color: '#42a5f5', plane: 'xy' }, { radius: 1, color: '#ef5350', plane: 'xy' }],
      },
      customScene: 'injection-surjection-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '矢印を組み替えよう',
      content:
        '矢印の行き先を変えて、単射・全射・全単射を作ってみましょう。\n\n条件を満たすとラベルが変わります。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'injection-surjection-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-injection',
      title: '単射（1対1）',
      content:
        '単射（injection）: 異なる入力には必ず異なる出力。\n\nf(a) = f(b) ならば a = b\n\n例: f(x) = 2x は単射（異なるxには異なる2xが対応）\n例: f(x) = x² は単射ではない（f(2) = f(-2) = 4）\n\n「行き先が重複しない」写像です。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-surjection',
      title: '全射と全単射',
      content:
        '全射（surjection）: すべての行き先が使われる。\n\nすべての b ∈ B に対して、f(a) = b となる a ∈ A が存在する。\n\n全単射（bijection）: 単射かつ全射。完全な1対1対応。\n\n全単射があるとき、2つの集合は「同じ大きさ」です。\nこれが集合の濃度を比較する方法でした。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: '考えてみよう',
      content: 'f: ℝ → ℝ, f(x) = eˣ はどれ？',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'f(x) = eˣ（ℝ → ℝ）は？',
        options: [
          { id: 'a', label: '全単射', correct: false },
          { id: 'b', label: '単射だが全射でない', correct: true },
          { id: 'c', label: '全射だが単射でない', correct: false },
          { id: 'd', label: '単射でも全射でもない', correct: false },
        ],
        explanation:
          '正解は「単射だが全射でない」です。\n\neˣ は常に増加するので単射。しかし eˣ > 0 なので、負の数は値域に含まれません。\nよって全射ではありません（終域をℝ⁺にすれば全単射）。',
      },
    },
    {
      id: 'alternate',
      title: '逆写像の存在',
      content:
        '全単射には逆写像 f⁻¹ が存在します。\n\n・単射のみ: 左逆写像（左から合成すると恒等写像）\n・全射のみ: 右逆写像（右から合成すると恒等写像）\n・全単射: 両方向の逆写像\n\n暗号化と復号は全単射の典型例です。暗号化できたら必ず復号できる ── これが全単射の保証です。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
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
        '写像の分類：\n\n・単射: 異なる入力 → 異なる出力\n・全射: すべての行き先が使われる\n・全単射: 単射 + 全射 = 完全な1対1対応\n・全単射 ⟺ 逆写像が存在\n\n次は「同値関係」── 要素を分類する方法を学びます。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'injection-surjection-summary',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
