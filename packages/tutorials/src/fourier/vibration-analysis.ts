import { Tutorial } from '../types';

export const vibrationAnalysisTutorial: Tutorial = {
  id: 'vibration-analysis',
  title: '振動解析',
  description: '機械の振動をフーリエ変換で分析する手法を学ぶ',
  category: 'fourier',
  steps: [
    {
      id: 'hook',
      title: '機械の健康診断',
      content:
        '回転機械（モーター、タービン等）の振動を分析すると、\n故障の予兆を早期に発見できます。\n\n正常な機械は特定の周波数で振動しますが、\n異常があると新しい周波数成分が現れます。\n\nフーリエ変換は機械の「聴診器」です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'vibration-analysis-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '振動スペクトルを分析',
      content:
        '回転速度と異常の種類を変えて、スペクトルパターンの違いを確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'vibration-analysis-interactive',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'rpm', min: 600, max: 3600, step: 60, initial: 1800 },
          { name: 'faultType', min: 0, max: 3, step: 1, initial: 0 },
        ],
      },
    },
    {
      id: 'example-1',
      title: '振動の周波数成分',
      content:
        '回転機械の振動周波数:\n\n回転周波数: f₀ = RPM/60\n\nアンバランス: 1×f₀（回転に同期）\nミスアライメント: 2×f₀（1回転で2回の衝撃）\nベアリング不良: 高次の特定周波数\n歯車の噛み合い: 歯数×f₀\n\n例: 1800RPMのモーター\nf₀ = 1800/60 = 30Hz\nアンバランス: 30Hzにピーク\nミスアライメント: 60Hzにピーク',
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
      title: 'オーダー分析',
      content:
        '回転数が変動する機械では、通常のFFTでは周波数がぼやけます。\n\nオーダー分析:\n周波数の代わりに「回転次数」で解析。\n\n1次: 回転に同期する振動\n2次: 回転の2倍の周波数\nn次: 回転のn倍の周波数\n\nタコパルス（回転信号）で同期サンプリングし、\n回転速度の変動を補正してFFTを行います。\n\nエンジンや変速機の振動解析に不可欠な手法です。',
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
      content: '振動解析について考えてみましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '3000RPMで回転するモーターにアンバランスがある場合、振動スペクトルのどこにピークが出る？',
        options: [
          { id: 'a', label: '25Hz', correct: false },
          { id: 'b', label: '50Hz', correct: true },
          { id: 'c', label: '100Hz', correct: false },
          { id: 'd', label: '3000Hz', correct: false },
        ],
        explanation:
          '回転周波数 = 3000RPM / 60 = 50Hz。アンバランスは1×回転周波数に現れるので、50Hzにピークが出ます。',
      },
    },
    {
      id: 'alternate',
      title: '包絡線分析（エンベロープ分析）',
      content:
        'ベアリング不良の検出には包絡線分析が有効です。\n\n手順:\n1. バンドパスフィルタで共振周波数帯を抽出\n2. ヒルベルト変換で包絡線（振幅変調成分）を取得\n3. 包絡線のFFTで故障周波数を検出\n\nベアリング故障の特徴周波数:\n・BPFO（外輪）: 転動体数 × 回転数 × (1-d/D·cosα) / 2\n・BPFI（内輪）: 転動体数 × 回転数 × (1+d/D·cosα) / 2\n\nフーリエ変換を2段階で使う高度な手法です。',
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
      title: 'まとめ：振動解析',
      content:
        '機械振動のFFT解析は予防保全の強力なツールです。\n\n回転速度と異常の種類を変えてスペクトルパターンを確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'vibration-analysis-summary',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'rpm', min: 600, max: 3600, step: 60, initial: 1800 },
          { name: 'faultSeverity', min: 0, max: 1, step: 0.1, initial: 0 },
        ],
      },
    },
  ],
};
