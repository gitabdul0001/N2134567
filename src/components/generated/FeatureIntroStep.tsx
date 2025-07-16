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
          mpid: "fcbc9256-3d38-4e19-8fcf-ce5a0020d110"
        }, {
          icon: Zap,
          text: 'Bulk scheduling across platforms',
          mpid: "fec12435-79fd-4457-84c3-ed04ed8b1b7c"
        }, {
          icon: Users,
          text: 'Team collaboration tools',
          mpid: "19fb2aa3-25d6-44ca-8eec-05c2d7d28d41"
        }],
        gradient: 'from-blue-500 to-cyan-500',
        bgGradient: 'from-blue-50 to-cyan-50'
      };
    } else {
      return {
        mainIcon: BarChart3,
        features: [{
          icon: TrendingUp,
          text: 'Real-time performance metrics',
          mpid: "83e952eb-637e-4868-b603-28b00da0e09d"
        }, {
          icon: Users,
          text: 'Audience insights & demographics',
          mpid: "4127de73-bd17-4d5c-9b57-292f4ff19a97"
        }, {
          icon: Zap,
          text: 'Competitor analysis',
          mpid: "86281f5d-5ff3-4abc-8122-73290204ec50"
        }],
        gradient: 'from-purple-500 to-pink-500',
        bgGradient: 'from-purple-50 to-pink-50'
      };
    }
  };
  const {
    mainIcon: MainIcon,
    features,
    gradient,
    bgGradient
  } = getFeatureDetails();
  return <div className="text-center space-y-8" data-magicpath-id="0" data-magicpath-path="FeatureIntroStep.tsx">
      <motion.div initial={{
      scale: 0.8,
      opacity: 0
    }} animate={{
      scale: 1,
      opacity: 1
    }} transition={{
      duration: 0.5,
      ease: "easeOut"
    }} className="space-y-6" data-magicpath-id="1" data-magicpath-path="FeatureIntroStep.tsx">
        <div className={`w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-2xl`} data-magicpath-id="2" data-magicpath-path="FeatureIntroStep.tsx">
          <MainIcon className="w-12 h-12 text-white" data-magicpath-id="3" data-magicpath-path="FeatureIntroStep.tsx" />
        </div>

        <div className="space-y-4" data-magicpath-id="4" data-magicpath-path="FeatureIntroStep.tsx">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900" data-magicpath-id="5" data-magicpath-path="FeatureIntroStep.tsx">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed" data-magicpath-id="6" data-magicpath-path="FeatureIntroStep.tsx">
            {description}
          </p>
        </div>
      </motion.div>

      <div className={`max-w-2xl mx-auto p-8 rounded-3xl bg-gradient-to-br ${bgGradient} border border-gray-100`} data-magicpath-id="7" data-magicpath-path="FeatureIntroStep.tsx">
        <div className="space-y-6" data-magicpath-id="8" data-magicpath-path="FeatureIntroStep.tsx">
          <h3 className="text-xl font-semibold text-gray-900 mb-6" data-magicpath-id="9" data-magicpath-path="FeatureIntroStep.tsx">
            Key Features
          </h3>
          
          <div className="space-y-4" data-magicpath-id="10" data-magicpath-path="FeatureIntroStep.tsx">
            {features.map((feature, index) => <motion.div key={index} initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: 0.3 + index * 0.1
          }} className="flex items-center space-x-4 p-4 bg-white rounded-2xl shadow-sm" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="11" data-magicpath-path="FeatureIntroStep.tsx">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0`} data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="12" data-magicpath-path="FeatureIntroStep.tsx">
                  <feature.icon className="w-5 h-5 text-white" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="13" data-magicpath-path="FeatureIntroStep.tsx" />
                </div>
                <span className="text-gray-700 font-medium" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-field="text:unknown" data-magicpath-id="14" data-magicpath-path="FeatureIntroStep.tsx">
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
    }} className="text-sm text-gray-500" data-magicpath-id="15" data-magicpath-path="FeatureIntroStep.tsx">
        <p data-magicpath-id="16" data-magicpath-path="FeatureIntroStep.tsx">
          Ready to explore more? Let's continue your journey with Reaxo.
        </p>
      </motion.div>
    </div>;
};
export default FeatureIntroStep;