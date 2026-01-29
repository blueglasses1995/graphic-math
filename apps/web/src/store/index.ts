import { create } from 'zustand';
import { Tutorial } from '@learnmath/tutorials';

interface TutorialState {
  currentTutorial: Tutorial | null;
  currentStepIndex: number;
  isPlaying: boolean;
  animationProgress: number;
  setTutorial: (tutorial: Tutorial) => void;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (index: number) => void;
  setPlaying: (playing: boolean) => void;
  setAnimationProgress: (progress: number) => void;
  reset: () => void;
}

export const useTutorialStore = create<TutorialState>((set, get) => ({
  currentTutorial: null,
  currentStepIndex: 0,
  isPlaying: false,
  animationProgress: 0,
  setTutorial: (tutorial) => set({ currentTutorial: tutorial, currentStepIndex: 0, animationProgress: 0 }),
  nextStep: () => {
    const { currentTutorial, currentStepIndex } = get();
    if (currentTutorial && currentStepIndex < currentTutorial.steps.length - 1)
      set({ currentStepIndex: currentStepIndex + 1, animationProgress: 0 });
  },
  prevStep: () => {
    const { currentStepIndex } = get();
    if (currentStepIndex > 0) set({ currentStepIndex: currentStepIndex - 1, animationProgress: 0 });
  },
  goToStep: (index) => set({ currentStepIndex: index, animationProgress: 0 }),
  setPlaying: (playing) => set({ isPlaying: playing }),
  setAnimationProgress: (progress) => set({ animationProgress: progress }),
  reset: () => set({ currentTutorial: null, currentStepIndex: 0, isPlaying: false, animationProgress: 0 })
}));

interface SandboxState {
  matrix: number[];
  showGrid: boolean;
  showAxes: boolean;
  showVectors: boolean;
  setMatrix: (matrix: number[]) => void;
  setMatrixElement: (index: number, value: number) => void;
  toggleGrid: () => void;
  toggleAxes: () => void;
  toggleVectors: () => void;
  resetMatrix: () => void;
}

export const useSandboxStore = create<SandboxState>((set) => ({
  matrix: [1, 0, 0, 0, 1, 0, 0, 0, 1],
  showGrid: true,
  showAxes: true,
  showVectors: true,
  setMatrix: (matrix) => set({ matrix }),
  setMatrixElement: (index, value) => set((state) => {
    const newMatrix = [...state.matrix];
    newMatrix[index] = value;
    return { matrix: newMatrix };
  }),
  toggleGrid: () => set((state) => ({ showGrid: !state.showGrid })),
  toggleAxes: () => set((state) => ({ showAxes: !state.showAxes })),
  toggleVectors: () => set((state) => ({ showVectors: !state.showVectors })),
  resetMatrix: () => set({ matrix: [1, 0, 0, 0, 1, 0, 0, 0, 1] })
}));
