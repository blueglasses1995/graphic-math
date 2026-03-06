/**
 * ε-δ論法の用語集データベース
 */

export interface GlossaryTerm {
  id: string;
  term: string;
  reading?: string;
  shortDefinition: string;
  detailedExplanation: string;
  relatedToEpsilonDelta: string;
  historicalContext?: string;
  examples?: string[];
}

export interface PersonProfile {
  id: string;
  name: string;
  nameEn: string;
  lifespan: string;
  nationality: string;
  portrait: string; // emoji
  occupation: string;
  background: string[];
  mainAchievements: string[];
  epsilonDeltaContribution: string;
  anecdotes?: string[];
  famousQuote?: string;
}

export const glossaryTerms: Record<string, GlossaryTerm> = {
  infinitesimal: {
    id: 'infinitesimal',
    term: '無限小',
    reading: 'むげんしょう',
    shortDefinition: '限りなくゼロに近いが、ゼロではない量',
    detailedExplanation:
      'ニュートンとライプニッツが微積分で使った概念。Δx を「限りなく小さく」していくときの、その量のこと。しかし「限りなく」が曖昧で、数学的に定義できないことがバークリーに批判された。',
    relatedToEpsilonDelta:
      'ε-δ論法は、この曖昧な「無限小」を使わずに極限を定義する方法。εとδという有限の正の数だけを使う。',
    historicalContext:
      '17世紀の微積分では中心的概念だったが、19世紀にε-δ論法によって不要になった。ただし20世紀に「超準解析」として復活。',
    examples: [
      'dx（微分の記号）は無限小を表すが、ε-δでは不要',
      '∫ の中の dx も、実はリーマン和の極限で定義される',
    ],
  },
  fluxion: {
    id: 'fluxion',
    term: '流率',
    reading: 'りゅうりつ',
    shortDefinition: 'ニュートンが使った微分の用語',
    detailedExplanation:
      'ニュートンは微分を「流率（fluxion）」と呼んだ。時間とともに「流れる」量の変化率という意味。物理的直感に基づいた命名。',
    relatedToEpsilonDelta:
      'ニュートンの流率は時間的概念。ε-δ論法は時間を排除し、静的な論理命題として定義する。',
    historicalContext:
      'ニュートンの用語。ライプニッツは「微分（differential）」という用語を使った。最終的にライプニッツの用語が標準になった。',
  },
  limit: {
    id: 'limit',
    term: '極限',
    reading: 'きょくげん',
    shortDefinition: '変数が特定の値に限りなく近づくときの、関数の値',
    detailedExplanation:
      '関数f(x)において、xがある値aに近づくとき、f(x)がある値Lに近づくなら、Lを極限値という。ニュートンは直感的に使ったが、ワイエルシュトラスがε-δで厳密に定義した。',
    relatedToEpsilonDelta:
      'ε-δ論法は極限の厳密な定義そのもの。「近づく」という曖昧な動詞を、εとδという数値で置き換える。',
    examples: [
      'lim[x→3] 2x = 6',
      'lim[h→0] (f(x+h)-f(x))/h = f\'(x)（微分の定義）',
    ],
  },
  dedekindCut: {
    id: 'dedekindCut',
    term: 'デデキントの切断',
    reading: 'でできんとのせつだん',
    shortDefinition: '実数を有理数の集合の「切断」として定義する方法',
    detailedExplanation:
      '有理数全体を2つの集合A, Bに分け、Aの全ての要素がBの全ての要素より小さいとき、その境界が実数を定義する。例えば√2は、「2乗して2未満になる有理数」と「2以上になる有理数」の境界。',
    relatedToEpsilonDelta:
      'この定義により実数が厳密になり、「任意のε>0」という表現が意味を持つようになった。実数の完備性が保証される。',
    historicalContext:
      '1872年、デデキントが発表。同時期にカントールも別の方法（コーシー列）で実数を定義した。',
  },
  neighborhood: {
    id: 'neighborhood',
    term: '近傍',
    reading: 'きんぼう',
    shortDefinition: 'ある点の「周辺」を表す集合',
    detailedExplanation:
      '点aのδ近傍とは、N_δ(a) = {x : |x-a| < δ} という集合。aからの距離がδより小さい全ての点の集合。',
    relatedToEpsilonDelta:
      'ε-δ論法の核心。「|x-a| < δ」という条件を、集合論を使って N_δ(a) と表現できる。「範囲内の全てのx」を一言で表せる。',
    examples: [
      'N_0.5(3) = {x : |x-3| < 0.5} = (2.5, 3.5)',
      'a自身を除いた削除近傍: N_δ(a) \\ {a}',
    ],
  },
  quantifier: {
    id: 'quantifier',
    term: '量化子',
    reading: 'りょうかし',
    shortDefinition: '「全ての」(∀)や「ある」(∃)を表す論理記号',
    detailedExplanation:
      '∀（全称量化子）は「任意の」「全ての」、∃（存在量化子）は「ある」「存在する」を表す。1879年、フレーゲが『概念記法』で形式化。',
    relatedToEpsilonDelta:
      'ε-δ論法の「∀ε>0, ∃δ>0」の順序が本質。εを見てからδを選べる（後出しジャンケン）を形式化。時間概念を排除し、静的な論理命題にする。',
    historicalContext:
      'ニュートンの時代には存在しなかった。フレーゲ（1879年）の発明だが、ワイエルシュトラス（1861年）は概念を先取りしていた。',
    examples: [
      '∀ε∃δ: どんなεでも、それに対応するδが存在',
      '∃δ∀ε: あるδで、どんなεにも対応（これは間違い）',
    ],
  },
  berkeleyGhosts: {
    id: 'berkeleyGhosts',
    term: '消えゆく量の亡霊',
    reading: 'きえゆくりょうのぼうれい',
    shortDefinition: 'バークリーがニュートンの無限小を批判した言葉',
    detailedExplanation:
      '1734年、バークリー司教が著書『The Analyst』で使った表現。Δxが「最初はゼロでない（割り算のため）」「最後はゼロ（極限のため）」と都合よく扱われることを「亡霊のように消えたり現れたりする」と皮肉った。',
    relatedToEpsilonDelta:
      'この批判がε-δ論法誕生の遠因。ε-δでは、εもδも常に正の数（ゼロではない）として扱い、「消える」必要がない。',
    historicalContext:
      'バークリーは哲学者・司教で、数学者ではない。しかし論理的矛盾を鋭く指摘し、数学界に衝撃を与えた。',
  },
  completeness: {
    id: 'completeness',
    term: '完備性',
    reading: 'かんびせい',
    shortDefinition: '数直線に「隙間」がないという性質',
    detailedExplanation:
      '実数の重要な性質。有理数には√2のような「隙間」があるが、実数には隙間がない。どんな収束する数列も、その極限が実数として存在する。',
    relatedToEpsilonDelta:
      '完備性がないと「限りなく近づく先」が存在するとは限らない。実数の完備性により、ε-δ論法で定義される極限Lが実数として存在することが保証される。',
    examples: [
      '√2 は有理数の隙間にあるが、実数としては存在',
      'π, e なども実数の完備性により存在が保証される',
    ],
  },
};

export const personProfiles: Record<string, PersonProfile> = {
  galileo: {
    id: 'galileo',
    name: 'ガリレオ・ガリレイ',
    nameEn: 'Galileo Galilei',
    lifespan: '1564-1642',
    nationality: 'イタリア',
    portrait: '🔭',
    occupation: '物理学者、天文学者、数学者',
    background: [
      'ピサ大学で医学を学ぶが、数学に転向',
      '振り子の等時性を発見（教会で揺れるランプを見て）',
      'ピサの斜塔での落下実験（伝説的）',
      '望遠鏡を改良し、木星の衛星を発見',
      '地動説を支持し、宗教裁判で有罪',
      '晩年は軟禁状態で研究を続けた',
    ],
    mainAchievements: [
      '落体の法則：落下速度は時間に比例',
      '慣性の法則（ニュートンの第1法則の原型）',
      '望遠鏡による天体観測',
      '「それでも地球は動く」（伝説）',
    ],
    epsilonDeltaContribution:
      '瞬間速度という概念を提起。「今この瞬間の速さ」を測る問題が、200年後のε-δ論法につながる。',
    anecdotes: [
      '宗教裁判の後、「それでも地球は動く」とつぶやいたとされるが、史実かは不明',
      '晩年は目が見えなくなったが、口述で研究を続けた',
      '軟禁中に書いた『新科学対話』が、ニュートンに影響を与えた',
    ],
    famousQuote:
      '「自然という書物は数学の言葉で書かれている」',
  },
  newton: {
    id: 'newton',
    name: 'アイザック・ニュートン',
    nameEn: 'Isaac Newton',
    lifespan: '1643-1727',
    nationality: 'イギリス',
    portrait: '🍎',
    occupation: '物理学者、数学者、天文学者',
    background: [
      'ケンブリッジ大学トリニティ・カレッジ',
      '1665年（22歳）ペスト流行で田舎に避難',
      '「奇跡の年」：微積分、万有引力、光学を発見',
      '1687年『プリンキピア』出版（44歳）',
      '晩年は造幣局長官、国会議員も務めた',
      '生涯独身、極めて内向的な性格',
    ],
    mainAchievements: [
      '微積分の発明（ライプニッツと独立に）',
      '万有引力の法則',
      '運動の3法則',
      '光の粒子説',
      'ニュートン法（数値計算）',
    ],
    epsilonDeltaContribution:
      '微積分を発明したが、「無限小」という曖昧な概念に基づいていた。彼自身もこの基礎の脆弱性を認識していたが、実用性を優先した。この問題が150年後のε-δ論法を生む。',
    anecdotes: [
      'リンゴが落ちるのを見て万有引力を思いついた（伝説）',
      'ライプニッツとの微積分発明の優先権争いで激しく対立',
      '「巨人の肩の上に立った」という謙虚な言葉を残した',
      '実は錬金術にも深く傾倒していた',
    ],
    famousQuote:
      '「私は海辺で遊ぶ子供のようなものだ。真理の大海はまだ発見されないまま、目の前に広がっている」',
  },
  berkeley: {
    id: 'berkeley',
    name: 'ジョージ・バークリー',
    nameEn: 'George Berkeley',
    lifespan: '1685-1753',
    nationality: 'アイルランド',
    portrait: '👨‍⚖️',
    occupation: '哲学者、司教',
    background: [
      'トリニティ・カレッジ・ダブリンで学ぶ',
      '観念論哲学の創始者',
      'クロイン教区の司教',
      '「存在とは知覚されることである」という哲学で有名',
    ],
    mainAchievements: [
      '観念論哲学の体系化',
      '『視覚新論』（1709年）',
      '『The Analyst』（1734年）でニュートンを批判',
      'バークレー（カリフォルニア）の地名の由来',
    ],
    epsilonDeltaContribution:
      '数学者ではないが、ニュートンの微積分の論理的矛盾を鋭く指摘。「消えゆく量の亡霊」という表現で無限小の問題を暴いた。この批判が、100年以上後のε-δ論法の必要性を示した。',
    anecdotes: [
      '数学者を怒らせるために批判したのではなく、宗教的動機だった',
      '「数学者が無限小を信じるなら、神学者が神を信じてもいいだろう」',
      '批判は正しかったが、当時の数学者は答えられず無視した',
    ],
    famousQuote:
      '「無限小は、理性にとって信仰の神秘と同じくらい理解しがたい」',
  },
  cauchy: {
    id: 'cauchy',
    name: 'オーギュスタン=ルイ・コーシー',
    nameEn: 'Augustin-Louis Cauchy',
    lifespan: '1789-1857',
    nationality: 'フランス',
    portrait: '👨‍🏫',
    occupation: '数学者',
    background: [
      'エコール・ポリテクニークで学ぶ',
      '最初は土木技師として働く',
      '1821年、エコール・ポリテクニークの教授に',
      '生涯で800以上の論文を執筆',
      '敬虔なカトリック信者',
    ],
    mainAchievements: [
      '複素解析の基礎を築く',
      '初めて厳密さを重視した解析学の教科書',
      'コーシー列、コーシーの積分定理',
      '連続性、収束の定義',
      'εを使った極限の定義の原型',
    ],
    epsilonDeltaContribution:
      '極限を「与えられたどんな数よりも小さくできる」と定義し、εの概念を導入。ただしδが明示されず、まだ時間的概念が残っていた。ワイエルシュトラスがこれを完成させた。',
    anecdotes: [
      '非常に多作で、論文が多すぎて学会誌が追いつかなかった',
      '政治的信念のため、王政復古時に一時亡命',
      '学生には厳しい教師だったが、数学の厳密性では妥協しなかった',
    ],
    famousQuote:
      '「人間は誤るが、計算は誤らない」',
  },
  dirichlet: {
    id: 'dirichlet',
    name: 'ペーター・グスタフ・ディリクレ',
    nameEn: 'Peter Gustav Lejeune Dirichlet',
    lifespan: '1805-1859',
    nationality: 'ドイツ',
    portrait: '📐',
    occupation: '数学者',
    background: [
      'ドイツ生まれだがフランスで教育を受ける',
      'ガウスの弟子、後継者',
      'ベルリン大学教授',
      'フーリエ解析の発展に貢献',
    ],
    mainAchievements: [
      '関数概念の近代的定義（f: A → B）',
      'ディリクレ関数（不連続だが関数）',
      'ディリクレの原理',
      '素数定理への貢献',
      'フーリエ級数の収束条件',
    ],
    epsilonDeltaContribution:
      '関数を「式」ではなく「対応関係」として定義。これにより、どんな関数でもf(x)として扱え、ε-δ論法での「|f(x)-L|」が意味を持つようになった。',
    anecdotes: [
      'ガウスに「最も深い数学者」と評された',
      '教育者としても優秀で、多くの弟子を育てた',
      '54歳で急死、ガウスの後任としてゲッティンゲン大学教授になった直後だった',
    ],
  },
  dedekind: {
    id: 'dedekind',
    name: 'リヒャルト・デデキント',
    nameEn: 'Richard Dedekind',
    lifespan: '1831-1916',
    nationality: 'ドイツ',
    portrait: '🔢',
    occupation: '数学者',
    background: [
      'ゲッティンゲン大学でガウスに学ぶ（ガウス最後の弟子）',
      'ブラウンシュヴァイク工科大学で50年間教える',
      '生涯独身、静かな研究生活',
      '1858年、授業で連続性を説明できず困惑',
    ],
    mainAchievements: [
      '実数の切断による定義（1872年）',
      'イデアル論（抽象代数学の基礎）',
      '集合論の発展',
      '数学的帰納法の公理化',
    ],
    epsilonDeltaContribution:
      '実数を厳密に定義することで、「任意のε>0」という表現に意味を与えた。有理数の「隙間」を埋め、実数の完備性を保証。これによりε-δ論法の基盤が完成。',
    anecdotes: [
      '84歳まで長生きし、20世紀の数学も見た',
      '非常に慎重な性格で、論文を発表するのに何年もかけた',
      '友人カントールと切断の定義について議論を重ねた',
    ],
    famousQuote:
      '「数とは、人間精神の自由な創造である」',
  },
  cantor: {
    id: 'cantor',
    name: 'ゲオルク・カントール',
    nameEn: 'Georg Cantor',
    lifespan: '1845-1918',
    nationality: 'ドイツ（ロシア生まれ）',
    portrait: '📊',
    occupation: '数学者',
    background: [
      'サンクトペテルブルク生まれ、ドイツで育つ',
      'ベルリン大学でワイエルシュトラスに学ぶ',
      'ハレ大学教授',
      '晩年は精神疾患に苦しんだ',
    ],
    mainAchievements: [
      '集合論の創始',
      '無限の濃度の理論',
      '実数の非可算性の証明',
      '対角線論法',
      'カントール集合（フラクタルの先駆）',
    ],
    epsilonDeltaContribution:
      '集合論を創始し、「範囲内の全てのx」を N_δ(a) = {x : |x-a| < δ} という集合として表現可能にした。無限個の点を一つの数学的対象として扱える。',
    anecdotes: [
      '無限を数学的に扱ったことで、多くの数学者から批判された',
      '「数学の本質は自由にある」と主張',
      'デデキントとは親友で、頻繁に手紙を交わした',
      '集合論は当初「数学の病理」と呼ばれたが、今では基礎',
    ],
    famousQuote:
      '「数学の本質は、その自由にある」',
  },
  frege: {
    id: 'frege',
    name: 'ゴットロープ・フレーゲ',
    nameEn: 'Gottlob Frege',
    lifespan: '1848-1925',
    nationality: 'ドイツ',
    portrait: '🧠',
    occupation: '数学者、論理学者、哲学者',
    background: [
      'イェーナ大学で学び、生涯そこで教える',
      '数学の論理的基礎を研究',
      '生前はほとんど評価されなかった',
      '晩年、ラッセルのパラドックスで挫折',
    ],
    mainAchievements: [
      '記号論理学の創始',
      '量化子 ∀, ∃ の発明',
      '『概念記法』（1879年）',
      '述語論理の体系化',
      '分析哲学の基礎',
    ],
    epsilonDeltaContribution:
      '量化子 ∀, ∃ を形式化し、「任意の」「存在する」を時間概念なしで表現可能にした。∀ε∃δ という順序が後出しジャンケンを形式化。ε-δ論法を完全に記号化できる基盤を与えた。',
    anecdotes: [
      '生前は無名で、講義の聴講者が数人だけのこともあった',
      '死後、ウィトゲンシュタインやラッセルに再発見された',
      'ラッセルのパラドックスで、生涯の研究が崩壊したと感じた',
      '今では「現代論理学の父」と呼ばれる',
    ],
    famousQuote:
      '「言語の不完全性が、思考の明晰さを妨げる」',
  },
  weierstrass: {
    id: 'weierstrass',
    name: 'カール・ワイエルシュトラス',
    nameEn: 'Karl Weierstrass',
    lifespan: '1815-1897',
    nationality: 'ドイツ',
    portrait: '🎓',
    occupation: '数学者',
    background: [
      '若い頃は中学校の教師（15年間）',
      '40歳で論文を発表し、一躍有名に',
      'ベルリン大学教授',
      '「現代解析学の父」と呼ばれる',
      '生涯独身、学生の指導に情熱を注ぐ',
    ],
    mainAchievements: [
      'ε-δ論法の確立（1861年）',
      '連続だが微分不可能な関数の発見',
      '複素解析の厳密化',
      'ワイエルシュトラスの近似定理',
      '楕円関数論',
    ],
    epsilonDeltaContribution:
      'コーシーのεの概念にδを加え、∀ε>0, ∃δ>0という形で完全に形式化。時間概念を排除し、純粋に論理的な定義を完成させた。これにより、150年間の極限の曖昧さが解消された。',
    anecdotes: [
      '中学教師時代、数学の研究を夜間に続けていた',
      '40歳での論文で「無名の天才」として発見された',
      '女性数学者の教育にも熱心で、ソフィア・コワレフスカヤを指導',
      '講義は極めて厳密で、学生は苦労したが、多くの優秀な弟子を育てた',
    ],
    famousQuote:
      '「数学者は詩人でなければならない」',
  },
};

export const supplementaryContent: Record<
  string,
  {
    title: string;
    content: string;
    relevance: string;
  }
> = {
  'why-not-earlier': {
    title: 'なぜニュートンにはできなかったのか？',
    content:
      'ニュートンは天才だったが、彼の時代（1687年）には以下が存在しなかった：\n\n1. **実数の厳密な定義**（1872年まで待つ）\n2. **関数の形式的定義**（1837年まで待つ）\n3. **集合論**（1874年まで待つ）\n4. **記号論理学**（1879年まで待つ）\n\nこれらがなければ、∀ε>0, ∃δ>0 s.t. |x-a|<δ ⇒ |f(x)-L|<ε という定義を書くことすらできなかった。',
    relevance:
      '数学の発展は積み重ね。一人の天才ではなく、数世代にわたる基礎の整備が必要だった。',
  },
  'physics-vs-math': {
    title: '物理学と数学の違い',
    content:
      '**物理学**：\n- 実験・観察で確認できればOK\n- 「近づく」という直感的表現で十分\n- 時間的プロセスを扱う\n\n**数学**：\n- 論理的に証明が必要\n- 曖昧さは許されない\n- 時間概念を排除した真理\n\nニュートンの微積分は物理では完璧だったが、数学的には不完全だった。',
    relevance:
      'ε-δ論法は、物理学的直感を数学的厳密性に翻訳する方法。',
  },
  'why-order-matters': {
    title: 'なぜ ∀ε∃δ の順序が重要なのか',
    content:
      '**正しい順序（∀ε∃δ）**：\n- 挑戦者が先にεを決める\n- あなたはそれを見てからδを選べる\n- = 後出しジャンケン、必ず勝てる\n\n**間違った順序（∃δ∀ε）**：\n- あなたが先にδを固定\n- 挑戦者がそれを見てεを選ぶ\n- = 小さいεを選ばれたら負ける\n\n順序を変えるだけで、全く違う意味になる！',
    relevance:
      '量化子の順序は論理学の核心。これを理解しないとε-δ論法は理解できない。',
  },
};
