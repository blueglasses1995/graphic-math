import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getTutorialById, allCategories } from '@learnmath/tutorials';
import type { Tutorial } from '@learnmath/tutorials';

// Type for category objects that include tutorials
interface CategoryWithTutorials {
  id: string;
  name: string;
  description: string;
  tutorials: Tutorial[];
}
import Scene3D from './scene/Scene3D';
import TrigGraphScene from './scene/TrigGraphScene';
import InteractiveUnitCircle from './scene/InteractiveUnitCircle';
import PendulumScene from './scene/PendulumScene';
import WaveScene from './scene/WaveScene';
import CircularMotionScene from './scene/CircularMotionScene';
import SpringScene from './scene/SpringScene';
import DoubleAngleScene from './scene/DoubleAngleScene';
import {
  Breadcrumb,
  TutorialHeader,
  PrerequisiteWarning,
  SectionNavigation,
  ContentRenderer,
  NavigationButtons,
  TutorialFooter,
} from './tutorial';

type SectionType = 'hook' | 'concept' | 'visualization' | 'examples' | 'exercises' | 'summary';

const SECTION_ORDER: SectionType[] = [
  'hook',
  'concept',
  'visualization',
  'examples',
  'exercises',
  'summary',
];

function renderScene(customScene: string | undefined, sceneConfig: any) {
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
          showQuadrants={sceneConfig?.highlightElements?.includes('quadrants') ?? false}
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
      return sceneConfig ? <Scene3D sceneConfig={sceneConfig} /> : null;
  }
}

export default function TutorialPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [tutorial, setTutorial] = useState<Tutorial | null>(null);
  const [currentSection, setCurrentSection] = useState<SectionType>('hook');
  const [showPrerequisiteWarning, setShowPrerequisiteWarning] = useState(false);
  const [prerequisiteTutorial, setPrerequisiteTutorial] = useState<Tutorial | null>(null);

  // Load tutorial data
  useEffect(() => {
    if (id) {
      const loadedTutorial = getTutorialById(id);
      if (loadedTutorial) {
        setTutorial(loadedTutorial);

        // Check for prerequisites
        const prerequisiteId =
          ('prerequisite' in loadedTutorial ? loadedTutorial.prerequisite : undefined) ||
          loadedTutorial.prerequisites?.[0];
        if (prerequisiteId) {
          const prereq = getTutorialById(prerequisiteId);
          if (prereq) {
            setPrerequisiteTutorial(prereq);
            setShowPrerequisiteWarning(true);
          }
        }
      }
    }
  }, [id]);

  if (!tutorial) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-900 text-white">
        <div className="text-center">
          <p className="text-xl mb-4">チュートリアルが見つかりません</p>
          <Link to="/" className="text-indigo-400 hover:underline">
            ホームに戻る
          </Link>
        </div>
      </div>
    );
  }

  // Get category info
  const categoriesWithTutorials = allCategories as unknown as CategoryWithTutorials[];
  const category = categoriesWithTutorials.find((cat) => cat.tutorials.some((t: Tutorial) => t.id === id));
  const categoryName = category?.name || tutorial.category;
  const categoryId = category?.id || tutorial.category;

  // Handle legacy tutorials (with steps instead of sections)
  const isLegacyTutorial = !tutorial.sections && tutorial.steps;

  // Get available sections for new format tutorials
  const sections = 'sections' in tutorial ? tutorial.sections : undefined;
  const availableSections = sections
    ? SECTION_ORDER.filter((section) => {
        if (section === 'exercises') {
          return sections.exercises !== undefined;
        }
        return sections[section] !== undefined;
      })
    : [];

  // Get current section content
  const currentSectionData = sections?.[currentSection];
  const currentSectionIndex = availableSections.indexOf(currentSection);
  const totalSections = availableSections.length;

  // Navigation handlers
  const goToPreviousSection = () => {
    if (currentSectionIndex > 0) {
      setCurrentSection(availableSections[currentSectionIndex - 1]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goToNextSection = () => {
    if (currentSectionIndex < totalSections - 1) {
      setCurrentSection(availableSections[currentSectionIndex + 1]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSectionClick = (section: SectionType) => {
    setCurrentSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleIgnorePrerequisite = () => {
    setShowPrerequisiteWarning(false);
  };

  const handleGoToPrerequisite = () => {
    if (prerequisiteTutorial) {
      navigate(`/tutorial/${prerequisiteTutorial.id}`);
    }
  };

  // If legacy tutorial, show message
  if (isLegacyTutorial) {
    return (
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-6 max-w-7xl">
          <div className="bg-slate-800 rounded-lg p-8 text-center">
            <h1 className="text-2xl font-bold mb-4">{tutorial.title}</h1>
            <p className="text-gray-400 mb-6">
              このチュートリアルは旧形式です。新しい形式への移行中です。
            </p>
            <Link
              to="/"
              className="inline-block bg-indigo-600 hover:bg-indigo-500 px-6 py-2 rounded-lg transition-colors"
            >
              ホームに戻る
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        {/* Breadcrumb */}
        <Breadcrumb category={categoryName} categoryId={categoryId} tutorialTitle={tutorial.title} />

        {/* Header Section */}
        <TutorialHeader
          title={tutorial.title}
          description={tutorial.description}
          difficulty={('difficulty' in tutorial ? tutorial.difficulty : undefined) ?? 5}
          estimatedMinutes={
            ('estimatedMinutes' in tutorial ? tutorial.estimatedMinutes : undefined) ?? 30
          }
          tags={('tags' in tutorial ? tutorial.tags : undefined) ?? []}
        />

        {/* Prerequisite Warning */}
        {showPrerequisiteWarning && prerequisiteTutorial && (
          <PrerequisiteWarning
            prerequisiteName={prerequisiteTutorial.title}
            onIgnore={handleIgnorePrerequisite}
            onGoToPrerequisite={handleGoToPrerequisite}
          />
        )}

        {/* Section Navigation */}
        <SectionNavigation
          sections={availableSections}
          currentSection={currentSection}
          currentIndex={currentSectionIndex}
          totalSections={totalSections}
          onSectionClick={handleSectionClick}
        />

        {/* Content Area */}
        <div className="grid lg:grid-cols-2 gap-6 mt-6">
          {/* Left: Content */}
          <div className="bg-slate-800 rounded-lg p-6 overflow-auto max-h-[70vh]">
            <ContentRenderer
              content={currentSectionData?.content || '内容を準備中...'}
              sectionType={currentSection}
            />
          </div>

          {/* Right: Visualization */}
          <div className="bg-slate-800 rounded-lg p-6">
            <div className="aspect-video bg-slate-900 rounded-lg overflow-hidden">
              {currentSectionData?.sceneConfig || currentSection === 'visualization' ? (
                renderScene(
                  currentSection === 'visualization' ? 'interactive-unit-circle' : undefined,
                  currentSectionData?.sceneConfig
                )
              ) : (
                <div className="flex items-center justify-center h-full text-gray-500">
                  <div className="text-center">
                    <svg
                      className="w-16 h-16 mx-auto mb-3 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                    <p>3D ビジュアライゼーション準備中</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <NavigationButtons
          onPrevious={currentSectionIndex > 0 ? goToPreviousSection : undefined}
          onNext={currentSectionIndex < totalSections - 1 ? goToNextSection : undefined}
          previousLabel="← 前のセクション"
          nextLabel="次のセクション →"
        />

        {/* Footer */}
        <TutorialFooter
          relatedTutorials={('relatedTutorials' in tutorial ? tutorial.relatedTutorials : undefined) ?? []}
          category={tutorial.category}
        />
      </div>
    </div>
  );
}
