import { Line, Text } from '@react-three/drei';

const AXIS_LENGTH = 5;

export default function Axes3D() {
  return (
    <group>
      <Line points={[[0, 0, 0], [AXIS_LENGTH, 0, 0]]} color="#ef4444" lineWidth={2} />
      <Text position={[AXIS_LENGTH + 0.3, 0, 0]} fontSize={0.3} color="#ef4444">X</Text>
      <Line points={[[0, 0, 0], [0, AXIS_LENGTH, 0]]} color="#22c55e" lineWidth={2} />
      <Text position={[0, AXIS_LENGTH + 0.3, 0]} fontSize={0.3} color="#22c55e">Y</Text>
      <Line points={[[0, 0, 0], [0, 0, AXIS_LENGTH]]} color="#3b82f6" lineWidth={2} />
      <Text position={[0, 0, AXIS_LENGTH + 0.3]} fontSize={0.3} color="#3b82f6">Z</Text>
    </group>
  );
}
