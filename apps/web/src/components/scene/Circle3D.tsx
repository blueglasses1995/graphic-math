import { Line } from '@react-three/drei';

interface Circle3DProps {
  radius?: number;
  segments?: number;
  color?: string;
  plane?: 'xy' | 'xz' | 'yz';
}

export default function Circle3D({ radius = 1, segments = 64, color = '#ffffff', plane = 'xy' }: Circle3DProps) {
  const points: [number, number, number][] = [];
  for (let i = 0; i <= segments; i++) {
    const angle = (2 * Math.PI * i) / segments;
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    switch (plane) {
      case 'xy': points.push([x, y, 0]); break;
      case 'xz': points.push([x, 0, y]); break;
      case 'yz': points.push([0, x, y]); break;
    }
  }
  return <Line points={points} color={color} lineWidth={2} />;
}
