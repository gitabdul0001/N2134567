import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
const CompletionScreen: React.FC = () => {
  const achievements = ['Social media accounts connected', 'Post scheduling features explored', 'Analytics capabilities discovered', 'Ready to grow your audience'];
  return <div className="text-center space-y-8 md:space-y-12" data-magicpath-id="0" data-magicpath-path="CompletionScreen.tsx">
      <motion.div initial={{
      scale: 0
    }} animate={{
      scale: 1
    }} transition={{
      type: "spring",
      stiffness: 200,
      damping: 20,
      delay: 0.2
    }} className="w-16 h-16 md:w-20 md:h-20 mx-auto rounded-full bg-gray-900 flex items-center justify-center" data-magicpath-id="1" data-magicpath-path="CompletionScreen.tsx">
        <Check className="w-8 h-8 md:w-10 md:h-10 text-white" data-magicpath-id="2" data-magicpath-path="CompletionScreen.tsx" />
      </motion.div>

      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 0.4
    }} className="space-y-4 md:space-y-6 px-4" data-magicpath-id="3" data-magicpath-path="CompletionScreen.tsx">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-900" data-magicpath-id="4" data-magicpath-path="CompletionScreen.tsx">
          You're All Set
        </h2>
        <p className="text-base md:text-lg text-gray-500 max-w-lg mx-auto font-light leading-relaxed" data-magicpath-id="5" data-magicpath-path="CompletionScreen.tsx">
          Congratulations! You've successfully completed the Reaxo onboarding. 
          Your social media management journey starts now.
        </p>
      </motion.div>

      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 0.6
    }} className="max-w-sm mx-auto px-4" data-magicpath-id="6" data-magicpath-path="CompletionScreen.tsx">
        <div className="bg-gray-50 rounded-3xl p-6 md:p-8 border border-gray-100" data-magicpath-id="7" data-magicpath-path="CompletionScreen.tsx">
          <h3 className="text-base md:text-lg font-light text-gray-900 mb-4 md:mb-6" data-magicpath-id="8" data-magicpath-path="CompletionScreen.tsx">
            What You've Accomplished
          </h3>
          
          <div className="space-y-3 md:space-y-4" data-magicpath-id="9" data-magicpath-path="CompletionScreen.tsx">
            {achievements.map((achievement, index) => <motion.div key={index} initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: 0.8 + index * 0.1
          }} className="flex items-center space-x-3" data-magicpath-uuid={(achievement as any)["mpid"] ?? "unsafe"} data-magicpath-id="10" data-magicpath-path="CompletionScreen.tsx">
                <div className="w-4 h-4 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0" data-magicpath-uuid={(achievement as any)["mpid"] ?? "unsafe"} data-magicpath-id="11" data-magicpath-path="CompletionScreen.tsx">
                  <Check className="w-2 h-2 text-white" data-magicpath-uuid={(achievement as any)["mpid"] ?? "unsafe"} data-magicpath-id="12" data-magicpath-path="CompletionScreen.tsx" />
                </div>
                <span className="text-gray-700 font-light text-xs md:text-sm text-left" data-magicpath-uuid={(achievement as any)["mpid"] ?? "unsafe"} data-magicpath-id="13" data-magicpath-path="CompletionScreen.tsx">
                  {achievement}
                </span>
              </motion.div>)}
          </div>
        </div>
      </motion.div>

      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 1.2
    }} className="space-y-4 md:space-y-6 px-4" data-magicpath-id="14" data-magicpath-path="CompletionScreen.tsx">
        <div className="flex items-center justify-center space-x-2 text-gray-600" data-magicpath-id="15" data-magicpath-path="CompletionScreen.tsx">
          <span className="font-light text-sm" data-magicpath-id="16" data-magicpath-path="CompletionScreen.tsx">Ready to dive in?</span>
          <ArrowRight className="w-4 h-4" data-magicpath-id="17" data-magicpath-path="CompletionScreen.tsx" />
        </div>
        
        <div className="text-xs text-gray-400 max-w-md mx-auto font-light" data-magicpath-id="18" data-magicpath-path="CompletionScreen.tsx">
          <p data-magicpath-id="19" data-magicpath-path="CompletionScreen.tsx">
            Your dashboard is ready with all the tools you need to create, 
            schedule, and analyze your social media content. Let's start building 
            your online presence.
          </p>
        </div>
      </motion.div>

      <motion.div initial={{
      opacity: 0,
      scale: 0.9
    }} animate={{
      opacity: 1,
      scale: 1
    }} transition={{
      delay: 1.4
    }} className="pt-4" data-magicpath-id="20" data-magicpath-path="CompletionScreen.tsx">
        <div className="inline-flex items-center space-x-2 px-4 md:px-6 py-2 md:py-3 bg-gray-900 text-white rounded-full font-light text-xs md:text-sm" data-magicpath-id="21" data-magicpath-path="CompletionScreen.tsx">
          <span data-magicpath-id="22" data-magicpath-path="CompletionScreen.tsx">Welcome to Reaxo</span>
        </div>
      </motion.div>
    </div>;
};
export default CompletionScreen;