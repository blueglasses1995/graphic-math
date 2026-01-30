import React from 'react';
import TutorialTreeView from '../components/TutorialTreeView';

/**
 * TreeViewPage - Displays the tutorial dependency tree
 *
 * This page shows an interactive visualization of all tutorials and their
 * prerequisite relationships using React Flow.
 */
const TreeViewPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-3xl font-bold text-gray-900">チュートリアルマップ</h1>
          <p className="mt-2 text-sm text-gray-600">
            学習パスを視覚化。前提条件を確認しながら、自分のペースで進めましょう。
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Instructions */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <h2 className="text-lg font-semibold text-blue-900 mb-2">使い方</h2>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• <strong>ノードをクリック</strong>: チュートリアルを開始</li>
            <li>• <strong>ドラッグ</strong>: マップを移動</li>
            <li>• <strong>スクロール</strong>: ズームイン/アウト</li>
            <li>• <strong>矢印</strong>: 実線は必須の前提条件、点線は推奨</li>
            <li>• <strong>ノードの色</strong>: 緑(初級)、黄(中級)、赤(上級)</li>
          </ul>
        </div>

        {/* Tree View */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <TutorialTreeView />
        </div>

        {/* Additional Info */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">📊 進捗管理</h3>
            <p className="text-sm text-gray-600">
              完了したチュートリアルは緑のチェックマークで表示されます。
              進行中のチュートリアルは青い丸で示されます。
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">🔒 前提条件</h3>
            <p className="text-sm text-gray-600">
              前提条件が満たされていないチュートリアルは薄く表示され、
              クリックできません。
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">🎯 難易度</h3>
            <p className="text-sm text-gray-600">
              難易度1-3は初級(緑)、4-6は中級(黄)、7-10は上級(赤)として
              色分けされています。
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TreeViewPage;
