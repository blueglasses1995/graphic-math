import Button from '../ui/Button';

interface NavigationButtonsProps {
  onPrevious?: () => void;
  onNext?: () => void;
  previousLabel?: string;
  nextLabel?: string;
}

export function NavigationButtons({
  onPrevious,
  onNext,
  previousLabel = '← 前のセクション',
  nextLabel = '次のセクション →',
}: NavigationButtonsProps) {
  return (
    <div className="flex items-center justify-between gap-4 mt-8">
      {/* Previous button */}
      <div className="flex-1">
        {onPrevious ? (
          <Button
            variant="secondary"
            onClick={onPrevious}
            className="w-full sm:w-auto"
          >
            <svg
              className="w-4 h-4 mr-2 inline"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            {previousLabel}
          </Button>
        ) : (
          <div /> // Empty div to maintain flexbox layout
        )}
      </div>

      {/* Next button */}
      <div className="flex-1 text-right">
        {onNext && (
          <Button
            variant="primary"
            onClick={onNext}
            className="w-full sm:w-auto"
          >
            {nextLabel}
            <svg
              className="w-4 h-4 ml-2 inline"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Button>
        )}
      </div>
    </div>
  );
}
