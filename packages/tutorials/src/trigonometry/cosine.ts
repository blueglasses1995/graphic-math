import { Vector3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const cosineTutorial: Tutorial = {
  id: 'cosine',
  title: 'コサイン（cos）を理解する',
  description: '単位円の各象限でcosがどう変化するかを視覚的に理解する',
  category: 'trigonometry',
  prerequisites: ['unit-circle'],
  steps: [
    {
      id: 'cos-meaning',
      title: 'cos θ の意味',
      content:
        'cos θ は「どれだけ横にいるか」を表す値です。\n\n' +
        '単位円上の点のX座標、つまり横方向の位置がそのまま cos θ の値になります。\n\n' +
        '例えば θ = 45° のとき、cos 45° ≈ 0.71 です。' +
        'これは、点が原点から右に約 0.71 の位置にいることを意味します。\n\n' +
        '赤い線で示されているのが cos の成分です。' +
        '角度が変わると、この横方向の成分がどのように変化するかを見ていきましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'radius',
            vector: new Vector3(Math.cos(Math.PI / 4), Math.sin(Math.PI / 4), 0),
            color: '#ff44ff',
            label: '45°',
          },
          {
            id: 'cos-component',
            vector: new Vector3(Math.cos(Math.PI / 4), 0, 0),
            color: '#ff4444',
            label: 'cos 45° ≈ 0.71',
            showComponents: false,
          },
        ],
        circles: [{ radius: 1, color: '#8888ff', plane: 'xy' }],
        cameraPosition: [0, 0, 4],
      },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'quadrant-1',
      title: '第1象限（0° 〜 90°）',
      content:
        '第1象限では、cos は 1 から 0 へと減少します。\n\n' +
        '0° のとき点は真横にあるので、cos は最大値の 1 です。' +
        '角度が増えるにつれて点は上に移動し、横の位置は右から中央に近づいていきます。\n\n' +
        '  0°  → cos = 1（完全に右）\n' +
        '  30° → cos ≈ 0.87\n' +
        '  60° → cos = 0.5\n' +
        '  90° → cos = 0（真上、横成分なし）\n\n' +
        '右にいるほど cos の値は大きくなります。' +
        '第1象限では点は常にY軸より右にあるため、cos は常に正の値を取ります。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'a0',
            vector: new Vector3(1, 0, 0),
            color: '#ff4444',
            label: '0°: cos=1',
            showComponents: true,
          },
          {
            id: 'a30',
            vector: new Vector3(Math.cos(Math.PI / 6), Math.sin(Math.PI / 6), 0),
            color: '#ff6644',
            label: '30°: cos≈0.87',
            showComponents: true,
          },
          {
            id: 'a60',
            vector: new Vector3(Math.cos(Math.PI / 3), Math.sin(Math.PI / 3), 0),
            color: '#ff8844',
            label: '60°: cos=0.5',
            showComponents: true,
          },
          {
            id: 'a90',
            vector: new Vector3(0, 1, 0),
            color: '#ffaa44',
            label: '90°: cos=0',
            showComponents: true,
          },
        ],
        circles: [{ radius: 1, color: '#8888ff', plane: 'xy' }],
        cameraPosition: [0, 0, 4],
      },
      interactive: true,
      nextCondition: 'click',
    },
    {
      id: 'quadrant-2',
      title: '第2象限（90° 〜 180°）',
      content:
        '第2象限では、cos は 0 から -1 へと減少します。\n\n' +
        '90° を超えると、点はY軸の左側に入ります。' +
        '左に行くということはX座標がマイナスになるため、cos の値もマイナスになります。\n\n' +
        '  90°  → cos = 0\n' +
        '  120° → cos = -0.5\n' +
        '  150° → cos ≈ -0.87\n' +
        '  180° → cos = -1（完全に左）\n\n' +
        '第2象限では点はX軸より左にあるため、cos は負の値を取ります。' +
        '180° で cos は最小値の -1 に達します。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'a90',
            vector: new Vector3(0, 1, 0),
            color: '#ff4444',
            label: '90°: cos=0',
            showComponents: true,
          },
          {
            id: 'a120',
            vector: new Vector3(Math.cos((2 * Math.PI) / 3), Math.sin((2 * Math.PI) / 3), 0),
            color: '#ff6644',
            label: '120°: cos=-0.5',
            showComponents: true,
          },
          {
            id: 'a150',
            vector: new Vector3(Math.cos((5 * Math.PI) / 6), Math.sin((5 * Math.PI) / 6), 0),
            color: '#ff8844',
            label: '150°: cos≈-0.87',
            showComponents: true,
          },
          {
            id: 'a180',
            vector: new Vector3(-1, 0, 0),
            color: '#ffaa44',
            label: '180°: cos=-1',
            showComponents: true,
          },
        ],
        circles: [{ radius: 1, color: '#8888ff', plane: 'xy' }],
        cameraPosition: [0, 0, 4],
      },
      interactive: true,
      nextCondition: 'click',
    },
    {
      id: 'quadrant-3',
      title: '第3象限（180° 〜 270°）',
      content:
        '第3象限では、cos は -1 から 0 へと増加します。\n\n' +
        '180° で最小値 -1 に達した後、点は左下から下方向へ移動していきます。' +
        'まだX軸の左側にいるので cos は負のままですが、徐々に 0 に近づきます。\n\n' +
        '  180° → cos = -1\n' +
        '  210° → cos ≈ -0.87\n' +
        '  240° → cos = -0.5\n' +
        '  270° → cos = 0（真下、横成分なし）\n\n' +
        '第3象限でも点はX軸の左側にあるため、cos は負の値です。' +
        'しかし 180° から離れるにつれて、横の位置は中央に戻っていきます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'a180',
            vector: new Vector3(-1, 0, 0),
            color: '#ff4444',
            label: '180°: cos=-1',
            showComponents: true,
          },
          {
            id: 'a210',
            vector: new Vector3(Math.cos((7 * Math.PI) / 6), Math.sin((7 * Math.PI) / 6), 0),
            color: '#ff6644',
            label: '210°: cos≈-0.87',
            showComponents: true,
          },
          {
            id: 'a240',
            vector: new Vector3(Math.cos((4 * Math.PI) / 3), Math.sin((4 * Math.PI) / 3), 0),
            color: '#ff8844',
            label: '240°: cos=-0.5',
            showComponents: true,
          },
          {
            id: 'a270',
            vector: new Vector3(0, -1, 0),
            color: '#ffaa44',
            label: '270°: cos=0',
            showComponents: true,
          },
        ],
        circles: [{ radius: 1, color: '#8888ff', plane: 'xy' }],
        cameraPosition: [0, 0, 4],
      },
      interactive: true,
      nextCondition: 'click',
    },
    {
      id: 'quadrant-4',
      title: '第4象限（270° 〜 360°）',
      content:
        '第4象限では、cos は 0 から 1 へと増加します。\n\n' +
        '270° を過ぎると点はY軸の右側に戻り、X座標は再びプラスになります。' +
        '360° に近づくにつれて、出発点の (1, 0) に戻っていきます。\n\n' +
        '  270° → cos = 0\n' +
        '  300° → cos = 0.5\n' +
        '  330° → cos ≈ 0.87\n' +
        '  360° → cos = 1（出発点に戻る）\n\n' +
        '第4象限では点はX軸の右側にあるため、cos は再び正の値を取ります。' +
        'こうして 1 周すると、cos の値は 1 → 0 → -1 → 0 → 1 と滑らかに変化します。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'a270',
            vector: new Vector3(0, -1, 0),
            color: '#ff4444',
            label: '270°: cos=0',
            showComponents: true,
          },
          {
            id: 'a300',
            vector: new Vector3(Math.cos((5 * Math.PI) / 3), Math.sin((5 * Math.PI) / 3), 0),
            color: '#ff6644',
            label: '300°: cos=0.5',
            showComponents: true,
          },
          {
            id: 'a330',
            vector: new Vector3(Math.cos((11 * Math.PI) / 6), Math.sin((11 * Math.PI) / 6), 0),
            color: '#ff8844',
            label: '330°: cos≈0.87',
            showComponents: true,
          },
          {
            id: 'a360',
            vector: new Vector3(1, 0, 0),
            color: '#ffaa44',
            label: '360°: cos=1',
            showComponents: true,
          },
        ],
        circles: [{ radius: 1, color: '#8888ff', plane: 'xy' }],
        cameraPosition: [0, 0, 4],
      },
      interactive: true,
      nextCondition: 'click',
    },
    {
      id: 'cos-graph',
      title: 'cos の全体像',
      content:
        '角度を横軸に、cos の値を縦軸にとると、cos のグラフが見えてきます。\n\n' +
        'cos は 1 から始まり、滑らかに -1 まで下がり、また 1 に戻ります。' +
        'この波のような形が 360°（2π）ごとに繰り返されます。\n\n' +
        '再生ボタンを押すと、角度が進むにつれて cos の値がグラフ上にどう描かれるかを見ることができます。' +
        '単位円上の点の横位置が、そのままグラフの高さになっていることに注目してください。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        circles: [{ radius: 1, color: '#8888ff', plane: 'xy' }],
        cameraPosition: [0, 0, 4],
      },
      customScene: 'cos-graph',
      interactive: true,
      nextCondition: 'click',
    },
    {
      id: 'cos-summary',
      title: 'まとめ',
      content:
        'cos θ の振る舞いを整理しましょう。\n\n' +
        '象限ごとの変化:\n' +
        '  第1象限（0°〜90°）    : 1 → 0   正の値、減少\n' +
        '  第2象限（90°〜180°）  : 0 → -1  負の値、減少\n' +
        '  第3象限（180°〜270°） : -1 → 0  負の値、増加\n' +
        '  第4象限（270°〜360°） : 0 → 1   正の値、増加\n\n' +
        '覚えておきたい主要な値:\n' +
        '  cos 0° = 1\n' +
        '  cos 30° ≈ 0.87（√3/2）\n' +
        '  cos 45° ≈ 0.71（√2/2）\n' +
        '  cos 60° = 0.5（1/2）\n' +
        '  cos 90° = 0\n' +
        '  cos 180° = -1\n' +
        '  cos 270° = 0\n\n' +
        'cos の符号は「点がX軸の右にあるか左にあるか」で決まります。' +
        '右なら正、左なら負。この直感があれば、値の正負を迷うことはありません。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'a0',
            vector: new Vector3(1, 0, 0),
            color: '#ff4444',
            label: '0°: cos=1',
          },
          {
            id: 'a90',
            vector: new Vector3(0, 1, 0),
            color: '#ff8844',
            label: '90°: cos=0',
          },
          {
            id: 'a180',
            vector: new Vector3(-1, 0, 0),
            color: '#ffaa44',
            label: '180°: cos=-1',
          },
          {
            id: 'a270',
            vector: new Vector3(0, -1, 0),
            color: '#ffcc44',
            label: '270°: cos=0',
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
