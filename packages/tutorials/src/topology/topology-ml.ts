import { Tutorial } from '../types';

export const topologyMlTutorial: Tutorial = {
  id: 'topology-ml',
  title: '【実践】位相と機械学習',
  description: '位相の概念が機械学習をどう変えるか――TDAとニューラルネットワーク',
  category: 'topology',
  steps: [
    {
      id: 'hook',
      title: 'データの形が学習を助ける',
      content:
        '高次元データの中に隠れた位相的構造（穴・ループ・空洞）がニューラルネットワークの学習を助けます。データの「形」を活用するアプローチのアニメーションです。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-ml-anim',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう',
      content:
        'データセットの形状パラメータを変えて、分類精度がどう変わるか観察しましょう。位相的特徴が分類に役立つ場面を体験してください。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-ml-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'TDAの特徴量',
      content:
        'パーシステンス図から安定な特徴量を抽出し、機械学習の入力に使います。パーシステンスイメージやパーシステンスランドスケープが代表的な手法。座標に依存しない頑健な特徴です。',
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
      title: 'トポロジカルロス',
      content:
        'ニューラルネットワークの損失関数に位相的制約を加える手法。セグメンテーションで「穴が何個あるか」を制御したり、生成モデルのデータ構造を保持したりできます。',
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
        'TDAの特徴量が従来手法より有利な場面は？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'TDA特徴量が有利な場面は？',
        options: [
          { id: 'a', label: 'データの回転・スケール不変性が重要なとき', correct: true },
          { id: 'b', label: 'データが1次元のとき', correct: false },
          { id: 'c', label: 'サンプル数が多いとき', correct: false },
          { id: 'd', label: '線形分離可能なとき', correct: false },
        ],
        explanation:
          'TDA特徴量は座標系に依存しないため、回転やスケール変換に対して安定です。3D点群や分子構造の分類で特に有効です。',
      },
    },
    {
      id: 'alternate',
      title: '具体的な応用例',
      content:
        '(1) 薬剤分子の形状分類：分子のトポロジーから薬効を予測。(2) 脳活動の解析：fMRIデータの位相的特徴で認知状態を分類。(3) 材料科学：多孔質材料の穴の構造を定量化。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
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
        '位相×機械学習＝データの「形」を活かした学習。\n\nポイント：\n- TDA特徴量は座標不変\n- トポロジカルロスで構造を保持\n- 分子・脳科学・材料科学で応用\n\nパラメータを変えて実験しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-ml-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
