import { Line, Cone, Text } from '@react-three/drei';
import * as THREE from 'three';

interface Vector3DProps {
  vector: [number, number, number];
  color: string;
  label?: string;
  showComponents?: boolean;
  origin?: [number, number, number];
}

export default function Vector3D({ vector, color, label, showComponents, origin = [0, 0, 0] }: Vector3DProps) {
  const [x, y, z] = vector;
  const [ox, oy, oz] = origin;
  const endPoint: [number, number, number] = [ox + x, oy + y, oz + z];
  const direction = new THREE.Vector3(x, y, z).normalize();
  const arrowLength = 0.15;
  const arrowPosition = new THREE.Vector3(...endPoint).sub(direction.clone().multiplyScalar(arrowLength));
  const quaternion = new THREE.Quaternion();
  quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction);

  return (
    <group>
      <Line points={[origin, endPoint]} color={color} lineWidth={3} />
      <Cone args={[0.08, arrowLength, 8]} position={arrowPosition.toArray() as [number, number, number]} quaternion={quaternion}>
        <meshBasicMaterial color={color} />
      </Cone>
      {label && <Text position={[endPoint[0] + 0.2, endPoint[1] + 0.2, endPoint[2]]} fontSize={0.25} color={color} anchorX="left">{label}</Text>}
      {showComponents && (
        <group>
          <Line points={[[ox, oy, oz], [ox + x, oy, oz]]} color={color} lineWidth={1} dashed dashSize={0.1} gapSize={0.05} />
          <Line points={[[ox + x, oy, oz], [ox + x, oy + y, oz]]} color={color} lineWidth={1} dashed dashSize={0.1} gapSize={0.05} />
          <Line points={[[ox + x, oy + y, oz], endPoint]} color={color} lineWidth={1} dashed dashSize={0.1} gapSize={0.05} />
        </group>
      )}
    </group>
  );
}
