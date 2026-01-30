import { Tutorial } from '../types';

export const cryptoHashAdvancedTutorial: Tutorial = {
  id: 'crypto-hash-advanced',
  title: '暗号学的ハッシュ',
  description: 'SHA-256等の暗号学的ハッシュ関数の数理と安全性を学ぶ',
  category: 'discrete-math',
  steps: [
    {
      id: 'hook',
      title: 'デジタル指紋',
      content:
        'どんなサイズのデータでも、256ビットの固定長「指紋」に変換する。\n\n1ビットでも変えると全く異なる指紋になる。\n指紋から元のデータを復元することは不可能。\n\nこれが暗号学的ハッシュ関数です。ブロックチェーンやパスワード保存の基盤技術です。',
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
      title: 'ハッシュ値の変化を観察しよう',
      content:
        '暗号学的ハッシュに必要な3つの性質：\n\n1. 原像困難性：H(x)=yからxを見つけるのが困難\n2. 第二原像困難性：H(x)=H(x\')となるx\'を見つけるのが困難\n3. 衝突困難性：H(x)=H(y)となるx≠yの組を見つけるのが困難\n\n入力を変えてハッシュ値の変化を観察してみましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'SHA-256の構造',
      content:
        'SHA-256はメルクル・ダンゴード構造に基づきます。\n\n1. メッセージをパディングして512ビットブロックに分割\n2. 各ブロックを圧縮関数で処理（64ラウンド）\n3. ビット演算（AND, OR, XOR, 回転）を繰り返す\n4. 256ビットの最終ハッシュ値を出力\n\n雪崩効果：入力1ビットの変化で出力の約50%が変化します。',
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
      title: '誕生日攻撃',
      content:
        '衝突を見つける攻撃に「誕生日攻撃」があります。\n\n誕生日のパラドクス：23人で同じ誕生日の組が50%以上。\n\nnビットのハッシュで衝突を見つけるのに約2^(n/2)回の計算。\n\nSHA-256の場合：2^128回 ≈ 3.4×10³⁸回\n→ 現在の技術では非現実的\n\nMD5（128ビット）は2^64で衝突可能 → 既に破られています。',
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
      title: 'クイズ：暗号学的ハッシュ',
      content: '暗号学的ハッシュの理解を確認しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'SHA-256の出力は何ビットですか？',
        options: [
          { id: 'a', label: '128ビット', correct: false },
          { id: 'b', label: '256ビット', correct: true },
          { id: 'c', label: '512ビット', correct: false },
          { id: 'd', label: '入力サイズに依存', correct: false },
        ],
        explanation:
          'SHA-256は任意の入力から常に256ビット（32バイト）の固定長出力を生成します。「256」はこの出力長に由来します。',
      },
    },
    {
      id: 'alternate',
      title: 'マークルツリー',
      content:
        'ハッシュ関数を木構造で組み合わせたのがマークルツリーです。\n\n葉：各データブロックのハッシュ\n内部ノード：子ノードのハッシュを連結してハッシュ\n根：全データの要約\n\n利点：\n・一部のデータ変更を効率的に検出（O(log n)）\n・特定のデータの存在を証明（マークル証明）\n\nGit、ブロックチェーン、IPFS等で利用されています。',
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
      title: 'まとめ：暗号学的ハッシュ',
      content:
        '暗号学的ハッシュ関数はデジタルセキュリティの基盤です。\n\n・原像困難性、第二原像困難性、衝突困難性\n・SHA-256：メルクル・ダンゴード構造、256ビット出力\n・誕生日攻撃に対する安全性マージン\n・マークルツリーでデータ整合性を効率的に検証\n\n離散数学のビット演算と確率論が暗号の安全性を支えています。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
