# LearnMath 数学可視化アプリ 実装計画

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** 線形代数（基底ベクトル、線形変換、行列、固有値）を3Dアニメーションで視覚的に学べるWeb/モバイルアプリを構築する

**Architecture:** pnpm workspacesによるモノレポ構成。`packages/core`に数学ロジック、`packages/tutorials`にチュートリアル定義、`apps/web`にReact Three Fiberによる3D可視化、`apps/mobile`にExpo + React Native版を配置。coreは依存ゼロでWeb/Mobile両対応。

**Tech Stack:** React 18, TypeScript, React Three Fiber, drei, Zustand, Tailwind CSS, Vite, Expo, pnpm workspaces

---

## Task 1: モノレポ初期セットアップ

**Files:**
- Create: `package.json`
- Create: `pnpm-workspace.yaml`
- Create: `tsconfig.base.json`
- Create: `.gitignore`

**Step 1: Git初期化**

```bash
cd /Users/toshikimatsukuma/WorkSpace/LearnMath
git init
```

**Step 2: ルートpackage.json作成**

```json
{
  "name": "learnmath",
  "private": true,
  "scripts": {
    "dev": "pnpm --filter @learnmath/web dev",
    "dev:mobile": "pnpm --filter @learnmath/mobile start",
    "build": "pnpm --filter @learnmath/web build",
    "test": "pnpm -r test",
    "typecheck": "pnpm -r typecheck"
  },
  "devDependencies": {
    "typescript": "^5.3.3"
  },
  "engines": {
    "node": ">=20.0.0",
    "pnpm": ">=9.0.0"
  }
}
```

**Step 3: pnpm-workspace.yaml作成**

```yaml
packages:
  - "apps/*"
  - "packages/*"
```

**Step 4: tsconfig.base.json作成**

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "esModuleInterop": true,
    "strict": true,
    "strictNullChecks": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "skipLibCheck": true,
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true
  }
}
```

**Step 5: .gitignore作成**

```
node_modules/
dist/
.expo/
*.log
.DS_Store
.env
.env.local
```

**Step 6: ディレクトリ構造作成**

```bash
mkdir -p apps/web apps/mobile packages/core packages/tutorials
```

**Step 7: pnpm install実行**

```bash
pnpm install
```

**Step 8: 初回コミット**

```bash
git add .
git commit -m "chore: initialize monorepo structure"
```

---

## Task 2: packages/core - ベクトル・行列ライブラリ

**Files:**
- Create: `packages/core/package.json`
- Create: `packages/core/tsconfig.json`
- Create: `packages/core/src/index.ts`
- Create: `packages/core/src/vector3.ts`
- Create: `packages/core/src/matrix3.ts`
- Create: `packages/core/src/matrix4.ts`
- Create: `packages/core/src/transforms.ts`
- Test: `packages/core/src/__tests__/vector3.test.ts`
- Test: `packages/core/src/__tests__/matrix3.test.ts`
- Test: `packages/core/src/__tests__/transforms.test.ts`

**Step 1: core/package.json作成**

```json
{
  "name": "@learnmath/core",
  "version": "0.1.0",
  "type": "module",
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.js",
      "types": "./dist/index.d.ts"
    }
  },
  "scripts": {
    "build": "tsc",
    "test": "vitest run",
    "test:watch": "vitest",
    "typecheck": "tsc --noEmit"
  },
  "devDependencies": {
    "vitest": "^2.1.0"
  }
}
```

**Step 2: core/tsconfig.json作成**

```json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"],
  "exclude": ["src/**/*.test.ts", "src/**/__tests__"]
}
```

**Step 3: Vector3テスト作成**

```typescript
// packages/core/src/__tests__/vector3.test.ts
import { describe, it, expect } from 'vitest';
import { Vector3 } from '../vector3';

describe('Vector3', () => {
  it('creates a vector with x, y, z components', () => {
    const v = new Vector3(1, 2, 3);
    expect(v.x).toBe(1);
    expect(v.y).toBe(2);
    expect(v.z).toBe(3);
  });

  it('adds two vectors', () => {
    const a = new Vector3(1, 2, 3);
    const b = new Vector3(4, 5, 6);
    const result = a.add(b);
    expect(result.x).toBe(5);
    expect(result.y).toBe(7);
    expect(result.z).toBe(9);
  });

  it('scales a vector', () => {
    const v = new Vector3(1, 2, 3);
    const result = v.scale(2);
    expect(result.x).toBe(2);
    expect(result.y).toBe(4);
    expect(result.z).toBe(6);
  });

  it('computes dot product', () => {
    const a = new Vector3(1, 2, 3);
    const b = new Vector3(4, 5, 6);
    expect(a.dot(b)).toBe(32); // 1*4 + 2*5 + 3*6
  });

  it('computes cross product', () => {
    const i = new Vector3(1, 0, 0);
    const j = new Vector3(0, 1, 0);
    const k = i.cross(j);
    expect(k.x).toBe(0);
    expect(k.y).toBe(0);
    expect(k.z).toBe(1);
  });

  it('computes magnitude', () => {
    const v = new Vector3(3, 4, 0);
    expect(v.magnitude()).toBe(5);
  });

  it('normalizes a vector', () => {
    const v = new Vector3(3, 4, 0);
    const n = v.normalize();
    expect(n.x).toBeCloseTo(0.6);
    expect(n.y).toBeCloseTo(0.8);
    expect(n.z).toBe(0);
  });

  it('creates standard basis vectors', () => {
    expect(Vector3.i().toArray()).toEqual([1, 0, 0]);
    expect(Vector3.j().toArray()).toEqual([0, 1, 0]);
    expect(Vector3.k().toArray()).toEqual([0, 0, 1]);
  });
});
```

**Step 4: テスト実行して失敗確認**

```bash
cd packages/core && pnpm install && pnpm test
```
Expected: FAIL - Vector3 not found

**Step 5: Vector3実装**

```typescript
// packages/core/src/vector3.ts
export class Vector3 {
  constructor(
    public readonly x: number,
    public readonly y: number,
    public readonly z: number
  ) {}

  add(v: Vector3): Vector3 {
    return new Vector3(this.x + v.x, this.y + v.y, this.z + v.z);
  }

  subtract(v: Vector3): Vector3 {
    return new Vector3(this.x - v.x, this.y - v.y, this.z - v.z);
  }

  scale(s: number): Vector3 {
    return new Vector3(this.x * s, this.y * s, this.z * s);
  }

  dot(v: Vector3): number {
    return this.x * v.x + this.y * v.y + this.z * v.z;
  }

  cross(v: Vector3): Vector3 {
    return new Vector3(
      this.y * v.z - this.z * v.y,
      this.z * v.x - this.x * v.z,
      this.x * v.y - this.y * v.x
    );
  }

  magnitude(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }

  normalize(): Vector3 {
    const mag = this.magnitude();
    if (mag === 0) return new Vector3(0, 0, 0);
    return this.scale(1 / mag);
  }

  toArray(): [number, number, number] {
    return [this.x, this.y, this.z];
  }

  static zero(): Vector3 {
    return new Vector3(0, 0, 0);
  }

  static i(): Vector3 {
    return new Vector3(1, 0, 0);
  }

  static j(): Vector3 {
    return new Vector3(0, 1, 0);
  }

  static k(): Vector3 {
    return new Vector3(0, 0, 1);
  }

  static fromArray(arr: [number, number, number]): Vector3 {
    return new Vector3(arr[0], arr[1], arr[2]);
  }
}
```

**Step 6: テスト実行してパス確認**

```bash
pnpm test
```
Expected: PASS

**Step 7: Matrix3テスト作成**

```typescript
// packages/core/src/__tests__/matrix3.test.ts
import { describe, it, expect } from 'vitest';
import { Matrix3 } from '../matrix3';
import { Vector3 } from '../vector3';

describe('Matrix3', () => {
  it('creates identity matrix', () => {
    const m = Matrix3.identity();
    const v = new Vector3(1, 2, 3);
    const result = m.apply(v);
    expect(result.x).toBe(1);
    expect(result.y).toBe(2);
    expect(result.z).toBe(3);
  });

  it('applies transformation to vector', () => {
    // Scale by 2 in all directions
    const m = new Matrix3([
      2, 0, 0,
      0, 2, 0,
      0, 0, 2
    ]);
    const v = new Vector3(1, 1, 1);
    const result = m.apply(v);
    expect(result.x).toBe(2);
    expect(result.y).toBe(2);
    expect(result.z).toBe(2);
  });

  it('composes two matrices', () => {
    const scale2 = new Matrix3([
      2, 0, 0,
      0, 2, 0,
      0, 0, 2
    ]);
    const composed = scale2.compose(scale2);
    const v = new Vector3(1, 1, 1);
    const result = composed.apply(v);
    expect(result.x).toBe(4);
    expect(result.y).toBe(4);
    expect(result.z).toBe(4);
  });

  it('computes determinant', () => {
    const m = Matrix3.identity();
    expect(m.determinant()).toBe(1);

    const scale2 = new Matrix3([
      2, 0, 0,
      0, 2, 0,
      0, 0, 2
    ]);
    expect(scale2.determinant()).toBe(8);
  });

  it('extracts column vectors', () => {
    const m = new Matrix3([
      1, 2, 3,
      4, 5, 6,
      7, 8, 9
    ]);
    expect(m.getColumn(0).toArray()).toEqual([1, 4, 7]);
    expect(m.getColumn(1).toArray()).toEqual([2, 5, 8]);
    expect(m.getColumn(2).toArray()).toEqual([3, 6, 9]);
  });

  it('transposes matrix', () => {
    const m = new Matrix3([
      1, 2, 3,
      4, 5, 6,
      7, 8, 9
    ]);
    const t = m.transpose();
    expect(t.getColumn(0).toArray()).toEqual([1, 2, 3]);
  });
});
```

**Step 8: Matrix3実装**

```typescript
// packages/core/src/matrix3.ts
import { Vector3 } from './vector3';

export class Matrix3 {
  // Row-major order: [a11, a12, a13, a21, a22, a23, a31, a32, a33]
  constructor(public readonly elements: readonly number[]) {
    if (elements.length !== 9) {
      throw new Error('Matrix3 requires exactly 9 elements');
    }
  }

  get(row: number, col: number): number {
    return this.elements[row * 3 + col];
  }

  apply(v: Vector3): Vector3 {
    return new Vector3(
      this.get(0, 0) * v.x + this.get(0, 1) * v.y + this.get(0, 2) * v.z,
      this.get(1, 0) * v.x + this.get(1, 1) * v.y + this.get(1, 2) * v.z,
      this.get(2, 0) * v.x + this.get(2, 1) * v.y + this.get(2, 2) * v.z
    );
  }

  compose(other: Matrix3): Matrix3 {
    const result: number[] = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let sum = 0;
        for (let k = 0; k < 3; k++) {
          sum += this.get(i, k) * other.get(k, j);
        }
        result.push(sum);
      }
    }
    return new Matrix3(result);
  }

  determinant(): number {
    const e = this.elements;
    return (
      e[0] * (e[4] * e[8] - e[5] * e[7]) -
      e[1] * (e[3] * e[8] - e[5] * e[6]) +
      e[2] * (e[3] * e[7] - e[4] * e[6])
    );
  }

  getColumn(col: number): Vector3 {
    return new Vector3(
      this.get(0, col),
      this.get(1, col),
      this.get(2, col)
    );
  }

  transpose(): Matrix3 {
    return new Matrix3([
      this.get(0, 0), this.get(1, 0), this.get(2, 0),
      this.get(0, 1), this.get(1, 1), this.get(2, 1),
      this.get(0, 2), this.get(1, 2), this.get(2, 2)
    ]);
  }

  toArray(): readonly number[] {
    return this.elements;
  }

  static identity(): Matrix3 {
    return new Matrix3([
      1, 0, 0,
      0, 1, 0,
      0, 0, 1
    ]);
  }

  static zero(): Matrix3 {
    return new Matrix3([
      0, 0, 0,
      0, 0, 0,
      0, 0, 0
    ]);
  }

  static fromColumns(c1: Vector3, c2: Vector3, c3: Vector3): Matrix3 {
    return new Matrix3([
      c1.x, c2.x, c3.x,
      c1.y, c2.y, c3.y,
      c1.z, c2.z, c3.z
    ]);
  }
}
```

**Step 9: transformsテスト作成**

```typescript
// packages/core/src/__tests__/transforms.test.ts
import { describe, it, expect } from 'vitest';
import { Transforms } from '../transforms';
import { Vector3 } from '../vector3';

describe('Transforms', () => {
  it('creates rotation around X axis', () => {
    const rot90 = Transforms.rotationX(Math.PI / 2);
    const j = Vector3.j();
    const result = rot90.apply(j);
    expect(result.x).toBeCloseTo(0);
    expect(result.y).toBeCloseTo(0);
    expect(result.z).toBeCloseTo(1);
  });

  it('creates rotation around Y axis', () => {
    const rot90 = Transforms.rotationY(Math.PI / 2);
    const i = Vector3.i();
    const result = rot90.apply(i);
    expect(result.x).toBeCloseTo(0);
    expect(result.y).toBeCloseTo(0);
    expect(result.z).toBeCloseTo(-1);
  });

  it('creates rotation around Z axis', () => {
    const rot90 = Transforms.rotationZ(Math.PI / 2);
    const i = Vector3.i();
    const result = rot90.apply(i);
    expect(result.x).toBeCloseTo(0);
    expect(result.y).toBeCloseTo(1);
    expect(result.z).toBeCloseTo(0);
  });

  it('creates uniform scale', () => {
    const scale = Transforms.scale(2, 2, 2);
    const v = new Vector3(1, 1, 1);
    const result = scale.apply(v);
    expect(result.toArray()).toEqual([2, 2, 2]);
  });

  it('creates non-uniform scale', () => {
    const scale = Transforms.scale(1, 2, 3);
    const v = new Vector3(1, 1, 1);
    const result = scale.apply(v);
    expect(result.toArray()).toEqual([1, 2, 3]);
  });

  it('creates shear XY', () => {
    const shear = Transforms.shearXY(1);
    const k = Vector3.k();
    const result = shear.apply(k);
    expect(result.x).toBeCloseTo(0);
    expect(result.y).toBeCloseTo(0);
    expect(result.z).toBeCloseTo(1);

    const j = Vector3.j();
    const result2 = shear.apply(j);
    expect(result2.x).toBeCloseTo(1);
    expect(result2.y).toBeCloseTo(1);
    expect(result2.z).toBeCloseTo(0);
  });

  it('creates reflection through XY plane', () => {
    const reflect = Transforms.reflectionXY();
    const v = new Vector3(1, 2, 3);
    const result = reflect.apply(v);
    expect(result.toArray()).toEqual([1, 2, -3]);
  });

  it('interpolates between transforms', () => {
    const identity = Transforms.scale(1, 1, 1);
    const scale2 = Transforms.scale(2, 2, 2);
    const half = Transforms.lerp(identity, scale2, 0.5);
    const v = new Vector3(1, 1, 1);
    const result = half.apply(v);
    expect(result.x).toBeCloseTo(1.5);
    expect(result.y).toBeCloseTo(1.5);
    expect(result.z).toBeCloseTo(1.5);
  });
});
```

**Step 10: transforms実装**

```typescript
// packages/core/src/transforms.ts
import { Matrix3 } from './matrix3';

export class Transforms {
  static rotationX(angle: number): Matrix3 {
    const c = Math.cos(angle);
    const s = Math.sin(angle);
    return new Matrix3([
      1, 0, 0,
      0, c, -s,
      0, s, c
    ]);
  }

  static rotationY(angle: number): Matrix3 {
    const c = Math.cos(angle);
    const s = Math.sin(angle);
    return new Matrix3([
      c, 0, s,
      0, 1, 0,
      -s, 0, c
    ]);
  }

  static rotationZ(angle: number): Matrix3 {
    const c = Math.cos(angle);
    const s = Math.sin(angle);
    return new Matrix3([
      c, -s, 0,
      s, c, 0,
      0, 0, 1
    ]);
  }

  static scale(sx: number, sy: number, sz: number): Matrix3 {
    return new Matrix3([
      sx, 0, 0,
      0, sy, 0,
      0, 0, sz
    ]);
  }

  static shearXY(factor: number): Matrix3 {
    return new Matrix3([
      1, factor, 0,
      0, 1, 0,
      0, 0, 1
    ]);
  }

  static shearXZ(factor: number): Matrix3 {
    return new Matrix3([
      1, 0, factor,
      0, 1, 0,
      0, 0, 1
    ]);
  }

  static shearYZ(factor: number): Matrix3 {
    return new Matrix3([
      1, 0, 0,
      0, 1, factor,
      0, 0, 1
    ]);
  }

  static reflectionXY(): Matrix3 {
    return new Matrix3([
      1, 0, 0,
      0, 1, 0,
      0, 0, -1
    ]);
  }

  static reflectionXZ(): Matrix3 {
    return new Matrix3([
      1, 0, 0,
      0, -1, 0,
      0, 0, 1
    ]);
  }

  static reflectionYZ(): Matrix3 {
    return new Matrix3([
      -1, 0, 0,
      0, 1, 0,
      0, 0, 1
    ]);
  }

  static lerp(a: Matrix3, b: Matrix3, t: number): Matrix3 {
    const result: number[] = [];
    for (let i = 0; i < 9; i++) {
      result.push(a.elements[i] * (1 - t) + b.elements[i] * t);
    }
    return new Matrix3(result);
  }
}
```

**Step 11: index.tsでエクスポート**

```typescript
// packages/core/src/index.ts
export { Vector3 } from './vector3';
export { Matrix3 } from './matrix3';
export { Transforms } from './transforms';
```

**Step 12: 全テスト実行**

```bash
pnpm test
```
Expected: All tests PASS

**Step 13: ビルド実行**

```bash
pnpm build
```

**Step 14: コミット**

```bash
git add packages/core
git commit -m "feat(core): add Vector3, Matrix3, and Transforms"
```

---

## Task 3: packages/tutorials - チュートリアル定義

**Files:**
- Create: `packages/tutorials/package.json`
- Create: `packages/tutorials/tsconfig.json`
- Create: `packages/tutorials/src/index.ts`
- Create: `packages/tutorials/src/types.ts`
- Create: `packages/tutorials/src/linear-algebra/index.ts`
- Create: `packages/tutorials/src/linear-algebra/basis-vectors.ts`
- Create: `packages/tutorials/src/linear-algebra/linear-transforms.ts`
- Create: `packages/tutorials/src/linear-algebra/matrix-meaning.ts`
- Create: `packages/tutorials/src/linear-algebra/eigenvalues.ts`

**Step 1: tutorials/package.json作成**

```json
{
  "name": "@learnmath/tutorials",
  "version": "0.1.0",
  "type": "module",
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.js",
      "types": "./dist/index.d.ts"
    }
  },
  "scripts": {
    "build": "tsc",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "@learnmath/core": "workspace:*"
  }
}
```

**Step 2: tutorials/tsconfig.json作成**

```json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"]
}
```

**Step 3: types.ts作成**

```typescript
// packages/tutorials/src/types.ts
import { Matrix3, Vector3 } from '@learnmath/core';

export interface TutorialStep {
  id: string;
  title: string;
  content: string;
  sceneConfig: SceneConfig;
  interactive: boolean;
  nextCondition?: 'click' | 'timeout' | 'interaction';
  duration?: number; // ms for timeout
}

export interface SceneConfig {
  showGrid: boolean;
  showAxes: boolean;
  vectors?: VectorConfig[];
  transform?: Matrix3;
  animateTransform?: boolean;
  highlightElements?: string[];
  cameraPosition?: [number, number, number];
}

export interface VectorConfig {
  id: string;
  vector: Vector3;
  color: string;
  label?: string;
  showComponents?: boolean;
}

export interface Tutorial {
  id: string;
  title: string;
  description: string;
  category: 'linear-algebra' | 'trigonometry' | 'calculus' | 'probability';
  steps: TutorialStep[];
  prerequisites?: string[];
}

export interface TutorialCategory {
  id: string;
  name: string;
  description: string;
  tutorials: Tutorial[];
}
```

**Step 4: basis-vectors.ts作成**

```typescript
// packages/tutorials/src/linear-algebra/basis-vectors.ts
import { Vector3, Matrix3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const basisVectorsTutorial: Tutorial = {
  id: 'basis-vectors',
  title: '基底ベクトル',
  description: '3次元空間を張る基本となるベクトルを理解する',
  category: 'linear-algebra',
  steps: [
    {
      id: 'intro',
      title: '3次元空間とは',
      content: '私たちが住む世界は3次元空間です。任意の点は3つの数値（x, y, z）で表現できます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [5, 5, 5]
      },
      interactive: false,
      nextCondition: 'click'
    },
    {
      id: 'i-vector',
      title: 'i ベクトル（X軸方向）',
      content: 'i = (1, 0, 0) はX軸方向の単位ベクトルです。赤色で表示されています。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          { id: 'i', vector: Vector3.i(), color: '#ff4444', label: 'i', showComponents: true }
        ],
        highlightElements: ['i'],
        cameraPosition: [3, 2, 3]
      },
      interactive: true,
      nextCondition: 'click'
    },
    {
      id: 'j-vector',
      title: 'j ベクトル（Y軸方向）',
      content: 'j = (0, 1, 0) はY軸方向の単位ベクトルです。緑色で表示されています。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          { id: 'i', vector: Vector3.i(), color: '#ff4444', label: 'i' },
          { id: 'j', vector: Vector3.j(), color: '#44ff44', label: 'j', showComponents: true }
        ],
        highlightElements: ['j'],
        cameraPosition: [3, 2, 3]
      },
      interactive: true,
      nextCondition: 'click'
    },
    {
      id: 'k-vector',
      title: 'k ベクトル（Z軸方向）',
      content: 'k = (0, 0, 1) はZ軸方向の単位ベクトルです。青色で表示されています。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          { id: 'i', vector: Vector3.i(), color: '#ff4444', label: 'i' },
          { id: 'j', vector: Vector3.j(), color: '#44ff44', label: 'j' },
          { id: 'k', vector: Vector3.k(), color: '#4444ff', label: 'k', showComponents: true }
        ],
        highlightElements: ['k'],
        cameraPosition: [3, 2, 3]
      },
      interactive: true,
      nextCondition: 'click'
    },
    {
      id: 'linear-combination',
      title: '線形結合',
      content: '任意のベクトル v = (2, 1, 3) は、基底ベクトルの線形結合 2i + 1j + 3k として表せます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          { id: 'i', vector: Vector3.i(), color: '#ff4444', label: 'i' },
          { id: 'j', vector: Vector3.j(), color: '#44ff44', label: 'j' },
          { id: 'k', vector: Vector3.k(), color: '#4444ff', label: 'k' },
          { id: 'v', vector: new Vector3(2, 1, 3), color: '#ffff44', label: 'v', showComponents: true }
        ],
        highlightElements: ['v'],
        cameraPosition: [4, 3, 4]
      },
      interactive: true,
      nextCondition: 'click'
    },
    {
      id: 'summary',
      title: 'まとめ',
      content: '基底ベクトル i, j, k があれば、3次元空間のどの点も表現できます。これが「空間を張る」という意味です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          { id: 'i', vector: Vector3.i(), color: '#ff4444', label: 'i' },
          { id: 'j', vector: Vector3.j(), color: '#44ff44', label: 'j' },
          { id: 'k', vector: Vector3.k(), color: '#4444ff', label: 'k' }
        ],
        cameraPosition: [5, 5, 5]
      },
      interactive: true,
      nextCondition: 'click'
    }
  ]
};
```

**Step 5: linear-transforms.ts作成**

```typescript
// packages/tutorials/src/linear-algebra/linear-transforms.ts
import { Vector3, Matrix3, Transforms } from '@learnmath/core';
import { Tutorial } from '../types';

export const linearTransformsTutorial: Tutorial = {
  id: 'linear-transforms',
  title: '線形変換',
  description: '回転、スケール、せん断など、空間を変形する操作を視覚化',
  category: 'linear-algebra',
  prerequisites: ['basis-vectors'],
  steps: [
    {
      id: 'intro',
      title: '線形変換とは',
      content: '線形変換は、空間全体を「まっすぐ」「均一に」変形する操作です。原点は動かず、直線は直線のままです。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          { id: 'i', vector: Vector3.i(), color: '#ff4444', label: 'i' },
          { id: 'j', vector: Vector3.j(), color: '#44ff44', label: 'j' },
          { id: 'k', vector: Vector3.k(), color: '#4444ff', label: 'k' }
        ],
        cameraPosition: [4, 3, 4]
      },
      interactive: false,
      nextCondition: 'click'
    },
    {
      id: 'scale',
      title: 'スケール変換',
      content: '各軸方向に伸縮させる変換です。2倍にスケールすると、すべてのベクトルが2倍の長さになります。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          { id: 'i', vector: Vector3.i(), color: '#ff4444', label: 'i' },
          { id: 'j', vector: Vector3.j(), color: '#44ff44', label: 'j' },
          { id: 'k', vector: Vector3.k(), color: '#4444ff', label: 'k' }
        ],
        transform: Transforms.scale(2, 2, 2),
        animateTransform: true,
        cameraPosition: [5, 4, 5]
      },
      interactive: true,
      nextCondition: 'click'
    },
    {
      id: 'rotation-z',
      title: 'Z軸まわりの回転',
      content: 'Z軸を中心に回転させると、iベクトルとjベクトルが回転し、kベクトルは変化しません。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          { id: 'i', vector: Vector3.i(), color: '#ff4444', label: 'i' },
          { id: 'j', vector: Vector3.j(), color: '#44ff44', label: 'j' },
          { id: 'k', vector: Vector3.k(), color: '#4444ff', label: 'k' }
        ],
        transform: Transforms.rotationZ(Math.PI / 4),
        animateTransform: true,
        cameraPosition: [4, 3, 5]
      },
      interactive: true,
      nextCondition: 'click'
    },
    {
      id: 'shear',
      title: 'せん断変換',
      content: 'せん断は平行四辺形を作る変換です。一方向にずらすことで、空間を歪ませます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          { id: 'i', vector: Vector3.i(), color: '#ff4444', label: 'i' },
          { id: 'j', vector: Vector3.j(), color: '#44ff44', label: 'j' },
          { id: 'k', vector: Vector3.k(), color: '#4444ff', label: 'k' }
        ],
        transform: Transforms.shearXY(0.5),
        animateTransform: true,
        cameraPosition: [4, 3, 4]
      },
      interactive: true,
      nextCondition: 'click'
    },
    {
      id: 'composition',
      title: '変換の合成',
      content: '複数の変換を順番に適用できます。これが行列の積に対応します。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          { id: 'i', vector: Vector3.i(), color: '#ff4444', label: 'i' },
          { id: 'j', vector: Vector3.j(), color: '#44ff44', label: 'j' },
          { id: 'k', vector: Vector3.k(), color: '#4444ff', label: 'k' }
        ],
        transform: Transforms.rotationZ(Math.PI / 6).compose(Transforms.scale(1.5, 1.5, 1)),
        animateTransform: true,
        cameraPosition: [4, 3, 4]
      },
      interactive: true,
      nextCondition: 'click'
    }
  ]
};
```

**Step 6: matrix-meaning.ts作成**

```typescript
// packages/tutorials/src/linear-algebra/matrix-meaning.ts
import { Vector3, Matrix3 } from '@learnmath/core';
import { Tutorial } from '../types';

export const matrixMeaningTutorial: Tutorial = {
  id: 'matrix-meaning',
  title: '行列の意味',
  description: '行列の各列が基底ベクトルの行き先を表すことを理解する',
  category: 'linear-algebra',
  prerequisites: ['basis-vectors', 'linear-transforms'],
  steps: [
    {
      id: 'intro',
      title: '行列とは何か',
      content: '行列は線形変換を数値で表現したものです。3x3行列には9つの数値が並びますが、これには深い意味があります。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          { id: 'i', vector: Vector3.i(), color: '#ff4444', label: 'i' },
          { id: 'j', vector: Vector3.j(), color: '#44ff44', label: 'j' },
          { id: 'k', vector: Vector3.k(), color: '#4444ff', label: 'k' }
        ],
        cameraPosition: [4, 3, 4]
      },
      interactive: false,
      nextCondition: 'click'
    },
    {
      id: 'column-meaning',
      title: '列の意味',
      content: '行列の第1列は「iベクトルがどこに移動するか」を表します。同様に第2列はj、第3列はkの移動先です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          { id: 'i', vector: Vector3.i(), color: '#ff4444', label: 'i → 第1列' },
          { id: 'j', vector: Vector3.j(), color: '#44ff44', label: 'j → 第2列' },
          { id: 'k', vector: Vector3.k(), color: '#4444ff', label: 'k → 第3列' }
        ],
        cameraPosition: [4, 3, 4]
      },
      interactive: true,
      nextCondition: 'click'
    },
    {
      id: 'example-rotation',
      title: '例：90度回転',
      content: 'Z軸まわり90度回転では、i→j、j→-i となります。行列は [[0,-1,0],[1,0,0],[0,0,1]] です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          { id: 'i', vector: Vector3.i(), color: '#ff4444', label: 'i' },
          { id: 'j', vector: Vector3.j(), color: '#44ff44', label: 'j' },
          { id: 'k', vector: Vector3.k(), color: '#4444ff', label: 'k' },
          { id: 'i-new', vector: new Vector3(0, 1, 0), color: '#ff8888', label: "i'" },
          { id: 'j-new', vector: new Vector3(-1, 0, 0), color: '#88ff88', label: "j'" }
        ],
        cameraPosition: [4, 4, 3]
      },
      interactive: true,
      nextCondition: 'click'
    },
    {
      id: 'any-vector',
      title: '任意のベクトルの変換',
      content: 'v = ai + bj + ck は変換後 v\' = a(新i) + b(新j) + c(新k) になります。これが行列とベクトルの積です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          { id: 'v', vector: new Vector3(1, 2, 0), color: '#ffff44', label: 'v = i + 2j', showComponents: true }
        ],
        transform: new Matrix3([0, -1, 0, 1, 0, 0, 0, 0, 1]),
        animateTransform: true,
        cameraPosition: [4, 4, 3]
      },
      interactive: true,
      nextCondition: 'click'
    }
  ]
};
```

**Step 7: eigenvalues.ts作成**

```typescript
// packages/tutorials/src/linear-algebra/eigenvalues.ts
import { Vector3, Transforms } from '@learnmath/core';
import { Tutorial } from '../types';

export const eigenvaluesTutorial: Tutorial = {
  id: 'eigenvalues',
  title: '固有値と固有ベクトル',
  description: '変換しても方向が変わらない特別なベクトルを見つける',
  category: 'linear-algebra',
  prerequisites: ['matrix-meaning'],
  steps: [
    {
      id: 'intro',
      title: '固有ベクトルとは',
      content: '線形変換で「方向が変わらない」特別なベクトルがあります。伸び縮みはしても、向きは同じです。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [4, 3, 4]
      },
      interactive: false,
      nextCondition: 'click'
    },
    {
      id: 'scale-example',
      title: '例：スケール変換',
      content: 'スケール変換では全てのベクトルが固有ベクトルです。方向を変えずに伸縮するだけだからです。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          { id: 'v1', vector: new Vector3(1, 1, 0).normalize(), color: '#ff44ff', label: 'v' }
        ],
        transform: Transforms.scale(2, 2, 1),
        animateTransform: true,
        highlightElements: ['v1'],
        cameraPosition: [3, 3, 4]
      },
      interactive: true,
      nextCondition: 'click'
    },
    {
      id: 'rotation-axis',
      title: '回転の固有ベクトル',
      content: '回転変換では、回転軸方向のベクトルだけが固有ベクトルです。軸上のベクトルは回転しても動きません。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          { id: 'axis', vector: Vector3.k(), color: '#ffff44', label: '回転軸 (固有ベクトル)' },
          { id: 'other', vector: new Vector3(1, 0, 0), color: '#ff4444', label: '回転する' }
        ],
        transform: Transforms.rotationZ(Math.PI / 3),
        animateTransform: true,
        highlightElements: ['axis'],
        cameraPosition: [4, 3, 5]
      },
      interactive: true,
      nextCondition: 'click'
    },
    {
      id: 'eigenvalue',
      title: '固有値',
      content: '固有ベクトルが変換で何倍になるかを「固有値」と呼びます。Av = λv の λ が固有値です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        vectors: [
          { id: 'eigen', vector: new Vector3(1, 0, 0), color: '#44ffff', label: 'v (固有ベクトル)' }
        ],
        transform: Transforms.scale(2, 1, 1),
        animateTransform: true,
        cameraPosition: [4, 2, 3]
      },
      interactive: true,
      nextCondition: 'click'
    },
    {
      id: 'summary',
      title: 'まとめ',
      content: '固有ベクトル = 方向が変わらないベクトル、固有値 = 何倍になるか。これは行列の「本質」を表します。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [5, 4, 5]
      },
      interactive: false,
      nextCondition: 'click'
    }
  ]
};
```

**Step 8: linear-algebra/index.ts作成**

```typescript
// packages/tutorials/src/linear-algebra/index.ts
export { basisVectorsTutorial } from './basis-vectors';
export { linearTransformsTutorial } from './linear-transforms';
export { matrixMeaningTutorial } from './matrix-meaning';
export { eigenvaluesTutorial } from './eigenvalues';

import { TutorialCategory } from '../types';
import { basisVectorsTutorial } from './basis-vectors';
import { linearTransformsTutorial } from './linear-transforms';
import { matrixMeaningTutorial } from './matrix-meaning';
import { eigenvaluesTutorial } from './eigenvalues';

export const linearAlgebraCategory: TutorialCategory = {
  id: 'linear-algebra',
  name: '線形代数',
  description: 'ベクトル、行列、線形変換を3Dで視覚的に理解する',
  tutorials: [
    basisVectorsTutorial,
    linearTransformsTutorial,
    matrixMeaningTutorial,
    eigenvaluesTutorial
  ]
};
```

**Step 9: tutorials/src/index.ts作成**

```typescript
// packages/tutorials/src/index.ts
export * from './types';
export * from './linear-algebra';

import { TutorialCategory } from './types';
import { linearAlgebraCategory } from './linear-algebra';

export const allCategories: TutorialCategory[] = [
  linearAlgebraCategory
];

export function getTutorialById(id: string) {
  for (const category of allCategories) {
    const tutorial = category.tutorials.find(t => t.id === id);
    if (tutorial) return tutorial;
  }
  return null;
}
```

**Step 10: pnpm installと型チェック**

```bash
cd packages/tutorials && pnpm install && pnpm typecheck
```

**Step 11: ビルド**

```bash
pnpm build
```

**Step 12: コミット**

```bash
git add packages/tutorials
git commit -m "feat(tutorials): add linear algebra tutorials"
```

---

## Task 4: apps/web - Webアプリ基盤

**Files:**
- Create: `apps/web/package.json`
- Create: `apps/web/tsconfig.json`
- Create: `apps/web/vite.config.ts`
- Create: `apps/web/index.html`
- Create: `apps/web/tailwind.config.js`
- Create: `apps/web/postcss.config.js`
- Create: `apps/web/src/main.tsx`
- Create: `apps/web/src/App.tsx`
- Create: `apps/web/src/index.css`
- Create: `apps/web/src/store/index.ts`

**Step 1: web/package.json作成**

```json
{
  "name": "@learnmath/web",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "@learnmath/core": "workspace:*",
    "@learnmath/tutorials": "workspace:*",
    "@react-three/drei": "^9.97.0",
    "@react-three/fiber": "^8.15.0",
    "framer-motion": "^11.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.22.0",
    "three": "^0.161.0",
    "zustand": "^4.5.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.55",
    "@types/react-dom": "^18.2.19",
    "@types/three": "^0.161.0",
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.17",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "vite": "^5.1.0"
  }
}
```

**Step 2: web/tsconfig.json作成**

```json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "jsx": "react-jsx",
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    },
    "noEmit": true
  },
  "include": ["src/**/*"],
  "references": [
    { "path": "../../packages/core" },
    { "path": "../../packages/tutorials" }
  ]
}
```

**Step 3: vite.config.ts作成**

```typescript
// apps/web/vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});
```

**Step 4: index.html作成**

```html
<!-- apps/web/index.html -->
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>LearnMath - 数学を視覚的に学ぶ</title>
  </head>
  <body class="bg-gray-900 text-white">
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

**Step 5: tailwind.config.js作成**

```javascript
// apps/web/tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366f1',
        secondary: '#22d3ee',
        accent: '#f472b6',
      }
    },
  },
  plugins: [],
}
```

**Step 6: postcss.config.js作成**

```javascript
// apps/web/postcss.config.js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

**Step 7: src/index.css作成**

```css
/* apps/web/src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  background-color: #0f172a;
  color: #e2e8f0;
}

#root {
  min-height: 100vh;
}
```

**Step 8: src/store/index.ts作成**

```typescript
// apps/web/src/store/index.ts
import { create } from 'zustand';
import { Tutorial, TutorialStep } from '@learnmath/tutorials';

interface TutorialState {
  currentTutorial: Tutorial | null;
  currentStepIndex: number;
  isPlaying: boolean;
  animationProgress: number;

  setTutorial: (tutorial: Tutorial) => void;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (index: number) => void;
  setPlaying: (playing: boolean) => void;
  setAnimationProgress: (progress: number) => void;
  reset: () => void;
}

export const useTutorialStore = create<TutorialState>((set, get) => ({
  currentTutorial: null,
  currentStepIndex: 0,
  isPlaying: false,
  animationProgress: 0,

  setTutorial: (tutorial) => set({
    currentTutorial: tutorial,
    currentStepIndex: 0,
    animationProgress: 0
  }),

  nextStep: () => {
    const { currentTutorial, currentStepIndex } = get();
    if (currentTutorial && currentStepIndex < currentTutorial.steps.length - 1) {
      set({ currentStepIndex: currentStepIndex + 1, animationProgress: 0 });
    }
  },

  prevStep: () => {
    const { currentStepIndex } = get();
    if (currentStepIndex > 0) {
      set({ currentStepIndex: currentStepIndex - 1, animationProgress: 0 });
    }
  },

  goToStep: (index) => set({ currentStepIndex: index, animationProgress: 0 }),

  setPlaying: (playing) => set({ isPlaying: playing }),

  setAnimationProgress: (progress) => set({ animationProgress: progress }),

  reset: () => set({
    currentTutorial: null,
    currentStepIndex: 0,
    isPlaying: false,
    animationProgress: 0
  })
}));

interface SandboxState {
  matrix: number[];
  showGrid: boolean;
  showAxes: boolean;
  showVectors: boolean;

  setMatrix: (matrix: number[]) => void;
  setMatrixElement: (index: number, value: number) => void;
  toggleGrid: () => void;
  toggleAxes: () => void;
  toggleVectors: () => void;
  resetMatrix: () => void;
}

export const useSandboxStore = create<SandboxState>((set) => ({
  matrix: [1, 0, 0, 0, 1, 0, 0, 0, 1],
  showGrid: true,
  showAxes: true,
  showVectors: true,

  setMatrix: (matrix) => set({ matrix }),

  setMatrixElement: (index, value) => set((state) => {
    const newMatrix = [...state.matrix];
    newMatrix[index] = value;
    return { matrix: newMatrix };
  }),

  toggleGrid: () => set((state) => ({ showGrid: !state.showGrid })),
  toggleAxes: () => set((state) => ({ showAxes: !state.showAxes })),
  toggleVectors: () => set((state) => ({ showVectors: !state.showVectors })),

  resetMatrix: () => set({ matrix: [1, 0, 0, 0, 1, 0, 0, 0, 1] })
}));
```

**Step 9: src/main.tsx作成**

```typescript
// apps/web/src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

**Step 10: src/App.tsx作成**

```typescript
// apps/web/src/App.tsx
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TutorialPage from './pages/TutorialPage';
import SandboxPage from './pages/SandboxPage';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tutorial/:id" element={<TutorialPage />} />
        <Route path="/sandbox" element={<SandboxPage />} />
      </Routes>
    </div>
  );
}
```

**Step 11: ページコンポーネントのスタブ作成**

```bash
mkdir -p apps/web/src/pages apps/web/src/components/scene apps/web/src/components/ui
```

```typescript
// apps/web/src/pages/HomePage.tsx
import { Link } from 'react-router-dom';
import { allCategories } from '@learnmath/tutorials';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        LearnMath
      </h1>
      <p className="text-xl text-gray-400 text-center mb-12">
        数学を視覚的に学ぶ
      </p>

      <div className="grid gap-8">
        {allCategories.map((category) => (
          <div key={category.id} className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">{category.name}</h2>
            <p className="text-gray-400 mb-6">{category.description}</p>

            <div className="grid md:grid-cols-2 gap-4">
              {category.tutorials.map((tutorial) => (
                <Link
                  key={tutorial.id}
                  to={`/tutorial/${tutorial.id}`}
                  className="block bg-slate-700 hover:bg-slate-600 rounded-lg p-4 transition-colors"
                >
                  <h3 className="text-lg font-medium">{tutorial.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">
                    {tutorial.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          to="/sandbox"
          className="inline-block bg-indigo-600 hover:bg-indigo-500 px-8 py-3 rounded-lg font-medium transition-colors"
        >
          サンドボックスで実験する
        </Link>
      </div>
    </div>
  );
}
```

```typescript
// apps/web/src/pages/TutorialPage.tsx
import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { getTutorialById } from '@learnmath/tutorials';
import { useTutorialStore } from '@/store';
import Scene3D from '@/components/scene/Scene3D';
import TutorialControls from '@/components/ui/TutorialControls';

export default function TutorialPage() {
  const { id } = useParams<{ id: string }>();
  const { currentTutorial, currentStepIndex, setTutorial } = useTutorialStore();

  useEffect(() => {
    if (id) {
      const tutorial = getTutorialById(id);
      if (tutorial) {
        setTutorial(tutorial);
      }
    }
  }, [id, setTutorial]);

  if (!currentTutorial) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-xl mb-4">チュートリアルが見つかりません</p>
          <Link to="/" className="text-indigo-400 hover:underline">
            ホームに戻る
          </Link>
        </div>
      </div>
    );
  }

  const currentStep = currentTutorial.steps[currentStepIndex];

  return (
    <div className="h-screen flex flex-col">
      <header className="bg-slate-800 px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-gray-400 hover:text-white">
          ← 戻る
        </Link>
        <h1 className="text-lg font-medium">{currentTutorial.title}</h1>
        <div className="text-gray-400">
          {currentStepIndex + 1} / {currentTutorial.steps.length}
        </div>
      </header>

      <div className="flex-1 flex">
        <div className="flex-1 relative">
          <Scene3D sceneConfig={currentStep.sceneConfig} />
        </div>

        <aside className="w-80 bg-slate-800 p-4 flex flex-col">
          <h2 className="text-xl font-semibold mb-2">{currentStep.title}</h2>
          <p className="text-gray-300 flex-1">{currentStep.content}</p>
          <TutorialControls />
        </aside>
      </div>
    </div>
  );
}
```

```typescript
// apps/web/src/pages/SandboxPage.tsx
import { Link } from 'react-router-dom';
import Scene3D from '@/components/scene/Scene3D';
import MatrixEditor from '@/components/ui/MatrixEditor';
import { useSandboxStore } from '@/store';

export default function SandboxPage() {
  const { matrix, showGrid, showAxes } = useSandboxStore();

  const sceneConfig = {
    showGrid,
    showAxes,
    vectors: [
      { id: 'i', vector: { x: 1, y: 0, z: 0 }, color: '#ff4444', label: 'i' },
      { id: 'j', vector: { x: 0, y: 1, z: 0 }, color: '#44ff44', label: 'j' },
      { id: 'k', vector: { x: 0, y: 0, z: 1 }, color: '#4444ff', label: 'k' }
    ],
    transform: { elements: matrix },
    animateTransform: false
  };

  return (
    <div className="h-screen flex flex-col">
      <header className="bg-slate-800 px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-gray-400 hover:text-white">
          ← 戻る
        </Link>
        <h1 className="text-lg font-medium">サンドボックス</h1>
        <div />
      </header>

      <div className="flex-1 flex">
        <div className="flex-1 relative">
          <Scene3D sceneConfig={sceneConfig} />
        </div>

        <aside className="w-96 bg-slate-800 p-4 overflow-y-auto">
          <h2 className="text-xl font-semibold mb-4">変換行列</h2>
          <MatrixEditor />
        </aside>
      </div>
    </div>
  );
}
```

**Step 12: pnpm installと確認**

```bash
cd apps/web && pnpm install
```

**Step 13: コミット**

```bash
git add apps/web
git commit -m "feat(web): scaffold web app with pages and store"
```

---

## Task 5: 3Dシーンコンポーネント

**Files:**
- Create: `apps/web/src/components/scene/Scene3D.tsx`
- Create: `apps/web/src/components/scene/Grid3D.tsx`
- Create: `apps/web/src/components/scene/Axes3D.tsx`
- Create: `apps/web/src/components/scene/Vector3D.tsx`
- Create: `apps/web/src/components/scene/TransformableGroup.tsx`

**Step 1: Scene3D.tsx作成**

```typescript
// apps/web/src/components/scene/Scene3D.tsx
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { SceneConfig } from '@learnmath/tutorials';
import Grid3D from './Grid3D';
import Axes3D from './Axes3D';
import Vector3D from './Vector3D';
import TransformableGroup from './TransformableGroup';

interface Scene3DProps {
  sceneConfig: SceneConfig;
}

export default function Scene3D({ sceneConfig }: Scene3DProps) {
  const {
    showGrid,
    showAxes,
    vectors = [],
    transform,
    animateTransform,
    cameraPosition = [5, 5, 5]
  } = sceneConfig;

  return (
    <Canvas className="w-full h-full">
      <PerspectiveCamera
        makeDefault
        position={cameraPosition}
        fov={50}
      />
      <OrbitControls
        enableDamping
        dampingFactor={0.05}
        minDistance={2}
        maxDistance={20}
      />

      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} />

      <color attach="background" args={['#0f172a']} />

      {showGrid && <Grid3D />}
      {showAxes && <Axes3D />}

      <TransformableGroup
        matrix={transform?.elements}
        animate={animateTransform}
      >
        {vectors.map((vec) => (
          <Vector3D
            key={vec.id}
            vector={[vec.vector.x, vec.vector.y, vec.vector.z]}
            color={vec.color}
            label={vec.label}
            showComponents={vec.showComponents}
          />
        ))}
      </TransformableGroup>
    </Canvas>
  );
}
```

**Step 2: Grid3D.tsx作成**

```typescript
// apps/web/src/components/scene/Grid3D.tsx
import { Grid } from '@react-three/drei';

export default function Grid3D() {
  return (
    <Grid
      args={[20, 20]}
      cellSize={1}
      cellThickness={0.5}
      cellColor="#334155"
      sectionSize={5}
      sectionThickness={1}
      sectionColor="#475569"
      fadeDistance={30}
      fadeStrength={1}
      followCamera={false}
      infiniteGrid
    />
  );
}
```

**Step 3: Axes3D.tsx作成**

```typescript
// apps/web/src/components/scene/Axes3D.tsx
import { Line, Text } from '@react-three/drei';

const AXIS_LENGTH = 5;

export default function Axes3D() {
  return (
    <group>
      {/* X Axis - Red */}
      <Line
        points={[[0, 0, 0], [AXIS_LENGTH, 0, 0]]}
        color="#ef4444"
        lineWidth={2}
      />
      <Text
        position={[AXIS_LENGTH + 0.3, 0, 0]}
        fontSize={0.3}
        color="#ef4444"
      >
        X
      </Text>

      {/* Y Axis - Green */}
      <Line
        points={[[0, 0, 0], [0, AXIS_LENGTH, 0]]}
        color="#22c55e"
        lineWidth={2}
      />
      <Text
        position={[0, AXIS_LENGTH + 0.3, 0]}
        fontSize={0.3}
        color="#22c55e"
      >
        Y
      </Text>

      {/* Z Axis - Blue */}
      <Line
        points={[[0, 0, 0], [0, 0, AXIS_LENGTH]]}
        color="#3b82f6"
        lineWidth={2}
      />
      <Text
        position={[0, 0, AXIS_LENGTH + 0.3]}
        fontSize={0.3}
        color="#3b82f6"
      >
        Z
      </Text>
    </group>
  );
}
```

**Step 4: Vector3D.tsx作成**

```typescript
// apps/web/src/components/scene/Vector3D.tsx
import { useRef } from 'react';
import { Line, Cone, Text } from '@react-three/drei';
import * as THREE from 'three';

interface Vector3DProps {
  vector: [number, number, number];
  color: string;
  label?: string;
  showComponents?: boolean;
  origin?: [number, number, number];
}

export default function Vector3D({
  vector,
  color,
  label,
  showComponents,
  origin = [0, 0, 0]
}: Vector3DProps) {
  const [x, y, z] = vector;
  const [ox, oy, oz] = origin;
  const endPoint: [number, number, number] = [ox + x, oy + y, oz + z];

  // Calculate arrow head rotation
  const direction = new THREE.Vector3(x, y, z).normalize();
  const arrowLength = 0.15;
  const arrowPosition = new THREE.Vector3(...endPoint)
    .sub(direction.clone().multiplyScalar(arrowLength));

  const quaternion = new THREE.Quaternion();
  quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction);

  return (
    <group>
      {/* Main vector line */}
      <Line
        points={[origin, endPoint]}
        color={color}
        lineWidth={3}
      />

      {/* Arrow head */}
      <Cone
        args={[0.08, arrowLength, 8]}
        position={arrowPosition.toArray()}
        quaternion={quaternion}
      >
        <meshBasicMaterial color={color} />
      </Cone>

      {/* Label */}
      {label && (
        <Text
          position={[endPoint[0] + 0.2, endPoint[1] + 0.2, endPoint[2]]}
          fontSize={0.25}
          color={color}
          anchorX="left"
        >
          {label}
        </Text>
      )}

      {/* Component lines (dashed) */}
      {showComponents && (
        <group>
          <Line
            points={[[ox, oy, oz], [ox + x, oy, oz]]}
            color={color}
            lineWidth={1}
            dashed
            dashSize={0.1}
            gapSize={0.05}
          />
          <Line
            points={[[ox + x, oy, oz], [ox + x, oy + y, oz]]}
            color={color}
            lineWidth={1}
            dashed
            dashSize={0.1}
            gapSize={0.05}
          />
          <Line
            points={[[ox + x, oy + y, oz], endPoint]}
            color={color}
            lineWidth={1}
            dashed
            dashSize={0.1}
            gapSize={0.05}
          />
        </group>
      )}
    </group>
  );
}
```

**Step 5: TransformableGroup.tsx作成**

```typescript
// apps/web/src/components/scene/TransformableGroup.tsx
import { useRef, ReactNode } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useTutorialStore } from '@/store';

interface TransformableGroupProps {
  children: ReactNode;
  matrix?: readonly number[];
  animate?: boolean;
}

export default function TransformableGroup({
  children,
  matrix,
  animate
}: TransformableGroupProps) {
  const groupRef = useRef<THREE.Group>(null);
  const { animationProgress, setAnimationProgress, isPlaying } = useTutorialStore();

  useFrame((_, delta) => {
    if (!groupRef.current || !matrix) return;

    const identity = [1, 0, 0, 0, 1, 0, 0, 0, 1];
    const targetMatrix = matrix;

    if (animate && isPlaying) {
      const newProgress = Math.min(animationProgress + delta * 0.5, 1);
      setAnimationProgress(newProgress);

      // Interpolate between identity and target
      const interpolated = identity.map((v, i) =>
        v + (targetMatrix[i] - v) * easeInOutCubic(newProgress)
      );

      applyMatrix3ToGroup(groupRef.current, interpolated);
    } else if (!animate && matrix) {
      applyMatrix3ToGroup(groupRef.current, [...targetMatrix]);
    }
  });

  return <group ref={groupRef}>{children}</group>;
}

function applyMatrix3ToGroup(group: THREE.Group, m: number[]) {
  // Convert 3x3 to 4x4 matrix
  const matrix4 = new THREE.Matrix4().set(
    m[0], m[1], m[2], 0,
    m[3], m[4], m[5], 0,
    m[6], m[7], m[8], 0,
    0, 0, 0, 1
  );

  group.matrix.copy(matrix4);
  group.matrixAutoUpdate = false;
}

function easeInOutCubic(t: number): number {
  return t < 0.5
    ? 4 * t * t * t
    : 1 - Math.pow(-2 * t + 2, 3) / 2;
}
```

**Step 6: コミット**

```bash
git add apps/web/src/components/scene
git commit -m "feat(web): add 3D scene components"
```

---

## Task 6: UIコンポーネント

**Files:**
- Create: `apps/web/src/components/ui/TutorialControls.tsx`
- Create: `apps/web/src/components/ui/MatrixEditor.tsx`
- Create: `apps/web/src/components/ui/ProgressBar.tsx`
- Create: `apps/web/src/components/ui/Button.tsx`

**Step 1: Button.tsx作成**

```typescript
// apps/web/src/components/ui/Button.tsx
import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', ...props }, ref) => {
    const baseStyles = 'font-medium rounded-lg transition-colors disabled:opacity-50';

    const variants = {
      primary: 'bg-indigo-600 hover:bg-indigo-500 text-white',
      secondary: 'bg-slate-700 hover:bg-slate-600 text-white',
      ghost: 'bg-transparent hover:bg-slate-700 text-gray-300'
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2',
      lg: 'px-6 py-3 text-lg'
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export default Button;
```

**Step 2: ProgressBar.tsx作成**

```typescript
// apps/web/src/components/ui/ProgressBar.tsx
interface ProgressBarProps {
  current: number;
  total: number;
  onStepClick?: (index: number) => void;
}

export default function ProgressBar({ current, total, onStepClick }: ProgressBarProps) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onStepClick?.(i)}
          className={`h-2 flex-1 rounded-full transition-colors ${
            i === current
              ? 'bg-indigo-500'
              : i < current
              ? 'bg-indigo-700'
              : 'bg-slate-600'
          }`}
          aria-label={`Step ${i + 1}`}
        />
      ))}
    </div>
  );
}
```

**Step 3: TutorialControls.tsx作成**

```typescript
// apps/web/src/components/ui/TutorialControls.tsx
import { useTutorialStore } from '@/store';
import Button from './Button';
import ProgressBar from './ProgressBar';

export default function TutorialControls() {
  const {
    currentTutorial,
    currentStepIndex,
    isPlaying,
    nextStep,
    prevStep,
    goToStep,
    setPlaying
  } = useTutorialStore();

  if (!currentTutorial) return null;

  const isFirst = currentStepIndex === 0;
  const isLast = currentStepIndex === currentTutorial.steps.length - 1;
  const currentStep = currentTutorial.steps[currentStepIndex];

  const handlePlayPause = () => {
    setPlaying(!isPlaying);
  };

  return (
    <div className="space-y-4">
      <ProgressBar
        current={currentStepIndex}
        total={currentTutorial.steps.length}
        onStepClick={goToStep}
      />

      <div className="flex items-center justify-between gap-2">
        <Button
          variant="secondary"
          onClick={prevStep}
          disabled={isFirst}
        >
          ← 戻る
        </Button>

        {currentStep.animateTransform && (
          <Button
            variant="ghost"
            onClick={handlePlayPause}
          >
            {isPlaying ? '⏸ 停止' : '▶ 再生'}
          </Button>
        )}

        <Button
          variant="primary"
          onClick={nextStep}
          disabled={isLast}
        >
          次へ →
        </Button>
      </div>

      {isLast && (
        <p className="text-center text-green-400 text-sm">
          🎉 チュートリアル完了！
        </p>
      )}
    </div>
  );
}
```

**Step 4: MatrixEditor.tsx作成**

```typescript
// apps/web/src/components/ui/MatrixEditor.tsx
import { useSandboxStore } from '@/store';
import Button from './Button';
import { Transforms } from '@learnmath/core';

export default function MatrixEditor() {
  const {
    matrix,
    setMatrixElement,
    setMatrix,
    resetMatrix,
    showGrid,
    showAxes,
    toggleGrid,
    toggleAxes
  } = useSandboxStore();

  const presets = [
    { name: '単位行列', matrix: [1, 0, 0, 0, 1, 0, 0, 0, 1] },
    { name: '2倍スケール', matrix: Transforms.scale(2, 2, 2).toArray() },
    { name: 'X軸2倍', matrix: Transforms.scale(2, 1, 1).toArray() },
    { name: 'Z軸回転45°', matrix: [...Transforms.rotationZ(Math.PI / 4).toArray()] },
    { name: 'せん断', matrix: [...Transforms.shearXY(0.5).toArray()] },
    { name: 'XY反射', matrix: [...Transforms.reflectionXY().toArray()] }
  ];

  return (
    <div className="space-y-6">
      {/* Matrix input grid */}
      <div className="bg-slate-900 rounded-lg p-4">
        <div className="grid grid-cols-3 gap-2">
          {matrix.map((value, i) => (
            <input
              key={i}
              type="number"
              step="0.1"
              value={value}
              onChange={(e) => setMatrixElement(i, parseFloat(e.target.value) || 0)}
              className="bg-slate-700 border border-slate-600 rounded px-2 py-1 text-center w-full focus:outline-none focus:border-indigo-500"
            />
          ))}
        </div>
      </div>

      {/* Presets */}
      <div>
        <h3 className="text-sm font-medium text-gray-400 mb-2">プリセット</h3>
        <div className="grid grid-cols-2 gap-2">
          {presets.map((preset) => (
            <Button
              key={preset.name}
              variant="secondary"
              size="sm"
              onClick={() => setMatrix([...preset.matrix])}
            >
              {preset.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div>
        <h3 className="text-sm font-medium text-gray-400 mb-2">表示</h3>
        <div className="flex gap-2">
          <Button
            variant={showGrid ? 'primary' : 'secondary'}
            size="sm"
            onClick={toggleGrid}
          >
            グリッド
          </Button>
          <Button
            variant={showAxes ? 'primary' : 'secondary'}
            size="sm"
            onClick={toggleAxes}
          >
            軸
          </Button>
        </div>
      </div>

      {/* Reset */}
      <Button
        variant="ghost"
        onClick={resetMatrix}
        className="w-full"
      >
        リセット
      </Button>

      {/* Matrix info */}
      <div className="bg-slate-900 rounded-lg p-4 text-sm">
        <p className="text-gray-400">
          行列式: <span className="text-white font-mono">
            {calculateDeterminant(matrix).toFixed(2)}
          </span>
        </p>
      </div>
    </div>
  );
}

function calculateDeterminant(m: number[]): number {
  return (
    m[0] * (m[4] * m[8] - m[5] * m[7]) -
    m[1] * (m[3] * m[8] - m[5] * m[6]) +
    m[2] * (m[3] * m[7] - m[4] * m[6])
  );
}
```

**Step 5: コミット**

```bash
git add apps/web/src/components/ui
git commit -m "feat(web): add UI components"
```

---

## Task 7: アプリ動作確認と調整

**Step 1: 全パッケージインストール**

```bash
cd /Users/toshikimatsukuma/WorkSpace/LearnMath
pnpm install
```

**Step 2: パッケージビルド**

```bash
pnpm --filter @learnmath/core build
pnpm --filter @learnmath/tutorials build
```

**Step 3: Webアプリ起動**

```bash
pnpm dev
```
Expected: http://localhost:5173 でアプリが起動

**Step 4: 動作確認**
- ホームページ表示
- チュートリアル選択と進行
- サンドボックスで行列編集

**Step 5: 型エラー・警告修正**

**Step 6: コミット**

```bash
git add .
git commit -m "feat: complete web app MVP"
```

---

## Task 8: apps/mobile - React Native基盤

**Files:**
- Create: `apps/mobile/package.json`
- Create: `apps/mobile/app.json`
- Create: `apps/mobile/tsconfig.json`
- Create: `apps/mobile/App.tsx`
- Create: `apps/mobile/babel.config.js`

**Step 1: Expo プロジェクト初期化**

```bash
cd apps/mobile
npx create-expo-app@latest . --template blank-typescript
```

**Step 2: 依存追加**

```bash
pnpm add @learnmath/core @learnmath/tutorials
pnpm add expo-gl @react-three/fiber three
pnpm add zustand react-native-reanimated
```

**Step 3: App.tsx作成**

```typescript
// apps/mobile/App.tsx
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { allCategories } from '@learnmath/tutorials';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LearnMath</Text>
      <Text style={styles.subtitle}>数学を視覚的に学ぶ</Text>

      {allCategories.map((category) => (
        <View key={category.id} style={styles.category}>
          <Text style={styles.categoryTitle}>{category.name}</Text>
          {category.tutorials.map((tutorial) => (
            <Text key={tutorial.id} style={styles.tutorial}>
              • {tutorial.title}
            </Text>
          ))}
        </View>
      ))}

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#94a3b8',
    textAlign: 'center',
    marginBottom: 30,
  },
  category: {
    backgroundColor: '#1e293b',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 8,
  },
  tutorial: {
    fontSize: 16,
    color: '#cbd5e1',
    marginLeft: 8,
    marginTop: 4,
  },
});
```

**Step 4: コミット**

```bash
git add apps/mobile
git commit -m "feat(mobile): scaffold React Native app"
```

---

## Task 9: 三角関数モジュール追加

**Files:**
- Create: `packages/core/src/trigonometry.ts`
- Create: `packages/tutorials/src/trigonometry/index.ts`
- Create: `packages/tutorials/src/trigonometry/unit-circle.ts`

（線形代数完了後、同様のパターンで実装）

---

## 以降の拡張タスク

- Task 10: 微積分モジュール
- Task 11: 確率統計モジュール
- Task 12: 対数・指数関数モジュール
- Task 13: 集合と位相モジュール（2D可視化）
- Task 14: テスト追加（Vitest + React Testing Library）
- Task 15: CI/CD設定（GitHub Actions）
- Task 16: デプロイ（Vercel for Web, Expo for Mobile）
