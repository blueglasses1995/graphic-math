/**
 * KaTeX Math Renderer Component
 *
 * This component will be used to render LaTeX math expressions once KaTeX is installed.
 *
 * Installation:
 * npm install katex react-katex
 * npm install --save-dev @types/katex
 *
 * Then import in ContentRenderer.tsx:
 * import { InlineMath, BlockMath } from 'react-katex';
 * import 'katex/dist/katex.min.css';
 */

interface KaTeXRendererProps {
  content: string;
}

/**
 * Processes content to identify and render LaTeX expressions
 * - Inline math: $x^2 + y^2 = r^2$
 * - Block math: $$\int_0^\infty e^{-x} dx = 1$$
 */
export function KaTeXRenderer({ content }: KaTeXRendererProps) {
  // Placeholder implementation
  // When KaTeX is installed, this will use:
  // - BlockMath for $$...$$ expressions
  // - InlineMath for $...$ expressions

  return (
    <div className="text-gray-300">
      <div className="p-4 bg-slate-900/50 rounded border border-slate-700">
        <p className="text-sm text-gray-400 mb-2">
          LaTeX Math Support (準備中)
        </p>
        <code className="text-xs text-indigo-400">
          KaTeX integration pending
        </code>
      </div>
    </div>
  );
}

/**
 * Example usage once KaTeX is installed:
 *
 * import { InlineMath, BlockMath } from 'react-katex';
 * import 'katex/dist/katex.min.css';
 *
 * export function processLatex(content: string) {
 *   // Split content by block math ($$...$$)
 *   const blockParts = content.split(/(\$\$[\s\S]+?\$\$)/);
 *
 *   return blockParts.map((part, i) => {
 *     if (part.startsWith('$$') && part.endsWith('$$')) {
 *       const latex = part.slice(2, -2);
 *       return <BlockMath key={i} math={latex} />;
 *     }
 *
 *     // Process inline math ($...$)
 *     const inlineParts = part.split(/(\$[^\$]+?\$)/);
 *     return inlineParts.map((inline, j) => {
 *       if (inline.startsWith('$') && inline.endsWith('$')) {
 *         const latex = inline.slice(1, -1);
 *         return <InlineMath key={`${i}-${j}`} math={latex} />;
 *       }
 *       return inline;
 *     });
 *   });
 * }
 */

/**
 * Utility function to detect LaTeX expressions in content
 */
export function hasLatexExpressions(content: string): boolean {
  return /\$\$[\s\S]+?\$\$|\$[^\$]+?\$/.test(content);
}

/**
 * Utility function to extract LaTeX expressions from content
 */
export function extractLatexExpressions(content: string): {
  type: 'inline' | 'block';
  expression: string;
  start: number;
  end: number;
}[] {
  const expressions: {
    type: 'inline' | 'block';
    expression: string;
    start: number;
    end: number;
  }[] = [];

  // Find block math ($$...$$)
  const blockRegex = /\$\$([\s\S]+?)\$\$/g;
  let match;
  while ((match = blockRegex.exec(content)) !== null) {
    expressions.push({
      type: 'block',
      expression: match[1],
      start: match.index,
      end: match.index + match[0].length,
    });
  }

  // Find inline math ($...$)
  const inlineRegex = /\$([^\$]+?)\$/g;
  while ((match = inlineRegex.exec(content)) !== null) {
    // Skip if this is part of a block expression
    const isPartOfBlock = expressions.some(
      (exp) => match.index >= exp.start && match.index < exp.end
    );
    if (!isPartOfBlock) {
      expressions.push({
        type: 'inline',
        expression: match[1],
        start: match.index,
        end: match.index + match[0].length,
      });
    }
  }

  return expressions.sort((a, b) => a.start - b.start);
}
