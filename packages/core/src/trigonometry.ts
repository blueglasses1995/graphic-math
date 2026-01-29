export class Trigonometry {
  /** Get point on unit circle at given angle (radians) */
  static unitCirclePoint(angle: number): { x: number; y: number } {
    return { x: Math.cos(angle), y: Math.sin(angle) };
  }

  /** Get sine wave points for visualization */
  static sineWave(start: number, end: number, steps: number): { x: number; y: number }[] {
    const points: { x: number; y: number }[] = [];
    const stepSize = (end - start) / steps;
    for (let i = 0; i <= steps; i++) {
      const x = start + i * stepSize;
      points.push({ x, y: Math.sin(x) });
    }
    return points;
  }

  /** Get cosine wave points for visualization */
  static cosineWave(start: number, end: number, steps: number): { x: number; y: number }[] {
    const points: { x: number; y: number }[] = [];
    const stepSize = (end - start) / steps;
    for (let i = 0; i <= steps; i++) {
      const x = start + i * stepSize;
      points.push({ x, y: Math.cos(x) });
    }
    return points;
  }

  /** Get tangent wave points, excluding discontinuities */
  static tangentWave(start: number, end: number, steps: number): { x: number; y: number | null }[] {
    const points: { x: number; y: number | null }[] = [];
    const stepSize = (end - start) / steps;
    for (let i = 0; i <= steps; i++) {
      const x = start + i * stepSize;
      const cosX = Math.cos(x);
      if (Math.abs(cosX) < 1e-10) {
        points.push({ x, y: null }); // discontinuity
      } else {
        points.push({ x, y: Math.tan(x) });
      }
    }
    return points;
  }

  /** Convert degrees to radians */
  static degToRad(degrees: number): number {
    return (degrees * Math.PI) / 180;
  }

  /** Convert radians to degrees */
  static radToDeg(radians: number): number {
    return (radians * 180) / Math.PI;
  }

  /** Get points forming a unit circle */
  static unitCirclePoints(steps: number = 64): { x: number; y: number }[] {
    const points: { x: number; y: number }[] = [];
    for (let i = 0; i <= steps; i++) {
      const angle = (2 * Math.PI * i) / steps;
      points.push(Trigonometry.unitCirclePoint(angle));
    }
    return points;
  }
}
