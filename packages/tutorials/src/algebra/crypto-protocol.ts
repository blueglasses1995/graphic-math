import { Tutorial } from '../types';

export const cryptoProtocolTutorial: Tutorial = {
  id: 'crypto-protocol',
  title: '暗号プロトコル設計',
  description: '暗号プロトコルの設計原理と代数的安全性証明を学ぶ',
  category: 'algebra',
  steps: [
    {
      id: 'hook',
      title: 'プロトコルという「レシピ」',
      content:
        '安全な暗号があっても、使い方を間違えれば安全性は崩れます。\n\n暗号プロトコルは「誰が、いつ、何を送るか」の手順書。\n\nTLS、SSH、Signal… 私たちが日常的に使うプロトコルは、\n精緻な数学的設計に基づいています。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: 'TLSハンドシェイク',
      content:
        'TLS 1.3 ハンドシェイクの流れ:\n\n1. Client Hello: 対応する暗号スイートと鍵共有パラメータ\n2. Server Hello: 選択した暗号スイートと鍵共有\n3. 共有秘密鍵の導出\n4. 暗号化通信開始\n\nわずか1往復（1-RTT）で安全な通信を確立。\n各ステップの役割を確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '安全性の定義',
      content:
        '暗号プロトコルの安全性は厳密に定義されます:\n\n• IND-CPA: 選択平文攻撃に対する識別不可能性\n• IND-CCA2: 適応的選択暗号文攻撃に対する安全性\n• UF-CMA: 選択メッセージ攻撃に対する偽造不可能性\n\nこれらは「ゲーム」として形式化:\n攻撃者がゲームに勝つ確率が無視できるほど小さい\n→ 安全',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '帰着による安全性証明',
      content:
        '暗号の安全性証明は「帰着」で行います:\n\n「プロトコルを破る攻撃者がいれば、\n困難な数学的問題を解く攻撃者が構成できる」\n\n例: ElGamal暗号の安全性\n→ DDH問題（判定ディフィー・ヘルマン問題）に帰着\n\nDDHが解けない限り、ElGamalも安全。\n群論の困難性が安全性の根拠です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: '確認クイズ',
      content: '暗号プロトコルについて確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '暗号プロトコルの安全性証明で使われる手法は？',
        options: [
          { id: 'a', label: '実験的な検証のみ', correct: false },
          { id: 'b', label: '困難な数学的問題への帰着', correct: true },
          { id: 'c', label: 'ソースコードの検査', correct: false },
          { id: 'd', label: '暗号文の統計分析', correct: false },
        ],
        explanation:
          '安全性証明は「プロトコルを破る→困難な問題を解ける」という帰着で行います。困難な問題（DLP, 素因数分解等）が解けない限り、プロトコルも安全であることを示します。',
      },
    },
    {
      id: 'alternate',
      title: 'ランダムオラクルモデル',
      content:
        'ランダムオラクルモデル:\n\nハッシュ関数を「完全にランダムな関数」と理想化して\n安全性を証明する手法。\n\n多くの実用的なプロトコルがこのモデルで証明されています。\n\n標準モデル（理想化なし）での証明がより強いですが、\n構成が複雑になりがちです。\n\n理論と実用のバランスが暗号設計の妙です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：暗号プロトコル設計',
      content:
        '暗号プロトコル設計:\n\n• プロトコル = 暗号の「使い方」の手順\n• 安全性はゲームベースで厳密に定義\n• 帰着による数学的安全性証明\n• ランダムオラクルモデルと標準モデル\n• TLS, SSH等で実用化\n\n代数学の困難性が安全性の基盤です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
