import { Tutorial } from '../types';

export const survivorshipBiasTutorial: Tutorial = {
  id: 'survivorship-bias',
  title: '【実践】生存者バイアス',
  description: '成功例だけを見ることで生じる統計的偏りを理解する',
  category: 'statistics',
  steps: [
    {
      id: 'hook',
      title: '見えないデータ',
      content:
        '第二次世界大戦中、帰還した爆撃機の被弾箇所を調べて装甲を強化しようとしました。\n\nでも統計学者エイブラハム・ウォールドは逆を提案しました。\n\n「被弾の少ない箇所を強化せよ」\n\nなぜ？ そこに当たった機体は帰ってこなかったからです。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'survivorship-bias-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう',
      content:
        '「生き残った」データと「消えた」データの両方を表示してみましょう。\n\n生存者だけを見たときと全体を見たときで、結論がどう変わりますか？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'survivorship-bias-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '成功者の法則',
      content:
        '成功した起業家に「成功の秘訣」を聞くとします。\n\n「毎朝5時に起きる」「大学を中退した」「リスクを恐れなかった」\n\nでも同じことをして失敗した人は見えません。\n\n毎朝5時に起きて失敗した人が99%かもしれない。\n\n成功者だけのデータから一般法則を導くのは、生存者バイアスの典型です。',
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
      title: '投資ファンドの成績',
      content:
        '「過去10年間、平均リターン15%のファンド」── すごい成績に見えます。\n\nでもこれは生存者バイアスかもしれません。\n\n成績が悪かったファンドは途中で閉鎖・統合されて消えています。\n\n生き残ったファンドだけの平均は、全体の平均より高くなります。\n\n投資信託の実際のパフォーマンスは、公表されている数字より悪いことが多いのです。',
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
        '「猫は高い所から落ちても生き延びる」という主張、生存者バイアスはある？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '「猫は高層階から落ちても意外と生き延びる」という調査結果に生存者バイアスは？',
        options: [
          { id: 'a', label: 'バイアスはない', correct: false },
          { id: 'b', label: '即死した猫は病院に来ないのでデータに含まれない', correct: true },
          { id: 'c', label: '猫にバイアスは適用されない', correct: false },
          { id: 'd', label: 'むしろ逆のバイアスがある', correct: false },
        ],
        explanation:
          '正解は「即死した猫はデータに含まれない」です。\n\n動物病院に運ばれた猫のデータは「生き延びた猫」のみ。\n\n落下して即死した猫は病院に来ないので記録されません。\n\n生存者バイアスにより「高い所から落ちても意外と大丈夫」と誤った結論が導かれます。',
      },
    },
    {
      id: 'alternate',
      title: '別の見方：データの不在',
      content:
        '生存者バイアスの本質は「見えないデータ」の存在です。\n\n統計分析では、集められたデータだけでなく「集められなかったデータ」にも注意が必要です。\n\n・アンケートに答えない人\n・フォローアップから脱落した患者\n・倒産した企業\n\n「なぜこのデータが手元にあるのか」を常に問いましょう。',
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
        '生存者バイアス: 生き残ったデータだけを分析することで生じる偏り。\n\n身近な例:\n・成功者の法則（失敗者が見えない）\n・投資ファンドの成績（消えたファンドが見えない）\n・製品レビュー（不満な人は書かないことも）\n\n対策: 「見えていないデータは何か？」を常に問う。\n\nデータの「選択メカニズム」を理解することが、正しい分析の出発点です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'survivorship-bias-summary',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
