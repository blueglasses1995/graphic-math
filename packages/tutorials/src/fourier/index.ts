import { CategoryWithTutorials } from '../types';

import { decomposeSoundTutorial } from './decompose-sound';
import { fourierSeriesIntuitionTutorial } from './fourier-series-intuition';
import { fourierCoefficientsTutorial } from './fourier-coefficients';
import { complexFourierTutorial } from './complex-fourier';
import { gibbsPhenomenonTutorial } from './gibbs-phenomenon';
import { parsevalEqualityTutorial } from './parseval-equality';
import { fourierTransformDefTutorial } from './fourier-transform-def';
import { fourierPropertiesTutorial } from './fourier-properties';
import { convolutionFourierTutorial } from './convolution-fourier';
import { spectralDensityTutorial } from './spectral-density';
import { samplingTheoremTutorial } from './sampling-theorem';
import { dftTutorial } from './dft';
import { fftTutorial } from './fft';
import { windowFunctionTutorial } from './window-function';
import { stftTutorial } from './stft';
import { uncertaintyPrincipleTutorial } from './uncertainty-principle';
import { waveletIntroTutorial } from './wavelet-intro';
import { fourier2dTutorial } from './fourier-2d';
import { laplaceRelationTutorial } from './laplace-relation';
import { fourierBasicsSummaryTutorial } from './fourier-basics-summary';
import { voiceSpectrumTutorial } from './voice-spectrum';
import { equalizerTutorial } from './equalizer';
import { jpegMathTutorial } from './jpeg-math';
import { mriMathTutorial } from './mri-math';
import { noiseCancelingTutorial } from './noise-canceling';
import { vibrationAnalysisTutorial } from './vibration-analysis';
import { digitalAudioTutorial } from './digital-audio';
import { seismicAnalysisTutorial } from './seismic-analysis';
import { modulationDemodulationTutorial } from './modulation-demodulation';
import { fourierOverviewTutorial } from './fourier-overview';

export {
  decomposeSoundTutorial,
  fourierSeriesIntuitionTutorial,
  fourierCoefficientsTutorial,
  complexFourierTutorial,
  gibbsPhenomenonTutorial,
  parsevalEqualityTutorial,
  fourierTransformDefTutorial,
  fourierPropertiesTutorial,
  convolutionFourierTutorial,
  spectralDensityTutorial,
  samplingTheoremTutorial,
  dftTutorial,
  fftTutorial,
  windowFunctionTutorial,
  stftTutorial,
  uncertaintyPrincipleTutorial,
  waveletIntroTutorial,
  fourier2dTutorial,
  laplaceRelationTutorial,
  fourierBasicsSummaryTutorial,
  voiceSpectrumTutorial,
  equalizerTutorial,
  jpegMathTutorial,
  mriMathTutorial,
  noiseCancelingTutorial,
  vibrationAnalysisTutorial,
  digitalAudioTutorial,
  seismicAnalysisTutorial,
  modulationDemodulationTutorial,
  fourierOverviewTutorial,
};

export const fourierCategory: CategoryWithTutorials = {
  id: 'fourier',
  name: 'フーリエ解析',
  description: '周波数分解・スペクトル・信号処理を視覚的に理解する',
  tutorials: [
    decomposeSoundTutorial,
    fourierSeriesIntuitionTutorial,
    fourierCoefficientsTutorial,
    complexFourierTutorial,
    gibbsPhenomenonTutorial,
    parsevalEqualityTutorial,
    fourierTransformDefTutorial,
    fourierPropertiesTutorial,
    convolutionFourierTutorial,
    spectralDensityTutorial,
    samplingTheoremTutorial,
    dftTutorial,
    fftTutorial,
    windowFunctionTutorial,
    stftTutorial,
    uncertaintyPrincipleTutorial,
    waveletIntroTutorial,
    fourier2dTutorial,
    laplaceRelationTutorial,
    fourierBasicsSummaryTutorial,
    voiceSpectrumTutorial,
    equalizerTutorial,
    jpegMathTutorial,
    mriMathTutorial,
    noiseCancelingTutorial,
    vibrationAnalysisTutorial,
    digitalAudioTutorial,
    seismicAnalysisTutorial,
    modulationDemodulationTutorial,
    fourierOverviewTutorial,
  ],
};
