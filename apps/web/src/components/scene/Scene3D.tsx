import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { SceneConfig } from '@learnmath/tutorials';
import Grid3D from './Grid3D';
import Axes3D from './Axes3D';
import Vector3D from './Vector3D';
import TransformableGroup from './TransformableGroup';

interface Scene3DProps { sceneConfig: SceneConfig; }

export default function Scene3D({ sceneConfig }: Scene3DProps) {
  const { showGrid, showAxes, vectors = [], transform, animateTransform, cameraPosition = [5, 5, 5] } = sceneConfig;
  return (
    <Canvas className="w-full h-full">
      <PerspectiveCamera makeDefault position={cameraPosition} fov={50} />
      <OrbitControls enableDamping dampingFactor={0.05} minDistance={2} maxDistance={20} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <color attach="background" args={['#0f172a']} />
      {showGrid && <Grid3D />}
      {showAxes && <Axes3D />}
      <TransformableGroup matrix={transform?.elements} animate={animateTransform}>
        {vectors.map((vec) => (
          <Vector3D key={vec.id} vector={[vec.vector.x, vec.vector.y, vec.vector.z]} color={vec.color} label={vec.label} showComponents={vec.showComponents} />
        ))}
      </TransformableGroup>
    </Canvas>
  );
}
