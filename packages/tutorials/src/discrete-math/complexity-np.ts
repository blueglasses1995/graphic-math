import { Tutorial } from '../types';

export const complexityNpTutorial: Tutorial = {
  id: 'complexity-np',
  title: '計算量クラスNP',
  description: '「検証は簡単だが解くのは難しい」問題のクラスNPを学ぶ',
  category: 'discrete-math',
  steps: [
    {
      id: 'hook',
      title: '解くのと確認するの、どちらが簡単？',
      content:
        'ジグソーパズルを完成させるのは大変ですが、完成したかどうかの確認は簡単です。\n\n数独の解を見つけるのは難しいですが、答えが正しいか検証するのは一瞬です。\n\n「解の検証が簡単な問題」── それがクラス NP です。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'complexity-np-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '解の検証を体験しよう',
      content:
        'NPの正式な定義：\n非決定性チューリングマシンが多項式時間で受理する言語の集合。\n\n等価な定義：\n「証拠（certificate）」が与えられたとき、多項式時間で検証できる問題。\n\n具体例で検証の速さを体験してみましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'complexity-np-interactive',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'ハミルトン閉路問題',
      content:
        '「グラフのすべての頂点をちょうど1回ずつ通る閉路はあるか？」\n\nこの問題はNPに属します：\n・解を見つけるのは難しい（既知の多項式アルゴリズムなし）\n・解が与えられれば検証は簡単（各頂点が1回ずつ含まれるか確認するだけ）\n\nn頂点のグラフでの全探索は O(n!) ── 非現実的です。',
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
      title: 'PとNPの関係',
      content:
        '重要な包含関係：P ⊆ NP\n\n多項式時間で解ける問題は、もちろん多項式時間で検証もできます。\n\n問題は逆が成り立つか：NP ⊆ P？\n\nつまり「検証が簡単な問題は、すべて解くのも簡単か？」\n\nこれが P = NP? 問題の核心です。',
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
      title: 'クイズ：クラスNP',
      content: 'クラスNPの理解を確認しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'NPの「N」は何を意味しますか？',
        options: [
          { id: 'a', label: 'Not（～でない）', correct: false },
          { id: 'b', label: 'Nondeterministic（非決定性）', correct: true },
          { id: 'c', label: 'Nonlinear（非線形）', correct: false },
          { id: 'd', label: 'Natural（自然な）', correct: false },
        ],
        explanation:
          'NPは「Nondeterministic Polynomial time」の略です。非決定性チューリングマシンで多項式時間に解ける問題を指します。',
      },
    },
    {
      id: 'alternate',
      title: 'coNPとは',
      content:
        'coNPはNPの補問題のクラスです。\n\n例：「このグラフにハミルトン閉路がない」\n\n「ある」ことの証明は証拠を示せばよいですが、「ない」ことの証明は容易ではありません。\n\nNP = coNP かどうかも未解決問題です。\nもしP = NPなら NP = coNP も成り立ちます。',
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
      title: 'まとめ：計算量クラスNP',
      content:
        'クラスNPは「解の検証が多項式時間で可能な問題」です。\n\n・非決定性チューリングマシンが多項式時間で受理\n・P ⊆ NP は確実\n・P = NP? は未解決（100万ドルの懸賞問題）\n\n多くの実用的に重要な問題がNPに属しており、効率的に解けるかどうかは大きな問題です。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'complexity-np-summary',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
