import { Tutorial } from '../types';

export const pValueTutorial: Tutorial = {
  id: 'p-value',
  title: 'p値とは',
  description: 'p値の正しい意味と誤解されやすいポイントを理解する',
  category: 'statistics',
  steps: [
    {
      id: 'hook',
      title: '最も誤解される数値',
      content:
        'p値は統計学で最も重要な数値の一つですが、最も誤解されている数値でもあります。\n\n「p < 0.05 だから有意」── この言葉を見聞きしたことがあるでしょう。\n\nでもp値が本当に意味することを正しく理解している人は多くありません。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'p-value-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう',
      content:
        'データを変えて、p値がどう変わるか観察しましょう。\n\n差が大きいとき、標本サイズが大きいとき、p値はどうなりますか？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'p-value-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'p値の定義',
      content:
        'p値 = 「H₀が正しいと仮定したとき、観測データ以上に極端な結果が得られる確率」\n\nコインを100回投げて65回表が出た場合:\nH₀: 公正なコイン（表の確率 = 0.5）\np値 = P(65回以上の表 | コインは公正) ≈ 0.002\n\nこれは「公正なコインで65回以上表が出る確率は0.2%」という意味です。\n\n非常に珍しいので、「公正ではない」と結論します。',
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
      title: 'よくある誤解',
      content:
        'p値は以下のものではありません:\n\n× H₀が正しい確率\n× 結果が偶然である確率\n× 効果の大きさの指標\n× 結果の再現性の指標\n\np値が小さいことは「H₀のもとで珍しいデータ」を意味するだけです。\n\n「効果がある」としても、その効果が実用的に意味があるかは別問題です。p=0.001 でも効果が微小なことはあります。',
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
        '標本サイズを非常に大きくすると、微小な差でもp値はどうなりますか？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '標本サイズが非常に大きいとき、微小な差のp値は？',
        options: [
          { id: 'a', label: '大きくなる', correct: false },
          { id: 'b', label: '小さくなる（有意になる）', correct: true },
          { id: 'c', label: '変わらない', correct: false },
          { id: 'd', label: '予測できない', correct: false },
        ],
        explanation:
          '正解は「小さくなる（有意になる）」です。\n\n標本が大きいと微小な差でも検出できてしまいます。\n\np値が小さい = 重要な差、ではありません。「統計的に有意」と「実質的に意味がある」は別物です。\n\n効果量（effect size）も必ず確認しましょう。',
      },
    },
    {
      id: 'alternate',
      title: '別の見方：連続的な証拠',
      content:
        'p値を「0.05以下かどうか」の二択で使うのは情報の無駄遣いです。\n\np = 0.049 と p = 0.051 にどれほどの違いがあるでしょうか？\n\np値は連続的な「H₀に対する証拠の強さ」と考えるべきです。\n\np = 0.001 は p = 0.04 より強い証拠。\n\n近年は p値だけに頼らず、信頼区間や効果量を併記することが推奨されています。',
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
        'p値 = H₀のもとで観測以上に極端な結果が出る確率\n\n× H₀が正しい確率ではない\n× 効果の大きさを示すものではない\n\np値が小さい → H₀に対する証拠が強い\n\n統計的有意性だけでなく、効果量と信頼区間も確認しましょう。\n\n次は「第一種・第二種の過誤」── 検定の判断ミスについて学びます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'p-value-summary',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
