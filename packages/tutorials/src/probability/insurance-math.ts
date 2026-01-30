import { Tutorial } from '../types';

export const insuranceMathTutorial: Tutorial = {
  id: 'insurance-math',
  title: '【実践】保険の数学',
  description: '大数の法則と期待値で保険の仕組みを理解する',
  category: 'probability',
  steps: [
    {
      id: 'hook',
      title: '保険はなぜ成り立つ？',
      content:
        '保険会社は事故が起きたら大金を払います。それでも利益が出るのはなぜ？大数の法則と期待値の計算で、保険のビジネスモデルを理解しましょう。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'expected-loss',
      title: '期待損失',
      content:
        '自動車保険の例:\n\n• 事故確率: 5% (0.05)\n• 事故時の平均損害額: 100万円\n\n期待損失 = 0.05 × 100万 = 5万円\n\n保険料を5万円以上に設定すれば、平均的に利益が出ます。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'pooling',
      title: 'リスクプーリング',
      content:
        '1人だと「0円か100万円か」の大きなバラつき。しかし10000人分まとめると:\n\n• 合計期待損失: 5億円\n• 標準偏差: √(10000×0.05×0.95)×100万 ≒ 2179万\n• 変動係数: 2179万/5億 ≒ 4.4%\n\n人数が増えるほど予測精度が上がります。大数の法則です。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'interactive',
      title: '加入者数を変えてみよう',
      content:
        '加入者数を変えて、保険会社の損益のバラつきがどう変化するか確認しましょう。人数が増えるほど安定することが分かります。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'quiz',
      title: 'クイズ',
      content: '保険料を期待損失と同額にしたら保険会社はどうなる？',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '保険料 = 期待損失 のとき保険会社は？',
        options: [
          { id: 'a', label: '常に利益が出る', correct: false },
          { id: 'b', label: '長期的にトントン（運営費で赤字）', correct: true },
          { id: 'c', label: '常に損失が出る', correct: false },
          { id: 'd', label: '予測不能', correct: false },
        ],
        explanation:
          '期待損失 = 保険料なら期待利益は0。しかし運営費や資本コストがかかるため、実際には赤字になります。だから保険料 > 期待損失です。',
      },
    },
    {
      id: 'why-buy',
      title: 'なぜ人は保険に入る？',
      content:
        '期待値では保険料 > 期待損失で損。ではなぜ加入する？\n\n• リスク回避: 大きな損失を避けたい\n• 効用理論: 100万円失う痛みは100万円得る喜びより大きい\n• 破産リスク: 大損害は生活を破壊しうる\n\n期待値が全てではないのです。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        '保険の数学:\n\n• 保険料 = 期待損失 + 運営費 + 利益\n• 大数の法則でリスクが予測可能に\n• リスクプーリングで個人のリスクを分散\n• 加入者は期待値より「安心」に価値を見出す\n\n確率と期待値の実社会での応用例です。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
