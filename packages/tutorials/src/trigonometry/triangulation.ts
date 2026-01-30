import { Tutorial } from '../types';

export const triangulationTutorial: Tutorial = {
  id: 'triangulation',
  title: '【実践】三角測量',
  description: '三角関数を使って距離や高さを測る実践的な手法を学ぶ',
  category: 'trigonometry',
  steps: [
    {
      id: 'hook',
      title: '測れないものを測る',
      content:
        '山の高さ、川の幅、星までの距離。直接メジャーで測れないものも、三角関数を使えば計算できます。\n\nこれが「三角測量」。角度と1つの辺の長さから、他のすべてがわかります。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        circles: [{ radius: 1, color: '#4fc3f7', plane: 'xy' }],
        cameraPosition: [0, 0, 5],
      },
      customScene: 'triangulation-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '角度から距離を求めよう',
      content:
        '地面からの仰角と、建物までの距離を変えて建物の高さを計算してみましょう。\n\n高さ = 距離 × tan(仰角)\n\n角度が変わると高さの推定値がどう変わるか確認してください。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'triangulation-interactive',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'angle', min: 5, max: 80, step: 1, initial: 45 },
          { name: 'distance', min: 10, max: 200, step: 5, initial: 50 },
        ],
      },
    },
    {
      id: 'example-1',
      title: '具体例：建物の高さ',
      content:
        '建物から50m離れた地点で仰角を測ると60°でした。\n\n高さh = 50 × tan(60°) = 50 × √3 ≈ 86.6m\n\n（目の高さ1.6mを足すと約88.2m）\n\n実際のポイント:\n・角度は分度器やスマホの傾斜計で測れる\n・目の高さも加算する必要がある\n・風や地形の影響で誤差が出る',
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
      title: '具体例：川の幅',
      content:
        '川の向こう岸の木を目標に、川沿いに100m移動して角度を測ります。\n\n地点Aから木への角度: 90°\n地点B（100m離れた点）から木への角度: 65°\n\n川の幅 = 100 × tan(65°) ≈ 214.5m\n\nこれが三角測量の基本。既知の辺（基線）と角度から未知の距離を求めます。GPSが発明されるまで、地図作りはこの方法に頼っていました。',
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
        '三角測量の考え方を使いましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '塔から100m離れた地点で仰角45°。塔の高さは約何m？（目の高さは無視）',
        options: [
          { id: 'a', label: '50m', correct: false },
          { id: 'b', label: '100m', correct: true },
          { id: 'c', label: '141m', correct: false },
          { id: 'd', label: '200m', correct: false },
        ],
        explanation:
          '高さ = 100 × tan(45°) = 100 × 1 = 100m\n\ntan(45°) = 1 なので、仰角45°のときは距離と高さが等しくなります。',
      },
    },
    {
      id: 'alternate',
      title: '正弦定理と余弦定理',
      content:
        '直角三角形以外でも三角関数が使えます:\n\n正弦定理: a/sinA = b/sinB = c/sinC\n（辺と対角の比が一定）\n\n余弦定理: c² = a² + b² − 2ab·cosC\n（三平方の定理の一般化）\n\nGPSの仕組みも三角測量の発展形。複数の衛星からの信号で自分の位置を特定します。',
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
        '三角測量の基本:\n\n・高さ = 距離 × tan(仰角)\n・角度 + 1辺 → 他の辺を計算\n・正弦定理、余弦定理で任意の三角形に対応\n\n応用:\n・建物の高さ、川の幅の測定\n・GPSによる位置特定\n・天文学での恒星までの距離\n\n三角関数は「測量」のために生まれた関数。名前の通り「三角形を測る」道具です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'triangulation-summary',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
