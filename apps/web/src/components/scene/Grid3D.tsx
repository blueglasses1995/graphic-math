import { Grid } from '@react-three/drei';

export default function Grid3D() {
  return (
    <Grid args={[20, 20]} cellSize={1} cellThickness={0.5} cellColor="#334155" sectionSize={5} sectionThickness={1} sectionColor="#475569" fadeDistance={30} fadeStrength={1} followCamera={false} infiniteGrid />
  );
}
