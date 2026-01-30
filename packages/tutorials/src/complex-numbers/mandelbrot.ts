import { Tutorial } from '../types';

export const mandelbrotTutorial: Tutorial = {
  id: 'mandelbrot',
  title: '【実践】マンデルブロ集合',
  description: 'z → z² + c の反復から生まれる美しいフラクタル',
  category: 'complex-numbers',
  steps: [
    {
      id: 'hook',
      title: '無限の複雑さ',
      content:
        'マンデルブロ集合は、複素数の反復操作から生まれるフラクタルです。\n\nルールは驚くほど単純:\n\nz₀ = 0\nzₙ₊₁ = zₙ² + c\n\nこの操作を繰り返したとき、|zₙ| が発散しない c の集合がマンデルブロ集合です。',
      customScene: 'mandelbrot-animation',
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
      id: 'iteration',
      title: '反復の仕組み',
      content:
        'c = 0.3 + 0.5i で試してみましょう:\n\nz₀ = 0\nz₁ = 0² + c = 0.3 + 0.5i\nz₂ = z₁² + c = (0.3+0.5i)² + (0.3+0.5i)\n= (-0.16+0.3i) + (0.3+0.5i) = 0.14 + 0.8i\n\nこれを繰り返すと |zₙ| は有界に留まります。よって c = 0.3+0.5i はマンデルブロ集合に含まれます。',
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
      id: 'escape',
      title: '発散の判定',
      content:
        '|zₙ| > 2 になったら、その c は集合に含まれません（必ず発散します）。\n\nc = 1 の場合:\nz₀=0, z₁=1, z₂=2, z₃=5, z₄=26, ...\n\n急速に発散！ c=1 はマンデルブロ集合の外です。\n\n境界付近の点ほど発散が遅く、美しいパターンを作ります。',
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
      id: 'interactive',
      title: '反復を体験',
      content:
        '複素平面上の点 c を選んで、z → z² + c の反復がどう振る舞うか観察してみましょう。\n\n集合の内部（黒い領域）、境界（カラフルな領域）、外部を探索してください。',
      customScene: 'mandelbrot-interactive',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
      interactiveConfig: { type: 'drag-unit-circle' },
    },
    {
      id: 'self-similarity',
      title: '自己相似性',
      content:
        'マンデルブロ集合をズームインすると、全体と似た構造が無限に繰り返されます。\n\nこれが「フラクタル」の特徴である自己相似性です。\n\nどこまでズームしても新しい詳細が現れ続けます。無限の複雑さが有限のルールから生まれる── これが複素数の力です。',
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
      content: 'マンデルブロ集合の理解を確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'c = 0 のとき、zₙ = zₙ₋₁² + c の列はどうなる？',
        options: [
          { id: 'a', label: '発散する', correct: false },
          { id: 'b', label: 'すべて0のまま', correct: true },
          { id: 'c', label: '1に収束する', correct: false },
          { id: 'd', label: '振動する', correct: false },
        ],
        explanation:
          'z₀=0, z₁=0²+0=0, z₂=0²+0=0, ... すべて0です。c=0はマンデルブロ集合の中心にあります。',
      },
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        'マンデルブロ集合:\n\n・z → z² + c の反復で定義\n・|zₙ| が発散しない c の集合\n・境界は無限に複雑なフラクタル\n・自己相似性を持つ\n・シンプルなルールから無限の複雑さが生まれる\n\n複素数の反復がいかに豊かな構造を生み出すか、これがその証拠です。',
      customScene: 'mandelbrot-summary',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
