import { describe, it, expect } from 'vitest';
import { Matrix3 } from '../matrix3';
import { Vector3 } from '../vector3';

describe('Matrix3', () => {
  it('creates a matrix with 9 elements', () => {
    const m = new Matrix3([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(m.elements.length).toBe(9);
  });

  it('throws error if not exactly 9 elements', () => {
    expect(() => new Matrix3([1, 2, 3])).toThrow('Matrix3 requires exactly 9 elements');
  });

  it('gets element by row and column', () => {
    const m = new Matrix3([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(m.get(0, 0)).toBe(1);
    expect(m.get(0, 1)).toBe(2);
    expect(m.get(0, 2)).toBe(3);
    expect(m.get(1, 0)).toBe(4);
    expect(m.get(1, 1)).toBe(5);
    expect(m.get(1, 2)).toBe(6);
    expect(m.get(2, 0)).toBe(7);
    expect(m.get(2, 1)).toBe(8);
    expect(m.get(2, 2)).toBe(9);
  });

  it('applies matrix to vector', () => {
    const m = Matrix3.identity();
    const v = new Vector3(1, 2, 3);
    const result = m.apply(v);
    expect(result.x).toBe(1);
    expect(result.y).toBe(2);
    expect(result.z).toBe(3);
  });

  it('composes two matrices', () => {
    const a = Matrix3.identity();
    const b = new Matrix3([2, 0, 0, 0, 2, 0, 0, 0, 2]);
    const result = a.compose(b);
    expect(result.elements).toEqual([2, 0, 0, 0, 2, 0, 0, 0, 2]);
  });

  it('computes determinant', () => {
    const m = new Matrix3([1, 2, 3, 0, 1, 4, 5, 6, 0]);
    expect(m.determinant()).toBe(1);
  });

  it('computes determinant of identity as 1', () => {
    expect(Matrix3.identity().determinant()).toBe(1);
  });

  it('computes determinant of zero matrix as 0', () => {
    expect(Matrix3.zero().determinant()).toBe(0);
  });

  it('gets column as vector', () => {
    const m = new Matrix3([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const col0 = m.getColumn(0);
    expect(col0.toArray()).toEqual([1, 4, 7]);
    const col1 = m.getColumn(1);
    expect(col1.toArray()).toEqual([2, 5, 8]);
    const col2 = m.getColumn(2);
    expect(col2.toArray()).toEqual([3, 6, 9]);
  });

  it('transposes matrix', () => {
    const m = new Matrix3([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const t = m.transpose();
    expect(t.elements).toEqual([1, 4, 7, 2, 5, 8, 3, 6, 9]);
  });

  it('creates identity matrix', () => {
    const m = Matrix3.identity();
    expect(m.elements).toEqual([1, 0, 0, 0, 1, 0, 0, 0, 1]);
  });

  it('creates zero matrix', () => {
    const m = Matrix3.zero();
    expect(m.elements).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  });

  it('creates matrix from column vectors', () => {
    const c1 = new Vector3(1, 4, 7);
    const c2 = new Vector3(2, 5, 8);
    const c3 = new Vector3(3, 6, 9);
    const m = Matrix3.fromColumns(c1, c2, c3);
    expect(m.elements).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('converts to array', () => {
    const m = new Matrix3([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(m.toArray()).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
