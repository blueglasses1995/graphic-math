import { Tutorial } from '../types';

export const symmetryIntroTutorial: Tutorial = {
  id: 'symmetry-intro',
  title: '対称性とは',
  description: '対称性の直感的な意味と、数学における対称性の役割を学ぶ',
  category: 'algebra',
  steps: [
    {
      id: 'hook',
      title: '身の回りの対称性',
      content:
        '雪の結晶、蝶の羽、万華鏡の模様。\n\n私たちの身の回りには「対称性」があふれています。\n\n対称性とは「ある操作をしても見た目が変わらない」という性質のことです。\n\nこのチュートリアルでは、対称性を数学的に捉える方法を学びます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'symmetry-intro-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'mirror-symmetry',
      title: '鏡映対称性',
      content:
        '蝶の羽を真ん中で折ると、左右がぴったり重なります。\n\nこれが「鏡映対称性」です。\n\n鏡で映したような関係 ── 数学では「反射」と呼びます。\n\n反射の軸を変えれば、別の対称性が生まれます。',
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
      id: 'rotation-symmetry',
      title: '回転対称性',
      content:
        '正三角形を120°回転させると、元の形と区別がつきません。\n\nこれが「回転対称性」です。\n\n正方形なら90°回転、正六角形なら60°回転で元に戻ります。\n\n正n角形は360°/n の回転対称性を持ちます。',
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
      id: 'symmetry-as-operation',
      title: '対称性を「操作」として捉える',
      content:
        '重要な視点の転換です。\n\n対称性を「形の性質」ではなく「操作の集まり」として捉えます。\n\n正三角形の対称性 = {0°回転, 120°回転, 240°回転, 反射1, 反射2, 反射3}\n\nこの操作の集まりが、代数学の中心概念「群」の出発点です。',
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
      id: 'combining-operations',
      title: '操作の合成',
      content:
        '2つの対称操作を続けて行うと、また別の対称操作になります。\n\n例: 120°回転 → 120°回転 = 240°回転\n\nこのように「操作を組み合わせる」ことができるのが、対称性の面白いところです。\n\nこの「組み合わせ」のルールが代数構造を生み出します。',
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
      id: 'quiz',
      title: '確認クイズ',
      content: '対称性について確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '正方形の回転対称性は何度回転ですか？',
        options: [
          { id: 'a', label: '60°', correct: false },
          { id: 'b', label: '90°', correct: true },
          { id: 'c', label: '120°', correct: false },
          { id: 'd', label: '180°', correct: false },
        ],
        explanation:
          '正解は90°です。正方形は4つの頂点を持つので、360°/4 = 90°の回転対称性を持ちます。',
      },
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        '対称性とは「ある操作をしても見た目が変わらない」性質です。\n\n鏡映対称性: 反射で重なる\n回転対称性: 回転で重なる\n\n重要な発想: 対称性を「操作の集まり」として捉えること。\n\nこの操作の集まりが「群」という数学的構造になります。次は正三角形の回転を詳しく見ていきましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'symmetry-intro-summary',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
