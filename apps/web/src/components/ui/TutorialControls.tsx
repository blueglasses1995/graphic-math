import { useTutorialStore } from '@/store';
import Button from './Button';
import ProgressBar from './ProgressBar';

export default function TutorialControls() {
  const { currentTutorial, currentStepIndex, isPlaying, nextStep, prevStep, goToStep, setPlaying } = useTutorialStore();
  if (!currentTutorial) return null;
  const isFirst = currentStepIndex === 0;
  const isLast = currentStepIndex === currentTutorial.steps.length - 1;

  return (
    <div className="space-y-4">
      <ProgressBar current={currentStepIndex} total={currentTutorial.steps.length} onStepClick={goToStep} />
      <div className="flex items-center justify-between gap-2">
        <Button variant="secondary" onClick={prevStep} disabled={isFirst}>戻る</Button>
        <Button variant="ghost" onClick={() => setPlaying(!isPlaying)}>{isPlaying ? '停止' : '再生'}</Button>
        <Button variant="primary" onClick={nextStep} disabled={isLast}>次へ</Button>
      </div>
    </div>
  );
}
