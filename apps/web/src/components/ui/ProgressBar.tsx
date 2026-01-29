interface ProgressBarProps { current: number; total: number; onStepClick?: (index: number) => void; }

export default function ProgressBar({ current, total, onStepClick }: ProgressBarProps) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: total }).map((_, i) => (
        <button key={i} onClick={() => onStepClick?.(i)}
          className={`h-2 flex-1 rounded-full transition-colors ${i === current ? 'bg-indigo-500' : i < current ? 'bg-indigo-700' : 'bg-slate-600'}`}
          aria-label={`Step ${i + 1}`} />
      ))}
    </div>
  );
}
