import { Tutorial } from '../types';

export const schedulingTutorial: Tutorial = {
  id: 'scheduling',
  title: '【実践】スケジューリング',
  description: 'グラフ彩色とトポロジカルソートによるスケジュール最適化',
  category: 'discrete-math',
  steps: [
    {
      id: 'hook',
      title: '時間割を作る',
      content:
        '大学の時間割を作成するとき、同じ学生が受講する2つの授業を同じ時間帯に入れてはいけません。\n\n最小の時間帯数で全授業を配置するには？\n\nこれは実はグラフの彩色問題です。',
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
      id: 'coloring-model',
      title: '彩色モデル',
      content:
        '授業を頂点、同時に受けられない授業間に辺を引きます。\n\n色 = 時間帯とすると、隣接する頂点が異なる色になればOK。\n\n彩色数 = 必要最小時間帯数です。\n\n例：5授業で衝突が3組あるグラフの彩色数が3なら、3時間帯で済みます。',
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
      id: 'topological-sort',
      title: 'トポロジカルソート',
      content:
        '「Aを終えてからBを始める」という依存関係がある場合、\n順序を決めるにはトポロジカルソートを使います。\n\n有向非巡回グラフ（DAG）の頂点を、辺の方向に沿った順に並べます。\n\n入次数0の頂点を順次取り出す方法（カーンのアルゴリズム）で実現できます。',
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
      id: 'critical-path',
      title: 'クリティカルパス',
      content:
        'プロジェクト管理では、各タスクに所要時間があります。\n\nクリティカルパス：最長パスの長さ = プロジェクト全体の最短完了時間\n\nクリティカルパス上のタスクは1日でも遅れると全体が遅れます。\n\nこれを特定することが効率的なプロジェクト管理の鍵です。',
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
      id: 'quiz',
      title: 'クイズ',
      content: 'スケジューリングについて確認しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '時間割作成でグラフ彩色を使う場合、色は何に対応しますか？',
        options: [
          { id: 'a', label: '授業', correct: false },
          { id: 'b', label: '教室', correct: false },
          { id: 'c', label: '時間帯', correct: true },
          { id: 'd', label: '学生', correct: false },
        ],
        explanation:
          '正解は時間帯です。頂点（授業）に色（時間帯）を割り当て、隣接する授業（同時に受けられない）に異なる色を配ります。',
      },
    },
    {
      id: 'interval-scheduling',
      title: '区間スケジューリング',
      content:
        '各タスクに開始時刻と終了時刻がある場合：\n\n「重ならないタスクを最大数実行する」→ 区間スケジューリング問題\n\n貪欲法：終了時刻が早い順に選ぶだけで最適解が得られます。\n\n証明：交換論法で、他の最適解があっても同じ数選べることを示します。',
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
        '・時間割作成 → グラフ彩色\n・依存関係の順序 → トポロジカルソート\n・最短完了時間 → クリティカルパス\n・最大タスク数 → 区間スケジューリング\n\nスケジューリングは離散数学の典型的な応用分野です。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
