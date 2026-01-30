import { Tutorial } from '../types';

export const springVibrationTutorial: Tutorial = {
  id: 'spring-vibration',
  title: '【実践】ばねとsin',
  description: 'ばねに吊るした重りの振動はsinそのもの',
  category: 'trigonometry',
  steps: [
    {
      id: 'hook',
      title: 'ばねが描く波',
      content:
        'ばねに重りを付けて引っ張り、手を離す。重りは上下に揺れます。\n\nその変位（平衡点からのずれ）をグラフにすると...sinの波が現れます。\n\n再生して確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'spring',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: 'ばねを観察しよう',
      content:
        '再生と一時停止を使って、重りの位置とグラフの対応を確認してください。\n\n重りが一番下にいるとき、グラフのどこにいますか？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'spring',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-extreme',
      title: '最も伸びた瞬間 = sinの山',
      content:
        '重りが最も下がったとき、変位は最大（+1）。sinの山です。\n\nこの瞬間、重りは一瞬止まっています。速度ゼロ。\n\nsinの山では微分（cos）がゼロ。数学と物理が一致しています。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'spring',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-equilibrium',
      title: '平衡点通過 = 最速の瞬間',
      content:
        '重りが平衡点を通るとき、変位はゼロ。sinがゼロを横切る瞬間です。\n\nこの瞬間が最も速い。なぜか？\n\nsinの変化率（微分）= cosで、cos(0) = 1は最大値。変位がゼロのとき速度が最大、変位が最大のとき速度がゼロ。\n\n変位 = sin(ωt)、速度 = ωcos(ωt)、加速度 = -ω²sin(ωt)。すべてsinとcosで書けます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'spring',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: '予測してみよう',
      content:
        'ばねを硬いものに交換すると（ばね定数を大きくすると）、振動はどう変わるでしょう？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'spring',
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'ばねを硬くすると？',
        options: [
          { id: 'a', label: '振幅が大きくなる', correct: false },
          { id: 'b', label: '周期が短くなる（速く揺れる）', correct: true },
          { id: 'c', label: '振動が止まる', correct: false },
          { id: 'd', label: '周期が長くなる（ゆっくり揺れる）', correct: false },
        ],
        explanation:
          '硬いばねは強い力で元に戻すため、振動が速くなります。周期 T = 2π√(m/k) なので、ばね定数kが大きいほど周期は短くなります。振幅は初期条件（どれだけ引っ張ったか）で決まり、ばねの硬さとは無関係です。',
      },
    },
    {
      id: 'alternate',
      title: '地震計もばね',
      content:
        '地震計の中にはばねと重りが入っています。地面が揺れると重りが振動し、その変位を記録します。\n\n記録されるのはsinの波（地震波）。P波、S波、表面波、すべてsinの重ね合わせです。\n\n楽器の弦もばねと同じ原理。弦の振動 = sin波 = 音。ギター、ピアノ、バイオリン...すべてのばねの振動です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'spring',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        '単振動（ばね・振り子）の変位はsin(ωt)で記述されます。速度はcos(ωt)、加速度は-sin(ωt)。三角関数は振動現象の言語です。\n\nよくある誤解: 振動は「減衰して止まる」と思うこと。理想的な単振動は永遠に続きます。減衰は空気抵抗や摩擦による追加効果です。\n\nもう一度ばねの動きを観察してみましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'spring',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
