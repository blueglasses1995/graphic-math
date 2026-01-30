import { Tutorial } from '../types';

export const diffieHellmanTutorial: Tutorial = {
  id: 'diffie-hellman',
  title: 'ディフィー・ヘルマン鍵交換',
  description: '公開通信路で秘密鍵を共有するDH鍵交換の仕組みを学ぶ',
  category: 'algebra',
  steps: [
    {
      id: 'hook',
      title: '秘密を共有する魔法',
      content:
        'アリスとボブが電話で秘密の暗号鍵を共有したい。\nでも盗聴されているかもしれない。\n\n全ての通信が傍受されていても、安全に秘密鍵を共有できる。\nそれがディフィー・ヘルマン鍵交換です。\n\n色の混合に例えて理解しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: 'DH鍵交換をシミュレーション',
      content:
        '公開パラメータ: 素数 p = 23, 生成元 g = 5\n\nアリス: 秘密の a を選び、A = g^a mod p を公開\nボブ: 秘密の b を選び、B = g^b mod p を公開\n\n共有鍵: K = B^a = A^b = g^{ab} mod p\n\na と b を選んで鍵交換を体験しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'DH鍵交換のプロトコル',
      content:
        '1. 公開: 素数 p と生成元 g を共有\n2. アリス: a をランダム選択、A = g^a mod p を送信\n3. ボブ: b をランダム選択、B = g^b mod p を送信\n4. アリス: K = B^a mod p を計算\n5. ボブ: K = A^b mod p を計算\n\nK = g^{ab} mod p が共有秘密鍵。\n盗聴者は g^a, g^b からg^{ab} を計算できない（CDH仮定）。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '安全性の根拠',
      content:
        'DH鍵交換の安全性は以下の困難性に基づきます:\n\n計算ディフィー・ヘルマン問題（CDH）:\ng^a と g^b から g^{ab} を計算する問題\n\n判定ディフィー・ヘルマン問題（DDH）:\ng^{ab} とランダムな値を区別する問題\n\nDDH ≤ CDH ≤ DLP（困難性の順序）',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: '確認クイズ',
      content: 'DH鍵交換について確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'DH鍵交換で盗聴者が知り得る情報は？',
        options: [
          { id: 'a', label: 'a, b, g^{ab}', correct: false },
          { id: 'b', label: 'p, g, g^a, g^b', correct: true },
          { id: 'c', label: 'p, g, a, b', correct: false },
          { id: 'd', label: 'g^{ab} のみ', correct: false },
        ],
        explanation:
          '盗聴者は公開情報 p, g と、通信路上の g^a mod p, g^b mod p を知ることができます。しかし秘密値 a, b や共有鍵 g^{ab} は計算困難です。',
      },
    },
    {
      id: 'alternate',
      title: '中間者攻撃と対策',
      content:
        'DH鍵交換には弱点があります: 中間者攻撃（MITM）\n\n攻撃者がアリスとボブの間に割り込み、\nそれぞれと別々にDH鍵交換を行うことができます。\n\n対策:\n• デジタル署名で相手を認証\n• 証明書を使った認証\n• TLSプロトコルでの実装\n\n認証なしのDHは安全ではありません。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：DH鍵交換',
      content:
        'ディフィー・ヘルマン鍵交換:\n\n• 公開通信路で秘密鍵を共有\n• 離散対数問題の困難性に基づく\n• g^a, g^b → g^{ab} の計算が困難\n• 中間者攻撃には認証が必要\n• TLS/SSLの基盤技術\n\n1976年の発明以来、暗号通信の基礎です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
