import { Tutorial } from '../types';

export const noiseCancelingTutorial: Tutorial = {
  id: 'noise-canceling',
  title: 'ノイズキャンセリング',
  description: 'フーリエ変換を用いたノイズ除去の原理を学ぶ',
  category: 'fourier',
  steps: [
    {
      id: 'hook',
      title: '騒音を消す数学',
      content:
        'ノイズキャンセリングヘッドホンは外部の騒音を消します。\n\nマイクで拾った騒音を分析し、逆位相の音を生成して打ち消す。\n\nこの処理の核心にはフーリエ変換による周波数分析があります。\n\nどうやって雑音だけを選んで消すのでしょうか？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: 'フィルタリングを体験',
      content:
        'ノイズの量とフィルタの強さを調整して、信号のノイズ除去効果を確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'noiseLevel', min: 0, max: 1, step: 0.05, initial: 0.3 },
          { name: 'filterStrength', min: 0, max: 1, step: 0.05, initial: 0.5 },
        ],
      },
    },
    {
      id: 'example-1',
      title: 'アクティブノイズキャンセリング',
      content:
        'ANC（アクティブノイズキャンセリング）の原理:\n\n1. マイクで外部騒音 n(t) を測定\n2. FFTで周波数分析: N(ω)\n3. 逆位相の信号を生成: -N(ω)\n4. 逆FFTで時間信号に戻す: -n(t)\n5. スピーカーで再生\n\n騒音 + 逆位相音 = n(t) + (-n(t)) = 0\n\n実際には適応フィルタ（LMS等）を使い、\nリアルタイムで最適なキャンセル信号を生成します。',
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
      title: 'スペクトルサブトラクション',
      content:
        '音声からノイズを除去する古典的手法:\n\n1. ノイズのみの区間（無音部分）のスペクトル |N(ω)|² を推定\n2. ノイズ混入信号のスペクトル |Y(ω)|² を計算\n3. 差分: |S(ω)|² ≈ |Y(ω)|² - α|N(ω)|²\n4. 位相はそのまま使い逆FFT\n\nα はオーバーサブトラクション係数（通常 1〜4）。\n大きすぎると音声も劣化する。\n\nこの手法は携帯電話のノイズ低減に使われています。',
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
      content: 'ノイズキャンセリングについて考えてみましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'アクティブノイズキャンセリングが最も効果的なのはどんな騒音？',
        options: [
          { id: 'a', label: '突発的な衝撃音', correct: false },
          { id: 'b', label: '低周波の定常的な騒音', correct: true },
          { id: 'c', label: '高周波のランダムノイズ', correct: false },
          { id: 'd', label: '人の話し声', correct: false },
        ],
        explanation:
          'ANCは低周波の定常ノイズ（エンジン音、空調音）に最も効果的です。低周波は波長が長く予測しやすい一方、高周波や突発音は遅延の問題で打ち消しが困難です。',
      },
    },
    {
      id: 'alternate',
      title: 'ウィーナーフィルタ',
      content:
        '最適なノイズ除去フィルタ（ウィーナーフィルタ）:\n\nH(ω) = |S(ω)|² / (|S(ω)|² + |N(ω)|²)\n\nSNR が高い周波数: H(ω) ≈ 1（そのまま通す）\nSNR が低い周波数: H(ω) ≈ 0（カットする）\n\nこれは平均二乗誤差を最小にする最適フィルタです。\n\n信号とノイズのスペクトル密度の比（SNR）に基づいて\n各周波数での最適な重みを決定します。',
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
      title: 'まとめ：ノイズキャンセリング',
      content:
        'フーリエ変換による周波数分析がノイズ除去の基盤です。\n\nノイズレベルとフィルタ強度を調整して効果を確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'noiseLevel', min: 0, max: 1, step: 0.05, initial: 0.3 },
          { name: 'filterType', min: 0, max: 2, step: 1, initial: 0 },
        ],
      },
    },
  ],
};
