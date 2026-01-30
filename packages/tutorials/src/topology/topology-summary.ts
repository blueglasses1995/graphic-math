import { Tutorial } from '../types';

export const topologySummaryTutorial: Tutorial = {
  id: 'topology-summary',
  title: '位相のまとめ',
  description: '位相幾何学の基礎概念を振り返り、全体像を把握する',
  category: 'topology',
  steps: [
    {
      id: 'hook',
      title: '位相の全体像',
      content:
        '開集合→位相空間→連続写像→同相→不変量。これまで学んだ概念が1本の線でつながるアニメーションです。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-summary-anim',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう',
      content:
        '概念マップをクリックして、各トピックの要点を確認しましょう。関連する概念同士がどうつながるか探ってください。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-summary-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '基礎の3本柱',
      content:
        '(1) 開集合と位相空間：形を語る枠組み。(2) 連続写像と同相：形の「同じさ」の定義。(3) 不変量（種数、オイラー標数、基本群）：形を区別する道具。',
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
      id: 'example-2',
      title: '位相的性質の一覧',
      content:
        '連結性：ひとつながりか。コンパクト性：有限で覆えるか。ハウスドルフ性：点を分離できるか。これらはすべて同相写像で保たれる位相的性質です。',
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
      id: 'predict',
      title: '総合クイズ',
      content:
        'コーヒーカップとドーナツが同相な理由は？',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'コーヒーカップ≅ドーナツの理由は？',
        options: [
          { id: 'a', label: '穴が1つずつ（種数が同じ）', correct: true },
          { id: 'b', label: '同じ体積だから', correct: false },
          { id: 'c', label: '同じ表面積だから', correct: false },
          { id: 'd', label: '同じ材質だから', correct: false },
        ],
        explanation:
          'どちらも種数1（穴が1つ）の閉曲面です。体積や面積は位相的性質ではありません。取っ手の穴がドーナツの穴に対応します。',
      },
    },
    {
      id: 'alternate',
      title: '位相の哲学',
      content:
        '位相幾何学は「本質」の学問です。細かい形状やサイズを無視して、本当に大事な構造だけを抽出する。この発想はデータ分析や物理学でも威力を発揮しています。',
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
        '位相幾何学は「切らず・貼らず変形しても変わらない性質」を研究する分野。\n\n学んだこと：\n- 開集合・閉集合・近傍\n- 位相空間・連続写像・同相\n- 連結性・コンパクト性・ハウスドルフ性\n- 種数・オイラー標数・基本群\n- メビウスの帯・クラインの壺\n\n概念マップを探索しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'topology-summary-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
