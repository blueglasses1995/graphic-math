import { Vector3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const sineTutorial: Tutorial = {
  id: 'sine',
  title: 'サイン（sin）を理解する',
  description: '単位円の各象限でsinがどう変化するかを視覚的に理解する',
  category: 'trigonometry',
  prerequisites: ['unit-circle'],
  steps: [
    {
      id: 'sin-meaning',
      title: 'sin θ の意味',
      content:
        'sin θ は「どれだけ上にいるか」を表す値です。\n\n' +
        '単位円上の点のY座標、つまり縦方向の位置がそのまま sin θ の値になります。\n\n' +
        '例えば θ = 45° のとき、sin 45° ≈ 0.71 です。' +
        'これは、点が原点から上に約 0.71 の位置にいることを意味します。\n\n' +
        '緑の線で示されているのが sin の成分です。' +
        '角度が変わると、この縦方向の成分がどのように変化するかを見ていきましょう。',
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
            id: 'sin-component',
            vector: new Vector3(0, Math.sin(Math.PI / 4), 0),
            color: '#44ff44',
            label: 'sin 45° ≈ 0.71',
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
        '第1象限では、sin は 0 から 1 へと増加します。\n\n' +
        '0° のとき点はX軸上にあるので、縦方向の位置はゼロです。' +
        '角度が増えるにつれて点は上に移動し、90° で最も高い位置に達します。\n\n' +
        '  0°  → sin = 0（横軸上、上にいない）\n' +
        '  30° → sin = 0.5\n' +
        '  60° → sin ≈ 0.87\n' +
        '  90° → sin = 1（完全に上）\n\n' +
        '上に行くほど sin の値は大きくなります。' +
        '第1象限では点は常にX軸より上にあるため、sin は常に正の値を取ります。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'a0',
            vector: new Vector3(1, 0, 0),
            color: '#44ff44',
            label: '0°: sin=0',
            showComponents: true,
          },
          {
            id: 'a30',
            vector: new Vector3(Math.cos(Math.PI / 6), Math.sin(Math.PI / 6), 0),
            color: '#44dd44',
            label: '30°: sin=0.5',
            showComponents: true,
          },
          {
            id: 'a60',
            vector: new Vector3(Math.cos(Math.PI / 3), Math.sin(Math.PI / 3), 0),
            color: '#44bb44',
            label: '60°: sin≈0.87',
            showComponents: true,
          },
          {
            id: 'a90',
            vector: new Vector3(0, 1, 0),
            color: '#449944',
            label: '90°: sin=1',
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
        '第2象限では、sin は 1 から 0 へと減少します。\n\n' +
        '90° で最大値 1 に達した後、点は上から左へと移動していきます。' +
        'まだX軸より上にいるので sin は正のままですが、徐々に 0 に近づきます。\n\n' +
        '  90°  → sin = 1\n' +
        '  120° → sin ≈ 0.87\n' +
        '  150° → sin = 0.5\n' +
        '  180° → sin = 0（横軸上に戻る）\n\n' +
        '第2象限でも点はX軸より上にあるため、sin は正の値です。' +
        'ただし 90° から離れるにつれて、縦の位置は中央に向かって下がっていきます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'a90',
            vector: new Vector3(0, 1, 0),
            color: '#44ff44',
            label: '90°: sin=1',
            showComponents: true,
          },
          {
            id: 'a120',
            vector: new Vector3(Math.cos((2 * Math.PI) / 3), Math.sin((2 * Math.PI) / 3), 0),
            color: '#44dd44',
            label: '120°: sin≈0.87',
            showComponents: true,
          },
          {
            id: 'a150',
            vector: new Vector3(Math.cos((5 * Math.PI) / 6), Math.sin((5 * Math.PI) / 6), 0),
            color: '#44bb44',
            label: '150°: sin=0.5',
            showComponents: true,
          },
          {
            id: 'a180',
            vector: new Vector3(-1, 0, 0),
            color: '#449944',
            label: '180°: sin=0',
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
        '第3象限では、sin は 0 から -1 へと減少します。\n\n' +
        '180° を超えると、点はX軸の下に入ります。' +
        '下に行くということはY座標がマイナスになるため、sin の値もマイナスになります。\n\n' +
        '  180° → sin = 0\n' +
        '  210° → sin = -0.5\n' +
        '  240° → sin ≈ -0.87\n' +
        '  270° → sin = -1（完全に下）\n\n' +
        '第3象限では点はX軸より下にあるため、sin は負の値を取ります。' +
        '270° で sin は最小値の -1 に達します。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'a180',
            vector: new Vector3(-1, 0, 0),
            color: '#44ff44',
            label: '180°: sin=0',
            showComponents: true,
          },
          {
            id: 'a210',
            vector: new Vector3(Math.cos((7 * Math.PI) / 6), Math.sin((7 * Math.PI) / 6), 0),
            color: '#44dd44',
            label: '210°: sin=-0.5',
            showComponents: true,
          },
          {
            id: 'a240',
            vector: new Vector3(Math.cos((4 * Math.PI) / 3), Math.sin((4 * Math.PI) / 3), 0),
            color: '#44bb44',
            label: '240°: sin≈-0.87',
            showComponents: true,
          },
          {
            id: 'a270',
            vector: new Vector3(0, -1, 0),
            color: '#449944',
            label: '270°: sin=-1',
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
        '第4象限では、sin は -1 から 0 へと増加します。\n\n' +
        '270° で最小値 -1 に達した後、点は下から右へと移動していきます。' +
        'まだX軸より下にいるので sin は負のままですが、徐々に 0 に近づきます。\n\n' +
        '  270° → sin = -1\n' +
        '  300° → sin ≈ -0.87\n' +
        '  330° → sin = -0.5\n' +
        '  360° → sin = 0（出発点に戻る）\n\n' +
        '第4象限では点はX軸の下にあるため、sin は負の値です。' +
        'こうして 1 周すると、sin の値は 0 → 1 → 0 → -1 → 0 と滑らかに変化します。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'a270',
            vector: new Vector3(0, -1, 0),
            color: '#44ff44',
            label: '270°: sin=-1',
            showComponents: true,
          },
          {
            id: 'a300',
            vector: new Vector3(Math.cos((5 * Math.PI) / 3), Math.sin((5 * Math.PI) / 3), 0),
            color: '#44dd44',
            label: '300°: sin≈-0.87',
            showComponents: true,
          },
          {
            id: 'a330',
            vector: new Vector3(Math.cos((11 * Math.PI) / 6), Math.sin((11 * Math.PI) / 6), 0),
            color: '#44bb44',
            label: '330°: sin=-0.5',
            showComponents: true,
          },
          {
            id: 'a360',
            vector: new Vector3(1, 0, 0),
            color: '#449944',
            label: '360°: sin=0',
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
      id: 'sin-graph',
      title: 'sin の全体像',
      content:
        '角度を横軸に、sin の値を縦軸にとると、sin のグラフが見えてきます。\n\n' +
        'sin は 0 から始まり、滑らかに 1 まで上がり、0 に戻り、-1 まで下がり、また 0 に戻ります。' +
        'この波のような形が 360°（2π）ごとに繰り返されます。\n\n' +
        '再生ボタンを押すと、角度が進むにつれて sin の値がグラフ上にどう描かれるかを見ることができます。' +
        '単位円上の点の縦位置が、そのままグラフの高さになっていることに注目してください。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        circles: [{ radius: 1, color: '#8888ff', plane: 'xy' }],
        cameraPosition: [0, 0, 4],
      },
      customScene: 'sin-graph',
      interactive: true,
      nextCondition: 'click',
    },
    {
      id: 'sin-summary',
      title: 'まとめ',
      content:
        'sin θ の振る舞いを整理しましょう。\n\n' +
        '象限ごとの変化:\n' +
        '  第1象限（0°〜90°）    : 0 → 1   正の値、増加\n' +
        '  第2象限（90°〜180°）  : 1 → 0   正の値、減少\n' +
        '  第3象限（180°〜270°） : 0 → -1  負の値、減少\n' +
        '  第4象限（270°〜360°） : -1 → 0  負の値、増加\n\n' +
        '覚えておきたい主要な値:\n' +
        '  sin 0° = 0\n' +
        '  sin 30° = 0.5（1/2）\n' +
        '  sin 45° ≈ 0.71（√2/2）\n' +
        '  sin 60° ≈ 0.87（√3/2）\n' +
        '  sin 90° = 1\n' +
        '  sin 180° = 0\n' +
        '  sin 270° = -1\n\n' +
        'sin の符号は「点がX軸の上にあるか下にあるか」で決まります。' +
        '上なら正、下なら負。この直感があれば、値の正負を迷うことはありません。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'a0',
            vector: new Vector3(1, 0, 0),
            color: '#44ff44',
            label: '0°: sin=0',
          },
          {
            id: 'a90',
            vector: new Vector3(0, 1, 0),
            color: '#44dd44',
            label: '90°: sin=1',
          },
          {
            id: 'a180',
            vector: new Vector3(-1, 0, 0),
            color: '#44bb44',
            label: '180°: sin=0',
          },
          {
            id: 'a270',
            vector: new Vector3(0, -1, 0),
            color: '#449944',
            label: '270°: sin=-1',
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
