import { useRef, ReactNode } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useTutorialStore } from '@/store';

interface TransformableGroupProps { children: ReactNode; matrix?: readonly number[]; animate?: boolean; }

export default function TransformableGroup({ children, matrix, animate }: TransformableGroupProps) {
  const groupRef = useRef<THREE.Group>(null);
  const { animationProgress, setAnimationProgress, isPlaying } = useTutorialStore();

  useFrame((_, delta) => {
    if (!groupRef.current || !matrix) return;
    const identity = [1, 0, 0, 0, 1, 0, 0, 0, 1];
    if (animate && isPlaying) {
      // Actively animating
      const newProgress = Math.min(animationProgress + delta * 0.5, 1);
      setAnimationProgress(newProgress);
      const t = easeInOutCubic(newProgress);
      const interpolated = identity.map((v, i) => v + (matrix[i] - v) * t);
      applyMatrix3ToGroup(groupRef.current, interpolated);
    } else if (animate && !isPlaying && animationProgress > 0) {
      // Paused mid-animation: hold current interpolated state
      const t = easeInOutCubic(animationProgress);
      const interpolated = identity.map((v, i) => v + (matrix[i] - v) * t);
      applyMatrix3ToGroup(groupRef.current, interpolated);
    } else if (!animate && matrix) {
      // No animation, apply final matrix directly
      applyMatrix3ToGroup(groupRef.current, [...matrix]);
    }
  });

  return <group ref={groupRef}>{children}</group>;
}

function applyMatrix3ToGroup(group: THREE.Group, m: number[]) {
  const matrix4 = new THREE.Matrix4().set(m[0], m[1], m[2], 0, m[3], m[4], m[5], 0, m[6], m[7], m[8], 0, 0, 0, 0, 1);
  group.matrix.copy(matrix4);
  group.matrixAutoUpdate = false;
}

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}
