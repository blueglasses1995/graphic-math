import { Vector3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const word2vecIntroTutorial: Tutorial = {
  id: 'word2vec-intro',
  title: 'Word2Vec入門',
  description: '単語をベクトルとして表現するWord2Vecの仕組みを線形代数的に理解する',
  category: 'linear-algebra',
  steps: [
    {
      id: 'hook',
      title: '王様 - 男 + 女 = 女王',
      content:
        '「king」−「man」+「woman」≈「queen」\n\n' +
        'この有名な式は、単語がベクトルとして表現され、\n' +
        'ベクトルの加減算が意味の演算に対応することを示しています。\n\n' +
        'Word2Vecは各単語を数百次元のベクトルに変換し、\n' +
        '意味の近い単語が近くに配置されるようにします。\n\n' +
        'これは自然言語処理の革命的手法であり、\n' +
        '線形代数が言語理解の基盤を提供しています。',
      sceneConfig: { showGrid: true, showAxes: true, vectors: [{ id: 'v1', vector: new Vector3(1, 0, 0), color: '#ff5722', label: 'e₁' }, { id: 'v2', vector: new Vector3(0, 1, 0), color: '#4caf50', label: 'e₂' }], cameraPosition: [0, 0, 5] },
      customScene: 'word2vec-intro-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '単語ベクトルの空間を体感',
      content:
        '各単語は300次元（などの）ベクトルで表現されます。\n\n' +
        '類似度はコサイン類似度で測ります：\n' +
        'cos(θ) = (u · v) / (|u| |v|)\n\n' +
        '近い単語の例（cosine similarity > 0.7）：\n' +
        '「犬」と「猫」→ 0.80\n' +
        '「東京」と「日本」→ 0.75\n' +
        '「走る」と「歩く」→ 0.72\n\n' +
        '遠い単語（cosine similarity ≈ 0）：\n' +
        '「犬」と「数学」→ 0.05',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'word2vec-intro-interactive',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'Word2Vecの学習方法',
      content:
        'Word2Vecには2つのモデルがあります：\n\n' +
        'Skip-gram：中心語から周辺語を予測\n' +
        '「猫が___で寝ている」→「窓辺」を予測\n\n' +
        'CBOW：周辺語から中心語を予測\n' +
        '「___が窓辺で寝ている」→「猫」を予測\n\n' +
        'どちらもニューラルネット（行列演算）で学習：\n' +
        '入力 × W（語彙×次元）→ 中間表現\n' +
        '中間表現 × W\'（次元×語彙）→ 出力確率\n\n' +
        '学習後のWの各行が単語ベクトルになります。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: 'アナロジーと線形構造',
      content:
        '単語ベクトル空間には驚くべき線形構造があります。\n\n' +
        '「国→首都」の関係ベクトル：\n' +
        'v(東京) - v(日本) ≈ v(パリ) - v(フランス)\n\n' +
        '「時制」の関係ベクトル：\n' +
        'v(walked) - v(walk) ≈ v(swam) - v(swim)\n\n' +
        'これは高次元空間での方向が意味関係を符号化していることを示します。\n\n' +
        '線形代数の視点では、意味関係が\n' +
        'ベクトル空間の平行移動として表現されているのです。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：Word2Vec',
      content: 'Word2Vecの基本を確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '2つの単語ベクトルの類似度を測るのに最もよく使われるのは？',
        options: [
          { id: 'a', label: 'ユークリッド距離', correct: false },
          { id: 'b', label: 'マンハッタン距離', correct: false },
          { id: 'c', label: 'コサイン類似度', correct: true },
          { id: 'd', label: 'ハミング距離', correct: false },
        ],
        explanation:
          'コサイン類似度 cos(θ) = (u·v)/(|u||v|) は単語ベクトルの方向の類似性を測ります。大きさではなく方向が意味を表すため、コサイン類似度が適しています。',
      },
    },
    {
      id: 'alternate',
      title: 'GloVeと行列分解',
      content:
        'GloVe（Global Vectors）は単語共起行列を分解する手法です。\n\n' +
        '単語の共起行列 X（どの単語がどの単語と一緒に現れるか）に対し\n' +
        'X ≈ WW^T + bias\n' +
        'と行列分解を行います。\n\n' +
        'Word2Vecが予測ベースなのに対し、\n' +
        'GloVeはカウントベース+行列分解です。\n\n' +
        '両者は理論的に同等であることが示されており、\n' +
        '「単語の意味を捉える」という同じ目標に\n' +
        '異なる線形代数的アプローチで到達しています。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：Word2Vec入門',
      content:
        'この章で学んだことを整理しましょう。\n\n' +
        '1. Word2Vecは単語を高次元ベクトルに変換\n' +
        '2. コサイン類似度で単語の類似性を測定\n' +
        '3. ベクトル演算が意味の演算に対応\n' +
        '4. Skip-gram/CBOWモデルで行列を学習\n' +
        '5. GloVeは共起行列の分解として理解できる\n\n' +
        '自然言語の意味をベクトル空間で表現する革命的手法です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      customScene: 'word2vec-intro-summary',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
