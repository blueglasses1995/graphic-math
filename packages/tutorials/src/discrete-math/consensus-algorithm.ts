import { Tutorial } from '../types';

export const consensusAlgorithmTutorial: Tutorial = {
  id: 'consensus-algorithm',
  title: '暗号通貨と合意アルゴリズム',
  description: '分散システムにおける合意形成の数学的基礎を学ぶ',
  category: 'discrete-math',
  steps: [
    {
      id: 'hook',
      title: '信頼なき世界での合意',
      content:
        'インターネット上の見知らぬ人々が、中央管理者なしに取引記録を共有する。\n\n嘘つきがいるかもしれない。通信が途絶えるかもしれない。\n\nそれでも全員が「同じ真実」に合意できるか？\n\nこれがビザンチン将軍問題であり、ブロックチェーンが解決した問題です。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'consensus-algorithm-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '合意形成を体験しよう',
      content:
        'ビザンチン将軍問題（Lamport, 1982）：\n\nn人の将軍のうち最大f人が裏切者。\n残りの忠実な将軍が同じ行動に合意できるか？\n\n定理：n > 3f のとき合意可能（n ≤ 3f では不可能）。\n\n将軍の立場でメッセージを送受信してみましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'consensus-algorithm-interactive',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'Proof of Work',
      content:
        'ビットコインのProof of Work（PoW）：\n\n・ハッシュ値が特定の条件を満たすナンスを発見する\n・膨大な計算が必要（ハッシュパワー）\n・最も長いチェーンが正統\n\n攻撃者が51%以上の計算力を持たない限り安全。\n\n数学的保証：\n正直なノードの計算力 > 攻撃者 → 確率的に安全\n攻撃成功確率は指数的に減少。',
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
      id: 'example-2',
      title: 'FLP不可能性定理',
      content:
        'FLP定理（Fischer, Lynch, Paterson, 1985）：\n\n非同期システムで、1つのプロセスが故障する可能性があるだけで、\n決定的な合意アルゴリズムは存在しない。\n\nこの不可能性結果は、実用的な合意アルゴリズムに影響を与えています：\n・Paxos/Raft：故障検出器を仮定\n・PoW：確率的な合意（ファイナリティなし）\n・BFT系：同期仮定を部分的に導入',
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
      title: 'クイズ：合意アルゴリズム',
      content: '合意アルゴリズムの理解を確認しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'ビザンチン将軍問題でf人の裏切者に耐えるために最低何人必要ですか？',
        options: [
          { id: 'a', label: '2f + 1人', correct: false },
          { id: 'b', label: '3f + 1人', correct: true },
          { id: 'c', label: 'f + 1人', correct: false },
          { id: 'd', label: '4f人', correct: false },
        ],
        explanation:
          '正解は 3f + 1人以上です。つまり n > 3f が必要です。これはLamport等により証明されました。',
      },
    },
    {
      id: 'alternate',
      title: 'Proof of Stake',
      content:
        'PoWの代替として注目されるProof of Stake（PoS）：\n\n・計算力ではなく保有トークンに比例して検証権を付与\n・エネルギー消費が大幅に低い\n・Nothing-at-Stake問題への対処が必要\n\nEthereumは2022年にPoSに移行。\n\n数学的には、経済的インセンティブ設計（メカニズムデザイン）とゲーム理論が重要です。',
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
      title: 'まとめ：合意アルゴリズム',
      content:
        '合意アルゴリズムは分散システムの信頼性の基盤です。\n\n・ビザンチン将軍問題：n > 3f で合意可能\n・FLP不可能性：非同期での完全な合意は不可能\n・PoW：計算力による確率的合意\n・PoS：経済的インセンティブによる合意\n\n離散数学、暗号学、ゲーム理論が融合した最先端分野です。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'consensus-algorithm-summary',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
