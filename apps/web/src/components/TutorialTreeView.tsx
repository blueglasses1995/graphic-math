import React, { useCallback, useEffect, useMemo, useState } from 'react';
import ReactFlow, {
  Node,
  Edge,
  Controls,
  Background,
  MiniMap,
  useNodesState,
  useEdgesState,
  MarkerType,
  Position,
  NodeProps,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { useNavigate } from 'react-router-dom';
import { allCategories, Tutorial } from '@learnmath/tutorials';
import { useUserProgressStore } from '../store/userProgressStore';
import dagre from 'dagre';

// Define the category interface since it's not properly exported from tutorials
interface CategoryObject {
  id: string;
  name: string;
  description: string;
  tutorials: Tutorial[];
}

interface TutorialNodeData {
  tutorial: Tutorial;
  status: 'completed' | 'in-progress' | 'available' | 'locked';
}

// Custom node component
const TutorialNode: React.FC<NodeProps<TutorialNodeData>> = ({ data }) => {
  const { tutorial, status } = data;
  const estimatedMinutes = tutorial.estimatedMinutes || 30;
  const difficulty = tutorial.difficulty || 5;
  const [showTooltip, setShowTooltip] = useState(false);

  // Size based on estimatedMinutes (60-120 range)
  const size = Math.max(60, Math.min(120, 40 + estimatedMinutes));

  // Background color gradient by difficulty
  const getBackgroundColor = () => {
    if (difficulty <= 3) return 'linear-gradient(135deg, #10b981 0%, #059669 100%)'; // green
    if (difficulty <= 6) return 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'; // yellow/orange
    return 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)'; // red
  };

  // Status icon
  const getStatusIcon = () => {
    switch (status) {
      case 'completed':
        return '✓';
      case 'in-progress':
        return '◉';
      case 'available':
        return '○';
      case 'locked':
        return '◌';
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case 'completed':
        return '#10b981';
      case 'in-progress':
        return '#3b82f6';
      case 'available':
        return '#6b7280';
      case 'locked':
        return '#d1d5db';
    }
  };

  const getDifficultyLabel = (diff: number) => {
    if (diff <= 3) return '初級';
    if (diff <= 6) return '中級';
    return '上級';
  };

  return (
    <div className="relative">
      <div
        style={{
          width: size,
          height: size,
          background: getBackgroundColor(),
          border: `3px solid ${getStatusColor()}`,
        }}
        className={`
          rounded-full flex flex-col items-center justify-center p-2
          shadow-lg transition-transform duration-200
          ${status === 'locked' ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
          text-white font-bold text-xs text-center
        `}
        onMouseEnter={(e) => {
          if (status !== 'locked') {
            e.currentTarget.style.transform = 'scale(1.1)';
          }
          setShowTooltip(true);
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          setShowTooltip(false);
        }}
      >
        <div className="absolute -top-2 -right-2 text-xl bg-white rounded-full w-7 h-7 flex items-center justify-center shadow-md">
          {getStatusIcon()}
        </div>
        <div className="overflow-hidden text-ellipsis max-w-full px-1">
          {tutorial.title}
        </div>
        <div className="text-[8px] mt-1 opacity-90">
          難易度 {difficulty} | {estimatedMinutes}分
        </div>
      </div>

      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-50 pointer-events-none">
          <div className="bg-gray-900 text-white text-sm rounded-lg shadow-xl p-3 min-w-[200px]">
            <div className="font-bold mb-2">{tutorial.title}</div>
            <div className="space-y-1 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">難易度:</span>
                <span className="font-semibold">{getDifficultyLabel(difficulty)} ({difficulty}/10)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">所要時間:</span>
                <span className="font-semibold">{estimatedMinutes}分</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">ステータス:</span>
                <span className="font-semibold">
                  {status === 'completed' && '完了'}
                  {status === 'in-progress' && '進行中'}
                  {status === 'available' && '利用可能'}
                  {status === 'locked' && '前提条件あり'}
                </span>
              </div>
            </div>
            {/* Tooltip arrow */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-px">
              <div className="border-8 border-transparent border-t-gray-900"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Dagre layout algorithm for automatic positioning
const getLayoutedElements = (nodes: Node[], edges: Edge[], direction = 'TB') => {
  const dagreGraph = new dagre.graphlib.Graph();
  dagreGraph.setDefaultEdgeLabel(() => ({}));
  dagreGraph.setGraph({ rankdir: direction, nodesep: 100, ranksep: 150 });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: node.width || 100, height: node.height || 100 });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  nodes.forEach((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    node.targetPosition = Position.Top;
    node.sourcePosition = Position.Bottom;

    // Shift the dagre node position to the center (dagre uses top-left corner)
    node.position = {
      x: nodeWithPosition.x - (node.width || 100) / 2,
      y: nodeWithPosition.y - (node.height || 100) / 2,
    };

    return node;
  });

  return { nodes, edges };
};

// Main component
export const TutorialTreeView: React.FC = () => {
  const navigate = useNavigate();
  const { getTutorialStatus, tutorialProgress } = useUserProgressStore();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  // Get all tutorials with their dependencies
  const allTutorials = useMemo(() => {
    return (allCategories as unknown as CategoryObject[]).flatMap((category) =>
      category.tutorials
    );
  }, []);

  // Filter tutorials by category
  const filteredTutorials = useMemo(() => {
    if (selectedCategory === 'all') return allTutorials;
    return allTutorials.filter((t) => t.category === selectedCategory);
  }, [allTutorials, selectedCategory]);

  // Check if prerequisites are met
  const hasUnmetPrerequisites = useCallback(
    (tutorial: Tutorial): boolean => {
      if (tutorial.prerequisite) {
        const prereqStatus = getTutorialStatus(tutorial.prerequisite);
        if (prereqStatus !== 'completed') return true;
      }
      return false;
    },
    [getTutorialStatus]
  );

  // Build nodes and edges
  useEffect(() => {
    const tutorialMap = new Map(filteredTutorials.map((t) => [t.id, t]));

    // Create nodes
    const newNodes: Node<TutorialNodeData>[] = filteredTutorials.map((tutorial) => {
      const hasPrereqs = hasUnmetPrerequisites(tutorial);
      let status = getTutorialStatus(tutorial.id, hasPrereqs);

      // Override status if prerequisites not met
      if (hasPrereqs && status === 'available') {
        status = 'locked';
      }

      const estimatedMinutes = tutorial.estimatedMinutes || 30;
      const size = Math.max(60, Math.min(120, 40 + estimatedMinutes));

      return {
        id: tutorial.id,
        type: 'tutorialNode',
        position: { x: 0, y: 0 }, // Will be set by layout algorithm
        data: { tutorial, status },
        width: size,
        height: size,
      };
    });

    // Create edges for prerequisites
    const newEdges: Edge[] = [];
    filteredTutorials.forEach((tutorial) => {
      if (tutorial.prerequisite && tutorialMap.has(tutorial.prerequisite)) {
        newEdges.push({
          id: `${tutorial.prerequisite}-${tutorial.id}`,
          source: tutorial.prerequisite,
          target: tutorial.id,
          type: 'smoothstep',
          animated: getTutorialStatus(tutorial.prerequisite) !== 'completed',
          style: { stroke: '#94a3b8', strokeWidth: 2 },
          markerEnd: {
            type: MarkerType.ArrowClosed,
            color: '#94a3b8',
          },
        });
      }

      // Add edges for suggested prerequisites (dashed)
      if (tutorial.suggestedPrerequisites) {
        tutorial.suggestedPrerequisites.forEach((prereqId) => {
          if (tutorialMap.has(prereqId)) {
            newEdges.push({
              id: `${prereqId}-${tutorial.id}-suggested`,
              source: prereqId,
              target: tutorial.id,
              type: 'smoothstep',
              animated: false,
              style: { stroke: '#cbd5e1', strokeWidth: 1, strokeDasharray: '5,5' },
              markerEnd: {
                type: MarkerType.ArrowClosed,
                color: '#cbd5e1',
              },
            });
          }
        });
      }
    });

    // Apply layout
    const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(newNodes, newEdges);
    setNodes(layoutedNodes);
    setEdges(layoutedEdges);
  }, [
    filteredTutorials,
    getTutorialStatus,
    hasUnmetPrerequisites,
    setNodes,
    setEdges,
    tutorialProgress,
  ]);

  // Handle node click
  const onNodeClick = useCallback(
    (_event: React.MouseEvent, node: Node<TutorialNodeData>) => {
      if (node.data.status !== 'locked') {
        navigate(`/tutorial/${node.data.tutorial.id}`);
      }
    },
    [navigate]
  );

  // Custom node types
  const nodeTypes = useMemo(
    () => ({
      tutorialNode: TutorialNode,
    }),
    []
  );

  // Color coding for minimap nodes
  const getMiniMapNodeColor = (node: Node<TutorialNodeData>) => {
    const { status } = node.data;
    switch (status) {
      case 'completed':
        return '#10b981'; // green
      case 'in-progress':
        return '#3b82f6'; // blue
      case 'available':
        return '#6b7280'; // gray
      case 'locked':
        return '#d1d5db'; // light gray
      default:
        return '#9ca3af';
    }
  };

  return (
    <div className="w-full h-[800px] flex flex-col bg-gray-50">
      {/* Header with category filter and legend */}
      <div className="p-4 bg-white border-b border-gray-200 flex gap-3 items-center flex-wrap">
        <label htmlFor="category-filter" className="font-bold text-gray-700">
          カテゴリー:
        </label>
        <select
          id="category-filter"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-3 py-2 rounded-lg border border-gray-300 text-sm cursor-pointer min-w-[200px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="all">すべて ({allTutorials.length}個のチュートリアル)</option>
          {(allCategories as unknown as CategoryObject[]).map((category) => (
            <option key={category.id} value={category.id}>
              {category.name} ({category.tutorials.length}個)
            </option>
          ))}
        </select>

        {/* Legend */}
        <div className="ml-auto flex gap-4 text-xs">
          <div className="flex items-center gap-1">
            <span className="text-base">✓</span>
            <span className="text-gray-700">完了</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-base">◉</span>
            <span className="text-gray-700">進行中</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-base">○</span>
            <span className="text-gray-700">利用可能</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-base">◌</span>
            <span className="text-gray-700">前提条件あり</span>
          </div>
        </div>

        {/* Difficulty legend */}
        <div className="flex gap-2 text-xs border-l border-gray-300 pl-4">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-green-500 to-green-600"></div>
            <span className="text-gray-700">初級</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-yellow-500 to-orange-600"></div>
            <span className="text-gray-700">中級</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-red-500 to-red-600"></div>
            <span className="text-gray-700">上級</span>
          </div>
        </div>
      </div>

      {/* React Flow Canvas */}
      <div className="flex-1 relative">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onNodeClick={onNodeClick}
          nodeTypes={nodeTypes}
          fitView
          minZoom={0.1}
          maxZoom={2}
          defaultViewport={{ x: 0, y: 0, zoom: 0.8 }}
          className="bg-gray-50"
        >
          <Controls className="bg-white shadow-lg rounded-lg border border-gray-200" />
          <Background color="#e5e7eb" gap={16} />
          <MiniMap
            nodeColor={getMiniMapNodeColor}
            className="bg-white shadow-lg rounded-lg border border-gray-200"
            maskColor="rgba(0, 0, 0, 0.1)"
            style={{ backgroundColor: 'white' }}
          />
        </ReactFlow>

        {/* Tutorial count badge */}
        {filteredTutorials.length > 0 && (
          <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow-lg border border-gray-200 text-sm font-semibold text-gray-700">
            {selectedCategory === 'all' ? '全カテゴリー' : (allCategories as unknown as CategoryObject[]).find(c => c.id === selectedCategory)?.name}
            {' '}
            <span className="text-blue-600">{filteredTutorials.length}</span> 個のチュートリアル
          </div>
        )}
      </div>
    </div>
  );
};

// Default export
export default TutorialTreeView;
