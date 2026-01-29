import { Matrix3 } from './matrix3';

export class Transforms {
  static rotationX(angle: number): Matrix3 {
    const c = Math.cos(angle);
    const s = Math.sin(angle);
    return new Matrix3([1, 0, 0, 0, c, -s, 0, s, c]);
  }

  static rotationY(angle: number): Matrix3 {
    const c = Math.cos(angle);
    const s = Math.sin(angle);
    return new Matrix3([c, 0, s, 0, 1, 0, -s, 0, c]);
  }

  static rotationZ(angle: number): Matrix3 {
    const c = Math.cos(angle);
    const s = Math.sin(angle);
    return new Matrix3([c, -s, 0, s, c, 0, 0, 0, 1]);
  }

  static scale(sx: number, sy: number, sz: number): Matrix3 {
    return new Matrix3([sx, 0, 0, 0, sy, 0, 0, 0, sz]);
  }

  static shearXY(factor: number): Matrix3 {
    return new Matrix3([1, factor, 0, 0, 1, 0, 0, 0, 1]);
  }

  static shearXZ(factor: number): Matrix3 {
    return new Matrix3([1, 0, factor, 0, 1, 0, 0, 0, 1]);
  }

  static shearYZ(factor: number): Matrix3 {
    return new Matrix3([1, 0, 0, 0, 1, factor, 0, 0, 1]);
  }

  static reflectionXY(): Matrix3 {
    return new Matrix3([1, 0, 0, 0, 1, 0, 0, 0, -1]);
  }

  static reflectionXZ(): Matrix3 {
    return new Matrix3([1, 0, 0, 0, -1, 0, 0, 0, 1]);
  }

  static reflectionYZ(): Matrix3 {
    return new Matrix3([-1, 0, 0, 0, 1, 0, 0, 0, 1]);
  }

  static lerp(a: Matrix3, b: Matrix3, t: number): Matrix3 {
    const result: number[] = [];
    for (let i = 0; i < 9; i++) {
      result.push(a.elements[i] * (1 - t) + b.elements[i] * t);
    }
    return new Matrix3(result);
  }
}
