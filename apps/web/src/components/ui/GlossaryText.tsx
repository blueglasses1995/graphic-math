import { useState, Fragment } from 'react';
import { glossary } from '@learnmath/tutorials';
import GlossaryModal from './GlossaryModal';

interface GlossaryTextProps {
  text: string;
}

// Build a regex pattern from all glossary terms
const termPatterns = Object.entries(glossary)
  .map(([id, entry]) => ({ id, term: entry.term }))
  .sort((a, b) => b.term.length - a.term.length); // longest first

export default function GlossaryText({ text }: GlossaryTextProps) {
  const [activeGlossaryId, setActiveGlossaryId] = useState<string | null>(null);

  // Split text by glossary terms
  const parts = splitByTerms(text);

  return (
    <>
      {parts.map((part, i) => {
        if (part.glossaryId) {
          return (
            <button key={i} onClick={() => setActiveGlossaryId(part.glossaryId!)}
              className="text-indigo-300 underline decoration-dotted underline-offset-2 hover:text-indigo-200 cursor-pointer">
              {part.text}
            </button>
          );
        }
        // Handle newlines
        return <Fragment key={i}>{part.text.split('\n\n').map((p, j, arr) => (
          <Fragment key={j}>{p}{j < arr.length - 1 && <><br /><br /></>}</Fragment>
        ))}</Fragment>;
      })}

      {activeGlossaryId && (
        <GlossaryModal entryId={activeGlossaryId} onClose={() => setActiveGlossaryId(null)} />
      )}
    </>
  );
}

interface TextPart {
  text: string;
  glossaryId?: string;
}

function splitByTerms(text: string): TextPart[] {
  const parts: TextPart[] = [];
  let remaining = text;

  while (remaining.length > 0) {
    let earliestMatch: { index: number; length: number; id: string } | null = null;

    for (const { id, term } of termPatterns) {
      const index = remaining.indexOf(term);
      if (index !== -1 && (!earliestMatch || index < earliestMatch.index)) {
        earliestMatch = { index, length: term.length, id };
      }
    }

    if (earliestMatch) {
      if (earliestMatch.index > 0) {
        parts.push({ text: remaining.slice(0, earliestMatch.index) });
      }
      parts.push({
        text: remaining.slice(earliestMatch.index, earliestMatch.index + earliestMatch.length),
        glossaryId: earliestMatch.id
      });
      remaining = remaining.slice(earliestMatch.index + earliestMatch.length);
    } else {
      parts.push({ text: remaining });
      remaining = '';
    }
  }

  return parts;
}
