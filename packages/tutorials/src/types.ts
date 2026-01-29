import { Matrix3, Vector3 } from '@learnmath/core';

export interface TutorialStep {
  id: string;
  title: string;
  content: string;
  sceneConfig: SceneConfig;
  interactive: boolean;
  nextCondition?: 'click' | 'timeout' | 'interaction';
  duration?: number;
}

export interface CircleConfig {
  radius?: number;
  color?: string;
  plane?: 'xy' | 'xz' | 'yz';
}

export interface SceneConfig {
  showGrid: boolean;
  showAxes: boolean;
  vectors?: VectorConfig[];
  circles?: CircleConfig[];
  transform?: Matrix3;
  animateTransform?: boolean;
  highlightElements?: string[];
  cameraPosition?: [number, number, number];
}

export interface VectorConfig {
  id: string;
  vector: Vector3;
  color: string;
  label?: string;
  showComponents?: boolean;
}

export interface Tutorial {
  id: string;
  title: string;
  description: string;
  category: 'linear-algebra' | 'trigonometry' | 'calculus' | 'probability';
  steps: TutorialStep[];
  prerequisites?: string[];
}

export interface TutorialCategory {
  id: string;
  name: string;
  description: string;
  tutorials: Tutorial[];
}
