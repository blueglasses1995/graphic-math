import { Vector3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const renderingPipelineTutorial: Tutorial = {
  id: 'rendering-pipeline',
  title: '3Dレンダリングパイプライン',
  description: '3Dグラフィックスの描画パイプラインにおける行列変換の役割を学ぶ',
  category: 'linear-algebra',
  steps: [
    {
      id: 'hook',
      title: '3Dゲームの裏側は行列演算',
      content:
        '3Dゲームの1フレームの描画で何が起きているか？\n\n' +
        '1. モデル変換：オブジェクトをワールド座標に配置\n' +
        '2. ビュー変換：カメラ視点に変換\n' +
        '3. 射影変換：3Dを2Dスクリーンに射影\n\n' +
        'これらすべてが4×4行列の掛け算です！\n\n' +
        '毎秒60フレーム、数百万の頂点に対して\n' +
        '行列変換が適用されています。',
      sceneConfig: { showGrid: true, showAxes: true, vectors: [{ id: 'v1', vector: new Vector3(1, 0, 0), color: '#ff5722', label: 'e₁' }, { id: 'v2', vector: new Vector3(0, 1, 0), color: '#4caf50', label: 'e₂' }], cameraPosition: [0, 0, 5] },
      customScene: 'rendering-pipeline-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: 'パイプラインを体感',
      content:
        '最終的な頂点位置は行列の積で計算されます：\n\n' +
        'v_clip = P × V × M × v_local\n\n' +
        'M（Model行列）：オブジェクトの位置・回転・スケール\n' +
        'V（View行列）：カメラの位置と向き\n' +
        'P（Projection行列）：透視投影 or 平行投影\n\n' +
        'MVP行列 = P × V × M を事前計算すれば\n' +
        '各頂点は1回の行列積で変換できます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'rendering-pipeline-interactive',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '同次座標と4×4行列',
      content:
        '3D座標 (x,y,z) を同次座標 (x,y,z,1) に拡張すると\n' +
        '平行移動も行列積で表現できます。\n\n' +
        '平行移動：\n' +
        '[[1,0,0,tx],[0,1,0,ty],[0,0,1,tz],[0,0,0,1]]\n\n' +
        '回転（Z軸）：\n' +
        '[[cos,-sin,0,0],[sin,cos,0,0],[0,0,1,0],[0,0,0,1]]\n\n' +
        'スケール：\n' +
        '[[sx,0,0,0],[0,sy,0,0],[0,0,sz,0],[0,0,0,1]]\n\n' +
        '3×3行列では平行移動が表現できませんが、\n' +
        '4×4同次座標なら全ての変換を統一的に扱えます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '透視投影行列',
      content:
        '透視投影は「遠くのものが小さく見える」効果を作ります。\n\n' +
        '投影後の座標：x\' = x·f/z, y\' = y·f/z\n' +
        'f：焦点距離、z：奥行き\n\n' +
        'これを4×4行列で表現すると同次座標のw成分に\n' +
        'zの情報が入り、最後にw除算（透視除算）を行います。\n\n' +
        'P = [[f/aspect,0,0,0],[0,f,0,0],\n' +
        '     [0,0,(far+near)/(near-far),-1],\n' +
        '     [0,0,2·far·near/(near-far),0]]\n\n' +
        'この非線形な「除算」を行列+除算に分解するのが\n' +
        '同次座標の巧みなトリックです。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：3Dレンダリング',
      content: 'レンダリングパイプラインの理解を確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '3Dレンダリングで同次座標（4次元）を使う主な理由は何ですか？',
        options: [
          { id: 'a', label: '計算を遅くするため', correct: false },
          { id: 'b', label: '平行移動を行列積で表現するため', correct: true },
          { id: 'c', label: '色情報を格納するため', correct: false },
          { id: 'd', label: 'テクスチャを扱うため', correct: false },
        ],
        explanation:
          '3×3行列では回転とスケールは表現できますが平行移動は表現できません。4×4同次座標を使うことで、全ての幾何変換を行列積として統一的に扱えます。',
      },
    },
    {
      id: 'alternate',
      title: '法線の変換',
      content:
        '頂点の法線ベクトルは頂点と同じ行列で変換すると\n' +
        '正しくない方向を向いてしまいます。\n\n' +
        '正しい法線の変換行列は (M⁻¹)^T です。\n\n' +
        '理由：法線 n と接ベクトル t は n·t = 0 を満たす必要があり、\n' +
        'Mtで変換されたtに対して(M⁻¹)^T nなら\n' +
        '((M⁻¹)^T n)·(Mt) = n^T M⁻¹ Mt = n^T t = 0 ✓\n\n' +
        '均一スケーリングの場合は M でもOKですが、\n' +
        '非均一スケーリングでは (M⁻¹)^T が必須です。\n' +
        '線形代数の知識がシェーダプログラミングに直結します。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：3Dレンダリングパイプライン',
      content:
        'この章で学んだことを整理しましょう。\n\n' +
        '1. 3D描画はMVP行列の連鎖的な適用\n' +
        '2. 同次座標で平行移動も行列積に統一\n' +
        '3. 透視投影は行列+透視除算\n' +
        '4. 法線は(M⁻¹)^Tで変換\n' +
        '5. GPUは毎秒数十億の行列演算を実行\n\n' +
        '3Dグラフィックスは線形代数の最も視覚的な応用です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 6] },
      customScene: 'rendering-pipeline-summary',
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
