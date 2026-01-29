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

  it('subtracts two vectors', () => {
    const a = new Vector3(4, 5, 6);
    const b = new Vector3(1, 2, 3);
    const result = a.subtract(b);
    expect(result.x).toBe(3);
    expect(result.y).toBe(3);
    expect(result.z).toBe(3);
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
    expect(a.dot(b)).toBe(32);
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

  it('handles normalizing zero vector', () => {
    const v = new Vector3(0, 0, 0);
    const n = v.normalize();
    expect(n.x).toBe(0);
    expect(n.y).toBe(0);
    expect(n.z).toBe(0);
  });

  it('creates standard basis vectors', () => {
    expect(Vector3.i().toArray()).toEqual([1, 0, 0]);
    expect(Vector3.j().toArray()).toEqual([0, 1, 0]);
    expect(Vector3.k().toArray()).toEqual([0, 0, 1]);
  });

  it('creates zero vector', () => {
    expect(Vector3.zero().toArray()).toEqual([0, 0, 0]);
  });

  it('creates vector from array', () => {
    const v = Vector3.fromArray([1, 2, 3]);
    expect(v.x).toBe(1);
    expect(v.y).toBe(2);
    expect(v.z).toBe(3);
  });

  it('converts to array', () => {
    const v = new Vector3(1, 2, 3);
    expect(v.toArray()).toEqual([1, 2, 3]);
  });
});
