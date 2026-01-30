import Button from '../ui/Button';

interface PrerequisiteWarningProps {
  prerequisiteName: string;
  onIgnore: () => void;
  onGoToPrerequisite: () => void;
}

export function PrerequisiteWarning({
  prerequisiteName,
  onIgnore,
  onGoToPrerequisite,
}: PrerequisiteWarningProps) {
  return (
    <div className="bg-yellow-900/30 border border-yellow-700/50 rounded-lg p-4 mb-6 flex items-start gap-4">
      {/* Warning icon */}
      <svg
        className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
          clipRule="evenodd"
        />
      </svg>

      <div className="flex-1">
        <p className="text-yellow-200 font-medium mb-3">
          推奨: 「{prerequisiteName}」を先に学習することをお勧めします
        </p>
        <div className="flex flex-wrap gap-3">
          <Button variant="ghost" size="sm" onClick={onIgnore}>
            推奨を無視して開始
          </Button>
          <Button variant="primary" size="sm" onClick={onGoToPrerequisite}>
            前提へ移動
          </Button>
        </div>
      </div>
    </div>
  );
}
