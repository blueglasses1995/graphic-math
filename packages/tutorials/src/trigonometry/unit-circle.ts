import { Vector3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const unitCircleTutorial: Tutorial = {
  id: 'unit-circle',
  title: '単位円と三角関数',
  description: '単位円を使ってsin, cos, tanの意味を視覚化する',
  category: 'trigonometry',
  steps: [
    {
      id: 'what-is-circle',
      title: '円とは何か？',
      content:
        '円とは、ある点から一定の距離にある点をすべて集めたものです。\n\n' +
        'その中心となる点を「中心」、一定の距離を「半径」と呼びます。\n\n' +
        '例えば、公園の噴水から10mの距離にある地点をすべて集めると、' +
        '噴水を中心とした半径10mの円になります。\n\n' +
        '数学では、中心が原点 (0,0) にある円がよく使われます。' +
        '半径を r とすると、円上の点 (x, y) は次の条件を満たします。\n\n' +
        '  x² + y² = r²\n\n' +
        'これはピタゴラスの定理そのものであり、原点からの距離が常に r であることを表しています。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        circles: [{ radius: 1, color: '#8888ff', plane: 'xy' }],
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'why-unit',
      title: 'なぜ「単位」円なのか？',
      content:
        '半径が 1 の円を「単位円」と呼びます。なぜ半径 1 が特別なのでしょうか。\n\n' +
        '半径 1 にすると、円上の点の座標がそのまま三角関数の値になるからです。\n\n' +
        '半径が 5 の円だと、座標を 5 で割る計算が毎回必要です。' +
        '半径が 1 なら、割り算が不要で、座標がそのまま三角関数の値を表します。シンプルです。\n\n' +
        '単位円の方程式は次のようになります。\n' +
        '  x² + y² = 1²  つまり  x² + y² = 1\n\n' +
        '1メートル、1キログラムのように、1 は基準の単位として最も自然な数です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'radius',
            vector: new Vector3(1, 0, 0),
            color: '#ff44ff',
            label: 'r = 1',
          },
        ],
        circles: [{ radius: 1, color: '#8888ff', plane: 'xy' }],
        cameraPosition: [0, 0, 4],
      },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'cos-sin-overview',
      title: 'cos と sin の概要',
      content:
        '単位円上の点は、角度 θ で決まります。\n\n' +
        'X軸の正の方向から反時計回りに角度 θ だけ回った点の座標が (cos θ, sin θ) です。\n\n' +
        'cos θ はX座標、つまり横方向の成分を表します。\n' +
        'sin θ はY座標、つまり縦方向の成分を表します。\n\n' +
        '直感的に言えば、cos は「どれだけ横にいるか」、sin は「どれだけ上にいるか」を表す値です。\n\n' +
        '赤い線が cos（横の成分）、緑の線が sin（縦の成分）を示しています。\n\n' +
        'cos と sin の振る舞いについては、この後の「コサインを理解する」「サインを理解する」で詳しく学びます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'radius',
            vector: new Vector3(Math.cos(Math.PI / 4), Math.sin(Math.PI / 4), 0),
            color: '#ff44ff',
            label: '(cos 45°, sin 45°)',
          },
          {
            id: 'cos',
            vector: new Vector3(Math.cos(Math.PI / 4), 0, 0),
            color: '#ff4444',
            label: 'cos 45° ≈ 0.71',
            showComponents: false,
          },
          {
            id: 'sin',
            vector: new Vector3(0, Math.sin(Math.PI / 4), 0),
            color: '#44ff44',
            label: 'sin 45° ≈ 0.71',
            showComponents: false,
          },
        ],
        circles: [{ radius: 1, color: '#8888ff', plane: 'xy' }],
        cameraPosition: [0, 0, 4],
      },
      interactive: true,
      nextCondition: 'click',
    },
    {
      id: 'right-triangle-connection',
      title: '直角三角形とのつながり',
      content:
        '三角関数は「直角三角形の辺の比」として最初に学ぶことが多いですが、' +
        '単位円を使うとより一般的に理解できます。\n\n' +
        '直角三角形での定義では、sin θ は対辺を斜辺で割った値、cos θ は隣辺を斜辺で割った値です。\n\n' +
        '単位円では斜辺が 1 なので、sin θ はそのまま対辺の長さ、つまりY座標になります。' +
        '同様に cos θ は隣辺の長さ、つまりX座標です。\n\n' +
        '単位円の利点は、0° から 360° まで、さらにそれ以上の角度でも定義できることです。' +
        '直角三角形では 0° から 90° の範囲しか扱えませんが、' +
        '単位円なら 150° や 270° での値も自然に定まります。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'q1',
            vector: new Vector3(Math.cos(Math.PI / 6), Math.sin(Math.PI / 6), 0),
            color: '#ff4444',
            label: '30°',
          },
          {
            id: 'q2',
            vector: new Vector3(Math.cos((5 * Math.PI) / 6), Math.sin((5 * Math.PI) / 6), 0),
            color: '#44ff44',
            label: '150°',
            showComponents: true,
          },
        ],
        circles: [{ radius: 1, color: '#8888ff', plane: 'xy' }],
        cameraPosition: [0, 0, 4],
      },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'pythagorean-identity',
      title: 'sin² + cos² = 1 の意味',
      content:
        '三角関数の最も基本的な公式は sin²θ + cos²θ = 1 です。\n\n' +
        'これは実はピタゴラスの定理そのものです。\n\n' +
        '単位円上の点 (cos θ, sin θ) と原点を結ぶ線分を斜辺とする直角三角形を考えると、' +
        '底辺の長さは cos θ、高さは sin θ、斜辺の長さは 1 です。\n\n' +
        'ピタゴラスの定理より、底辺の二乗と高さの二乗の和は斜辺の二乗に等しいので、\n' +
        '  cos²θ + sin²θ = 1\n' +
        'となります。\n\n' +
        '具体例として θ = 60° のときを見てみましょう。\n' +
        '  cos²60° + sin²60° = (0.5)² + (0.87)² = 0.25 + 0.75 = 1\n\n' +
        'この公式は「点が常に単位円上にいる」ことの言い換えに過ぎません。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'radius',
            vector: new Vector3(Math.cos(Math.PI / 3), Math.sin(Math.PI / 3), 0),
            color: '#ff44ff',
            label: 'r = 1（斜辺）',
            showComponents: true,
          },
          {
            id: 'cos-component',
            vector: new Vector3(Math.cos(Math.PI / 3), 0, 0),
            color: '#ff4444',
            label: 'cos 60° = 0.5（底辺）',
          },
          {
            id: 'sin-component',
            vector: new Vector3(0, Math.sin(Math.PI / 3), 0),
            color: '#44ff44',
            label: 'sin 60° ≈ 0.87（高さ）',
          },
        ],
        circles: [{ radius: 1, color: '#8888ff', plane: 'xy' }],
        cameraPosition: [0, 0, 4],
      },
      interactive: true,
      nextCondition: 'click',
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        'この章で学んだことを整理しましょう。\n\n' +
        '1. 単位円とは半径 1 の円であり、三角関数の土台となるものです。\n\n' +
        '2. cos θ はX座標で横の成分を、sin θ はY座標で縦の成分を表します。\n\n' +
        '3. sin²θ + cos²θ = 1 はピタゴラスの定理そのものです。\n\n' +
        '4. 直角三角形の辺の比は、単位円上の座標と一致します。\n\n' +
        '5. 単位円を使えば 0° から 360°、さらにそれ以上の角度でも三角関数を定義できます。\n\n' +
        '次のステップでは、cos と sin それぞれの振る舞いを象限ごとに詳しく見ていきます。' +
        '「コサインを理解する」「サインを理解する」に進みましょう。',
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
