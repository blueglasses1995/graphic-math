import { describe, it, expect } from 'vitest';
import { Trigonometry } from '../trigonometry';

describe('Trigonometry', () => {
  it('computes unit circle point at 0', () => {
    const p = Trigonometry.unitCirclePoint(0);
    expect(p.x).toBeCloseTo(1);
    expect(p.y).toBeCloseTo(0);
  });

  it('computes unit circle point at PI/2', () => {
    const p = Trigonometry.unitCirclePoint(Math.PI / 2);
    expect(p.x).toBeCloseTo(0);
    expect(p.y).toBeCloseTo(1);
  });

  it('computes unit circle point at PI', () => {
    const p = Trigonometry.unitCirclePoint(Math.PI);
    expect(p.x).toBeCloseTo(-1);
    expect(p.y).toBeCloseTo(0);
  });

  it('generates sine wave', () => {
    const wave = Trigonometry.sineWave(0, Math.PI, 2);
    expect(wave.length).toBe(3);
    expect(wave[0].y).toBeCloseTo(0);
    expect(wave[1].y).toBeCloseTo(1); // sin(PI/2) = 1
    expect(wave[2].y).toBeCloseTo(0); // sin(PI) = 0
  });

  it('generates cosine wave', () => {
    const wave = Trigonometry.cosineWave(0, Math.PI, 2);
    expect(wave.length).toBe(3);
    expect(wave[0].y).toBeCloseTo(1);
    expect(wave[1].y).toBeCloseTo(0);
    expect(wave[2].y).toBeCloseTo(-1);
  });

  it('handles tangent discontinuities', () => {
    const wave = Trigonometry.tangentWave(0, Math.PI, 2);
    expect(wave[0].y).toBeCloseTo(0); // tan(0) = 0
    expect(wave[1].y).toBeNull(); // tan(PI/2) = discontinuity
    expect(wave[2].y).toBeCloseTo(0); // tan(PI) ≈ 0
  });

  it('converts degrees to radians', () => {
    expect(Trigonometry.degToRad(180)).toBeCloseTo(Math.PI);
    expect(Trigonometry.degToRad(90)).toBeCloseTo(Math.PI / 2);
    expect(Trigonometry.degToRad(0)).toBe(0);
  });

  it('converts radians to degrees', () => {
    expect(Trigonometry.radToDeg(Math.PI)).toBeCloseTo(180);
    expect(Trigonometry.radToDeg(Math.PI / 2)).toBeCloseTo(90);
  });

  it('generates unit circle points', () => {
    const points = Trigonometry.unitCirclePoints(4);
    expect(points.length).toBe(5); // 0, PI/2, PI, 3PI/2, 2PI
    expect(points[0].x).toBeCloseTo(1);
    expect(points[0].y).toBeCloseTo(0);
    expect(points[1].x).toBeCloseTo(0);
    expect(points[1].y).toBeCloseTo(1);
  });
});
