import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ProgressIndicator from './ProgressIndicator';
import SocialMediaConnect from './SocialMediaConnect';
import FeatureIntroStep from './FeatureIntroStep';
import CompletionScreen from './CompletionScreen';
const TOTAL_STEPS = 5;
const OnboardingFlow: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const nextStep = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep(currentStep + 1);
    }
  };
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <div className="text-center space-y-12" data-magicpath-id="0" data-magicpath-path="OnboardingFlow.tsx">
            <div className="space-y-6" data-magicpath-id="1" data-magicpath-path="OnboardingFlow.tsx">
              <h1 className="text-5xl md:text-6xl font-light text-gray-900 tracking-tight" data-magicpath-id="2" data-magicpath-path="OnboardingFlow.tsx">
                Welcome to Reaxo
              </h1>
              <p className="text-lg text-gray-500 max-w-lg mx-auto font-light leading-relaxed" data-magicpath-id="3" data-magicpath-path="OnboardingFlow.tsx">
                Your minimalist social media analytics platform. Schedule posts, 
                analyze performance, and grow your audience with clean insights.
              </p>
            </div>
            <div className="w-16 h-16 mx-auto bg-gray-900 rounded-full flex items-center justify-center" data-magicpath-id="4" data-magicpath-path="OnboardingFlow.tsx">
              <span className="text-2xl font-light text-white" data-magicpath-id="5" data-magicpath-path="OnboardingFlow.tsx">R</span>
            </div>
          </div>;
      case 2:
        return <SocialMediaConnect data-magicpath-id="6" data-magicpath-path="OnboardingFlow.tsx" />;
      case 3:
        return <FeatureIntroStep title="Smart Post Scheduling" description="Schedule your content across all platforms with intelligent timing recommendations. Never miss the perfect moment to engage your audience." iconType="schedule" data-magicpath-id="7" data-magicpath-path="OnboardingFlow.tsx" />;
      case 4:
        return <FeatureIntroStep title="Advanced Analytics" description="Get deep insights into your social media performance with comprehensive analytics, engagement tracking, and growth metrics." iconType="analytics" data-magicpath-id="8" data-magicpath-path="OnboardingFlow.tsx" />;
      case 5:
        return <CompletionScreen data-magicpath-id="9" data-magicpath-path="OnboardingFlow.tsx" />;
      default:
        return null;
    }
  };
  return <div className="min-h-screen bg-white flex flex-col" data-magicpath-id="10" data-magicpath-path="OnboardingFlow.tsx">
      <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full px-8 py-12" data-magicpath-id="11" data-magicpath-path="OnboardingFlow.tsx">
        <ProgressIndicator currentStep={currentStep} totalSteps={TOTAL_STEPS} data-magicpath-id="12" data-magicpath-path="OnboardingFlow.tsx" />
        
        <div className="flex-1 flex items-center justify-center py-16" data-magicpath-id="13" data-magicpath-path="OnboardingFlow.tsx">
          <AnimatePresence mode="wait" data-magicpath-id="14" data-magicpath-path="OnboardingFlow.tsx">
            <motion.div key={currentStep} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} exit={{
            opacity: 0,
            y: -20
          }} transition={{
            duration: 0.4,
            ease: "easeInOut"
          }} className="w-full max-w-2xl" data-magicpath-id="15" data-magicpath-path="OnboardingFlow.tsx">
              {renderStepContent()}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-between items-center pt-8" data-magicpath-id="16" data-magicpath-path="OnboardingFlow.tsx">
          <button onClick={prevStep} disabled={currentStep === 1} className={`flex items-center space-x-3 px-6 py-3 rounded-full font-light transition-all duration-200 ${currentStep === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`} data-magicpath-id="17" data-magicpath-path="OnboardingFlow.tsx">
            <ArrowLeft className="w-4 h-4" data-magicpath-id="18" data-magicpath-path="OnboardingFlow.tsx" />
            <span data-magicpath-id="19" data-magicpath-path="OnboardingFlow.tsx">Back</span>
          </button>

          <button onClick={currentStep === TOTAL_STEPS ? () => console.log('Go to Dashboard') : nextStep} className="flex items-center space-x-3 px-8 py-3 bg-gray-900 text-white rounded-full font-light hover:bg-gray-800 transition-all duration-200" data-magicpath-id="20" data-magicpath-path="OnboardingFlow.tsx">
            <span data-magicpath-id="21" data-magicpath-path="OnboardingFlow.tsx">{currentStep === TOTAL_STEPS ? 'Go to Dashboard' : 'Next'}</span>
            {currentStep !== TOTAL_STEPS && <ArrowRight className="w-4 h-4" data-magicpath-id="22" data-magicpath-path="OnboardingFlow.tsx" />}
          </button>
        </div>
      </div>
    </div>;
};
export default OnboardingFlow;