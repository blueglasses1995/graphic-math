import { Vector3, Transforms } from '@learnmath/core';
import { Tutorial } from '../types';

export const linearTransformsTutorial: Tutorial = {
  id: 'linear-transforms',
  title: '線形変換',
  description: 'スケーリング、回転、せん断など、代表的な線形変換を視覚的に体験する',
  category: 'linear-algebra',
  prerequisites: ['basis-vectors'],
  steps: [
    {
      id: 'transform-what',
      title: '変換とは何か？',
      content:
        '「変換」とは、空間のすべての点を別の点に移す操作です。\n\n' +
        '身近な例で考えましょう。写真を拡大する、回転させる、斜めに傾ける。' +
        'これらはすべて「変換」です。\n\n' +
        '数学的には、ベクトル v を入力として受け取り、新しいベクトル T(v) を出力する関数です。' +
        '空間のすべての点が一斉に新しい位置に移動するイメージを持ってください。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'vec-i',
            vector: Vector3.i(),
            color: '#ff4444',
            label: 'i',
          },
          {
            id: 'vec-j',
            vector: Vector3.j(),
            color: '#44ff44',
            label: 'j',
          },
        ],
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'transform-linear-meaning',
      title: '「線形」とはどういう意味か？',
      content:
        '変換の中でも「線形」変換は、2つの特別な性質を持ちます。\n\n' +
        '1. 原点は動かない：(0, 0, 0) は変換後も (0, 0, 0) のまま\n' +
        '2. 直線は直線のまま：曲がったり折れたりしない\n\n' +
        'なぜこれが重要かというと、この2つの性質があるおかげで、' +
        '基底ベクトル i, j の行き先さえわかれば、空間のすべての点の行き先がわかるからです。\n\n' +
        '例えば v = 2i + 3j の変換後は、T(v) = 2*T(i) + 3*T(j) になります。' +
        '比率が保たれるので、基底の行き先だけ追跡すれば十分なのです。\n\n' +
        'グリッド線がまっすぐのまま変形する様子に注目してください。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'vec-i',
            vector: Vector3.i(),
            color: '#ff4444',
            label: 'i',
          },
          {
            id: 'vec-j',
            vector: Vector3.j(),
            color: '#44ff44',
            label: 'j',
          },
          {
            id: 'vec-v',
            vector: new Vector3(2, 3, 0),
            color: '#ffaa00',
            label: 'v = 2i + 3j',
          },
        ],
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'transform-scale-concept',
      title: 'スケーリング変換の考え方',
      content:
        'スケーリングは、各軸方向にベクトルを伸び縮みさせる変換です。\n\n' +
        'この例では、X方向に2倍、Y方向に0.5倍にスケーリングします。\n\n' +
        '変換前 → 変換後：\n' +
        '  i = (1, 0, 0) → (2, 0, 0)  ... X方向に2倍伸びた\n' +
        '  j = (0, 1, 0) → (0, 0.5, 0)  ... Y方向に半分に縮んだ\n\n' +
        '他のベクトルはどうなるでしょうか？\n' +
        '  v = (1, 1, 0) → (2, 0.5, 0)  ... 横に伸び、縦に縮む\n' +
        '  w = (3, 2, 0) → (6, 1, 0)  ... 各成分がそれぞれスケールされる\n\n' +
        '正方形のグリッドが横長の長方形に変形する様子を観察しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'vec-i',
            vector: Vector3.i(),
            color: '#ff4444',
            label: 'i',
          },
          {
            id: 'vec-j',
            vector: Vector3.j(),
            color: '#44ff44',
            label: 'j',
          },
          {
            id: 'vec-v',
            vector: new Vector3(1, 1, 0),
            color: '#ffaa00',
            label: 'v = (1,1,0)',
          },
        ],
        transform: Transforms.scale(2, 0.5, 1),
        animateTransform: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'interaction',
    },
    {
      id: 'transform-scale-result',
      title: 'スケーリングの結果を確認',
      content:
        '変換後の状態を確認しましょう。\n\n' +
        '変換前 → 変換後：\n' +
        '  i = (1, 0, 0) → i\' = (2, 0, 0)  ... 2倍に伸びた\n' +
        '  j = (0, 1, 0) → j\' = (0, 0.5, 0)  ... 半分に縮んだ\n' +
        '  v = (1, 1, 0) → v\' = (2, 0.5, 0)  ... 各成分が個別にスケール\n\n' +
        'スケーリングの直感的な理解：\n' +
        '空間を「ゴムシート」だと思ってください。X方向に引っ張り、Y方向に押し縮める。' +
        'シートの上のすべての点が一斉に移動します。\n\n' +
        '面積への影響: 元の単位正方形の面積 1 が、2 * 0.5 = 1 に変化します。' +
        'この場合はたまたま面積が保存されていますが、一般には変わります。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'vec-i-dest',
            vector: new Vector3(2, 0, 0),
            color: '#ff4444',
            label: "i' = (2,0,0)",
            showComponents: true,
          },
          {
            id: 'vec-j-dest',
            vector: new Vector3(0, 0.5, 0),
            color: '#44ff44',
            label: "j' = (0,0.5,0)",
            showComponents: true,
          },
          {
            id: 'vec-v-dest',
            vector: new Vector3(2, 0.5, 0),
            color: '#ffaa00',
            label: "v' = (2,0.5,0)",
            showComponents: true,
          },
        ],
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'transform-rotation-concept',
      title: '回転変換の考え方',
      content:
        '回転変換は、すべてのベクトルを同じ角度だけ回す変換です。\n\n' +
        'スケーリングとの大きな違い：回転はベクトルの長さを変えません。' +
        '方向だけが変わります。\n\n' +
        'ここではZ軸周りに45度（π/4ラジアン）回転させます。\n\n' +
        '変換前 → 変換後：\n' +
        '  i = (1, 0, 0) → (0.71, 0.71, 0)  ... 右向きが右上向きに\n' +
        '  j = (0, 1, 0) → (-0.71, 0.71, 0)  ... 上向きが左上向きに\n\n' +
        'cos 45° = sin 45° = 0.71（約√2/2）であることに注目してください。' +
        '回転と三角関数が深く結びついているのです。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'vec-i',
            vector: Vector3.i(),
            color: '#ff4444',
            label: 'i',
          },
          {
            id: 'vec-j',
            vector: Vector3.j(),
            color: '#44ff44',
            label: 'j',
          },
        ],
        transform: Transforms.rotationZ(Math.PI / 4),
        animateTransform: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'interaction',
    },
    {
      id: 'transform-rotation-result',
      title: '回転の結果を確認',
      content:
        '45度回転後の基底ベクトルを確認しましょう。\n\n' +
        '変換前 → 変換後：\n' +
        '  i = (1, 0, 0) → i\' = (0.71, 0.71, 0)\n' +
        '  j = (0, 1, 0) → j\' = (-0.71, 0.71, 0)\n\n' +
        '重要な性質に注目してください：\n' +
        '  - i\' の長さ = √(0.71² + 0.71²) = 1  ... 長さは変わらない\n' +
        '  - j\' の長さ = √(0.71² + 0.71²) = 1  ... 同様\n' +
        '  - i\' と j\' は依然として垂直  ... 直角も保存される\n\n' +
        '回転は「形を保つ」変換です。正方形のグリッドは、回転後も正方形のままです。' +
        '大きさも角度も変わらず、向きだけが変わります。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'vec-i-dest',
            vector: new Vector3(Math.cos(Math.PI / 4), Math.sin(Math.PI / 4), 0),
            color: '#ff4444',
            label: "i' = (0.71, 0.71, 0)",
            showComponents: true,
          },
          {
            id: 'vec-j-dest',
            vector: new Vector3(-Math.sin(Math.PI / 4), Math.cos(Math.PI / 4), 0),
            color: '#44ff44',
            label: "j' = (-0.71, 0.71, 0)",
            showComponents: true,
          },
        ],
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'transform-shear-concept',
      title: 'せん断変換の考え方',
      content:
        'せん断（シア）変換は、ある方向を「ずらす」変換です。\n\n' +
        '身近な例: トランプの束を横からそっと押すと、カードが少しずつずれて' +
        '平行四辺形の形になります。これがせん断です。\n\n' +
        'この例では、「Y座標が大きいほどX方向に大きくずらす」変換をします。\n' +
        '具体的には、X方向にY成分の0.5倍だけずらします。\n\n' +
        '変換前 → 変換後：\n' +
        '  i = (1, 0, 0) → (1, 0, 0)  ... Y成分が0なのでずれない！\n' +
        '  j = (0, 1, 0) → (0.5, 1, 0)  ... Y成分が1なので、X方向に0.5ずれる\n\n' +
        '正方形が平行四辺形に変形する様子を観察しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'vec-i',
            vector: Vector3.i(),
            color: '#ff4444',
            label: 'i',
          },
          {
            id: 'vec-j',
            vector: Vector3.j(),
            color: '#44ff44',
            label: 'j',
          },
        ],
        transform: Transforms.shearXY(0.5),
        animateTransform: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'interaction',
    },
    {
      id: 'transform-shear-result',
      title: 'せん断の結果を確認',
      content:
        'せん断後の状態を確認しましょう。\n\n' +
        '変換前 → 変換後：\n' +
        '  i = (1, 0, 0) → i\' = (1, 0, 0)  ... 変化なし\n' +
        '  j = (0, 1, 0) → j\' = (0.5, 1, 0)  ... 右に0.5ずれた\n\n' +
        '他の点はどうなるでしょうか？\n' +
        '  (1, 1, 0) → (1.5, 1, 0)  ... Y=1の位置は0.5ずれる\n' +
        '  (0, 2, 0) → (1, 2, 0)  ... Y=2の位置は1.0ずれる\n' +
        '  (0, -1, 0) → (-0.5, -1, 0)  ... Y=-1の位置は-0.5ずれる\n\n' +
        'Y座標に比例してずれ幅が大きくなることが分かります。' +
        '底辺（Y=0の線）は動かず、上に行くほど右にずれる。' +
        'まさにトランプの束を押したような変形です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'vec-i-dest',
            vector: new Vector3(1, 0, 0),
            color: '#ff4444',
            label: "i' = (1,0,0)",
            showComponents: true,
          },
          {
            id: 'vec-j-dest',
            vector: new Vector3(0.5, 1, 0),
            color: '#44ff44',
            label: "j' = (0.5,1,0)",
            showComponents: true,
          },
        ],
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'transform-composition-concept',
      title: '変換の合成：2つの変換を組み合わせる',
      content:
        '線形変換は合成（composition）できます。「変換Aの後に変換Bを適用する」ということです。\n\n' +
        'ここでは「まずZ軸周りに30度回転 → 次に1.5倍にスケーリング」を行います。\n\n' +
        'ステップ1: 30度回転\n' +
        '  i = (1, 0, 0) → (0.87, 0.5, 0)\n' +
        '  j = (0, 1, 0) → (-0.5, 0.87, 0)\n\n' +
        'ステップ2: 1.5倍スケーリング\n' +
        '  (0.87, 0.5, 0) → (1.30, 0.75, 0)\n' +
        '  (-0.5, 0.87, 0) → (-0.75, 1.30, 0)\n\n' +
        '最終結果: i は (1.30, 0.75, 0)、j は (-0.75, 1.30, 0) に移動します。\n\n' +
        '重要: 合成の順序を変えると結果が変わります。' +
        '「先に回転してからスケール」と「先にスケールしてから回転」は別の変換です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'vec-i',
            vector: Vector3.i(),
            color: '#ff4444',
            label: 'i',
          },
          {
            id: 'vec-j',
            vector: Vector3.j(),
            color: '#44ff44',
            label: 'j',
          },
        ],
        transform: Transforms.scale(1.5, 1.5, 1).compose(
          Transforms.rotationZ(Math.PI / 6)
        ),
        animateTransform: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'interaction',
    },
    {
      id: 'transform-summary',
      title: 'まとめ',
      content:
        'この章で学んだ線形変換を整理しましょう。\n\n' +
        '1. 線形変換は原点を動かさず、直線を直線に保つ変換\n' +
        '2. スケーリング: 各軸方向に伸縮させる\n' +
        '   - i = (1,0,0) → (sx, 0, 0), j = (0,1,0) → (0, sy, 0)\n' +
        '3. 回転: 長さと角度を保ったまま方向を変える\n' +
        '   - 三角関数で変換先が決まる\n' +
        '4. せん断: ある方向に比例してずらす\n' +
        '   - 長方形が平行四辺形になる\n' +
        '5. 合成: 複数の変換を順に適用（順序が重要！）\n\n' +
        '共通するポイント: どの変換も、基底ベクトル i, j, k の行き先で完全に決まります。' +
        '次の章では、この「行き先」を数字で記録する方法、つまり行列について学びます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          {
            id: 'vec-i',
            vector: Vector3.i(),
            color: '#ff4444',
            label: 'i',
          },
          {
            id: 'vec-j',
            vector: Vector3.j(),
            color: '#44ff44',
            label: 'j',
          },
        ],
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
    },
  ],
};
