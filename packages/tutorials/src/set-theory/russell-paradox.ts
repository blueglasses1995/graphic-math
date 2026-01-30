import { Tutorial } from '../types';

export const russellParadoxTutorial: Tutorial = {
  id: 'russell-paradox',
  title: 'ラッセルのパラドクス',
  description: '「自分自身を含まない集合の集合」が引き起こす矛盾を学ぶ',
  category: 'set-theory',
  steps: [
    {
      id: 'hook',
      title: '床屋のパラドクス',
      content:
        'ある村の床屋は「自分で髭を剃らない人全員の髭を剃る」と宣言しました。\n\nでは、床屋自身の髭は誰が剃るのでしょう？\n\n自分で剃る → 自分で剃らない人の髭を剃るので矛盾\n自分で剃らない → 自分で剃るべきなので矛盾\n\nこれがラッセルのパラドクスの日常版です。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: 'パラドクスを体験しよう',
      content:
        '集合を作ってみましょう。「自分自身を含む集合」と「含まない集合」を分けてみてください。\n\n「自分自身を含まない集合の集合」を作ろうとすると何が起きるでしょう？',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-paradox',
      title: 'ラッセルのパラドクス',
      content:
        'R = {x | x ∉ x}（自分自身を要素として含まない集合全体）とします。\n\nR ∈ R でしょうか？\n\n・R ∈ R と仮定 → 定義より R ∉ R → 矛盾\n・R ∉ R と仮定 → 定義より R ∈ R → 矛盾\n\nどちらでも矛盾！これがラッセルのパラドクス（1901年）です。',
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
      id: 'example-resolution',
      title: '解決策：公理的集合論',
      content:
        'パラドクスの原因は「何でも集合にできる」という素朴な考え方でした。\n\nZF公理系（ツェルメロ＝フレンケル）では：\n・「すべてのxの集合」は許さない\n・既存の集合から条件で部分集合を作る（分出公理）\n・集合は他の集合からのみ構成（正則性公理）\n\nこれにより R のような矛盾する集合は構成できなくなります。\n\n「制限することで一貫性を保つ」── これが現代集合論の発想です。',
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
      content: 'ラッセルのパラドクスを避けるために必要なのは？',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'パラドクスの解決策として正しいのは？',
        options: [
          { id: 'a', label: '無限集合を禁止する', correct: false },
          { id: 'b', label: '集合の作り方に制限を設ける', correct: true },
          { id: 'c', label: '空集合を禁止する', correct: false },
          { id: 'd', label: '集合の要素数を制限する', correct: false },
        ],
        explanation:
          '正解は「集合の作り方に制限を設ける」です。\n\n任意の性質Pに対して {x | P(x)} を集合とするのではなく、既存の集合Aから {x ∈ A | P(x)} のみ許す。\n\nこれが公理的集合論の核心的アイデアです。',
      },
    },
    {
      id: 'alternate',
      title: '型理論との関係',
      content:
        'プログラミング言語の型システムも似た発想です。\n\nTypeScriptで type T = T[] は再帰的で危険（無限ループの可能性）。\n\n型の「レベル」を管理することで矛盾を防ぎます。\nこれはラッセル自身が提唱した「型の理論」に由来しています。\n\n集合論のパラドクスが、現代のプログラミング言語設計に影響を与えているのです。',
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
        'ラッセルのパラドクス：\n\n・R = {x | x ∉ x} は矛盾を生む\n・素朴集合論の限界を示した\n・解決策: 公理的集合論（ZF/ZFC）\n・集合の構成方法に制限を設ける\n\n次は集合論のまとめです。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
