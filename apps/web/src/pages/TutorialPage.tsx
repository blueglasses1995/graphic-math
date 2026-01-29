import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { getTutorialById } from '@learnmath/tutorials';
import { useTutorialStore } from '@/store';
import Scene3D from '@/components/scene/Scene3D';
import TutorialControls from '@/components/ui/TutorialControls';

export default function TutorialPage() {
  const { id } = useParams<{ id: string }>();
  const { currentTutorial, currentStepIndex, setTutorial } = useTutorialStore();

  useEffect(() => {
    if (id) {
      const tutorial = getTutorialById(id);
      if (tutorial) setTutorial(tutorial);
    }
  }, [id, setTutorial]);

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
          <Scene3D sceneConfig={currentStep.sceneConfig} />
        </div>
        <aside className="w-80 bg-slate-800 p-4 flex flex-col">
          <h2 className="text-xl font-semibold mb-2">{currentStep.title}</h2>
          <p className="text-gray-300 flex-1">{currentStep.content}</p>
          <TutorialControls />
        </aside>
      </div>
    </div>
  );
}
