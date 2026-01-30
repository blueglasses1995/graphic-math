import { Vector3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const markovChainsTutorial: Tutorial = {
  id: 'markov-chains',
  title: '【実践】マルコフ連鎖',
  description: '確率的な状態遷移を行列で表し、定常分布を固有ベクトルとして求める',
  category: 'linear-algebra',
  steps: [
    {
      id: 'hook',
      title: '明日の天気は？',
      content:
        '今日が晴れなら、明日も晴れる確率は70%、雨になる確率は30%。\n' +
        '今日が雨なら、明日晴れる確率は40%、雨が続く確率は60%。\n\n' +
        'この確率を行列で表すと、何日後の天気でも計算できます。\n' +
        'しかも十分時間が経つと、初期状態に関係なく同じ確率に収束する…\n\n' +
        'これがマルコフ連鎖です。行列の累乗と固有値が鍵を握ります。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [{ id: 'v1', vector: new Vector3(1, 0, 0), color: '#ff5722', label: 'e₁' }, { id: 'v2', vector: new Vector3(0, 1, 0), color: '#4caf50', label: 'e₂' }],
        cameraPosition: [0, 0, 5],
      },
      customScene: 'markov-chains-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '遷移行列を体験しよう',
      content:
        '遷移行列 P：\n' +
        'P = [[0.7, 0.4], [0.3, 0.6]]\n\n' +
        '列の和が1になることに注目（確率なので）。\n\n' +
        '今日晴れ(1,0)なら明日：P(1,0) = (0.7, 0.3)\n' +
        '→ 晴れ70%, 雨30%\n\n' +
        '2日後：P²(1,0)\n' +
        'P² = [[0.61, 0.52], [0.39, 0.48]]\n' +
        '→ 晴れ61%, 雨39%\n\n' +
        'nが大きくなると、どの初期状態から出発しても同じ値に近づきます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'markov-chains-interactive',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '定常分布',
      content:
        '十分な時間が経つと到達する「定常分布」π を求めましょう。\n\n' +
        '定常分布は Pπ = π を満たします。\n' +
        'つまり π は固有値1の固有ベクトルです！\n\n' +
        'P = [[0.7, 0.4], [0.3, 0.6]] の場合：\n' +
        '0.7π₁ + 0.4π₂ = π₁\n' +
        '0.3π₁ + 0.6π₂ = π₂\n' +
        'π₁ + π₂ = 1（確率なので和=1）\n\n' +
        '解くと：π₁ = 4/7 ≈ 0.571, π₂ = 3/7 ≈ 0.429\n\n' +
        '長期的に晴れ57%、雨43%に収束します。',
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
      title: '固有値分解との関係',
      content:
        'マルコフ行列の固有値を調べると：\n\n' +
        'P = [[0.7, 0.4], [0.3, 0.6]]\n' +
        '固有値：λ₁ = 1, λ₂ = 0.3\n\n' +
        'Pⁿ = PD^nP⁻¹ のとき、\n' +
        'D^n = [[1ⁿ, 0], [0, 0.3ⁿ]]\n\n' +
        '0.3ⁿ → 0（nが大きいと消える）\n' +
        '1ⁿ = 1（永遠に残る）\n\n' +
        'だから n→∞ で定常分布に収束するのです。\n' +
        '|λ₂| < 1 が収束の数学的な理由です。',
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
      title: 'クイズ：マルコフ連鎖',
      content: 'マルコフ連鎖の理解を確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'マルコフ連鎖の定常分布は、遷移行列のどんな固有ベクトルですか？',
        options: [
          { id: 'a', label: '固有値0の固有ベクトル', correct: false },
          { id: 'b', label: '固有値1の固有ベクトル', correct: true },
          { id: 'c', label: '最大固有値の固有ベクトル（固有値は1とは限らない）', correct: false },
          { id: 'd', label: '最小固有値の固有ベクトル', correct: false },
        ],
        explanation:
          '定常分布 π は Pπ = π を満たすので、固有値 λ = 1 に対応する固有ベクトルです。確率行列では最大固有値が必ず1になります。',
      },
    },
    {
      id: 'alternate',
      title: 'マルコフ連鎖の応用',
      content:
        'マルコフ連鎖は意外な場所で活躍しています。\n\n' +
        '・テキスト生成：次の単語の確率を遷移行列で表現\n' +
        '・金融：株価の状態遷移モデル\n' +
        '・生物学：DNA配列のモデル化\n' +
        '・MCMC法：複雑な確率分布からのサンプリング\n' +
        '・ランダムウォーク：グラフ上の拡散過程\n\n' +
        'そして最も有名な応用が…次の章で学ぶPageRankです！',
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
      title: 'まとめ：マルコフ連鎖',
      content:
        'この章のポイント：\n\n' +
        '1. 遷移行列P：列の和が1の確率行列\n' +
        '2. n日後の確率 = Pⁿ × 初期状態\n' +
        '3. 定常分布 π：Pπ = π（固有値1の固有ベクトル）\n' +
        '4. |λ₂| < 1 なら定常分布に収束\n' +
        '5. 行列の累乗 = 固有値分解で効率計算\n\n' +
        '最後の章では、PageRankの仕組みを学びます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'markov-chains-summary',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
