import { Tutorial } from '../types';

export const digitalAudioTutorial: Tutorial = {
  id: 'digital-audio',
  title: '音楽のデジタル処理',
  description: 'デジタルオーディオにおけるフーリエ変換の役割を学ぶ',
  category: 'fourier',
  steps: [
    {
      id: 'hook',
      title: 'アナログからデジタルへ',
      content:
        'レコードの溝は連続的な波形ですが、\nCDやストリーミングの音楽はデジタルデータです。\n\nアナログ → デジタル → アナログの変換の裏側には\nサンプリング定理とFFTが隠れています。\n\nMP3はどうやって音楽ファイルを小さくする？',
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
      title: 'ビットレートと音質',
      content:
        'サンプリングレートとビット深度を変えて、音質への影響を確認しましょう。',
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
          { name: 'sampleRate', min: 8000, max: 96000, step: 4000, initial: 44100 },
          { name: 'bitDepth', min: 4, max: 24, step: 4, initial: 16 },
        ],
      },
    },
    {
      id: 'example-1',
      title: 'CD音質の数学',
      content:
        'CDの仕様:\n・サンプリングレート: 44,100Hz\n・ビット深度: 16bit\n・チャンネル: 2（ステレオ）\n\nビットレート: 44100 × 16 × 2 = 1,411,200 bps ≈ 1.4 Mbps\n\n1分の音楽: 1.4M × 60 / 8 = 10.5 MB\n\n3分の曲で約31.5MB。\nMP3（128kbps）なら約2.8MB。約11倍の圧縮。',
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
      title: 'MP3の仕組み',
      content:
        'MP3（MPEG-1 Audio Layer 3）の圧縮:\n\n1. MDCT（修正離散コサイン変換）で周波数成分に分解\n   576サンプルごとに変換\n\n2. 心理音響モデル:\n   ・聴覚マスキング: 大きい音の近くの小さい音は聞こえない\n   ・臨界帯域: 人間の耳の周波数分解能を考慮\n\n3. 聞こえない成分を粗く量子化または削除\n\n4. ハフマン符号化で更に圧縮\n\nフーリエ変換が心理音響モデルの基盤です。',
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
      content: 'デジタルオーディオについて考えてみましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'MP3が音質をほとんど落とさずに圧縮できる理由は？',
        options: [
          { id: 'a', label: '可逆圧縮アルゴリズムが優秀だから', correct: false },
          { id: 'b', label: '人間の耳に聞こえない成分を除去するから', correct: true },
          { id: 'c', label: 'サンプリングレートを下げるから', correct: false },
          { id: 'd', label: 'モノラルに変換するから', correct: false },
        ],
        explanation:
          'MP3は心理音響モデルに基づき、聴覚マスキングにより人間の耳に知覚されない周波数成分を除去・粗く量子化します。フーリエ変換による周波数分析がこれを可能にしています。',
      },
    },
    {
      id: 'alternate',
      title: 'ハイレゾとロスレス',
      content:
        'ハイレゾ音源: 96kHz/24bit や 192kHz/24bit\nCD品質を超える情報量。可聴域外の成分も含む。\n\nロスレス圧縮（FLAC, ALAC）:\n情報を一切失わない圧縮（約50-60%に圧縮）。\n\nOgg Vorbis, AAC, Opus:\nMP3より効率的な非可逆圧縮。\n同じビットレートでMP3より高音質。\n\nOpus（最新）はSTFTベースのCELTと\n線形予測ベースのSILKのハイブリッド。\n低遅延でリアルタイム通信にも対応。',
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
      title: 'まとめ：音楽のデジタル処理',
      content:
        'デジタルオーディオの全段階でフーリエ変換が活躍しています。\n\nサンプリングと量子化のパラメータを調整して影響を確認しましょう。',
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
          { name: 'sampleRate', min: 8000, max: 96000, step: 4000, initial: 44100 },
          { name: 'compressionRatio', min: 1, max: 20, step: 1, initial: 1 },
        ],
      },
    },
  ],
};
