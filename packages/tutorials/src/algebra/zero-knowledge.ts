import { Tutorial } from '../types';

export const zeroKnowledgeTutorial: Tutorial = {
  id: 'zero-knowledge',
  title: 'ゼロ知識証明',
  description: '秘密を明かさずに知識を証明する数学的手法を学ぶ',
  category: 'algebra',
  steps: [
    {
      id: 'hook',
      title: '秘密を漏らさない証明',
      content:
        '「私はこの扉のパスワードを知っている」\n\nこれを証明したいが、パスワード自体は教えたくない。\n\nそんな「矛盾」を解決するのがゼロ知識証明です。\n\n秘密の情報を一切漏らさずに、\n知識を持っていることだけを証明できます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: 'アリババの洞窟',
      content:
        '洞窟には左右のルートがあり、奥で魔法の扉で繋がっています。\n\n証明者（ペギー）: 扉のパスワードを知っている\n検証者（ビクター）: パスワードを知りたくないが、ペギーが知っているか確認したい\n\n手順:\n1. ペギーがランダムに左右どちらかに入る\n2. ビクターが「左から出てこい」or「右から出てこい」と指示\n3. ペギーが指示通りに出てくる\n\nこれを繰り返すと確信が高まります。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'ゼロ知識証明の3条件',
      content:
        'ゼロ知識証明は3つの性質を満たします:\n\n1. 完全性: 正しい証明者は必ず検証に成功する\n2. 健全性: 嘘つきの証明者は高確率で失敗する\n3. ゼロ知識性: 検証者は秘密に関する情報を一切得ない\n\nゼロ知識性は「シミュレータ」の存在で形式化されます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: 'シュノアプロトコル',
      content:
        '離散対数のゼロ知識証明（シュノアプロトコル）:\n\n公開: g, h = g^x（xを知っていることを証明）\n\n1. 証明者: r をランダム選択、t = g^r を送信\n2. 検証者: チャレンジ c をランダム送信\n3. 証明者: s = r + cx を送信\n4. 検証者: g^s = t · h^c を確認\n\nx を明かさずに「x を知っている」ことを証明！',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: '確認クイズ',
      content: 'ゼロ知識証明を確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'ゼロ知識証明の「ゼロ知識性」とは？',
        options: [
          { id: 'a', label: '証明者が何も知らないこと', correct: false },
          { id: 'b', label: '検証者が秘密に関する情報を一切得ないこと', correct: true },
          { id: 'c', label: '通信量がゼロであること', correct: false },
          { id: 'd', label: '計算量がゼロであること', correct: false },
        ],
        explanation:
          'ゼロ知識性とは、検証者が証明のプロセスから秘密に関する情報を一切得られないことです。シミュレータが検証者の視点を完全に再現できることで形式化されます。',
      },
    },
    {
      id: 'alternate',
      title: 'zk-SNARKsと応用',
      content:
        '現代のゼロ知識証明技術:\n\n• zk-SNARKs: 簡潔な非対話型証明（Zcash等）\n• zk-STARKs: 量子耐性を持つ透明な証明\n• Bulletproofs: 短い証明サイズ\n\n応用:\n• プライバシー保護暗号通貨\n• 本人確認（年齢を明かさず成人と証明）\n• スケーラビリティ（計算の正しさの証明）\n\n代数構造（楕円曲線、多項式環）が基盤です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：ゼロ知識証明',
      content:
        'ゼロ知識証明:\n\n• 秘密を漏らさずに知識を証明\n• 完全性・健全性・ゼロ知識性の3条件\n• シュノアプロトコル等の具体的な方式\n• zk-SNARKs等の最新技術\n• ブロックチェーン・プライバシーに応用\n\n暗号学と代数学の最先端の交差点です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
