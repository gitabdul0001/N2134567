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
          mpid: "de16116f-4263-4bdf-be4e-fd9294f4c128"
        }, {
          icon: Zap,
          text: 'Bulk scheduling across platforms',
          mpid: "3cbfef90-3969-4867-86c9-b3bc30aaa638"
        }, {
          icon: Users,
          text: 'Team collaboration tools',
          mpid: "b103d0e8-dad0-4fab-9aa8-21cd5f705cd7"
        }]
      };
    } else {
      return {
        mainIcon: BarChart3,
        features: [{
          icon: TrendingUp,
          text: 'Real-time performance metrics',
          mpid: "8f6be338-3d09-4f53-88c6-c45bf061bd7a"
        }, {
          icon: Users,
          text: 'Audience insights & demographics',
          mpid: "f57e6612-ddb2-4ab7-bb43-2ca466e4a829"
        }, {
          icon: Zap,
          text: 'Competitor analysis',
          mpid: "2694268a-7abe-4d90-bf51-2a972eae5776"
        }]
      };
    }
  };
  const {
    mainIcon: MainIcon,
    features
  } = getFeatureDetails();
  return <div className="text-center space-y-12" data-magicpath-id="0" data-magicpath-path="FeatureIntroStep.tsx">
      <motion.div initial={{
      scale: 0.9,
      opacity: 0
    }} animate={{
      scale: 1,
      opacity: 1
    }} transition={{
      duration: 0.5,
      ease: "easeOut"
    }} className="space-y-6" data-magicpath-id="1" data-magicpath-path="FeatureIntroStep.tsx">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-gray-100 flex items-center justify-center" data-magicpath-id="2" data-magicpath-path="FeatureIntroStep.tsx">
          <MainIcon className="w-8 h-8 text-gray-600" data-magicpath-id="3" data-magicpath-path="FeatureIntroStep.tsx" />
        </div>

        <div className="space-y-4" data-magicpath-id="4" data-magicpath-path="FeatureIntroStep.tsx">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900" data-magicpath-id="5" data-magicpath-path="FeatureIntroStep.tsx">
            {title}
          </h2>
          <p className="text-lg text-gray-500 max-w-lg mx-auto font-light leading-relaxed" data-magicpath-id="6" data-magicpath-path="FeatureIntroStep.tsx">
            {description}
          </p>
        </div>
      </motion.div>

      <div className="max-w-md mx-auto p-8 rounded-3xl bg-gray-50 border border-gray-100" data-magicpath-id="7" data-magicpath-path="FeatureIntroStep.tsx">
        <div className="space-y-6" data-magicpath-id="8" data-magicpath-path="FeatureIntroStep.tsx">
          <h3 className="text-lg font-light text-gray-900" data-magicpath-id="9" data-magicpath-path="FeatureIntroStep.tsx">
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
          }} className="flex items-center space-x-4 p-4 bg-white rounded-xl" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="11" data-magicpath-path="FeatureIntroStep.tsx">
                <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="12" data-magicpath-path="FeatureIntroStep.tsx">
                  <feature.icon className="w-4 h-4 text-gray-600" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="13" data-magicpath-path="FeatureIntroStep.tsx" />
                </div>
                <span className="text-gray-700 font-light text-sm" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-field="text:unknown" data-magicpath-id="14" data-magicpath-path="FeatureIntroStep.tsx">
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
    }} className="text-xs text-gray-400 font-light" data-magicpath-id="15" data-magicpath-path="FeatureIntroStep.tsx">
        <p data-magicpath-id="16" data-magicpath-path="FeatureIntroStep.tsx">
          Ready to explore more? Let's continue your journey with Reaxo.
        </p>
      </motion.div>
    </div>;
};
export default FeatureIntroStep;