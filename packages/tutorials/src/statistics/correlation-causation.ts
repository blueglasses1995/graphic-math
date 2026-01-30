import { Tutorial } from '../types';

export const correlationCausationTutorial: Tutorial = {
  id: 'correlation-causation',
  title: '相関と因果',
  description: '相関関係と因果関係の違いを理解し、誤った推論を避ける',
  category: 'statistics',
  steps: [
    {
      id: 'hook',
      title: 'アイスクリームと溺死',
      content:
        'アイスクリームの売上と溺死事故の件数には強い正の相関があります。\n\nでは「アイスクリームが溺死を引き起こす」のでしょうか？\n\nもちろん違います。両方とも「暑い日」に増えるだけです。\n\nこれが「相関は因果を意味しない」の典型例です。',
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
        '2つの変数と「隠れた第3の変数」を操作してみましょう。\n\n第3の変数を制御すると、見かけの相関はどうなりますか？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '交絡変数',
      content:
        'アイスクリームと溺死の例では「気温」が交絡変数です。\n\n気温 → アイスクリーム売上↑\n気温 → 水遊び↑ → 溺死↑\n\n交絡変数は両方の変数に影響を与え、見せかけの相関を生み出します。\n\n統計分析では交絡変数を見つけて制御することが極めて重要です。',
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
      title: '因果を示すには',
      content:
        '因果関係を示すための条件:\n\n1. 相関がある（必要条件だが十分ではない）\n2. 時間的前後関係（原因が結果の前に起こる）\n3. 交絡変数が排除されている\n\n最も強力な方法はランダム化比較試験（RCT）です。\n\n対象をランダムに2群に分け、一方にだけ介入する。\nランダム化が交絡変数を均等に分配するため、因果関係を推論できます。',
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
        '消防車の出動数と火災の被害額に正の相関がある。これはどういう関係？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '消防車の出動数と火災の被害額の正の相関は？',
        options: [
          { id: 'a', label: '消防車が被害を増やしている', correct: false },
          { id: 'b', label: '被害額が消防車を呼んでいる', correct: false },
          { id: 'c', label: '火災の規模が両方に影響している', correct: true },
          { id: 'd', label: '偶然の相関', correct: false },
        ],
        explanation:
          '正解は「火災の規模が両方に影響している」です。\n\n大きな火災ほど消防車が多く出動し、被害額も大きくなります。\n\n「消防車を減らせば被害が減る」という結論は完全に間違いです。\n\n因果の方向と交絡変数を常に考えましょう。',
      },
    },
    {
      id: 'alternate',
      title: '別の見方：擬似相関の罠',
      content:
        'ニコラス・ケイジの映画出演数とプールの溺死者数に高い相関がある ── という有名な擬似相関があります。\n\n多数の変数を探せば、偶然の相関はいくらでも見つかります。\n\nデータマイニングで相関を「発見」しても、それが因果かどうかは別の議論が必要です。\n\n「相関 ≠ 因果」は統計リテラシーの最も基本的な教訓です。',
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
        '相関は「2つの変数が一緒に動く」こと。因果は「一方が他方を引き起こす」こと。\n\n相関があっても因果があるとは限らない（交絡変数、逆因果、偶然の可能性）。\n\n因果関係の最も信頼性の高い証拠はランダム化比較試験（RCT）から得られます。\n\n次は回帰分析の「診断」── モデルの妥当性を確認する方法を学びます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
