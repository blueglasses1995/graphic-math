import { Tutorial } from '../types';

export const tTestTutorial: Tutorial = {
  id: 't-test',
  title: 't検定',
  description: '平均の差を検定するt検定の仕組みと使い方を学ぶ',
  category: 'statistics',
  steps: [
    {
      id: 'hook',
      title: '2つのグループは本当に違うか',
      content:
        '新しい教授法で教えたクラスの平均点が82点、従来のクラスが78点。\n\n4点の差は「本当の差」なのか「偶然の差」なのか？\n\nt検定はこの問いに答える最も基本的な検定です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 't-test-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう',
      content:
        '2つのグループのデータを変えて、t値とp値がどう変わるか試しましょう。\n\n差が大きいとき、ばらつきが小さいとき、サイズが大きいとき、何が起きますか？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 't-test-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 't値の意味',
      content:
        't値 = (標本平均の差) / (差の標準誤差)\n\n分子は「効果の大きさ」、分母は「推定の不確実さ」。\n\nt値が大きいほど「差がある」証拠が強い。\n\nt値は「差が標準誤差の何倍か」を示します。\nt = 2 なら「差は標準誤差の2倍」── これはかなり珍しい（偶然では起きにくい）です。',
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
      title: 't分布',
      content:
        '母集団の分散がわからないとき（ほとんどの場合）、正規分布の代わりにt分布を使います。\n\nt分布は正規分布に似ていますが、裾が太い（厚い）です。\n\n自由度（≈ 標本サイズ - 1）が大きくなるとt分布は正規分布に近づきます。\n\nn > 30 ではほぼ正規分布と同じですが、小さい標本ではt分布を使う意味があります。',
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
        '2群の平均差が同じとき、標本サイズを増やすとt値はどうなりますか？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '平均差が同じで標本サイズを増やすと、t値は？',
        options: [
          { id: 'a', label: '小さくなる', correct: false },
          { id: 'b', label: '大きくなる', correct: true },
          { id: 'c', label: '変わらない', correct: false },
          { id: 'd', label: '0に近づく', correct: false },
        ],
        explanation:
          '正解は「大きくなる」です。\n\n標本サイズが増えると標準誤差が小さくなるため、同じ差でもt値は大きくなります。\n\nt = 差 / 標準誤差 で、分母が小さくなるからです。\n\nこれが「大きな標本では小さな差でも有意になる」理由です。',
      },
    },
    {
      id: 'alternate',
      title: '別の見方：t検定の種類',
      content:
        't検定には3つの種類があります。\n\n1対標本t検定: 1つの平均を既知の値と比較\n2対応のあるt検定: 同じ被験者の前後比較\n3独立2標本t検定: 2つの異なるグループの比較\n\n使い分けの鍵は「データの構造」です。\n\nまた、等分散を仮定するかどうかでWelchのt検定も選択肢に入ります。',
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
        't検定は平均の差を検定する基本的な方法です。\n\nt値 = 差 / 標準誤差（シグナル / ノイズ比）\n\nt分布は正規分布の「小標本版」。裾が太く、自由度が増えると正規分布に近づきます。\n\n次はカテゴリデータの検定手法「カイ二乗検定」を学びます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 't-test-summary',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
