import { Tutorial } from '../types';

export const categorySummaryTutorial: Tutorial = {
  id: 'category-summary',
  title: '圏論の基本まとめ',
  category: 'category-theory',
  description: 'ここまで学んだ圏論の基本概念を総復習する',
  steps: [
    {
      id: 'hook',
      title: '圏論の全体像',
      stepType: 'animation',
      content: '圏、関手、自然変換、随伴、極限、モナド——これらの概念がどのように関連しているかを全体マップとしてアニメーション表示します。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'touch',
      title: '概念の関連図を構築',
      stepType: 'interactive',
      content: '学んだ概念をドラッグして関連図を完成させましょう。圏→関手→自然変換の階層構造、随伴→モナドの導出関係を配置してください。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
    },
    {
      id: 'example-1',
      title: '基本概念の振り返り',
      stepType: 'explanation',
      content: '圏（対象と射、合成、恒等射）→ 関手（圏間の構造保存写像）→ 自然変換（関手間の射）→ 関手圏（関手を対象とする圏）。この階層構造が圏論の骨格です。米田の補題は対象と射の関係を明確にします。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'example-2',
      title: '普遍性のパターン',
      stepType: 'explanation',
      content: '始対象・終対象、積・余積、極限・余極限、随伴——これらは「普遍性」で統一されます。「最良のもの」を「一意な射の存在」で特徴づけるパターンは圏論全体を貫いています。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'predict',
      title: '総復習クイズ',
      stepType: 'quiz',
      content: '圏論の基本概念を総復習しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      quiz: {
        question: '「関手を定義するために圏が生まれ、自然変換を定義するために関手が生まれた」と述べたのは誰ですか？',
        options: [
          { id: 'a', label: 'アレクサンダー・グロタンディーク', correct: false },
          { id: 'b', label: 'ソーンダース・マックレーン', correct: true },
          { id: 'c', label: '米田信夫', correct: false },
          { id: 'd', label: 'サミュエル・アイレンベルク', correct: false }
        ],
        explanation: 'マックレーンの有名な言葉です。圏論は自然変換という概念を厳密に定義するために発展しました。マックレーンとアイレンベルクが圏論の創始者です。'
      }
    },
    {
      id: 'alternate',
      title: 'さらなる学習への道',
      stepType: 'explanation',
      content: '基礎の先にはトポス理論（論理学との接続）、高次圏論（∞-圏）、ホモトピー型理論（数学の新しい基礎）などが広がっています。応用面ではプログラミング言語の型理論、量子計算、データベース理論など活発な研究分野があります。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'summary',
      title: 'まとめ：圏論を武器に',
      stepType: 'interactive',
      content: '圏論は「構造の科学」です。対象・射・関手・自然変換という少数の概念から驚くほど豊かな理論が構築されます。この基礎をもとに、応用分野を探検していきましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
    }
  ]
};
