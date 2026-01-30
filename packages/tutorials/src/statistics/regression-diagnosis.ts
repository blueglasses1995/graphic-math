import { Tutorial } from '../types';

export const regressionDiagnosisTutorial: Tutorial = {
  id: 'regression-diagnosis',
  title: '回帰分析の診断',
  description: '回帰モデルの妥当性を残差分析で確認する方法を学ぶ',
  category: 'statistics',
  steps: [
    {
      id: 'hook',
      title: '直線を引いたら終わり？',
      content:
        '回帰直線を引くことはできました。でもそれで終わりではありません。\n\nその直線は「信頼できるモデル」でしょうか？\n\n残差（予測と実際の差）を分析することで、モデルの良し悪しを診断できます。',
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
      title: '触ってみよう',
      content:
        '残差プロットを観察しましょう。\n\nデータのパターンを変えると残差にどんなパターンが現れるか試してください。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '残差プロットの見方',
      content:
        '良いモデルの残差プロット:\n・残差がランダムに散らばっている\n・パターンが見えない\n・分散が一定\n\n悪いモデルの残差プロット:\n・U字型やカーブが見える → 非線形な関係がある\n・扇形に広がる → 分散が一定でない（不等分散）\n・残差に自己相関がある → 時系列データの問題',
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
      title: '回帰の仮定',
      content:
        '線形回帰が有効であるための仮定:\n\n1. 線形性: XとYの関係が直線的\n2. 独立性: 残差が互いに独立\n3. 等分散性: 残差の分散が一定\n4. 正規性: 残差が正規分布に従う\n\nこれらの仮定が破れていると、推定や検定の結果が信頼できなくなります。',
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
        '残差プロットにU字型のパターンが見えたとき、何を意味しますか？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '残差プロットにU字型パターンがあるとき、何が問題？',
        options: [
          { id: 'a', label: '外れ値がある', correct: false },
          { id: 'b', label: '直線モデルでは不十分（非線形性）', correct: true },
          { id: 'c', label: 'サンプルサイズが小さい', correct: false },
          { id: 'd', label: '問題はない', correct: false },
        ],
        explanation:
          '正解は「直線モデルでは不十分」です。\n\nU字型パターンは、XとYの関係が直線ではなく曲線であることを示しています。\n\n多項式回帰や変数変換（対数など）を検討する必要があります。',
      },
    },
    {
      id: 'alternate',
      title: '別の見方：影響力のある点',
      content:
        '一つのデータ点が回帰直線を大きく動かすことがあります。\n\nこれを「影響力のある点」（influential point）と呼びます。\n\n特にXの値が極端に大きい/小さいデータ点（てこ比の高い点）は要注意です。\n\nクックの距離などの指標で影響力を数値化できます。\n\nその点を除外して分析しても結果が大きく変わらないか確認しましょう。',
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
      title: 'まとめ',
      content:
        '回帰分析の診断は「モデルが適切か」を確認する重要なステップです。\n\n残差プロットで:\n・パターンがないか（線形性）\n・分散が一定か（等分散性）\n・正規分布に従うか（正規性）\nを確認します。\n\n影響力のある点にも注意しましょう。\n\n次は統計学全体のまとめです。',
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
