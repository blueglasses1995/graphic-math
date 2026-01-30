# 世界の数学教育手法 調査レポート

## 調査日: 2026-01-30

---

## 目次

1. [三角関数の教え方](#三角関数の教え方)
2. [線形代数の教え方](#線形代数の教え方)
3. [教材設計テンプレート v4](#教材設計テンプレート-v4)
4. [単元構成案](#単元構成案)

---

## 三角関数の教え方

### 1. 3Blue1Brown (Grant Sanderson)

**手法:** Visualization-first discovery（視覚化優先の発見型学習）

- sin/cosの導入: 「半径1の円の上を歩く。高さがsin、横の距離がcos」
- アニメーション: Manimで制作。連続的な変換で関係性をリアルタイムに見せる
- trig微分: 代数なしで、単位円上の幾何学的推論のみでd/dx(sin x) = cos xを導出
- 哲学: 「公式を述べる」のではなく「発見させる」

**採用ポイント:** 単位円上の点が移動する同時にsinグラフが描かれるアニメーション。公式より先に動きを見せる。

### 2. Desmos

**手法:** パラメータ操作による即時フィードバック

- スライダーで振幅・周期・位相を操作→グラフが即座に変化
- 「Match My Trig Graph」: 目標グラフに自分の式を合わせるパズル
- 研究結果: グラフ解釈・変換タスクで有意に高い成績

**採用ポイント:** 「このグラフに合わせろ」チャレンジモード。パラメータの意味を体験で理解。

### 3. Khan Academy

**手法:** 段階的カリキュラム + 習熟度ベース

- 順序: 直角三角形 → SOH-CAH-TOA → 単位円 → グラフ → 恒等式
- 練習問題: 280問以上、即時フィードバック
- 2024年研究: 直接指導と同等の効果

**採用ポイント:** 明確な学習パス。各段階で十分な練習を提供。

### 4. Mathigon

**手法:** ナラティブ型インタラクティブ教科書

- 動機付けの質問から始める: 「三角形の3辺がわかったら角度はどう求める？」
- 歴史的文脈: インドの大三角測量、コンピュータグラフィックス
- インタラクティブ図: テキスト内に埋め込み、操作して発見

**採用ポイント:** 各概念を「解きたい問題」として提示。「あのビルの高さは？」→ tan の必要性。

### 5. GeoGebra

**手法:** 動的幾何学構成

- 「Trace ON」技法: 単位円上の点をドラッグ → 軌跡がsinグラフを描く
- 研究結果: 三角関数グラフの学習で従来手法より統計的に有意に優れる
- 複数表現の同時提示: 周期性の理解を促進

**採用ポイント:** ドラッグ→軌跡の手法は研究で最も検証されたインタラクティブ技法。必ず採用。

### 6. Brilliant.org

**手法:** 問題先行型（Problem-first）

- 概念を教える前に問題を出す。「生産的な混乱」→「アハ体験」
- 応用: 音波の操作、極座標グラフによるアートデザイン

**採用ポイント:** 説明前にチャレンジを出す設計。「なぜこのスピーカーはこの波形を出す？」

### 7. Better Explained (Kalid Azad)

**手法:** アナロジー優先の概念再構成

- **ドーム/壁/天井の比喩**: sin = ドーム内のあなたの身長、cos = 地面に沿った距離
- **「sinとcosはパーセンテージ」**: sin(30°) = 斜辺の50%。0~100%の範囲
- ピタゴラスの関係が視覚化すると「見るだけでわかる」

**採用ポイント:** 「パーセンテージ」フレーミング。sin(30°)=0.5 → 「斜辺の半分」。

### 8. 日本の数学教育

**特徴:**
- 高校: 数学I（三角比）→ 数学II（三角関数）→ 数学III（微積との統合）
- スパイラル: 同じトピックを深度を増しながら再訪
- 教科書: 薄くて安い、本質のみ
- 40%の生徒が数学IIを履修

**採用ポイント:** 三角関数を孤立させない。代数・幾何・微積との接続を明示。

### 9. 身体性認知（Embodied Cognition）研究

**重要研究: 両手ユニットサークル実験 (Shvarts & van Helden, 2021)**
- 左手で単位円をなぞり、右手でsinグラフをなぞる
- 身体的協調を通じて円運動と波の関係を体感
- 「新しい概念を理解するには、まずその概念を表現する新しい動き方を学ぶ必要がある」

**タブレット実装:** 感覚運動協調を促進するタブレットベースの体験が三角関数の概念化を有意に向上。

**注意:** 身体的関与が多ければ良いわけではない。過度な介入は認知負荷を増大。核心概念に的を絞る。

**採用ポイント:** 2パネル操作: 左で円をドラッグ、右でグラフが構築。タッチ操作 = 身体的認知。

### 10. シンガポール数学

**手法:** CPA (Concrete-Pictorial-Abstract) 進行

- 具体物 → 図 → 記号の順。Jerome Brunerの理論に基づく
- PISA 2009年以降、数学で世界1-2位
- 各授業はクラスアクティビティ（発見）で始まる
- 習熟ベース: 理解するまで先に進まない

**採用ポイント:** 各概念で「具体→図→数式」の3段階を必ず踏む。

---

## 学生の典型的な誤解（三角関数）

1. **sin/cosとx/y座標の混同**: sinがx座標だと思う（最も持続する誤解）
2. **手続きの断絶**: 直角三角形の方法と公式を別物として理解
3. **過度の一般化**: sin(A+B) = sin(A) + sin(B) と誤る
4. **表現の断絶**: 直角三角形・単位円・波グラフを3つの無関係なものと捉える
5. **SOH-CAH-TOAへの依存**: 暗記はできるが非標準問題に応用できない

**根本原因:** 教え方が原因。ハンズオン・帰納的・操作的・デジタルソフトウェア手法で一貫して誤解が減少。

---

## 線形代数の教え方

### 1. 3Blue1Brown "Essence of Linear Algebra"（ゴールドスタンダード）

**手法:** Visualization-first storytelling

**トピック順:**
1. ベクトルとは
2. 線形結合、スパン、基底ベクトル
3. 線形変換と行列
4. 行列の積 = 変換の合成
5. 3D線形変換
6. 行列式
7. 逆行列、列空間、零空間
8. 非正方行列
9. ドット積と双対性
10. クロス積
11. 基底の変換
12. 固有値と固有ベクトル
13. 抽象ベクトル空間

**行列の導入:** 行列 = 「基底ベクトルの変換後の位置」。列がi-hat, j-hatの新しい位置。計算は幾何から導出。

### 2. Interactive Linear Algebra (Georgia Tech)

- 代数と幾何を常にペアで提示
- WebGL/MathBoxによるインタラクティブデモ
- Georgia Tech, Duke, UBCで使用（無料・オープンソース）

### 3. Immersive Linear Algebra

- 「具体例が先、形式的数学が後」
- HTML5/WebGLの完全インタラクティブ3D図
- 説明前にインタラクティブ図で探索させる

### 4. MIT OpenCourseWare (Gilbert Strang)

- 第1講義: 「線形方程式の幾何学」（計算ではなく図形から）
- 4つの基本部分空間のフレームワーク
- 「考えながら話す」教育法

### 5. Better Explained (Kalid Azad)

- 行列 = 「他のスプレッドシートを変換するスプレッドシート」
- 行列式 = 面積/体積のスケーリング係数
- 固有ベクトル = 「回転する地球の軸」（方向が変わらない唯一の方向）

### 6. "The Art of Linear Algebra" (平鍋健児)

- Gilbert Strangの教科書を視覚マップ化
- 5つの行列分解をビジュアルパターンとして表示
- Strang本人が推薦、SIAM出版(2023)

---

## 学生の典型的な誤解（線形代数）

1. **「行列は数の格子」**: 幾何学的意味を見ないと概念が繋がらない
2. **「行列式は暗記する公式」**: 面積/体積変化として見れないとdet=0の意味がわからない
3. **「固有ベクトルは計算するもの」**: 変換で方向が変わらないベクトルとして理解できない
4. **「連立方程式は代数のみ」**: 各方程式が平面/直線で、解がその交点という幾何的描像を見落とす
5. **手続きの流暢さ ≠ 概念理解**: アルゴリズムは実行できるが何をしているか推論できない

---

## 教材設計テンプレート v4

世界の知見を統合した最終版:

```
■ 単元テンプレート v4

■ わかってもらいたいこと（1文）: _______________
■ レベル: 初級 / 中級
■ メインアニメーション: _______________

ステップ構成:
1. フック: 結論のアニメーションを先に見せる（「これが何を意味するか？」）
2. 触ってみる: ドラッグ/スライダーで自由に触る（説明なし）
3. 最小の具体例: 1つの値で見せる（「パーセンテージ」的に直感的表現）
4. 予測: 「ではXの場合はどうなる？」→ 選択式クイズ
5. 体験: アニメーションで答えを見せる。予測と比較
6. 別の角度: 同じことを物理/日常/別の表現で（振り子、影、音など）
7. まとめ: 1文で結論。よくある誤解を1つ潰す
```

### 設計原則

| 原則 | 出典 |
|------|------|
| 幾何が先、代数が後 | 3Blue1Brown, Strang, Immersive LA |
| 探索が先、説明が後 | Immersive LA, GeoGebra |
| 問題が先、解答が後 | Brilliant, IOLA, 「生産的失敗」研究 |
| 複数表現を常に並列 | Better Explained, Georgia Tech ILA |
| 誤解を明示的に潰す | 教育研究 |

---

## 単元構成案

### 三角関数（8単元）

| # | 単元名 | わかってもらいたいこと | メインアニメーション | インタラクション |
|---|--------|----------------------|---------------------|-----------------|
| 1 | 単位円とは | 半径1の円上の点の座標がsin/cosになる | 点が円上を動き座標が変わる | 点をドラッグして座標の変化を観察 |
| 2 | cosは横の影 | cosθは回転する点のX軸への射影 | X軸への影が伸縮 | スライダーで角度を変えて影の長さを確認 |
| 3 | sinは縦の影 | sinθは回転する点のY軸への射影 | Y軸への影が伸縮 | 同上 |
| 4 | 影の旅：一周の物語 | 円を一周すると影の向きが変わる（±の意味） | 0°→360°連続アニメ + 4象限ハイライト | 「次の象限でcosは正？負？」予測クイズ |
| 5 | cosの波 | cosを関数として見ると波になる | 円の回転 ↔ cosグラフ同期 | 円の点をドラッグ→グラフ対応点が光る |
| 6 | sinの波 | sinを関数として見ると波になる | 同上（sin） | 同上 |
| 7 | 波は繰り返す | 360°で同じ値に戻る（周期性） | 2周分のグラフ + 「合わせろ」チャレンジ | 振幅・周期スライダーでターゲット波形に合わせる |
| 8 | 振り子とsin | 振り子の動きはsinそのもの | 振り子 + sinグラフ同期 | 振り子の長さを変えて周期の変化を観察 |

### 線形代数（同テンプレートで再設計予定）

既存のトピック順は3Blue1Brownと一致しており適切:
1. 基底ベクトル
2. 線形変換
3. 行列の意味
4. 固有値

---

## 参考文献

### 三角関数
- [3Blue1Brown - Trigonometry Fundamentals](https://www.3blue1brown.com/lessons/ldm-trigonometry)
- [Desmos Help - Trigonometry](https://help.desmos.com/hc/en-us/articles/4406029680653-Trigonometry)
- [Desmos Research (ERIC)](https://files.eric.ed.gov/fulltext/EJ1485890.pdf)
- [Khan Academy Trigonometry](https://www.khanacademy.org/math/trigonometry)
- [Mathigon - Triangles and Trigonometry](https://mathigon.org/course/triangles/trigonometry)
- [GeoGebra Study (Cogent Education)](https://www.tandfonline.com/doi/full/10.1080/2331186X.2022.2034240)
- [Brilliant.org Trigonometry](https://brilliant.org/courses/trigonometry/)
- [Better Explained - Intuitive Trigonometry](https://betterexplained.com/articles/intuitive-trigonometry/)
- [Embodied Instrumentation in Trigonometry (Springer)](https://link.springer.com/article/10.1007/s10649-021-10053-0)
- [Singapore Math (Wikipedia)](https://en.wikipedia.org/wiki/Singapore_math)
- [Math Medic - Unit Circle Without Memorization](https://mathmedic.com/blog/teaching-the-unit-circle-without-memorization)
- [PhET Trig Tour](https://phet.colorado.edu/en/simulations/trig-tour)

### 線形代数
- [3Blue1Brown Linear Algebra Topics](https://www.3blue1brown.com/topics/linear-algebra)
- [Interactive Linear Algebra (Georgia Tech)](https://textbooks.math.gatech.edu/ila/)
- [Immersive Linear Algebra](http://immersivemath.com/)
- [MIT OCW 18.06 (Strang)](https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/)
- [Better Explained - Linear Algebra Guide](https://betterexplained.com/articles/linear-algebra-guide/)
- [The Art of Linear Algebra (GitHub)](https://github.com/kenjihiranabe/The-Art-of-Linear-Algebra)
- [IOLA - Inquiry Oriented Linear Algebra](https://iola.math.vt.edu/)
- [Problem-solving before instruction (Instructional Science 2025)](https://link.springer.com/article/10.1007/s11251-025-09709-8)
