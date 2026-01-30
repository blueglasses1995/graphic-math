# LearnMath Content Guidelines

**Version:** 1.0  
**Last Updated:** 2026-01-30  
**Scope:** All 690 tutorial units across 19 categories

---

## 1. LaTeX Notation Standards

### 1.1 Basic Syntax Rules

All mathematical notation must follow strict LaTeX conventions to ensure consistency across the platform.

#### Inline Mathematics
- **Syntax:** `$...$` (dollar signs around the expression)
- **Usage:** Mathematical expressions within sentences
- **Examples:**
  - **Correct:** "The set $\mathbb{R}$ contains all real numbers."
  - **Incorrect:** "The set ℝ contains all real numbers."
  - **Correct:** "If $a \in S$, then $a^2 \in S$."
  - **Incorrect:** "If a ∈ S, then a² ∈ S."

#### Display Mathematics
- **Syntax:** `$$...$$` (double dollar signs, on separate lines)
- **Usage:** Important equations, definitions, theorems
- **Examples:**
  ```
  The fundamental theorem states:

  $$\int_{a}^{b} f'(x) \, dx = f(b) - f(a)$$

  This connects derivatives and integrals.
  ```
  
  ```
  The definition of a group:

  $$\text{A group is a set } G \text{ with operation } * \text{ satisfying:}$$
  $$\forall a, b, c \in G: (a * b) * c = a * (b * c)$$
  ```

#### Spacing in Mathematics
- **Thin space:** `\,` (before differentials, after operators)
- **Medium space:** `\:` (between function name and argument)
- **Thick space:** `\;` (for better readability)
- **Examples:**
  - **Correct:** `$$\int_{0}^{\infty} e^{-x} \, dx = 1$$`
  - **Correct:** `$$f(x) \, dx$$` (thin space before $dx$)
  - **Avoid:** `$$\int_{0}^{\infty}e^{-x}dx$$` (no spacing)

---

### 1.2 Mathematical Conventions

#### Vectors

**Standard notation:** Boldface with `\mathbf{}`

```
Correct notation:
- $\mathbf{v} = (v_1, v_2, v_3)$ represents a 3D vector
- $\mathbf{u} \cdot \mathbf{v}$ is the dot product
- $\mathbf{A} \mathbf{v}$ represents matrix-vector multiplication

Rendering: 𝐯, 𝐮, 𝐀
```

| Use Case | LaTeX | Example |
|----------|-------|---------|
| Single vector | `\mathbf{v}` | $\mathbf{v} = (1, 2, 3)$ |
| Vector components | `v_i` | $v_1, v_2, v_3$ |
| Zero vector | `\mathbf{0}` | $\mathbf{0} = (0, 0, 0)$ |
| Unit vector | `\hat{\mathbf{e}}_i` | $\hat{\mathbf{e}}_1 = (1, 0, 0)$ |

**Prohibited patterns:**
- `\vec{v}` - produces arrow notation, unprofessional
- `v⃗` - Unicode arrow, inconsistent with formal math
- `\overrightarrow{AB}` - use only for geometric segments, not algebraic vectors

#### Matrices

**Standard notation:** Boldface with `\mathbf{}`

```
Correct notation:
- $\mathbf{A}$ for matrix name
- $A_{ij}$ for element access
- $\mathbf{A}^{T}$ for transpose
- $\mathbf{A}^{-1}$ for inverse

Example:
$$\mathbf{A} = \begin{pmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{pmatrix}$$
```

| Use Case | LaTeX | Example |
|----------|-------|---------|
| Matrix name | `\mathbf{A}` | $\mathbf{A} \in \mathbb{R}^{m \times n}$ |
| Element | `A_{ij}` | $A_{23} = 5$ |
| Transpose | `\mathbf{A}^{T}` | $\mathbf{A}^{T}$ (not $\mathbf{A}'$) |
| Determinant | `\det(\mathbf{A})` | $\det(\mathbf{A}) = 0$ |
| Trace | `\operatorname{tr}(\mathbf{A})` | $\operatorname{tr}(\mathbf{A})$ |
| Eigenvalue | `\lambda` | $\mathbf{A} \mathbf{v} = \lambda \mathbf{v}$ |

**Matrix environment examples:**
```latex
% For inline small matrices
\begin{pmatrix} a & b \\ c & d \end{pmatrix}

% For displayed matrices
$$\mathbf{A} = \begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{pmatrix}$$

% For augmented matrices (linear systems)
$$\left[\begin{array}{cc|c} 1 & 2 & 5 \\ 3 & 4 & 11 \end{array}\right]$$
```

#### Sets and Number Systems

**Standard notation:** Blackboard bold with `\mathbb{}`

```
Correct notation:
- $\mathbb{R}$ for real numbers
- $\mathbb{C}$ for complex numbers
- $\mathbb{Z}$ for integers
- $\mathbb{Q}$ for rationals
- $\mathbb{N}$ for natural numbers
```

| Symbol | LaTeX | Meaning | Example |
|--------|-------|---------|---------|
| Real numbers | `\mathbb{R}` | $\mathbb{R}$ | All decimal numbers |
| Complex numbers | `\mathbb{C}` | $\mathbb{C}$ | $a + bi$ form |
| Integers | `\mathbb{Z}` | $\mathbb{Z}$ | ..., -2, -1, 0, 1, 2, ... |
| Rationals | `\mathbb{Q}` | $\mathbb{Q}$ | Fractions p/q |
| Natural numbers | `\mathbb{N}` | $\mathbb{N}$ | 1, 2, 3, ... |
| Finite field | `\mathbb{F}_p` | $\mathbb{F}_p$ | Modular arithmetic |

**Set notation examples:**
```latex
% Element membership
$a \in S$ (element of)
$a \notin S$ (not element of)

% Set operations
$A \cup B$ (union)
$A \cap B$ (intersection)
$A \setminus B$ (difference)
$A \subseteq B$ (subset)
$A \subset B$ (proper subset)
$\emptyset$ (empty set)

% Set builder
$\{x \in \mathbb{R} : x^2 < 4\}$ (set comprehension)
```

#### Operators and Functions

**Standard notation:** `\operatorname{}` for multi-letter operators

```
Correct operators:
- $\operatorname{det}(\mathbf{A})$ - determinant
- $\operatorname{tr}(\mathbf{A})$ - trace
- $\operatorname{dim}(V)$ - dimension
- $\operatorname{gcd}(a, b)$ - greatest common divisor
- $\operatorname{lcm}(a, b)$ - least common multiple
- $\operatorname{mod}$ - modulo operation
- $\max(a, b)$ - maximum (built-in)
- $\min(a, b)$ - minimum (built-in)
```

**Forbidden patterns:**
- `det(A)` - use `\operatorname{det}(\mathbf{A})`
- `sin(x)` - use `\sin(x)` (built-in)
- `mod n` - use `\operatorname{mod} n` or `\bmod n`

**Trigonometric and common functions:**
```latex
\sin(x)      \cos(x)      \tan(x)
\exp(x)      \ln(x)       \log(x)
\sqrt{x}     |x| (or \lvert x \rvert for clarity)
\frac{a}{b}  \binom{n}{k}
```

#### Relations and Quantifiers

| Symbol | LaTeX | Usage | Example |
|--------|-------|-------|---------|
| For all | `\forall` | Universal quantifier | $\forall x \in \mathbb{R}$ |
| There exists | `\exists` | Existential quantifier | $\exists y : y^2 = x$ |
| Implies | `\Rightarrow` | Logical implication | $P \Rightarrow Q$ |
| If and only if | `\Leftrightarrow` | Biconditional | $P \Leftrightarrow Q$ |
| Approximately equals | `\approx` | Numerical approximation | $\pi \approx 3.14159$ |
| Proportional to | `\propto` | Proportionality | $y \propto x$ |
| Congruent to | `\equiv` | Congruence (mod) | $a \equiv b \pmod{n}$ |

#### Special Symbols and Greek Letters

**Commonly used Greek letters in mathematics:**

| Latin | Greek | LaTeX | Example |
|-------|-------|-------|---------|
| epsilon (small) | ε | `\epsilon` | $\epsilon > 0$ |
| epsilon (lunate) | ϵ | `\varepsilon` | Error term |
| lambda | λ | `\lambda` | $\lambda$ is an eigenvalue |
| mu | μ | `\mu` | $\mu$ is mean |
| sigma | σ | `\sigma` | $\sigma$ is std dev |
| Sigma (capital) | Σ | `\Sigma` | $\sum_{i=1}^{n}$ |
| pi | π | `\pi` | $\pi \approx 3.14159$ |
| phi | φ | `\phi` | $\phi(n)$ Euler totient |
| psi | ψ | `\psi` | Wave function |
| nabla | ∇ | `\nabla` | $\nabla f$ gradient |

---

### 1.3 Prohibited Patterns

**These patterns must NEVER appear in tutorials:**

#### Unicode Math Characters
| ❌ Prohibited | ✅ Correct | Reason |
|--------------|-----------|--------|
| `v⃗` | `$\mathbf{v}$` | Unicode arrow, inconsistent |
| `ℝ` | `$\mathbb{R}$` | Render separately, not in text |
| `∫₀¹` | `$\int_{0}^{1}$` | Unicode integral, formatting issues |
| `√x` | `$\sqrt{x}$` | Unicode radical, wrong size |
| `∞` plain | `$\infty$` | Use LaTeX everywhere |

#### Improper Operator Notation
| ❌ Prohibited | ✅ Correct | Reason |
|--------------|-----------|--------|
| `det(A)` | `$\operatorname{det}(\mathbf{A})$` | Multi-letter operator needs formatting |
| `a * b` | `$a \cdot b$` or `$a \times b$` | Asterisk is unclear in math |
| `a^2 * b^3` | `$a^2 \cdot b^3$` | Mix of notation styles |
| `sin x` | `$\sin(x)$` | Function name needs upright font |
| `mod n` | `$\bmod n$` or `$\operatorname{mod} n$` | Operator formatting |

#### Improper Vector/Matrix Notation
| ❌ Prohibited | ✅ Correct | Reason |
|--------------|-----------|--------|
| `\vec{v}` | `$\mathbf{v}$` | Arrow notation unprofessional |
| `v'` for transpose | `$\mathbf{v}^{T}$` | Ambiguous with derivative |
| `A'` for inverse | `$\mathbf{A}^{-1}$` | Unclear notation |
| `||v||` for norm | `$\lVert \mathbf{v} \rVert$` | Improper delimiter size |
| `|v|` for norm | `$\lvert \mathbf{v} \rvert$` (if single bar needed) | Use `\lVert` for proper norm |

#### Spacing and Formatting Issues
| ❌ Prohibited | ✅ Correct | Reason |
|--------------|-----------|--------|
| `$$\int f(x)dx$$` | `$$\int f(x) \, dx$$` | Missing space before differential |
| `$a,b,c\inS$` | `$a, b, c \in S$` | Missing spaces around operators |
| `$$a=1;b=2$$` | `$$a = 1, \quad b = 2$$` | Semicolons wrong context |
| `$$lim_{x->0}$$` | `$$\lim_{x \to 0}$$` | Text "lim", arrow direction |
| Mixed `$ $` and text | Separate properly | No mixing inline and display |

#### Forbidden Abbreviations
| ❌ Prohibited | ✅ Correct | Context |
|--------------|-----------|---------|
| `s.t.` (subject to) | `\text{ subject to }` | Spelled out in formal math |
| `w.r.t.` (with respect to) | `\text{ with respect to }` | Spelled out |
| `i.e.` | Use full sentence | Formal writing avoids abbreviations |
| `e.g.` | Use "for example" | Formal writing avoids abbreviations |

---

## 2. Section-Specific Content Guidelines

Each tutorial is divided into 6 standard sections. Below are comprehensive guidelines for each.

### 2.1 Hook Section (導入・動機付け)

**Purpose:** Capture attention and establish relevance. Answer "Why should I care?"

#### Specifications
| Attribute | Value |
|-----------|-------|
| **Character count** | 100-200 characters (including spaces) |
| **Estimated reading time** | 20-30 seconds |
| **Format** | Paragraph or 1-2 sentences |
| **Math density** | 0-1 inline expressions |
| **Tone** | Engaging, curious, accessible |

#### Structure
1. **Hook statement** (1-2 sentences): Real-world application or surprising fact
2. **Personal relevance** (1-2 sentences): Why the reader should care
3. **Preview** (optional): Hint at coming insights

#### Examples

**Example 1: Cryptography context**
```markdown
Why do you trust online banking? Behind every secure transaction
lurks abstract algebra—specifically, the mathematical difficulty of
factoring large numbers into primes. We're about to unlock why some
math is "easy" and some is "impossibly hard."
```
**Character count:** 176 | **Time:** 25 seconds

**Example 2: Music context**
```markdown
The same mathematical structure that explains why a piano sounds
different from a trumpet also predicts planetary orbits. Welcome to
the Fourier Transform—the mathematician's Swiss Army knife for
breaking down any wave into pure frequencies.
```
**Character count:** 188 | **Time:** 28 seconds

**Example 3: Nature context**
```markdown
Snowflakes, beehives, and starfish crystals all follow hidden
geometric rules. These are wallpaper groups—there are exactly 17
ways the universe decorates repeating patterns. Let's discover them.
```
**Character count:** 147 | **Time:** 22 seconds

#### Anti-patterns to avoid
- ❌ Starting with formal definition
- ❌ Using unexplained jargon
- ❌ Making false claims about difficulty
- ❌ Overly long introductions (>200 chars)
- ❌ Math-heavy content in hook phase

#### LaTeX in Hook
- Minimal use (0-1 inline expressions maximum)
- Only for unavoidable notation: `$\mathbb{R}$`, `$\pi$`
- Example: "The constant $\pi$ appears everywhere..."

---

### 2.2 Concept Section (定義・理論)

**Purpose:** Provide intuitive understanding, then formal definition. This is the knowledge core.

#### Specifications
| Attribute | Value |
|-----------|-------|
| **Character count** | 300-500 characters (paragraph) |
| **Estimated reading time** | 3-4 minutes |
| **Format** | Multi-paragraph with displays |
| **Math density** | 3-7 LaTeX expressions (mix of inline/display) |
| **Structure** | Intuition → Definition → Properties |

#### Required Components

**1. Intuitive Explanation** (100-150 chars)
- Use everyday language
- Provide visual metaphor or analogy
- Avoid formal notation in this paragraph

**2. Formal Definition** (50-150 chars)
- Clear statement of what the concept is
- All key terms defined or explained
- One display equation if appropriate

**3. Key Properties** (150-250 chars)
- 2-4 most important properties
- Why these properties matter
- Connection to intuition

#### Examples

**Example 1: Group Definition (Algebra)**
```markdown
**Intuition:** A group is a collection of symmetries. Think about
rotating a square: you can rotate 0°, 90°, 180°, 270°—and combining
any two rotations gives you another valid rotation. That closure
under combination is the essence of a group.

**Definition:** A group is a set $G$ with a binary operation 
$*: G \times G \to G$ satisfying:

$$\begin{aligned}
&\text{1. Closure: } \forall a, b \in G, \quad a * b \in G \\
&\text{2. Associativity: } \forall a,b,c \in G, \quad (a*b)*c = a*(b*c) \\
&\text{3. Identity: } \exists e \in G, \quad \forall a \in G, \quad a * e = a \\
&\text{4. Inverse: } \forall a \in G, \quad \exists a^{-1} \in G, \quad a * a^{-1} = e
\end{aligned}$$

**Key Properties:**
- The identity element $e$ is unique
- Each element's inverse is unique
- Groups model symmetries in physics, chemistry, and cryptography
- Not all groups are commutative: some satisfy $ab = ba$, others don't
```

**Example 2: Linear Independence (Linear Algebra)**
```markdown
**Intuition:** Vectors are linearly independent if none of them is
redundant—you can't build any of them from the others. Like three
people voting: if their votes align perfectly, two would be redundant.

**Definition:** Vectors $\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_n$ are linearly independent if:

$$c_1 \mathbf{v}_1 + c_2 \mathbf{v}_2 + \cdots + c_n \mathbf{v}_n = \mathbf{0} 
\quad \Rightarrow \quad c_1 = c_2 = \cdots = c_n = 0$$

In other words, the only way to get zero is with all zero coefficients.

**Key Properties:**
- A set of $n$ independent vectors spans an $n$-dimensional space
- In $\mathbb{R}^3$, you can have at most 3 linearly independent vectors
- Independence is testable using determinants: place vectors in columns
  of matrix $\mathbf{A}$, then $\det(\mathbf{A}) \neq 0$ iff independent
- Redundant vectors = linearly dependent
```

**Example 3: Eigenvalue (Linear Algebra/Advanced)**
```markdown
**Intuition:** An eigenvalue is a "magic number" for a linear
transformation. When you apply the transformation to a special vector
(eigenvector), it just scales by that number—no rotation, no weird
distortion, just stretching or shrinking.

**Definition:** For matrix $\mathbf{A}$, the scalar $\lambda$ is an eigenvalue
if there exists a nonzero vector $\mathbf{v}$ (eigenvector) such that:

$$\mathbf{A} \mathbf{v} = \lambda \mathbf{v}$$

**Key Properties:**
- Eigenvalues reveal stable and unstable directions of $\mathbf{A}$
- The characteristic polynomial $\det(\mathbf{A} - \lambda \mathbf{I}) = 0$ gives all eigenvalues
- For symmetric matrices $\mathbf{A} = \mathbf{A}^{T}$: all eigenvalues are real
- Eigenvectors corresponding to different eigenvalues are orthogonal (if $\mathbf{A}$ is symmetric)
```

#### Content Checklist
- ✅ Starts with intuitive, non-technical explanation
- ✅ Provides formal definition in display math (one `$$...$$`)
- ✅ Lists 2-4 key properties with explanations
- ✅ Uses consistent notation (e.g., $G$ for groups, $\mathbf{A}$ for matrices)
- ✅ Avoids proofs of properties (those belong in deeper study)
- ✅ Connects forward: "This will be used to understand X..."
- ✅ Character count 300-500 (body only, not title)

#### Anti-patterns to avoid
- ❌ Starting with formal definition (should come after intuition)
- ❌ Overly technical language without explanation
- ❌ Multiple display equations competing for attention
- ❌ Properties without explanation of why they matter
- ❌ Notation inconsistency (e.g., $v$ and $\mathbf{v}$ mixed)

---

### 2.3 Visualization Section (3D視覚化)

**Purpose:** Provide interactive or visual understanding. Show what the concept looks like geometrically.

#### Specifications
| Attribute | Value |
|-----------|-------|
| **Format** | Scene configuration + description |
| **Description length** | 100-200 characters |
| **Interactive elements** | ≥1 (drag, click, slider, animation) |
| **3D scenes** | Required for geometry, linear algebra, complex numbers |
| **2D plots** | Acceptable for functions, distributions |
| **Fallback** | ASCII diagram or SVG for simple cases |

#### Scene Configuration Structure

```typescript
interface SceneConfig {
  // Required
  type: '3d' | '2d' | 'interactive';        // Type of visualization
  title: string;                             // Scene title
  description: string;                       // What to observe
  
  // 3D-specific (if type: '3d')
  camera?: {
    position: [x: number, y: number, z: number];
    target: [x: number, y: number, z: number];
    fov: number;
  };
  lighting?: {
    ambient: number;
    directional: number;
  };
  
  // Interactive elements
  interactiveElements: Array<{
    type: 'slider' | 'drag' | 'click' | 'checkbox';
    label: string;
    range?: [min: number, max: number];
    step?: number;
    onChange?: (value: any) => void;
  }>;
  
  // Objects to render
  objects: Array<{
    type: 'vector' | 'matrix' | 'plane' | 'curve' | 'mesh';
    data: any;
    color?: string;
    opacity?: number;
  }>;
  
  // Animation (optional)
  animation?: {
    duration: number;           // ms
    loop: boolean;
    keyframes: Array<{time: number, state: any}>;
  };
}
```

#### Examples

**Example 1: 2D Vector Addition**
```markdown
### Visualization: Vector Addition

Drag the endpoint of vector **u** to change its magnitude and direction.
Notice how the resultant **u + v** updates in real-time. This 
parallelogram rule is the geometric definition of vector addition.

**Interactive controls:**
- Drag point **u** endpoint (red)
- Drag point **v** endpoint (blue)
- Toggle "Show Resultant" checkbox

**Observe:** The sum **u + v** (shown as purple dashed) always closes
the parallelogram. This works in any dimension, though we visualize
in 2D here.

**Scene Config:**
- Type: 2D plot with draggable points
- Grid: visible, with unit spacing
- Vectors: scaled unit length shown
- Labels: u, v, u+v with LaTeX rendering
```

**Example 2: 3D Rotation Matrix**
```markdown
### Visualization: Rotation Matrices in 3D

A rotation matrix $\mathbf{R}$ rotates 3D space. Grab the gray cube
and drag it to rotate the entire coordinate frame. The colored axes
(red = x, green = y, blue = z) show how the basis vectors transform.

**Interactive controls:**
- Drag the cube to rotate the scene
- Slider "Rotation Angle": manually set rotation about z-axis
- Checkbox "Show Determinant": displays $\det(\mathbf{R}) = 1$

**Observe:** 
- Rotation preserves vector lengths (distances unchanged)
- The three axis vectors remain orthogonal (90° angles preserved)
- Right-hand rule: thumb along z-axis, fingers show rotation direction

**Scene Config:**
- Type: 3D interactive scene
- Objects: Cube (reference), three basis vectors, grid planes
- Camera: Orbital control (mouse drag)
- Lighting: Ambient + directional for depth perception
```

**Example 3: Eigenvalue Visualization**
```markdown
### Visualization: Eigenvectors and Eigenvalues

This 2D linear transformation stretches vectors in specific directions
(eigenvectors) by fixed amounts (eigenvalues). Use the slider to cycle
through different transformations and see which directions are special.

**Interactive controls:**
- Slider "Select Matrix": cycle through $\mathbf{A}$, $\mathbf{B}$, $\mathbf{C}$
- Checkbox "Show Eigenvectors": highlights special directions
- Slider "Lambda": adjusts eigenvalue (stretching factor)

**Observe:**
- Eigenvectors (shown as gray lines) don't rotate when transformed
- Other vectors (shown as thin black lines) rotate and scale unevenly
- The eigenvalue tells you the stretch factor along that eigenvector direction

**Scene Config:**
- Type: 2D interactive with vector field
- Objects: Grid of vectors before/after transformation, eigenvector highlights
- Animation: Smooth transition when matrix changes
- Feedback: Numerical readout of determinant and trace
```

#### Guidelines for Effective Visualization

**1. Visual Clarity**
- Use high contrast colors (red, green, blue for x, y, z axes)
- Label all important elements with LaTeX notation
- Keep scene uncluttered (hide details behind toggles if needed)

**2. Interactive Responsiveness**
- Provide immediate visual feedback (< 100ms latency)
- Limit control complexity (usually 2-3 controls maximum)
- Include "Reset" button to restore initial state

**3. Pedagogical Connection**
- Description must explicitly connect visual to concept
- Include specific observations students should make
- Avoid showing only static images—require interaction

**4. Accessibility**
- Provide text description of what 3D scene shows
- Support keyboard navigation (not just mouse)
- Include high-contrast mode option

#### Technical Implementation
- **3D Engine:** Three.js or similar WebGL library
- **2D Plots:** SVG or Canvas with custom rendering
- **Recording:** Include tutorial video for students without JavaScript support

#### Anti-patterns to avoid
- ❌ Visualization disconnected from concept (passive animation only)
- ❌ Too many interactive controls (> 3 usually confuses)
- ❌ No clear instructions on how to interact
- ❌ Slow rendering (should feel instant)
- ❌ Colors not matching mathematical convention (red ≠ x-axis)

---

### 2.4 Examples Section (具体例)

**Purpose:** Show the concept in action with concrete, varied problems. Students learn by doing.

#### Specifications
| Attribute | Value |
|-----------|-------|
| **Minimum examples** | 2 (required) |
| **Recommended** | 3-4 (optimal range) |
| **Total length** | 400-700 characters for all examples |
| **Variety** | Simple + practical/applied |
| **Format** | Problem → Solution steps → Interpretation |
| **Math density** | 5-10 expressions per example (display where possible) |

#### Example Structure (each example)

**1. Problem Setup** (50-100 chars)
- Clear problem statement with specific numbers or constraints
- Use LaTeX for mathematical objects

**2. Solution Method** (150-250 chars)
- Step-by-step working
- Show intermediate results
- Explain why each step follows

**3. Interpretation** (50-100 chars)
- What does the answer mean?
- Why is this result important or interesting?
- Connection back to the concept

#### Examples

**Example 1: Simple Case - Linear Independence Check**
```markdown
**Example 1: Checking Linear Independence in ℝ³**

**Problem:** Are the vectors $\mathbf{u} = (1, 0, 0)$, $\mathbf{v} = (0, 1, 0)$, 
and $\mathbf{w} = (1, 1, 0)$ linearly independent?

**Solution:** Create matrix with these as columns and compute determinant:

$$\mathbf{M} = \begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \\ 0 & 0 & 0 \end{pmatrix}$$

$$\det(\mathbf{M}) = 1 \cdot (1 \cdot 0 - 1 \cdot 0) - 0 + 1 \cdot (0 - 0) = 0$$

**Interpretation:** Since $\det(\mathbf{M}) = 0$, the vectors are **linearly 
dependent**. Indeed: $\mathbf{w} = \mathbf{u} + \mathbf{v}$ (third is sum of first two).
This means $\mathbf{w}$ is redundant—it adds no new dimension.
```

**Example 2: Practical Case - Cryptographic Application**
```markdown
**Example 2: Simple RSA Encryption Setup**

**Problem:** Find eigenvalues and eigenvectors of the matrix
$$\mathbf{A} = \begin{pmatrix} 3 & 1 \\ 0 & 2 \end{pmatrix}$$

**Solution:** Characteristic equation: $\det(\mathbf{A} - \lambda \mathbf{I}) = 0$

$$(3 - \lambda)(2 - \lambda) - 0 = 0$$
$$\lambda^2 - 5\lambda + 6 = 0$$
$$(\lambda - 2)(\lambda - 3) = 0$$

So $\lambda_1 = 3$ and $\lambda_2 = 2$.

For $\lambda_1 = 3$: Solve $(\mathbf{A} - 3\mathbf{I})\mathbf{v} = \mathbf{0}$:
$$\begin{pmatrix} 0 & 1 \\ 0 & -1 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \mathbf{0}$$
This gives $\mathbf{v}_1 = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$.

For $\lambda_2 = 2$: Similarly, $\mathbf{v}_2 = \begin{pmatrix} 1 \\ -1 \end{pmatrix}$.

**Interpretation:** When we apply $\mathbf{A}$ to direction $(1, 0)$, it scales 
by factor 3. Direction $(1, -1)$ scales by factor 2. All other directions 
experience mixed stretching and rotation.
```

**Example 3: Real-World Application - Signal Processing**
```markdown
**Example 3: Fourier Transform - Decomposing a Sound**

**Problem:** A tuning fork produces a sound with frequency 440 Hz (musical note A).
Theoretically, what frequencies does a Fourier analysis reveal?

**Solution:** The pure tone is $s(t) = \sin(2\pi \cdot 440 \cdot t)$.

Taking the Fourier transform:
$$S(f) = \int_{-\infty}^{\infty} \sin(2\pi \cdot 440 \cdot t) e^{-i2\pi ft} \, dt$$

For a pure sine at 440 Hz, the Fourier transform is:
$$S(f) = \delta(f - 440) + \delta(f + 440)$$

where $\delta$ is the Dirac delta (peak at specific frequency, zero elsewhere).

**Interpretation:** The transform shows a **single frequency component** at 440 Hz
(and its negative counterpart from mathematics). This is why tuning forks sound
so pure—no harmonics, just one frequency. A real musical instrument would show
multiple peaks at 440 Hz, 880 Hz, 1320 Hz, etc. (harmonics).
```

#### Variety Strategy

**Simple Examples (1-2 of 3):**
- Use small numbers or specific cases
- Demonstrate basic concept application
- Build student confidence with success
- Example: "Check if $(1,0)$ and $(0,1)$ are independent" → obviously yes

**Practical/Applied Examples (1-2 of 3):**
- Real-world context or deeper insight
- Larger scale or more complex scenario
- Shows why the concept matters
- Example: "Decompose a musical note" or "Verify cryptographic key"

**Progressive Complexity:**
- Example 1: Most basic version
- Example 2: Moderate complexity
- Example 3 (if present): Advanced or surprising application

#### Formatting Checklist
- ✅ Clear problem statement with specific values
- ✅ All steps shown and explained
- ✅ Final answer clearly marked
- ✅ Interpretation explains significance
- ✅ Notation consistent with Concept section
- ✅ Total 400-700 characters across all examples
- ✅ Each example 5-15 minutes to work through (estimated)

#### Anti-patterns to avoid
- ❌ Only abstract examples (no concrete numbers)
- ❌ Skipped steps (students get lost)
- ❌ Solutions presented without context
- ❌ Only easy cases (students don't see why it matters)
- ❌ Examples disconnected from real applications

---

### 2.5 Exercises Section (練習問題) *Optional*

**Purpose:** Interactive practice for skill-building. Provides immediate feedback.

#### Specifications
| Attribute | Value |
|-----------|-------|
| **Requirement** | Optional (but recommended) |
| **Number of exercises** | 3-5 problems |
| **Types** | Multiple choice, numerical input, drag-and-drop, visualization |
| **Difficulty range** | Tutorial difficulty ± 1 (if tutorial is level 5, exercises are 4-6) |
| **Time per exercise** | 2-5 minutes |
| **Feedback** | Immediate (< 1 second) |

#### Exercise Types

**Type 1: Multiple Choice**
```markdown
**Exercise 1:** Which of the following is NOT a group?

A) ℤ with addition
B) {1, -1} with multiplication  
C) ℝ with multiplication
D) ℤ_5 = {0,1,2,3,4} with addition mod 5

**Correct Answer:** C

**Explanation:** ℝ with multiplication is NOT a group because 
the element 0 has no multiplicative inverse (1/0 is undefined).
All other options satisfy all four group axioms.
```

**Type 2: Numerical Input**
```markdown
**Exercise 2:** Find the determinant of:

$$\mathbf{A} = \begin{pmatrix} 2 & 3 \\ 1 & 4 \end{pmatrix}$$

**Answer:** _____ (enter a number)

**Correct Answer:** 5

**Explanation:** $\det(\mathbf{A}) = (2)(4) - (3)(1) = 8 - 3 = 5$.
A nonzero determinant confirms the matrix is invertible.
```

**Type 3: Interactive Manipulation**
```markdown
**Exercise 3:** Drag the blue dot to create a vector orthogonal to 
the red vector $(1, 1)$. What vector did you create?

**Correct Answer:** Any vector of form $(a, -a)$ for $a \neq 0$

**Feedback:** 
- If dot product $\approx$ 0: "Correct! Orthogonal vectors have zero dot product."
- Otherwise: "Not quite. Orthogonal means $\mathbf{u} \cdot \mathbf{v} = 0$."
```

**Type 4: Matching/Categorization**
```markdown
**Exercise 4:** Match each operation to its mathematical structure:

- (ℤ, +)         → A) Group but not ring
- (ℚ \ {0}, ×)   → B) Ring with unity
- (ℤ_2, +, ×)    → C) Field

**Correct Answer:** (A, A, C) [or use visual matching interface]

**Explanation:**
- (ℤ, +): Integer addition is a group (commutative). Not a ring alone.
- (ℚ \ {0}, ×): Rationals without zero form a group under multiplication.
- (ℤ_2, +, ×): Two-element field with special properties (Galois field).
```

#### Feedback Strategy

**Immediate Response (< 1 second):**
```
User enters answer → System checks → Display result

If correct:
  ✓ "Correct! [Brief explanation]"
  + Display next exercise option

If incorrect:
  ✗ "[Specific hint about error]"
  + "Try again" button (allow 2-3 attempts)
  + Reveal answer after max attempts
```

**Constructive Hints (progressive revelation):**
```
Attempt 1: "Try computing step by step. What's the first operation?"
Attempt 2: "Remember [relevant formula/property]. Apply it here."
Attempt 3: Reveal answer with full worked solution
```

#### Difficulty Calibration

**If tutorial difficulty = 5 (medium):**

| Exercise # | Type | Difficulty | Topic |
|------------|------|-----------|-------|
| 1 | Multiple choice | 4 | Straightforward application |
| 2 | Numerical | 5 | Moderate calculation |
| 3 | Interactive | 5 | Concept verification |
| 4 | Matching | 6 | Advanced connections |
| 5 | Open-ended | 6 | Creative application |

#### Grading & Progression

- **No scoring system** (this is learning, not testing)
- **Completion tracking:** Mark exercise as "done" when answered correctly
- **Optional review:** Students can retake exercises anytime
- **No time limits** (except for time-sensitive interactive elements)

---

### 2.6 Summary Section (まとめ)

**Purpose:** Consolidate learning and signpost future topics. Bridge to next tutorial.

#### Specifications
| Attribute | Value |
|-----------|-------|
| **Total length** | 100-150 characters |
| **Format** | Bullet points (3 key takeaways) + next steps |
| **Key points** | Exactly 3 (no more, no less) |
| **Next links** | 2-3 related tutorials |
| **Tone** | Reflective, forward-looking |
| **Math density** | 0-2 expressions (summary notation only) |

#### Structure

**1. Three Key Takeaways** (60-90 chars each)
- Distill the concept to its essence
- State without extensive proof
- Connect to broader mathematical landscape

**2. Next Steps** (40-60 chars)
- Suggest natural progression
- Link to 2-3 related tutorials
- Encourage exploration

#### Examples

**Example 1: Group Theory Summary**
```markdown
## Summary

**Three Key Takeaways:**
• A group is an algebraic structure with closure, associativity, identity, 
  and inverses—the minimal axioms needed to model symmetries and transformations.

• Groups are everywhere: rotations of geometric objects, permutations of 
  elements, symmetries of crystals, and the foundation of cryptographic security.

• Group theory transforms impossibly complex geometric or combinatorial 
  problems into abstract algebraic equations that often have elegant solutions.

**What's Next?**

You've mastered the definition. Now explore:
- **Subgroups** → Which subsets of a group are themselves groups?
- **Homomorphisms** → How do we compare and translate between groups?
- **Quotient Groups** → Build new groups from old by "collapsing" structure

Each reveals deeper layers of symmetry.
```

**Example 2: Linear Algebra Summary**
```markdown
## Summary

**Three Key Takeaways:**
• Eigenvalues and eigenvectors reveal the "natural directions" of a linear 
  transformation—where it acts like pure scaling without rotation.

• Diagonalizable matrices expose their hidden structure: a change of basis 
  that converts them into simple diagonal form $\mathbf{\Lambda}$.

• Spectral decomposition $\mathbf{A} = \sum \lambda_i \mathbf{v}_i \mathbf{v}_i^T$ 
  expresses any symmetric matrix as a weighted sum of rank-1 projections.

**What's Next?**

Build on this foundation:
- **Singular Value Decomposition (SVD)** → Generalize eigenvalue theory to 
  rectangular matrices for compression and denoising.
- **Matrix Exponentials** → Apply to differential equations and stability analysis.
- **Spectral Graph Theory** → Use eigenvalues to understand network structure.
```

**Example 3: Calculus Summary**
```markdown
## Summary

**Three Key Takeaways:**
• The derivative $f'(x)$ measures instantaneous rate of change at a point, 
  while the integral $\int f(x) \, dx$ accumulates total change over an interval.

• The Fundamental Theorem of Calculus connects these opposing operations: 
  differentiation and integration are inverses of each other.

• Calculus enables optimization (find maxima/minima), modeling (differential 
  equations), and probability (probability density functions).

**What's Next?**

Apply calculus across domains:
- **Multivariable Calculus** → Extend to functions of many variables using 
  partial derivatives and gradients.
- **Differential Equations** → Use integration to solve dynamic systems in 
  physics and engineering.
- **Numerical Methods** → Approximate integrals and derivatives computationally 
  for real data.
```

#### Content Checklist
- ✅ Exactly 3 key takeaways (one paragraph each)
- ✅ Each takeaway 60-90 characters
- ✅ Takeaways focus on "what" and "why", not "how"
- ✅ Include 2-3 next-step recommendations with explanations
- ✅ Links point to existing tutorials (verify in courseware)
- ✅ Total length 100-150 chars (body only)
- ✅ Forward-looking tone (prepare for next topics)
- ✅ No new concepts introduced (consolidation only)

#### Anti-patterns to avoid
- ❌ More or fewer than 3 takeaways
- ❌ Repeating word-for-word from Concept section
- ❌ Introducing new material (summary only)
- ❌ Links to non-existent tutorials
- ❌ Overly technical language (assume reader may skim)
- ❌ No connection to real applications
- ❌ Unclear progression to next topics

---

## 3. Cross-Section Integration

### 3.1 Notation Consistency Across Sections

All sections must use **identical notation** for the same mathematical objects:

**Example: Matrix and Vector Notation**
```
Hook:    "Linear transformations reshape space itself"
         (Informal, minimal notation)

Concept: "A linear transformation is a matrix $\mathbf{A}$. 
          It maps $\mathbf{v} \to \mathbf{A}\mathbf{v}$."
         (Introduced with $\mathbf{A}$ notation)

Visualization: "Drag the blue vector $\mathbf{v}$. Watch 
               how $\mathbf{A}\mathbf{v}$ changes."
              (Consistent: $\mathbf{v}$, $\mathbf{A}$)

Examples: "For $\mathbf{A} = \begin{pmatrix}..."
         (Same notation throughout)

Summary: "Matrix $\mathbf{A}$ and vector $\mathbf{v}$..."
        (Consistent notation)
```

**Notation Introduction Order:**
1. **Hook:** No notation (or only $\mathbb{R}$, $\pi$)
2. **Concept:** Introduce all core notation here
3. **Visualization, Examples, Summary:** Use only introduced notation

### 3.2 Difficulty Scaling

The concept, examples, and visualization must align with the tutorial's difficulty level:

| Difficulty | Concept Depth | Example Complexity | Visualization Type |
|-------------|---------------|-------------------|-------------------|
| 1-2 (Easy) | Intuitive + basic definition | Concrete, small numbers | 2D diagrams, simple animation |
| 3-4 (Foundational) | Definition + 2-3 properties | Mix of concrete & abstract | 2D plots, basic 3D |
| 5-6 (Intermediate) | Formal + multiple applications | Abstract with worked steps | Interactive 3D, vector fields |
| 7-8 (Advanced) | Theoretical + proofs of properties | Large-scale, multi-step | Complex 3D, computational feedback |
| 9-10 (Expert) | General theory + categorical view | Research-level applications | Advanced simulations, topology |

### 3.3 Character Count Targets

**Total tutorial content (excludes title, metadata):**

```
Hook:           100-200 chars    (~20-30 sec read)
Concept:        300-500 chars    (~3-4 min read)
Visualization:  100-200 chars    (description only)
Examples:       400-700 chars    (~10-15 min work)
Summary:        100-150 chars    (~1 min read)
───────────────────────────────
TOTAL:          1000-1750 chars  (~15-25 min per tutorial)
```

**Reading pace benchmarks:**
- Technical math prose: 30-40 characters/minute
- Informal explanation: 50-60 characters/minute
- Worked examples: 20-30 characters/minute (includes thinking time)

---

## 4. Quality Assurance Checklist

### 4.1 LaTeX & Notation Review

Before finalizing any tutorial, verify:

- [ ] All inline math wrapped in `$...$`
- [ ] All display math wrapped in `$$...$$`
- [ ] Vectors use `\mathbf{v}`, not `\vec{v}`
- [ ] Matrices use `\mathbf{A}`, not `A` alone
- [ ] Sets use `\mathbb{R}`, `\mathbb{C}`, etc.
- [ ] Multi-letter operators use `\operatorname{det}`, etc.
- [ ] Spacing: `\,` before differentials, proper operator spacing
- [ ] No prohibited patterns (see Section 1.3)
- [ ] Greek letters correct (e.g., `\lambda`, not `L`)
- [ ] Fractions use `\frac{a}{b}`, not `a/b` (except in running text)

### 4.2 Section Content Review

**Hook Section:**
- [ ] 100-200 characters
- [ ] Answers "Why should I care?"
- [ ] No jargon without explanation
- [ ] Engaging tone, not dry

**Concept Section:**
- [ ] 300-500 characters
- [ ] Starts with intuition, then formal definition
- [ ] 2-4 properties listed
- [ ] All notation defined or introduced
- [ ] No proofs (state without proving)

**Visualization Section:**
- [ ] Scene configuration specified
- [ ] Description: 100-200 characters
- [ ] Interactive controls: 1-3 elements
- [ ] Connects visual to concept
- [ ] Clear instructions on interaction

**Examples Section:**
- [ ] 2-4 examples provided
- [ ] Mix of simple and applied
- [ ] Problem setup clear, solution stepped, interpretation provided
- [ ] Each example 5-15 minutes to work through
- [ ] Total: 400-700 characters

**Summary Section:**
- [ ] Exactly 3 key takeaways
- [ ] 100-150 characters total
- [ ] 2-3 next-step links
- [ ] No new concepts introduced

### 4.3 Cross-Section Consistency

- [ ] All sections use identical notation (once introduced in Concept)
- [ ] Difficulty level consistent across sections
- [ ] Concept section defines all notation used in Examples
- [ ] Visualization connects explicitly to Concept section
- [ ] Summary references Concept and Examples without repetition
- [ ] Overall character count 1000-1750 characters

### 4.4 Language & Tone Review

- [ ] Matches target audience (secondary→undergraduate level)
- [ ] Tone consistent: curious, accessible, rigorous (not dry)
- [ ] No unexplained jargon
- [ ] No false claims or oversimplifications
- [ ] Active voice preferred ("The vector rotates" not "It is rotated")
- [ ] Inclusive language (avoid gendered pronouns where possible)

---

## 5. Appendix: Quick Reference

### A. Notation Cheat Sheet

| Concept | LaTeX | Renders |
|---------|-------|---------|
| **Vectors** |
| Generic vector | `\mathbf{v}` | 𝐯 |
| Zero vector | `\mathbf{0}` | 𝟎 |
| Unit vector | `\hat{\mathbf{e}}_i` | 𝐞̂ᵢ |
| Vector component | `v_i` | vᵢ |
| Dot product | `\mathbf{u} \cdot \mathbf{v}` | 𝐮·𝐯 |
| **Matrices** |
| Generic matrix | `\mathbf{A}` | 𝐀 |
| Identity matrix | `\mathbf{I}` | 𝐈 |
| Matrix element | `A_{ij}` | Aᵢⱼ |
| Determinant | `\det(\mathbf{A})` | det(𝐀) |
| Transpose | `\mathbf{A}^{T}` | 𝐀ᵀ |
| Inverse | `\mathbf{A}^{-1}` | 𝐀⁻¹ |
| **Sets** |
| Real numbers | `\mathbb{R}` | ℝ |
| Complex numbers | `\mathbb{C}` | ℂ |
| Integers | `\mathbb{Z}` | ℤ |
| Rationals | `\mathbb{Q}` | ℚ |
| Natural numbers | `\mathbb{N}` | ℕ |
| Empty set | `\emptyset` | ∅ |
| Element of | `\in` | ∈ |
| Not element of | `\notin` | ∉ |
| **Operators** |
| Limit | `\lim_{x \to 0}` | lim |
| Summation | `\sum_{i=1}^{n}` | Σ |
| Product | `\prod_{i=1}^{n}` | ∏ |
| Integral | `\int_{a}^{b}` | ∫ |
| Partial derivative | `\frac{\partial f}{\partial x}` | ∂f/∂x |
| Gradient | `\nabla f` | ∇f |
| Sine | `\sin(x)` | sin(x) |
| Cosine | `\cos(x)` | cos(x) |
| Exponential | `e^{x}` | eˣ |
| Natural log | `\ln(x)` | ln(x) |

### B. Display Equation Template

```latex
$$\text{[Name of equation]}$$
$$\text{Main expression} = \text{result}$$
$$\text{Alternative form or rearrangement}$$
```

### C. Section Length Template

```markdown
Hook (100-200 chars):
[Engaging statement about real-world relevance]

Concept (300-500 chars):
[Intuitive explanation] → [Formal definition in $$...$$] → [Key properties]

Visualization (100-200 chars description):
[Description of what to observe and how to interact]
[Scene Config...]

Examples (400-700 chars total):
[Example 1: Problem → Solution → Interpretation]
[Example 2: Problem → Solution → Interpretation]
[...]

Summary (100-150 chars):
• [Key takeaway 1]
• [Key takeaway 2]
• [Key takeaway 3]

Next: [Related tutorials...]
```

---

## 6. Versioning & Updates

**Current Version:** 1.0 (2026-01-30)

### Future Refinements
- Expand visualization examples with actual Three.js code
- Add template generators for common tutorial structures
- Include video embedding guidelines
- Accessibility standards (WCAG 2.1 AA compliance)
- Internationalization (translation into Japanese, Spanish, etc.)

---

**Document Maintainers:** LearnMath Content Team  
**Last Review:** 2026-01-30  
**Next Review:** 2026-06-30
