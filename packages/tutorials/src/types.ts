import { Matrix3, Vector3 } from '@learnmath/core';

export type StepType = 'explanation' | 'interactive' | 'quiz' | 'animation';

export interface QuizOption {
  id: string;
  label: string;
  correct: boolean;
}

export interface QuizConfig {
  question: string;
  options: QuizOption[];
  explanation: string;
}

export interface InteractiveConfig {
  type: 'drag-unit-circle' | 'angle-slider' | 'parameter-sliders';
  initialAngle?: number;
  parameters?: { name: string; min: number; max: number; step: number; initial: number }[];
}

export interface TutorialStep {
  id: string;
  title: string;
  content: string;
  sceneConfig: SceneConfig;
  interactive: boolean;
  nextCondition?: 'click' | 'timeout' | 'interaction';
  duration?: number;
  customScene?: string;
  stepType?: StepType;
  quiz?: QuizConfig;
  interactiveConfig?: InteractiveConfig;
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
  category:
    | 'trigonometry'
    | 'linear-algebra'
    | 'differential-calculus'
    | 'integral-calculus'
    | 'exponential'
    | 'logarithmic'
    | 'set-theory'
    | 'topology'
    | 'probability'
    | 'statistics'
    | 'algebra'
    | 'discrete-math'
    | 'complex-numbers';
  steps: TutorialStep[];
  prerequisites?: string[];
}

export interface TutorialCategory {
  id: string;
  name: string;
  description: string;
  tutorials: Tutorial[];
}
