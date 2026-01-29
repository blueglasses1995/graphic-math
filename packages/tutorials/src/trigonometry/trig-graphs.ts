import { Vector3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const trigGraphsTutorial: Tutorial = {
  id: 'trig-graphs',
  title: '三角関数のグラフ：cos と sin を並べて見る',
  description: 'cos と sin のグラフを同時に描いて関係性を理解する',
  category: 'trigonometry',
  prerequisites: ['cosine', 'sine'],
  steps: [
    {
      id: 'introduction',
      title: '導入：なぜグラフで見るのか',
      content:
        '単位円では cos と sin を「横の位置」「縦の位置」として見てきました。\n\n' +
        'しかし、角度が変わるにつれてこれらの値がどう変化するかを一目で見たい場合、' +
        'グラフが最適です。横軸に角度、縦軸に値をとると、cos と sin の変化パターンが波として見えてきます。\n\n' +
        'cos のグラフは 1 から始まる波、sin のグラフは 0 から始まる波です。' +
        'この 2 つの波を並べて見ると、三角関数の深い関係が見えてきます。\n\n' +
        '次のステップで、単位円とグラフを同期させたアニメーションを見てみましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'cos-example',
            vector: new Vector3(Math.cos(Math.PI / 4), 0, 0),
            color: '#ff4444',
            label: 'cos（横）',
            showComponents: false,
          },
          {
            id: 'sin-example',
            vector: new Vector3(0, Math.sin(Math.PI / 4), 0),
            color: '#44ff44',
            label: 'sin（縦）',
            showComponents: false,
          },
          {
            id: 'radius',
            vector: new Vector3(Math.cos(Math.PI / 4), Math.sin(Math.PI / 4), 0),
            color: '#ff44ff',
            label: '45°',
          },
        ],
        circles: [{ radius: 1, color: '#8888ff', plane: 'xy' }],
        cameraPosition: [0, 0, 4],
      },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'sync-animation',
      title: '同期アニメーション',
      content:
        '再生ボタンを押すと、単位円上の点が回転しながら、' +
        'cos と sin の値がリアルタイムでグラフに描かれていきます。\n\n' +
        '上のパネルは単位円を表示しています。' +
        '点が回転するとき、赤い線（cos、横方向の成分）と緑の線（sin、縦方向の成分）が同時に変化する様子を確認できます。\n\n' +
        '中央のパネルは cos のグラフです。赤い波が右に伸びていきます。\n\n' +
        '下のパネルは sin のグラフです。緑の波が右に伸びていきます。\n\n' +
        '3 つのパネルが連動していることに注目してください。' +
        '円上の「横の位置」が cos のグラフの高さ、「縦の位置」が sin のグラフの高さになっています。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        circles: [{ radius: 1, color: '#8888ff', plane: 'xy' }],
        cameraPosition: [0, 0, 4],
      },
      customScene: 'trig-sync-animation',
      interactive: true,
      nextCondition: 'click',
    },
    {
      id: 'cos-sin-relationship',
      title: 'cos と sin の関係',
      content:
        'cos と sin のグラフを見比べると、形が全く同じであることに気づきます。' +
        '違いは「開始位置」だけです。\n\n' +
        'cos は 1 から始まり、sin は 0 から始まります。' +
        'sin のグラフを 90°（π/2）だけ左にずらすと、cos のグラフとぴったり重なります。\n\n' +
        'これを数式で書くと次のようになります。\n' +
        '  cos θ = sin(θ + 90°)\n\n' +
        'つまり cos は sin を 90° 先取りした値であり、sin は cos を 90° 遅れて追いかけています。\n\n' +
        'この関係は「位相差」と呼ばれ、物理学（交流回路、波の干渉など）で非常に重要な概念です。' +
        'cos と sin は別の関数のように見えますが、実は同じ波の見え方が違うだけなのです。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'cos-point',
            vector: new Vector3(1, 0, 0),
            color: '#ff4444',
            label: 'cos 0° = 1',
          },
          {
            id: 'sin-point',
            vector: new Vector3(0, 1, 0),
            color: '#44ff44',
            label: 'sin 90° = 1',
          },
        ],
        circles: [{ radius: 1, color: '#8888ff', plane: 'xy' }],
        cameraPosition: [0, 0, 4],
      },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'trig-graphs-summary',
      title: 'まとめ',
      content:
        '三角関数のグラフについて学んだことを整理しましょう。\n\n' +
        '1. cos と sin の値を角度に対してプロットすると、なめらかな波形になります。\n\n' +
        '2. cos の波は 1 から始まり、sin の波は 0 から始まります。\n\n' +
        '3. 両方とも -1 から 1 の範囲で振動し、360°（2π）で 1 周期です。\n\n' +
        '4. cos は sin を 90° 先取りした値です。形は同じで開始位置が違うだけです。\n\n' +
        '5. 単位円上の点の横位置が cos、縦位置が sin として、グラフに対応しています。\n\n' +
        'この波形パターンは、音波、光波、電気信号など、自然界のあらゆる周期現象を記述するための基礎です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'a0',
            vector: new Vector3(1, 0, 0),
            color: '#ff4444',
            label: '0°',
          },
          {
            id: 'a90',
            vector: new Vector3(0, 1, 0),
            color: '#44ff44',
            label: '90°',
          },
          {
            id: 'a180',
            vector: new Vector3(-1, 0, 0),
            color: '#4444ff',
            label: '180°',
          },
          {
            id: 'a270',
            vector: new Vector3(0, -1, 0),
            color: '#ff44ff',
            label: '270°',
          },
        ],
        circles: [{ radius: 1, color: '#8888ff', plane: 'xy' }],
        cameraPosition: [0, 0, 4],
      },
      interactive: false,
      nextCondition: 'click',
    },
  ],
};
