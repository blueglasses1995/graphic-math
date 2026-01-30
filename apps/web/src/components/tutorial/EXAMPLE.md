# TutorialPage Component - Usage Example

## Complete Example with Sample Data

### Sample Tutorial Data (New Format)

```typescript
import { TutorialNew } from '@learnmath/tutorials';

const sampleTutorial: TutorialNew = {
  id: 'group-definition',
  title: '群の定義',
  description: '群の4つの公理を正式に学ぶ',
  category: 'algebra',
  difficulty: 3,
  prerequisite: 'closure',
  suggestedPrerequisites: ['symmetry-intro', 'triangle-rotation'],
  estimatedMinutes: 25,
  tags: ['代数学', '群論', '公理'],
  relatedTutorials: ['identity-inverse', 'subgroup', 'group-order'],
  migrationStatus: 'complete',
  sections: {
    hook: {
      content: `
# なぜ群を学ぶのか？

対称性を数学的に扱うための道具が**群（group）**です。

回転、反射、置換など、様々な操作を統一的に理解できます。

群の概念は、物理学・化学・暗号理論など広範な分野で活用されています。
      `,
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
    },
    concept: {
      content: `
# 群の定義

群とは、集合 $G$ と演算 $*$ の組 $(G, *)$ で、以下の**4つの公理**を満たすものです。

## 1. 閉性 (Closure)
任意の $a, b \\in G$ に対して、$a * b \\in G$

演算の結果が必ず集合 $G$ の中に留まること。

## 2. 結合法則 (Associativity)
任意の $a, b, c \\in G$ に対して、$(a * b) * c = a * (b * c)$

3つ以上の要素を計算するとき、括弧の位置を変えても結果が同じ。

## 3. 単位元の存在 (Identity)
ある要素 $e \\in G$ が存在して、任意の $a \\in G$ に対して:
$$e * a = a * e = a$$

$e$ は「何もしない操作」に対応します。

## 4. 逆元の存在 (Inverse)
任意の $a \\in G$ に対して、ある $a^{-1} \\in G$ が存在して:
$$a * a^{-1} = a^{-1} * a = e$$

すべての操作に「元に戻す操作」が存在すること。
      `,
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
    },
    visualization: {
      content: `
# 視覚的理解

三角形の回転群 $C_3$ を例に、4つの公理を確認してみましょう。

- $e$: 0°回転（単位元）
- $r$: 120°回転
- $r^2$: 240°回転

**インタラクティブ操作:**
- 三角形をドラッグして回転させてみましょう
- 演算表を確認して閉性を確認できます
      `,
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
    },
    examples: {
      content: `
# 具体例

## 例1: 整数の加法 $(\\mathbb{Z}, +)$

- **閉性**: $2 + 3 = 5 \\in \\mathbb{Z}$ ✓
- **結合法則**: $(1 + 2) + 3 = 1 + (2 + 3) = 6$ ✓
- **単位元**: $0$ （$a + 0 = a$） ✓
- **逆元**: $-a$ （$a + (-a) = 0$） ✓

$(\\mathbb{Z}, +)$ は群です！

## 例2: 整数の乗法 $(\\mathbb{Z}, \\times)$

- **閉性**: $2 \\times 3 = 6 \\in \\mathbb{Z}$ ✓
- **結合法則**: $(2 \\times 3) \\times 4 = 2 \\times (3 \\times 4) = 24$ ✓
- **単位元**: $1$ （$a \\times 1 = a$） ✓
- **逆元**: $2$ の逆元は $1/2$ だが、$1/2 \\notin \\mathbb{Z}$ ✗

$(\\mathbb{Z}, \\times)$ は群ではありません！

## 例3: 正の実数の乗法 $(\\mathbb{R}^+, \\times)$

- **閉性**: $2.5 \\times 1.5 = 3.75 \\in \\mathbb{R}^+$ ✓
- **結合法則**: 成立 ✓
- **単位元**: $1$ ✓
- **逆元**: $1/a \\in \\mathbb{R}^+$ ✓

$(\\mathbb{R}^+, \\times)$ は群です！
      `,
    },
    exercises: {
      content: `
# 練習問題

次の組み合わせが群かどうか判定し、理由を述べてください。

## 問題1
偶数全体の集合と加法: $(2\\mathbb{Z}, +)$

**ヒント**: 4つの公理を一つずつチェックしましょう。

## 問題2
$\\{0, 1, 2, 3, 4\\}$ と mod 5 の加法

**ヒント**: $3 + 4 = 7 \\equiv 2 \\pmod{5}$

## 問題3
$2 \\times 2$ の可逆行列の集合 $GL(2, \\mathbb{R})$ と行列の積

**ヒント**: 逆行列の存在が鍵です。
      `,
    },
    summary: {
      content: `
# まとめ

群 $(G, *)$ の4つの公理:

1. **閉性**: $a * b \\in G$
2. **結合法則**: $(a * b) * c = a * (b * c)$
3. **単位元**: $e * a = a * e = a$
4. **逆元**: $a * a^{-1} = a^{-1} * a = e$

この4つの条件はシンプルですが、驚くほど豊かな理論が展開されます。

## 次のステップ

- [単位元と逆元](/tutorial/identity-inverse) - 単位元と逆元の性質を深く理解
- [部分群](/tutorial/subgroup) - 群の中の群を探る
- [群の位数](/tutorial/group-order) - 群のサイズと要素の位数
      `,
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
    },
  },
};
```

## Rendered Page Structure

### 1. Breadcrumb
```
Home > 代数学 > 群の定義
```

### 2. Tutorial Header
```
群の定義
群の4つの公理を正式に学ぶ

難易度: ★★★☆☆☆☆☆☆☆ 3/10
推定時間: 25分
タグ: [代数学] [群論] [公理]
```

### 3. Prerequisite Warning (if not completed)
```
⚠️ 推奨: 「閉性」を先に学習することをお勧めします
[推奨を無視して開始] [前提へ移動]
```

### 4. Section Navigation
```
セクション                                    3/6

[フック] [概念] [ビジュアル●] [例題] [練習問題] [まとめ]

Progress: ▓▓▓▓▓▓░░░░░░░░░░ 50%
```

### 5. Content Area (2 columns)

#### Left Column - Content
```
[VISUALIZATION]

# 視覚的理解

三角形の回転群 C₃ を例に、4つの公理を確認してみましょう。
...
```

#### Right Column - 3D Scene
```
[Interactive 3D Triangle Rotation Scene]
```

### 6. Navigation Buttons
```
← 前のセクション                    次のセクション →
```

### 7. Footer

#### Next Tutorial
```
次に進む

→ 単位元と逆元
  単位元と逆元の性質を深く理解する
```

#### Related Tutorials
```
関連チュートリアル

[部分群]              [群の位数]
群の中の群を探る      群のサイズと要素の位数
```

## Responsive Behavior

### Desktop (>1024px)
- 2-column layout (content | visualization)
- Full section navigation visible
- Side-by-side content and 3D scene

### Tablet (768px - 1024px)
- 2-column layout maintained
- Smaller padding and font sizes
- Visualization may be reduced

### Mobile (<768px)
- Single column layout
- Content stacked vertically
- Visualization becomes full-width
- Section navigation wraps or scrolls horizontally

## Color Scheme

- Background: `bg-slate-900`
- Cards: `bg-slate-800`
- Hover: `bg-slate-700` → `bg-slate-600`
- Primary: `bg-indigo-600`
- Text: `text-white` (headings), `text-gray-300` (body)
- Accent: `text-indigo-400`

## Animations

1. Section transitions: fade + slide
2. Progress bar: smooth width transition
3. Active section: pulse animation on indicator
4. Hover effects: color transitions
5. 3D scene: continuous rotation/animation

## Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus indicators
- Screen reader friendly
