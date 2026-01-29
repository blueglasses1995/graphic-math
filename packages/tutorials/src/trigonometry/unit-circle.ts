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
        '円とは「ある点から一定の距離にある点の集まり」です。\n\n' +
        'その「ある点」を中心、「一定の距離」を半径と呼びます。\n\n' +
        '例えば、公園の噴水から10mの距離にある地点をすべて集めると、' +
        '噴水を中心とした半径10mの円になります。\n\n' +
        '数学では、中心が原点 (0,0) にある円がよく使われます。' +
        '半径を r とすると、円上の点 (x, y) は次の条件を満たします：\n\n' +
        '  x² + y² = r²\n\n' +
        'これはピタゴラスの定理そのものです。原点からの距離が常に r であることを表しています。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'why-unit',
      title: 'なぜ「単位」円なのか？',
      content:
        '半径が 1 の円を「単位円」と呼びます。なぜ半径 1 が特別なのでしょうか？\n\n' +
        '半径 1 にすると、円上の点の座標がそのまま三角関数の値になるからです。\n\n' +
        '半径が 5 の円だと、座標を 5 で割る計算が毎回必要です。' +
        '半径が 1 なら、割り算が不要で、座標 = 三角関数の値。シンプルです。\n\n' +
        '単位円の方程式は：\n' +
        '  x² + y² = 1²  →  x² + y² = 1\n\n' +
        '「長さ1」は数学の基準として最も自然です。' +
        '「基底ベクトル」の長さが1だったのと同じ発想です。',
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
        cameraPosition: [0, 0, 4],
      },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'cos-sin-definition',
      title: 'cosとsinの定義',
      content:
        '単位円上の点は、角度 θ で決まります。\n\n' +
        'X軸の正の方向から反時計回りに角度 θ だけ回った点の座標が (cos θ, sin θ) です。\n\n' +
        '  cos θ = X座標（横方向の成分）\n' +
        '  sin θ = Y座標（縦方向の成分）\n\n' +
        '直感的に言えば：\n' +
        '  cos は「どれだけ横にいるか」\n' +
        '  sin は「どれだけ上にいるか」\n\n' +
        'θ = 45° の場合を見てみましょう：\n' +
        '  cos 45° = √2/2 ≈ 0.71（右に0.71）\n' +
        '  sin 45° = √2/2 ≈ 0.71（上に0.71）\n\n' +
        '赤い線がcos（横の成分）、緑の線がsin（縦の成分）を表しています。',
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
        cameraPosition: [0, 0, 4],
      },
      interactive: true,
      nextCondition: 'click',
    },
    {
      id: 'angle-0',
      title: '角度 0°（0ラジアン）',
      content:
        'まず角度 0° から始めましょう。\n\n' +
        '角度 0° は、X軸の正の方向そのものです。\n' +
        '単位円上の点: (1, 0)\n\n' +
        '  cos 0° = 1（完全に右）\n' +
        '  sin 0° = 0（まったく上にいない）\n\n' +
        'ベクトルが真横を向いているので、横の成分は最大（1）、縦の成分はゼロです。' +
        'ここがcosとsinの「出発点」になります。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'a0',
            vector: new Vector3(1, 0, 0),
            color: '#ff4444',
            label: '0°: (1, 0)',
            showComponents: true,
          },
        ],
        cameraPosition: [0, 0, 4],
      },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'angle-30',
      title: '角度 30°（π/6 ラジアン）',
      content:
        '30° まで反時計回りに回します。\n\n' +
        '単位円上の点: (√3/2, 1/2) ≈ (0.87, 0.5)\n\n' +
        '  cos 30° = √3/2 ≈ 0.87\n' +
        '  sin 30° = 1/2 = 0.5\n\n' +
        'まだ横成分の方が大きいですね。少し上に移動しましたが、' +
        'まだ右寄りの位置にいます。\n\n' +
        'sin 30° = 0.5 は覚えやすい値です。「30度で半分」と覚えましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'a0',
            vector: new Vector3(1, 0, 0),
            color: '#ff444444',
            label: '0°',
          },
          {
            id: 'a30',
            vector: new Vector3(Math.cos(Math.PI / 6), Math.sin(Math.PI / 6), 0),
            color: '#ff8844',
            label: '30°: (0.87, 0.5)',
            showComponents: true,
          },
        ],
        cameraPosition: [0, 0, 4],
      },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'angle-45',
      title: '角度 45°（π/4 ラジアン）',
      content:
        '45° はちょうど対角線の方向です。\n\n' +
        '単位円上の点: (√2/2, √2/2) ≈ (0.71, 0.71)\n\n' +
        '  cos 45° = √2/2 ≈ 0.71\n' +
        '  sin 45° = √2/2 ≈ 0.71\n\n' +
        'cos と sin が同じ値になっています！ 45° は横と縦が等しい角度なので当然ですね。\n\n' +
        'なぜ 0.71 であって 0.5 ではないのか？\n' +
        'もし (0.5, 0.5) だと、原点からの距離は √(0.25 + 0.25) = √0.5 ≈ 0.71 で、1ではありません。' +
        '単位円上にいるためには距離が1でなければならないので、(0.71, 0.71) が正解なのです。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'a0',
            vector: new Vector3(1, 0, 0),
            color: '#ff444444',
            label: '0°',
          },
          {
            id: 'a30',
            vector: new Vector3(Math.cos(Math.PI / 6), Math.sin(Math.PI / 6), 0),
            color: '#ff884444',
            label: '30°',
          },
          {
            id: 'a45',
            vector: new Vector3(Math.cos(Math.PI / 4), Math.sin(Math.PI / 4), 0),
            color: '#ffff44',
            label: '45°: (0.71, 0.71)',
            showComponents: true,
          },
        ],
        cameraPosition: [0, 0, 4],
      },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'angle-60-90',
      title: '角度 60° と 90°',
      content:
        '残りの主要な角度を見ましょう。\n\n' +
        '60°（π/3 ラジアン）：\n' +
        '  点: (1/2, √3/2) ≈ (0.5, 0.87)\n' +
        '  cos 60° = 0.5, sin 60° = 0.87\n' +
        '  → 30° と値が「入れ替わった」ことに注目！\n' +
        '    cos 30° = sin 60°、sin 30° = cos 60°\n\n' +
        '90°（π/2 ラジアン）：\n' +
        '  点: (0, 1)\n' +
        '  cos 90° = 0（横成分ゼロ）\n' +
        '  sin 90° = 1（完全に上）\n' +
        '  → 0° の値が入れ替わった！ cos 0° = sin 90°\n\n' +
        '0° → 90° で、cos は 1 → 0 に減少し、sin は 0 → 1 に増加します。' +
        '横から縦へ、スムーズに成分が移り変わる様子が見えますか？',
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
            id: 'a30',
            vector: new Vector3(Math.cos(Math.PI / 6), Math.sin(Math.PI / 6), 0),
            color: '#ff8844',
            label: '30°',
          },
          {
            id: 'a45',
            vector: new Vector3(Math.cos(Math.PI / 4), Math.sin(Math.PI / 4), 0),
            color: '#ffff44',
            label: '45°',
          },
          {
            id: 'a60',
            vector: new Vector3(Math.cos(Math.PI / 3), Math.sin(Math.PI / 3), 0),
            color: '#44ff44',
            label: '60°: (0.5, 0.87)',
            showComponents: true,
          },
          {
            id: 'a90',
            vector: new Vector3(0, 1, 0),
            color: '#4444ff',
            label: '90°: (0, 1)',
            showComponents: true,
          },
        ],
        cameraPosition: [0, 0, 4],
      },
      interactive: true,
      nextCondition: 'click',
    },
    {
      id: 'pythagorean-identity',
      title: 'sin² + cos² = 1 の意味',
      content:
        '三角関数の最も基本的な公式は sin²θ + cos²θ = 1 です。\n\n' +
        'これは実はピタゴラスの定理そのものです。\n\n' +
        '単位円上の点 (cos θ, sin θ) と原点を結ぶ線分を斜辺とする直角三角形を考えます：\n' +
        '  - 底辺の長さ = cos θ\n' +
        '  - 高さ = sin θ\n' +
        '  - 斜辺の長さ = 1（単位円の半径）\n\n' +
        'ピタゴラスの定理より：\n' +
        '  底辺² + 高さ² = 斜辺²\n' +
        '  cos²θ + sin²θ = 1²\n' +
        '  cos²θ + sin²θ = 1\n\n' +
        '具体例: θ = 60° のとき\n' +
        '  cos²60° + sin²60° = (0.5)² + (0.87)² = 0.25 + 0.75 = 1  ぴったり！\n\n' +
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
        '直角三角形での定義：\n' +
        '  sin θ = 対辺 / 斜辺\n' +
        '  cos θ = 隣辺 / 斜辺\n\n' +
        '単位円では斜辺 = 1 なので：\n' +
        '  sin θ = 対辺 / 1 = 対辺 = Y座標\n' +
        '  cos θ = 隣辺 / 1 = 隣辺 = X座標\n\n' +
        '単位円の利点は、0° から 360° まで（さらにそれ以上も）定義できることです。' +
        '直角三角形では 0° < θ < 90° しか扱えませんが、' +
        '単位円なら 150° や 270° での値も自然に定まります。\n\n' +
        '例: 150° では cos 150° = -0.87, sin 150° = 0.5\n' +
        '第2象限（左上）にいるので、cosが負になります。',
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
        cameraPosition: [0, 0, 4],
      },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'periodicity',
      title: '周期性：繰り返すパターン',
      content:
        '単位円を1周すると 360°（2π ラジアン）です。\n\n' +
        '1周したら元の位置に戻るので、三角関数の値も元に戻ります：\n' +
        '  sin(θ + 360°) = sin θ\n' +
        '  cos(θ + 360°) = cos θ\n\n' +
        'これを「周期性」と呼びます。三角関数は 360° ごとに同じパターンを繰り返します。\n\n' +
        '例えば：\n' +
        '  sin 30° = sin 390° = sin 750° = 0.5\n' +
        '  cos 0° = cos 360° = cos 720° = 1\n\n' +
        'なぜ周期性が重要か？ 波や振動は周期的な現象です。' +
        '音波、電磁波、潮の満ち引き、振り子の運動...すべて三角関数で記述できるのは、' +
        'この周期性があるからです。\n\n' +
        '「円を回る」という幾何学が、「波が繰り返す」という物理現象と結びつくのです。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'a0',
            vector: new Vector3(1, 0, 0),
            color: '#ff4444',
            label: '0° = 360°',
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
        cameraPosition: [0, 0, 4],
      },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        'この章で学んだことを整理しましょう。\n\n' +
        '1. 単位円 = 半径1の円。三角関数の土台\n\n' +
        '2. cos θ = X座標（横成分）、sin θ = Y座標（縦成分）\n\n' +
        '3. 主要な角度：\n' +
        '   0°:  (1, 0)         cos=1, sin=0\n' +
        '   30°: (√3/2, 1/2)   cos≈0.87, sin=0.5\n' +
        '   45°: (√2/2, √2/2)  cos≈0.71, sin≈0.71\n' +
        '   60°: (1/2, √3/2)   cos=0.5, sin≈0.87\n' +
        '   90°: (0, 1)         cos=0, sin=1\n\n' +
        '4. sin²θ + cos²θ = 1 はピタゴラスの定理\n\n' +
        '5. 直角三角形の辺の比 = 単位円上の座標\n\n' +
        '6. 360° で1周 → 周期性 → 波や振動の記述に最適\n\n' +
        '単位円は三角関数の「見える化」です。' +
        '角度を回転と捉え、座標として cos と sin を読み取る。' +
        'このイメージを持てば、三角関数の公式は暗記ではなく「見れば分かる」ものになります。',
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
            id: 'a30',
            vector: new Vector3(Math.cos(Math.PI / 6), Math.sin(Math.PI / 6), 0),
            color: '#ff8844',
            label: '30°',
          },
          {
            id: 'a45',
            vector: new Vector3(Math.cos(Math.PI / 4), Math.sin(Math.PI / 4), 0),
            color: '#ffff44',
            label: '45°',
          },
          {
            id: 'a60',
            vector: new Vector3(Math.cos(Math.PI / 3), Math.sin(Math.PI / 3), 0),
            color: '#44ff44',
            label: '60°',
          },
          {
            id: 'a90',
            vector: new Vector3(0, 1, 0),
            color: '#4444ff',
            label: '90°',
          },
        ],
        cameraPosition: [0, 0, 4],
      },
      interactive: false,
      nextCondition: 'click',
    },
  ],
};
