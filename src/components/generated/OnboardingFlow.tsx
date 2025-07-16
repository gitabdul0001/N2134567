"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ProgressIndicator from './ProgressIndicator';
import SignupForm from './SignupForm';
import SocialMediaConnect from './SocialMediaConnect';
import FeatureIntroStep from './FeatureIntroStep';
import CompletionScreen from './CompletionScreen';
const TOTAL_STEPS = 6;
const OnboardingFlow: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const nextStep = () => {
    if (currentStep < TOTAL_STEPS - 1) {
      setCurrentStep(currentStep + 1);
    }
  };
  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  const handleSignup = (email: string, password: string) => {
    console.log('Signup:', {
      email,
      password
    });
    nextStep();
  };
  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return <SignupForm onSignup={handleSignup} />;
      case 1:
        return <div className="text-center space-y-8 md:space-y-12">
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 tracking-tight px-4">
                Welcome to Reaxo
              </h1>
              <p className="text-base md:text-lg text-gray-500 max-w-lg mx-auto font-light leading-relaxed px-4">
                Your social media analytics platform. Schedule posts, 
                analyze performance, and grow your audience with clean insights.
              </p>
            </div>
            <div className="w-20 h-20 md:w-24 md:h-24 mx-auto rounded-full border-2 border-gray-200 flex items-center justify-center bg-white shadow-sm p-2">
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" height="100%" viewBox="0 0 375 374.999991" preserveAspectRatio="xMidYMid meet" version="1.2">
                <defs>
                  <clipPath id="7a447a7b48">
                    <path d="M 109.125 181.933594 L 161.625 181.933594 L 161.625 234.433594 L 109.125 234.433594 Z M 109.125 181.933594 " />
                  </clipPath>
                  <clipPath id="69a4bb68e6">
                    <path d="M 109.125 130.183594 L 161.625 130.183594 L 161.625 182.683594 L 109.125 182.683594 Z M 109.125 130.183594 " />
                  </clipPath>
                  <clipPath id="1346d79464">
                    <path d="M 213.375 181.933594 L 265.875 181.933594 L 265.875 234.433594 L 213.375 234.433594 Z M 213.375 181.933594 " />
                  </clipPath>
                  <clipPath id="e0afa5629e">
                    <path d="M 213.375 208.183594 C 213.375 201.21875 216.140625 194.542969 221.0625 189.621094 C 225.984375 184.699219 232.664062 181.933594 239.625 181.933594 C 246.585938 181.933594 253.265625 184.699219 258.1875 189.621094 C 263.109375 194.542969 265.875 201.21875 265.875 208.183594 C 265.875 215.144531 263.109375 221.820312 258.1875 226.742188 C 253.265625 231.667969 246.585938 234.433594 239.625 234.433594 C 232.664062 234.433594 225.984375 231.667969 221.0625 226.742188 C 216.140625 221.820312 213.375 215.144531 213.375 208.183594 Z M 213.375 208.183594 " />
                  </clipPath>
                  <clipPath id="7e559bee84">
                    <path d="M 161.625 181.933594 L 214.125 181.933594 L 214.125 234.433594 L 161.625 234.433594 Z M 161.625 181.933594 " />
                  </clipPath>
                  <clipPath id="497bfb539c">
                    <path d="M 109.125 69.617188 L 214.125 69.617188 L 214.125 122.117188 L 109.125 122.117188 Z M 109.125 69.617188 " />
                  </clipPath>
                  <clipPath id="14ca239f8c">
                    <path d="M 214.125 95.867188 C 214.125 102.828125 211.359375 109.507812 206.4375 114.429688 C 201.515625 119.351562 194.835938 122.117188 187.875 122.117188 L 135.375 122.117188 C 128.414062 122.117188 121.734375 119.351562 116.8125 114.429688 C 111.890625 109.507812 109.125 102.828125 109.125 95.867188 C 109.125 88.90625 111.890625 82.230469 116.8125 77.304688 C 121.734375 72.382812 128.414062 69.617188 135.375 69.617188 L 187.875 69.617188 C 194.835938 69.617188 201.515625 72.382812 206.4375 77.304688 C 211.359375 82.230469 214.125 88.90625 214.125 95.867188 Z M 214.125 95.867188 " />
                  </clipPath>
                  <clipPath id="f1bf27afc0">
                    <path d="M 213.375 69.617188 L 265.875 69.617188 L 265.875 122.117188 L 213.375 122.117188 Z M 213.375 69.617188 " />
                  </clipPath>
                  <clipPath id="8af721dc9c">
                    <path d="M 213.375 121.367188 L 265.875 121.367188 L 265.875 173.867188 L 213.375 173.867188 Z M 213.375 121.367188 " />
                  </clipPath>
                  <clipPath id="ae7f69b539">
                    <path d="M 213.375 181.933594 L 239.625 181.933594 L 239.625 234.433594 L 213.375 234.433594 Z M 213.375 181.933594 " />
                  </clipPath>
                  <clipPath id="f74768e930">
                    <path d="M 132.058594 69.617188 L 214.125 69.617188 L 214.125 122.117188 L 132.058594 122.117188 Z M 132.058594 69.617188 " />
                  </clipPath>
                </defs>
                <g>
                  <rect x="0" width="375" y="0" height="374.999991" fill="#ffffff" fillOpacity="1" stroke="none" />
                  <g clipRule="nonzero" clipPath="url(#7a447a7b48)">
                    <path fill="#fc7557" fillOpacity="1" d="M 109.125 181.933594 L 161.625 181.933594 L 161.625 234.433594 L 109.125 234.433594 Z M 109.125 181.933594 " />
                  </g>
                  <g clipRule="nonzero" clipPath="url(#69a4bb68e6)">
                    <path fill="#989cfc" fillOpacity="1" d="M 161.625 130.183594 C 132.628906 130.183594 109.125 153.6875 109.125 182.683594 L 161.625 182.683594 Z M 161.625 130.183594 " />
                  </g>
                  <g clipRule="nonzero" clipPath="url(#1346d79464)">
                    <g clipRule="nonzero" clipPath="url(#e0afa5629e)">
                      <path fill="#f9c558" fillOpacity="1" d="M 213.375 234.433594 L 213.375 181.933594 L 265.875 181.933594 L 265.875 234.433594 Z M 213.375 234.433594 " />
                    </g>
                  </g>
                  <g clipRule="nonzero" clipPath="url(#7e559bee84)">
                    <path fill="#989cfc" fillOpacity="1" d="M 161.625 181.933594 C 161.625 210.925781 185.128906 234.433594 214.125 234.433594 L 214.125 181.933594 Z M 161.625 181.933594 " />
                  </g>
                  <g clipRule="nonzero" clipPath="url(#497bfb539c)">
                    <g clipRule="nonzero" clipPath="url(#14ca239f8c)">
                      <path fill="#fc7557" fillOpacity="1" d="M 214.125 69.617188 L 214.125 122.117188 L 109.125 122.117188 L 109.125 69.617188 Z M 214.125 69.617188 " />
                    </g>
                  </g>
                  <g clipRule="nonzero" clipPath="url(#f1bf27afc0)">
                    <path fill="#989cfc" fillOpacity="1" d="M 265.875 122.117188 C 265.875 93.121094 242.371094 69.617188 213.375 69.617188 L 213.375 122.117188 Z M 265.875 122.117188 " />
                  </g>
                  <g clipRule="nonzero" clipPath="url(#8af721dc9c)">
                    <path fill="#f9c558" fillOpacity="1" d="M 213.375 173.867188 C 242.371094 173.867188 265.875 150.363281 265.875 121.367188 L 213.375 121.367188 Z M 213.375 173.867188 " />
                  </g>
                  <g clipRule="nonzero" clipPath="url(#ae7f69b539)">
                    <path fill="#fc7557" fillOpacity="1" d="M 213.375 234.433594 L 213.375 181.933594 L 239.625 181.933594 L 239.625 234.433594 Z M 213.375 234.433594 " />
                  </g>
                  <g clipRule="nonzero" clipPath="url(#f74768e930)">
                    <path fill="#f9c558" fillOpacity="1" d="M 214.125 69.617188 L 214.125 122.117188 L 132.09375 122.117188 L 132.09375 69.617188 Z M 214.125 69.617188 " />
                  </g>
                </g>
              </svg>
            </div>
          </div>;
      case 2:
        return <SocialMediaConnect />;
      case 3:
        return <FeatureIntroStep title="Smart Post Scheduling" description="Schedule your content across all platforms with intelligent timing recommendations. Never miss the perfect moment to engage your audience." iconType="schedule" />;
      case 4:
        return <FeatureIntroStep title="Advanced Analytics" description="Get deep insights into your social media performance with comprehensive analytics, engagement tracking, and growth metrics." iconType="analytics" />;
      case 5:
        return <CompletionScreen />;
      default:
        return null;
    }
  };
  const getButtonText = () => {
    if (currentStep === 0) return 'Continue';
    if (currentStep === TOTAL_STEPS - 1) return 'Go to Dashboard';
    return 'Next';
  };
  const shouldShowNextButton = () => {
    return currentStep !== 0; // Hide next button on signup form since it has its own submit
  };
  const handleDashboardClick = () => {
    window.location.href = 'https://app.reaxo.xyz';
  };
  return <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 flex flex-col">
      <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full px-4 sm:px-6 md:px-8 py-8 md:py-12">
        <ProgressIndicator currentStep={currentStep + 1} totalSteps={TOTAL_STEPS} />
        
        <div className="flex-1 flex items-center justify-center py-8 md:py-16">
          <AnimatePresence mode="wait">
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
          }} className="w-full max-w-2xl">
              {renderStepContent()}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center pt-6 md:pt-8 space-y-4 sm:space-y-0">
          <button onClick={prevStep} disabled={currentStep === 0} className={`flex items-center space-x-2 md:space-x-3 px-4 md:px-6 py-2 md:py-3 rounded-full font-light transition-all duration-200 ${currentStep === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}>
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>

          {shouldShowNextButton() && <button onClick={currentStep === TOTAL_STEPS - 1 ? handleDashboardClick : nextStep} className="flex items-center space-x-2 md:space-x-3 px-6 md:px-8 py-2 md:py-3 bg-gray-900 text-white rounded-full font-light hover:bg-gray-800 transition-all duration-200 shadow-sm hover:shadow-md">
              <span>{getButtonText()}</span>
              {currentStep !== TOTAL_STEPS - 1 && <ArrowRight className="w-4 h-4" />}
            </button>}
        </div>
      </div>
    </div>;
};
export default OnboardingFlow;
