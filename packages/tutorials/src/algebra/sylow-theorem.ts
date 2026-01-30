import { Tutorial } from '../types';

export const sylowTheoremTutorial: Tutorial = {
  id: 'sylow-theorem',
  title: 'シローの定理',
  description: 'シローの定理による部分群の存在と個数の制約を学ぶ',
  category: 'algebra',
  steps: [
    {
      id: 'hook',
      title: 'ラグランジュの逆を求めて',
      content:
        'ラグランジュの定理は「部分群の位数は群の位数の約数」と教えてくれますが、\n逆に「約数の位数の部分群が存在するか」は保証しません。\n\nシローの定理は、素数冪の位数については存在を保証する、\n驚くべき定理です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: 'シロー部分群を見つける',
      content:
        '位数12 = 2² × 3 の群を考えます。\n\nシローの定理により:\n• 位数4（= 2²）の部分群が存在\n• 位数3の部分群が存在\n\nそれぞれの個数にも制約があります。探してみましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'シローの3つの定理',
      content:
        '|G| = pⁿm（pは素数、gcd(p,m)=1）のとき:\n\n第1定理: 位数 pⁿ の部分群（シロー p-部分群）が存在する\n\n第2定理: すべてのシロー p-部分群は互いに共役\n\n第3定理: シロー p-部分群の個数 nₚ は\n  nₚ ≡ 1 (mod p) かつ nₚ | m',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '具体的な適用',
      content:
        '|G| = 15 = 3 × 5 の場合:\n\nn₃: n₃ ≡ 1 (mod 3), n₃ | 5 → n₃ = 1\nn₅: n₅ ≡ 1 (mod 5), n₅ | 3 → n₅ = 1\n\nどちらも1つ → 正規部分群\n→ G ≅ Z₃ × Z₅ ≅ Z₁₅\n\n位数15の群は巡回群しかない！',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: '確認クイズ',
      content: 'シローの定理を使ってみましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '|G| = 12 のとき、シロー3-部分群の個数として可能なのは？',
        options: [
          { id: 'a', label: '1 または 2', correct: false },
          { id: 'b', label: '1 または 4', correct: true },
          { id: 'c', label: '1 または 3', correct: false },
          { id: 'd', label: '3 または 6', correct: false },
        ],
        explanation:
          'n₃ ≡ 1 (mod 3) かつ n₃ | 4 なので、n₃ ∈ {1, 4}。n₃ = 2 は 2 ≡ 2 (mod 3) で不適、n₃ = 4 は 4 ≡ 1 (mod 3) で適合します。',
      },
    },
    {
      id: 'alternate',
      title: '群の分類への応用',
      content:
        'シローの定理は有限群の分類に不可欠です。\n\n• シロー部分群が唯一なら正規部分群\n• 正規シロー部分群があれば半直積に分解可能\n• 小さい位数の群の完全分類に活躍\n\n例: 位数が pq（p < q 素数）で p ∤ (q-1) なら巡回群のみ',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：シローの定理の威力',
      content:
        'シローの定理は:\n\n• 素数冪位数の部分群の存在を保証\n• 共役性により本質的に一種類\n• 個数への合同条件と整除条件\n• 有限群の分類の最強の道具\n\nこの定理なくして群の構造解析は語れません。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
