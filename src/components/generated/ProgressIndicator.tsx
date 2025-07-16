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
  return <div className="flex items-center justify-center space-x-4 mb-8" data-magicpath-id="0" data-magicpath-path="ProgressIndicator.tsx">
      {Array.from({
      length: totalSteps
    }, (_, index) => {
      const stepNumber = index + 1;
      const isActive = stepNumber === currentStep;
      const isCompleted = stepNumber < currentStep;
      return <div key={stepNumber} className="flex items-center" data-magicpath-id="1" data-magicpath-path="ProgressIndicator.tsx">
            <div className="relative" data-magicpath-id="2" data-magicpath-path="ProgressIndicator.tsx">
              <motion.div className={`w-10 h-10 rounded-full flex items-center justify-center font-medium text-sm transition-all duration-300 ${isActive ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' : isCompleted ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500'}`} initial={false} animate={{
            scale: isActive ? 1.1 : 1
          }} transition={{
            duration: 0.2
          }} data-magicpath-id="3" data-magicpath-path="ProgressIndicator.tsx">
                {isCompleted ? <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" data-magicpath-id="4" data-magicpath-path="ProgressIndicator.tsx">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" data-magicpath-id="5" data-magicpath-path="ProgressIndicator.tsx" />
                  </svg> : stepNumber}
              </motion.div>
              
              {isActive && <motion.div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-20" initial={{
            scale: 1
          }} animate={{
            scale: 1.5,
            opacity: 0
          }} transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeOut"
          }} data-magicpath-id="6" data-magicpath-path="ProgressIndicator.tsx" />}
            </div>
            
            {stepNumber < totalSteps && <div className={`w-12 h-0.5 mx-2 transition-colors duration-300 ${isCompleted ? 'bg-green-500' : 'bg-gray-200'}`} data-magicpath-id="7" data-magicpath-path="ProgressIndicator.tsx" />}
          </div>;
    })}
    </div>;
};
export default ProgressIndicator;