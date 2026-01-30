export interface GlossaryEntry {
  id: string;
  term: string;
  reading?: string; // furigana
  definition: string;
  relatedTerms?: string[]; // IDs of related glossary entries
}

export const glossary: Record<string, GlossaryEntry> = {
  'unit-vector': {
    id: 'unit-vector',
    term: '単位ベクトル',
    definition: '長さ（大きさ）が1のベクトルのこと。方向だけを表すのに使います。例えば i = (1, 0, 0) は長さ1なので単位ベクトルです。',
    relatedTerms: ['basis-vector', 'vector', 'magnitude']
  },
  'basis-vector': {
    id: 'basis-vector',
    term: '基底ベクトル',
    definition: '空間を張るための基本となるベクトルの組のこと。3次元空間では通常3つの基底ベクトル i, j, k を使います。これらは互いに直交し、どのベクトルもこの3つの線形結合で表せます。',
    relatedTerms: ['unit-vector', 'linear-combination', 'span']
  },
  'vector': {
    id: 'vector',
    term: 'ベクトル',
    definition: '大きさと方向を持つ量のこと。座標では (x, y, z) のように数値の組で表します。矢印として描かれることが多いです。',
    relatedTerms: ['unit-vector', 'magnitude']
  },
  'magnitude': {
    id: 'magnitude',
    term: '大きさ（ノルム）',
    definition: 'ベクトルの長さのこと。v = (x, y, z) の大きさは √(x² + y² + z²) で計算します。例: (3, 4, 0) の大きさは √(9+16) = 5 です。',
    relatedTerms: ['vector', 'unit-vector']
  },
  'linear-combination': {
    id: 'linear-combination',
    term: '線形結合',
    definition: '複数のベクトルにそれぞれ係数をかけて足し合わせること。例: 2i + 3j + k = 2(1,0,0) + 3(0,1,0) + (0,0,1) = (2,3,1)',
    relatedTerms: ['basis-vector', 'span']
  },
  'span': {
    id: 'span',
    term: '張る（スパン）',
    definition: 'ベクトルの集合が線形結合で作れるすべてのベクトルの集合のこと。i, j, k は3次元空間全体を張ります。',
    relatedTerms: ['linear-combination', 'basis-vector', 'rank']
  },
  'linear-transform': {
    id: 'linear-transform',
    term: '線形変換',
    definition: '原点を動かさず、直線を直線のまま保つ変換のこと。回転、拡大縮小、せん断などが線形変換です。行列で表現できます。',
    relatedTerms: ['matrix', 'rotation', 'scaling']
  },
  'matrix': {
    id: 'matrix',
    term: '行列',
    definition: '数を長方形に並べたもの。線形変換を数値で表現します。3×3行列は9つの数を持ち、各列が基底ベクトルの変換先を表します。',
    relatedTerms: ['linear-transform', 'determinant', 'eigenvalue']
  },
  'determinant': {
    id: 'determinant',
    term: '行列式',
    definition: '行列に対応する1つの数値。変換による面積（2D）や体積（3D）の拡大率を表します。行列式が0なら、変換で次元が潰れます。',
    relatedTerms: ['matrix', 'rank']
  },
  'eigenvalue': {
    id: 'eigenvalue',
    term: '固有値',
    definition: '行列Aに対して Av = λv を満たすスカラー λ のこと。固有ベクトルが変換で何倍になるかを表します。',
    relatedTerms: ['eigenvector', 'matrix']
  },
  'eigenvector': {
    id: 'eigenvector',
    term: '固有ベクトル',
    definition: '行列Aによる変換で方向が変わらないベクトルのこと。Av = λv を満たす非零ベクトル v です。伸び縮みはしますが、向きは同じです。',
    relatedTerms: ['eigenvalue', 'linear-transform']
  },
  'rotation': {
    id: 'rotation',
    term: '回転',
    definition: 'ある軸を中心にベクトルや図形を回す変換。3次元では回転軸と回転角で定まります。回転行列は行列式が1で、直交行列です。',
    relatedTerms: ['linear-transform', 'matrix']
  },
  'scaling': {
    id: 'scaling',
    term: 'スケーリング（拡大縮小）',
    definition: '各軸方向にベクトルを伸縮させる変換。スケーリング行列は対角成分だけが非零の行列です。例: [[2,0,0],[0,3,0],[0,0,1]] はX軸方向に2倍、Y軸方向に3倍にする変換です。',
    relatedTerms: ['linear-transform', 'matrix']
  },
  'shear': {
    id: 'shear',
    term: 'せん断',
    definition: 'ある方向に対して平行にずらす変換。長方形が平行四辺形になるイメージです。トランプの山を横にずらすような操作です。',
    relatedTerms: ['linear-transform', 'matrix']
  },
  'rank': {
    id: 'rank',
    term: '階数（ランク）',
    definition: '行列の列ベクトルが張る空間の次元数。フルランクなら逆行列が存在し、情報の損失がありません。',
    relatedTerms: ['matrix', 'span', 'determinant']
  },
  'unit-circle': {
    id: 'unit-circle',
    term: '単位円',
    definition: '原点を中心とし、半径が1の円のこと。三角関数の定義の基礎で、円周上の点の座標が (cos θ, sin θ) です。',
    relatedTerms: ['sin', 'cos', 'radian']
  },
  'sin': {
    id: 'sin',
    term: 'sin（サイン、正弦）',
    definition: '単位円上の角度 θ に対応する点のY座標。直角三角形では「対辺 ÷ 斜辺」です。',
    relatedTerms: ['cos', 'tan', 'unit-circle']
  },
  'cos': {
    id: 'cos',
    term: 'cos（コサイン、余弦）',
    definition: '単位円上の角度 θ に対応する点のX座標。直角三角形では「隣辺 ÷ 斜辺」です。',
    relatedTerms: ['sin', 'tan', 'unit-circle']
  },
  'tan': {
    id: 'tan',
    term: 'tan（タンジェント、正接）',
    definition: 'sin θ ÷ cos θ で定義される三角関数。直角三角形では「対辺 ÷ 隣辺」です。cos θ = 0 のとき（90°, 270°など）は定義されません。',
    relatedTerms: ['sin', 'cos']
  },
  'radian': {
    id: 'radian',
    term: 'ラジアン（弧度法）',
    definition: '角度の単位の一つ。円弧の長さが半径と等しくなる角度が1ラジアンです。360° = 2π ラジアン、180° = π ラジアンです。',
    relatedTerms: ['unit-circle']
  },
  'composition': {
    id: 'composition',
    term: '合成（変換の合成）',
    definition: '2つの変換を順番に適用すること。行列では積で表されます。AB は「まずBを適用し、次にAを適用する」という意味です。',
    relatedTerms: ['linear-transform', 'matrix']
  },
  'identity-matrix': {
    id: 'identity-matrix',
    term: '単位行列',
    definition: '対角成分がすべて1、他が0の行列。何も変換しない「何もしない変換」を表します。Iv = v です。',
    relatedTerms: ['matrix']
  },
  'quadrant': {
    id: 'quadrant',
    term: '象限',
    reading: 'しょうげん',
    definition: '座標平面を原点で4つに区切った領域。右上が第1象限（sin+, cos+）、左上が第2象限（sin+, cos−）、左下が第3象限（sin−, cos−）、右下が第4象限（sin−, cos+）です。',
    relatedTerms: ['unit-circle', 'sin', 'cos']
  },
  'periodicity': {
    id: 'periodicity',
    term: '周期性',
    reading: 'しゅうきせい',
    definition: '一定の間隔で同じ値を繰り返す性質。sin と cos は360°（2π）ごとに同じ値に戻ります。sin(θ + 360°) = sin(θ) です。',
    relatedTerms: ['sin', 'cos', 'radian']
  },
  'projection': {
    id: 'projection',
    term: '射影',
    reading: 'しゃえい',
    definition: 'あるベクトルや点を、軸や平面に「影」として落とすこと。単位円上の点のX軸への射影が cos θ、Y軸への射影が sin θ です。',
    relatedTerms: ['unit-circle', 'sin', 'cos', 'vector']
  }
};

export function getGlossaryEntry(id: string): GlossaryEntry | undefined {
  return glossary[id];
}

export function getAllGlossaryEntries(): GlossaryEntry[] {
  return Object.values(glossary);
}
