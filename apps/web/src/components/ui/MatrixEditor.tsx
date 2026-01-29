import { useSandboxStore } from '@/store';
import Button from './Button';
import { Transforms } from '@learnmath/core';

export default function MatrixEditor() {
  const { matrix, setMatrixElement, setMatrix, resetMatrix, showGrid, showAxes, toggleGrid, toggleAxes } = useSandboxStore();
  const presets = [
    { name: '単位行列', matrix: [1, 0, 0, 0, 1, 0, 0, 0, 1] },
    { name: '2倍スケール', matrix: [...Transforms.scale(2, 2, 2).toArray()] },
    { name: 'X軸2倍', matrix: [...Transforms.scale(2, 1, 1).toArray()] },
    { name: 'Z軸回転45度', matrix: [...Transforms.rotationZ(Math.PI / 4).toArray()] },
    { name: 'せん断', matrix: [...Transforms.shearXY(0.5).toArray()] },
    { name: 'XY反射', matrix: [...Transforms.reflectionXY().toArray()] }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-slate-900 rounded-lg p-4">
        <div className="grid grid-cols-3 gap-2">
          {matrix.map((value, i) => (
            <input key={i} type="number" step="0.1" value={value}
              onChange={(e) => setMatrixElement(i, parseFloat(e.target.value) || 0)}
              className="bg-slate-700 border border-slate-600 rounded px-2 py-1 text-center w-full focus:outline-none focus:border-indigo-500" />
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-400 mb-2">プリセット</h3>
        <div className="grid grid-cols-2 gap-2">
          {presets.map((p) => (
            <Button key={p.name} variant="secondary" size="sm" onClick={() => setMatrix([...p.matrix])}>{p.name}</Button>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-400 mb-2">表示</h3>
        <div className="flex gap-2">
          <Button variant={showGrid ? 'primary' : 'secondary'} size="sm" onClick={toggleGrid}>グリッド</Button>
          <Button variant={showAxes ? 'primary' : 'secondary'} size="sm" onClick={toggleAxes}>軸</Button>
        </div>
      </div>
      <Button variant="ghost" onClick={resetMatrix} className="w-full">リセット</Button>
      <div className="bg-slate-900 rounded-lg p-4 text-sm">
        <p className="text-gray-400">行列式: <span className="text-white font-mono">
          {(matrix[0] * (matrix[4] * matrix[8] - matrix[5] * matrix[7]) - matrix[1] * (matrix[3] * matrix[8] - matrix[5] * matrix[6]) + matrix[2] * (matrix[3] * matrix[7] - matrix[4] * matrix[6])).toFixed(2)}
        </span></p>
      </div>
    </div>
  );
}
