import { describe, it, expect } from 'vitest';
import { Transforms } from '../transforms';
import { Matrix3 } from '../matrix3';
import { Vector3 } from '../vector3';

describe('Transforms', () => {
  describe('rotationX', () => {
    it('rotates around X axis by 90 degrees', () => {
      const m = Transforms.rotationX(Math.PI / 2);
      const v = new Vector3(0, 1, 0);
      const result = m.apply(v);
      expect(result.x).toBeCloseTo(0);
      expect(result.y).toBeCloseTo(0);
      expect(result.z).toBeCloseTo(1);
    });

    it('leaves X axis unchanged', () => {
      const m = Transforms.rotationX(Math.PI / 2);
      const v = new Vector3(1, 0, 0);
      const result = m.apply(v);
      expect(result.x).toBeCloseTo(1);
      expect(result.y).toBeCloseTo(0);
      expect(result.z).toBeCloseTo(0);
    });
  });

  describe('rotationY', () => {
    it('rotates around Y axis by 90 degrees', () => {
      const m = Transforms.rotationY(Math.PI / 2);
      const v = new Vector3(1, 0, 0);
      const result = m.apply(v);
      expect(result.x).toBeCloseTo(0);
      expect(result.y).toBeCloseTo(0);
      expect(result.z).toBeCloseTo(-1);
    });

    it('leaves Y axis unchanged', () => {
      const m = Transforms.rotationY(Math.PI / 2);
      const v = new Vector3(0, 1, 0);
      const result = m.apply(v);
      expect(result.x).toBeCloseTo(0);
      expect(result.y).toBeCloseTo(1);
      expect(result.z).toBeCloseTo(0);
    });
  });

  describe('rotationZ', () => {
    it('rotates around Z axis by 90 degrees', () => {
      const m = Transforms.rotationZ(Math.PI / 2);
      const v = new Vector3(1, 0, 0);
      const result = m.apply(v);
      expect(result.x).toBeCloseTo(0);
      expect(result.y).toBeCloseTo(1);
      expect(result.z).toBeCloseTo(0);
    });

    it('leaves Z axis unchanged', () => {
      const m = Transforms.rotationZ(Math.PI / 2);
      const v = new Vector3(0, 0, 1);
      const result = m.apply(v);
      expect(result.x).toBeCloseTo(0);
      expect(result.y).toBeCloseTo(0);
      expect(result.z).toBeCloseTo(1);
    });
  });

  describe('scale', () => {
    it('scales a vector', () => {
      const m = Transforms.scale(2, 3, 4);
      const v = new Vector3(1, 1, 1);
      const result = m.apply(v);
      expect(result.x).toBe(2);
      expect(result.y).toBe(3);
      expect(result.z).toBe(4);
    });
  });

  describe('shear', () => {
    it('shears in XY plane', () => {
      const m = Transforms.shearXY(1);
      const v = new Vector3(0, 1, 0);
      const result = m.apply(v);
      expect(result.x).toBe(1);
      expect(result.y).toBe(1);
      expect(result.z).toBe(0);
    });

    it('shears in XZ plane', () => {
      const m = Transforms.shearXZ(1);
      const v = new Vector3(0, 0, 1);
      const result = m.apply(v);
      expect(result.x).toBe(1);
      expect(result.y).toBe(0);
      expect(result.z).toBe(1);
    });

    it('shears in YZ plane', () => {
      const m = Transforms.shearYZ(1);
      const v = new Vector3(0, 0, 1);
      const result = m.apply(v);
      expect(result.x).toBe(0);
      expect(result.y).toBe(1);
      expect(result.z).toBe(1);
    });
  });

  describe('reflection', () => {
    it('reflects across XY plane', () => {
      const m = Transforms.reflectionXY();
      const v = new Vector3(1, 2, 3);
      const result = m.apply(v);
      expect(result.x).toBe(1);
      expect(result.y).toBe(2);
      expect(result.z).toBe(-3);
    });

    it('reflects across XZ plane', () => {
      const m = Transforms.reflectionXZ();
      const v = new Vector3(1, 2, 3);
      const result = m.apply(v);
      expect(result.x).toBe(1);
      expect(result.y).toBe(-2);
      expect(result.z).toBe(3);
    });

    it('reflects across YZ plane', () => {
      const m = Transforms.reflectionYZ();
      const v = new Vector3(1, 2, 3);
      const result = m.apply(v);
      expect(result.x).toBe(-1);
      expect(result.y).toBe(2);
      expect(result.z).toBe(3);
    });
  });

  describe('lerp', () => {
    it('interpolates between two matrices at t=0', () => {
      const a = Matrix3.identity();
      const b = Transforms.scale(2, 2, 2);
      const result = Transforms.lerp(a, b, 0);
      expect(result.elements).toEqual(a.elements);
    });

    it('interpolates between two matrices at t=1', () => {
      const a = Matrix3.identity();
      const b = Transforms.scale(2, 2, 2);
      const result = Transforms.lerp(a, b, 1);
      expect(result.elements).toEqual(Array.from(b.elements));
    });

    it('interpolates between two matrices at t=0.5', () => {
      const a = Matrix3.identity();
      const b = Transforms.scale(3, 3, 3);
      const result = Transforms.lerp(a, b, 0.5);
      expect(result.get(0, 0)).toBeCloseTo(2);
      expect(result.get(1, 1)).toBeCloseTo(2);
      expect(result.get(2, 2)).toBeCloseTo(2);
    });
  });
});
