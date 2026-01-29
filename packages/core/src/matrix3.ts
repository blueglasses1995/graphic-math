import { Vector3 } from './vector3';

export class Matrix3 {
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
    return new Vector3(this.get(0, col), this.get(1, col), this.get(2, col));
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
    return new Matrix3([1, 0, 0, 0, 1, 0, 0, 0, 1]);
  }

  static zero(): Matrix3 {
    return new Matrix3([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  }

  static fromColumns(c1: Vector3, c2: Vector3, c3: Vector3): Matrix3 {
    return new Matrix3([c1.x, c2.x, c3.x, c1.y, c2.y, c3.y, c1.z, c2.z, c3.z]);
  }
}
