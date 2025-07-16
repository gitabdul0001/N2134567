"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, BarChart3, Clock, TrendingUp, Users, Zap } from 'lucide-react';
interface FeatureIntroStepProps {
  title: string;
  description: string;
  iconType: 'schedule' | 'analytics';
  mpid?: string;
}
const FeatureIntroStep: React.FC<FeatureIntroStepProps> = ({
  title,
  description,
  iconType
}) => {
  const getFeatureDetails = () => {
    if (iconType === 'schedule') {
      return {
        mainIcon: Calendar,
        features: [{
          icon: Clock,
          text: 'Optimal timing recommendations',
          mpid: "ad103665-dfb7-4272-a065-58ebd55e732e"
        }, {
          icon: Zap,
          text: 'Bulk scheduling across platforms',
          mpid: "5617a002-de79-4450-8b0b-17490881d88b"
        }, {
          icon: Users,
          text: 'Team collaboration tools',
          mpid: "97fcb63e-516b-4005-8edc-d605200e100f"
        }]
      };
    } else {
      return {
        mainIcon: BarChart3,
        features: [{
          icon: TrendingUp,
          text: 'Real-time performance metrics',
          mpid: "098dc562-6c5f-4829-8247-ad16905d6f84"
        }, {
          icon: Users,
          text: 'Audience insights & demographics',
          mpid: "db5aa1d2-2c6b-4d60-be58-267fc464296e"
        }, {
          icon: Zap,
          text: 'Competitor analysis',
          mpid: "08f50747-0b7c-49a0-a4a7-94dc763524af"
        }]
      };
    }
  };
  const {
    mainIcon: MainIcon,
    features
  } = getFeatureDetails();
  return <div className="text-center space-y-8 md:space-y-12" data-magicpath-id="0" data-magicpath-path="FeatureIntroStep.tsx">
      <motion.div initial={{
      scale: 0.9,
      opacity: 0
    }} animate={{
      scale: 1,
      opacity: 1
    }} transition={{
      duration: 0.5,
      ease: "easeOut"
    }} className="space-y-4 md:space-y-6" data-magicpath-id="1" data-magicpath-path="FeatureIntroStep.tsx">
        <div className="w-12 h-12 md:w-16 md:h-16 mx-auto rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center shadow-sm" data-magicpath-id="2" data-magicpath-path="FeatureIntroStep.tsx">
          <MainIcon className="w-6 h-6 md:w-8 md:h-8 text-gray-600" data-magicpath-id="3" data-magicpath-path="FeatureIntroStep.tsx" />
        </div>

        <div className="space-y-3 md:space-y-4 px-4" data-magicpath-id="4" data-magicpath-path="FeatureIntroStep.tsx">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900" data-magicpath-id="5" data-magicpath-path="FeatureIntroStep.tsx">
            {title}
          </h2>
          <p className="text-base md:text-lg text-gray-500 max-w-lg mx-auto font-light leading-relaxed" data-magicpath-id="6" data-magicpath-path="FeatureIntroStep.tsx">
            {description}
          </p>
        </div>
      </motion.div>

      <div className="max-w-md mx-auto p-6 md:p-8 rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 mx-4 shadow-sm" data-magicpath-id="7" data-magicpath-path="FeatureIntroStep.tsx">
        <div className="space-y-4 md:space-y-6" data-magicpath-id="8" data-magicpath-path="FeatureIntroStep.tsx">
          <h3 className="text-base md:text-lg font-light text-gray-900" data-magicpath-id="9" data-magicpath-path="FeatureIntroStep.tsx">
            Key Features
          </h3>
          
          <div className="space-y-3 md:space-y-4" data-magicpath-id="10" data-magicpath-path="FeatureIntroStep.tsx">
            {features.map((feature, index) => <motion.div key={index} initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: 0.3 + index * 0.1
          }} className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-white rounded-xl border border-gray-100 shadow-sm" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="11" data-magicpath-path="FeatureIntroStep.tsx">
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center flex-shrink-0" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="12" data-magicpath-path="FeatureIntroStep.tsx">
                  <feature.icon className="w-3 h-3 md:w-4 md:h-4 text-gray-600" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="13" data-magicpath-path="FeatureIntroStep.tsx" />
                </div>
                <span className="text-gray-700 font-light text-xs md:text-sm text-left" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-field="text:unknown" data-magicpath-id="14" data-magicpath-path="FeatureIntroStep.tsx">
                  {feature.text}
                </span>
              </motion.div>)}
          </div>
        </div>
      </div>

      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 0.8
    }} className="text-xs text-gray-400 font-light px-4" data-magicpath-id="15" data-magicpath-path="FeatureIntroStep.tsx">
        <p data-magicpath-id="16" data-magicpath-path="FeatureIntroStep.tsx">
          Ready to explore more? Let's continue your journey with Reaxo.
        </p>
      </motion.div>
    </div>;
};
export default FeatureIntroStep;