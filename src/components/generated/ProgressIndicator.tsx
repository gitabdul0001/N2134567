import React from 'react';
import { motion } from 'framer-motion';
interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
  mpid?: string;
}
const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  currentStep,
  totalSteps
}) => {
  return <div className="flex items-center justify-center space-x-2 md:space-x-3 mb-8 md:mb-12" data-magicpath-id="0" data-magicpath-path="ProgressIndicator.tsx">
      {Array.from({
      length: totalSteps
    }, (_, index) => {
      const stepNumber = index + 1;
      const isActive = stepNumber === currentStep;
      const isCompleted = stepNumber < currentStep;
      return <div key={stepNumber} className="flex items-center" data-magicpath-id="1" data-magicpath-path="ProgressIndicator.tsx">
            <motion.div className={`w-2 h-2 rounded-full transition-all duration-300 ${isActive ? 'bg-gray-900 scale-125' : isCompleted ? 'bg-gray-400' : 'bg-gray-200'}`} initial={false} animate={{
          scale: isActive ? 1.25 : 1
        }} transition={{
          duration: 0.2
        }} data-magicpath-id="2" data-magicpath-path="ProgressIndicator.tsx" />
            
            {stepNumber < totalSteps && <div className={`w-6 md:w-8 h-px mx-2 md:mx-3 transition-colors duration-300 ${isCompleted ? 'bg-gray-400' : 'bg-gray-200'}`} data-magicpath-id="3" data-magicpath-path="ProgressIndicator.tsx" />}
          </div>;
    })}
    </div>;
};
export default ProgressIndicator;