import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getTutorialById } from '@learnmath/tutorials';
import { useTutorialStore } from '@/store';
import Scene3D from '@/components/scene/Scene3D';
import TrigGraphScene from '@/components/scene/TrigGraphScene';
import InteractiveUnitCircle from '@/components/scene/InteractiveUnitCircle';
import PendulumScene from '@/components/scene/PendulumScene';
import WaveScene from '@/components/scene/WaveScene';
import CircularMotionScene from '@/components/scene/CircularMotionScene';
import SpringScene from '@/components/scene/SpringScene';
import DoubleAngleScene from '@/components/scene/DoubleAngleScene';
import TutorialControls from '@/components/ui/TutorialControls';
import GlossaryText from '@/components/ui/GlossaryText';
import QuizOverlay from '@/components/ui/QuizOverlay';

function renderScene(customScene: string | undefined, sceneConfig: import('@learnmath/tutorials').SceneConfig) {
  switch (customScene) {
    case 'cos-graph':
      return <TrigGraphScene mode="cos" />;
    case 'sin-graph':
      return <TrigGraphScene mode="sin" />;
    case 'trig-sync-animation':
      return <TrigGraphScene mode="both" />;
    case 'pendulum':
      return <PendulumScene />;
    case 'interactive-unit-circle':
      return (
        <InteractiveUnitCircle
          showCos
          showSin
          showQuadrants={sceneConfig.highlightElements?.includes('quadrants') ?? false}
        />
      );
    case 'interactive-cos':
      return <InteractiveUnitCircle showCos showSin={false} />;
    case 'interactive-sin':
      return <InteractiveUnitCircle showCos={false} showSin />;
    case 'wave-superposition':
      return <WaveScene />;
    case 'circular-motion':
      return <CircularMotionScene />;
    case 'spring':
      return <SpringScene />;
    case 'double-angle':
      return <DoubleAngleScene multiplier={2} label="2θ" />;
    case 'half-angle':
      return <DoubleAngleScene multiplier={0.5} label="θ/2" />;
    case 'triple-angle':
      return <DoubleAngleScene multiplier={3} label="3θ" />;
    default:
      return <Scene3D sceneConfig={sceneConfig} />;
  }
}

export default function TutorialPage() {
  const { id } = useParams<{ id: string }>();
  const { currentTutorial, currentStepIndex, setTutorial } = useTutorialStore();
  const [quizCompleted, setQuizCompleted] = useState<boolean>(false);

  useEffect(() => {
    if (id) {
      const tutorial = getTutorialById(id);
      if (tutorial) setTutorial(tutorial);
    }
  }, [id, setTutorial]);

  // Reset quiz state on step change
  useEffect(() => {
    setQuizCompleted(false);
  }, [currentStepIndex]);

  if (!currentTutorial) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-xl mb-4">チュートリアルが見つかりません</p>
          <Link to="/" className="text-indigo-400 hover:underline">ホームに戻る</Link>
        </div>
      </div>
    );
  }

  const currentStep = currentTutorial.steps[currentStepIndex];

  return (
    <div className="h-screen flex flex-col">
      <header className="bg-slate-800 px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-gray-400 hover:text-white">← 戻る</Link>
        <h1 className="text-lg font-medium">{currentTutorial.title}</h1>
        <div className="text-gray-400">{currentStepIndex + 1} / {currentTutorial.steps.length}</div>
      </header>
      <div className="flex-1 flex">
        <div className="flex-1 relative">
          {renderScene(currentStep.customScene, currentStep.sceneConfig)}
          {currentStep.stepType === 'quiz' && currentStep.quiz && !quizCompleted && (
            <QuizOverlay
              quiz={currentStep.quiz}
              onComplete={() => setQuizCompleted(true)}
            />
          )}
        </div>
        <aside className="w-80 bg-slate-800 p-4 flex flex-col">
          <h2 className="text-xl font-semibold mb-2">{currentStep.title}</h2>
          <p className="text-gray-300 flex-1 leading-relaxed"><GlossaryText text={currentStep.content} /></p>
          <TutorialControls />
        </aside>
      </div>
    </div>
  );
}
