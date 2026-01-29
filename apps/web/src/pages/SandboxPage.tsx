import { Link } from 'react-router-dom';
import Scene3D from '@/components/scene/Scene3D';
import MatrixEditor from '@/components/ui/MatrixEditor';
import { useSandboxStore } from '@/store';
import { Vector3, Matrix3 } from '@learnmath/core';

export default function SandboxPage() {
  const { matrix, showGrid, showAxes } = useSandboxStore();
  const sceneConfig = {
    showGrid, showAxes,
    vectors: [
      { id: 'i', vector: new Vector3(1, 0, 0), color: '#ff4444', label: 'i' },
      { id: 'j', vector: new Vector3(0, 1, 0), color: '#44ff44', label: 'j' },
      { id: 'k', vector: new Vector3(0, 0, 1), color: '#4444ff', label: 'k' }
    ],
    transform: new Matrix3(matrix),
    animateTransform: false
  };

  return (
    <div className="h-screen flex flex-col">
      <header className="bg-slate-800 px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-gray-400 hover:text-white">← 戻る</Link>
        <h1 className="text-lg font-medium">サンドボックス</h1>
        <div />
      </header>
      <div className="flex-1 flex">
        <div className="flex-1 relative"><Scene3D sceneConfig={sceneConfig} /></div>
        <aside className="w-96 bg-slate-800 p-4 overflow-y-auto">
          <h2 className="text-xl font-semibold mb-4">変換行列</h2>
          <MatrixEditor />
        </aside>
      </div>
    </div>
  );
}
